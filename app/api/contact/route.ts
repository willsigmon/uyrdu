import { NextResponse } from "next/server";
import { addContact, sendNotification } from "@/lib/resend";

const RATE_LIMIT_WINDOW = 60_000;
const MAX_REQUESTS = 5;
const ipRequests = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = ipRequests.get(ip);

  if (!record || now > record.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count += 1;
  return true;
}

interface SubscribePayload {
  type: "subscribe";
  email: string;
}

interface AdvertiserPayload {
  type: "advertiser";
  name: string;
  business: string;
  email: string;
  message: string;
}

interface NominationPayload {
  type: "nomination";
  nominator: string;
  email: string;
  category: string;
  nominee: string;
  story: string;
}

type FormPayload = SubscribePayload | AdvertiserPayload | NominationPayload;

function formatEmail(data: FormPayload): { subject: string; body: string } {
  switch (data.type) {
    case "subscribe":
      return {
        subject: "New Magazine Subscriber",
        body: `New subscriber: ${data.email}`,
      };
    case "advertiser":
      return {
        subject: `Advertiser Inquiry: ${data.business}`,
        body: [
          `Name: ${data.name}`,
          `Business: ${data.business}`,
          `Email: ${data.email}`,
          `Message: ${data.message || "(none)"}`,
        ].join("\n"),
      };
    case "nomination":
      return {
        subject: `Story Nomination: ${data.category}`,
        body: [
          `Nominator: ${data.nominator}`,
          `Email: ${data.email}`,
          `Category: ${data.category}`,
          `Nominee: ${data.nominee}`,
          `Story: ${data.story}`,
        ].join("\n"),
      };
  }
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const data: FormPayload = await request.json();

    if (!data.type || !["subscribe", "advertiser", "nomination"].includes(data.type)) {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    const { subject, body } = formatEmail(data);

    const tasks: Promise<Response | null>[] = [sendNotification(subject, body)];

    if (data.type === "subscribe") {
      tasks.push(addContact(data.email));
    }

    await Promise.allSettled(tasks);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
