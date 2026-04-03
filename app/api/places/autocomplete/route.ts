import { NextRequest, NextResponse } from "next/server";

const store = new Map<string, { count: number; resetAt: number }>();

function rateOk(ip: string): boolean {
  const now = Date.now();
  const rec = store.get(ip);
  if (!rec || now > rec.resetAt) {
    store.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (rec.count >= 60) return false;
  rec.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (!rateOk(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { input, sessionToken } = (await req.json()) as {
    input?: string;
    sessionToken?: string;
  };

  if (!input || input.length < 3) {
    return NextResponse.json({ error: "Input too short" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/autocomplete/json"
  );
  url.searchParams.set("input", input);
  url.searchParams.set("types", "address");
  url.searchParams.set("components", "country:us");
  url.searchParams.set("key", apiKey);
  if (sessionToken) url.searchParams.set("sessiontoken", sessionToken);

  const res = await fetch(url.toString());
  if (!res.ok) {
    return NextResponse.json({ error: "API error" }, { status: res.status });
  }

  const data = (await res.json()) as {
    status: string;
    predictions?: Array<{
      place_id: string;
      description: string;
      structured_formatting?: {
        main_text: string;
        secondary_text: string;
      };
    }>;
  };

  if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
    return NextResponse.json({ error: data.status }, { status: 400 });
  }

  return NextResponse.json({
    suggestions: (data.predictions ?? []).map((p) => ({
      placePrediction: {
        placeId: p.place_id,
        text: { text: p.description },
        structuredFormat: p.structured_formatting
          ? {
              mainText: { text: p.structured_formatting.main_text },
              secondaryText: { text: p.structured_formatting.secondary_text },
            }
          : undefined,
      },
    })),
  });
}
