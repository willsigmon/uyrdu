import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { sendReferralNotification } from "@/lib/notify-referral";

const RATE_LIMIT_WINDOW = 60_000;
const MAX_REQUESTS = 5;
const ipRequests = new Map<string, { count: number; resetAt: number }>();

const RECOMMENDATION_SERVICE_OPTIONS = [
  { key: "story_shining_bright", label: "Shining Bright — Individual Feature", category: "Story Nomination" },
  { key: "story_abilities_in_action", label: "Abilities in Action — Achievement", category: "Story Nomination" },
  { key: "story_parent_perspectives", label: "Parent Perspectives — Family Story", category: "Story Nomination" },
  { key: "story_caregivers_corner", label: "Caregivers Corner — Caregiver Spotlight", category: "Story Nomination" },
  { key: "story_nonprofit_spotlight", label: "Nonprofit Spotlight — Organization Feature", category: "Story Nomination" },
  { key: "story_service_animals", label: "Service Animal Stories", category: "Story Nomination" },
  { key: "aba_centers", label: "ABA Centers (Applied Behavior Analysis)", category: "ABA Therapy" },
  { key: "accessibility_safety_modifications", label: "Accessibility & Safety Modifications", category: "Home Services" },
  { key: "adult_day_support", label: "Adult Day Support", category: "Disability Services" },
  { key: "adult_independence_services", label: "Adult Independence Services", category: "Disability Services" },
  { key: "adult_vocational_services", label: "Adult Vocational Services", category: "Employment Services" },
  { key: "therapists", label: "Therapists (Behavior, Occupational, Speech, Physical)", category: "Therapy (OT/PT/Speech)" },
  { key: "autism_support", label: "Autism Support", category: "Disability Services" },
  { key: "county_disabilities_board", label: "County Disabilities Board", category: "Disability Advocacy" },
  { key: "developmental_disability_care", label: "Developmental Disability Care", category: "Disability Services" },
  { key: "disability_resources", label: "Disability Resources", category: "Disability Advocacy" },
  { key: "disability_support_services", label: "Disability Support Services", category: "Disability Services" },
  { key: "functional_medicine", label: "Functional Medicine / Naturopath", category: "Behavioral Health" },
  { key: "home_care_family_support", label: "Home Care / Family Support", category: "Home Health" },
  { key: "job_placement_services", label: "Job Placement Services", category: "Employment Services" },
  { key: "medical_equipment", label: "Medical Equipment", category: "DME/Medical Equipment" },
  { key: "mobility_accessibility", label: "Mobility / Accessibility", category: "Transportation" },
  { key: "music_therapy", label: "Music Therapy", category: "Music/Art Therapy" },
  { key: "neurofeedback_therapy", label: "Neurofeedback Therapy", category: "Behavioral Health" },
  { key: "private_schools", label: "Private Schools Specific to the Disability Community", category: "Education" },
  { key: "remote_support_services", label: "Remote Support Services", category: "Disability Services" },
  { key: "technology_communication", label: "Technology & Communication", category: "Assistive Technology" },
  { key: "transportation_mobility_services", label: "Transportation & Mobility Services", category: "Transportation" },
  { key: "waiver_providers", label: "Waiver Providers", category: "Disability Services" },
  { key: "wheelchair_equipment_companies", label: "Wheelchair / Equipment Companies", category: "DME/Medical Equipment" },
] as const;

const RECOMMENDATION_SERVICE_KEY_SET: ReadonlySet<string> = new Set(
  RECOMMENDATION_SERVICE_OPTIONS.map((option) => option.key)
);

interface RecommendationEntryInput {
  service_key?: unknown;
  business_name?: unknown;
  contact_name?: unknown;
  contact_number?: unknown;
}

interface RecommendationEntry {
  service_key: string;
  business_name: string;
  contact_name: string | null;
  contact_number: string | null;
}

interface RecommendationPayload {
  submitter_name?: unknown;
  submitter_email?: unknown;
  submitter_phone?: unknown;
  relationship_to_community?: unknown;
  notes?: unknown;
  entries?: unknown;
}

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

  ipRequests.set(ip, { ...record, count: record.count + 1 });
  return true;
}

function optionalString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function parseRecommendationPayload(json: RecommendationPayload) {
  const submitterName = optionalString(json.submitter_name);

  if (!submitterName || submitterName.length < 2) {
    throw new Error("Please tell us your name.");
  }

  if (!Array.isArray(json.entries)) {
    throw new Error("Add at least one recommended business before submitting.");
  }

  const entries = json.entries
    .map((entry): RecommendationEntry | null => {
      const input = entry as RecommendationEntryInput;
      const serviceKey = optionalString(input.service_key);
      const businessName = optionalString(input.business_name);

      if (!businessName) return null;

      if (!serviceKey || !RECOMMENDATION_SERVICE_KEY_SET.has(serviceKey)) {
        throw new Error("Invalid service type.");
      }

      return {
        service_key: serviceKey,
        business_name: businessName,
        contact_name: optionalString(input.contact_name),
        contact_number: optionalString(input.contact_number),
      };
    })
    .filter((entry): entry is RecommendationEntry => Boolean(entry));

  if (entries.length === 0) {
    throw new Error("Add at least one recommended business before submitting.");
  }

  return {
    submitter_name: submitterName,
    submitter_email: optionalString(json.submitter_email),
    submitter_phone: optionalString(json.submitter_phone),
    relationship_to_community: optionalString(json.relationship_to_community),
    notes: optionalString(json.notes),
    entries,
  };
}

function getMissingRecommendationIntakeEnv() {
  return ["NEXT_PUBLIC_SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"].filter(
    (key) => !process.env[key]?.trim()
  );
}

async function supabaseFetch<T>(
  path: string,
  init: RequestInit & { query?: Record<string, string> } = {}
): Promise<T> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim().replace(/\/$/, "");
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Referral intake is not configured yet.");
  }

  const url = new URL(`${supabaseUrl}/rest/v1/${path}`);

  for (const [key, value] of Object.entries(init.query ?? {})) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url, {
    ...init,
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    const message =
      typeof body === "object" && body && "message" in body
        ? String(body.message)
        : "Failed to save recommendation.";
    throw new Error(message);
  }

  if (response.status === 204) {
    return null as T;
  }

  const text = await response.text();

  if (!text) {
    return null as T;
  }

  return JSON.parse(text) as T;
}

function generateAutoProspectId(...parts: Array<string | null | undefined>) {
  const normalized = parts
    .map((part) => part?.trim().toLowerCase() ?? "")
    .filter(Boolean)
    .join("|");

  const hash = createHash("sha1")
    .update(`${normalized}|${Date.now()}|${Math.random()}`)
    .digest("hex")
    .slice(0, 12);

  return `AUTO-${hash}`;
}

function getRecommendationServiceLabel(serviceKey: string) {
  return (
    RECOMMENDATION_SERVICE_OPTIONS.find((option) => option.key === serviceKey)
      ?.label ?? serviceKey
  );
}

function getRecommendationServiceCategory(serviceKey: string) {
  return (
    RECOMMENDATION_SERVICE_OPTIONS.find((option) => option.key === serviceKey)
      ?.category ?? "Community Organization"
  );
}

function splitContactName(name: string | null) {
  if (!name) return { first: null, last: null };

  const parts = name.trim().split(/\s+/).filter(Boolean);

  return {
    first: parts[0] ?? null,
    last: parts.length > 1 ? parts.slice(1).join(" ") : null,
  };
}

async function findExistingProspectId(businessName: string) {
  const rows = await supabaseFetch<Array<{ id: string }>>("prospects", {
    query: {
      select: "id",
      business_name: `ilike.${businessName}`,
      limit: "1",
    },
  });

  return rows[0]?.id ?? null;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const missingEnv = getMissingRecommendationIntakeEnv();

  if (missingEnv.length > 0) {
    return NextResponse.json(
      {
        error: `Referral intake is not configured yet. Missing environment variable(s): ${missingEnv.join(", ")}.`,
      },
      { status: 503 }
    );
  }

  let submissionId: string | null = null;
  let createdProspectIds: string[] = [];

  try {
    const payload = parseRecommendationPayload(await request.json());

    const submissions = await supabaseFetch<Array<{ id: string }>>(
      "recommendation_submissions",
      {
        method: "POST",
        headers: { Prefer: "return=representation" },
        query: { select: "id" },
        body: JSON.stringify({
          submitter_name: payload.submitter_name,
          submitter_email: payload.submitter_email,
          submitter_phone: payload.submitter_phone,
          relationship_to_community: payload.relationship_to_community,
          notes: payload.notes,
          total_recommendations: payload.entries.length,
        }),
      }
    );

    const submission = submissions[0];
    if (!submission) throw new Error("Failed to save submission.");

    submissionId = submission.id;

    const entryRows: Array<Record<string, unknown>> = [];

    for (const entry of payload.entries) {
      const serviceLabel = getRecommendationServiceLabel(entry.service_key);
      const category = getRecommendationServiceCategory(entry.service_key);
      const { first, last } = splitContactName(entry.contact_name);
      let linkedProspectId = await findExistingProspectId(entry.business_name);
      let prospectStatus: "created" | "linked_existing" = "linked_existing";

      if (!linkedProspectId) {
        const prospectId = generateAutoProspectId(
          entry.business_name,
          entry.contact_number,
          payload.submitter_name
        );

        await supabaseFetch("prospects", {
          method: "POST",
          body: JSON.stringify({
            id: prospectId,
            business_name: entry.business_name,
            category,
            contact_first: first,
            contact_last: last,
            contact_phone: entry.contact_number,
            priority_tier: 2,
            lead_source: "recommendation-sheet",
            tags: ["recommendation-sheet", "community-referral", entry.service_key],
            notes: [
              `Recommended via community recommendation sheet (${serviceLabel}).`,
              `Submitted by: ${payload.submitter_name}${
                payload.relationship_to_community
                  ? ` — ${payload.relationship_to_community}`
                  : ""
              }.`,
              payload.submitter_email ? `Email: ${payload.submitter_email}` : null,
              payload.submitter_phone ? `Phone: ${payload.submitter_phone}` : null,
              payload.notes ? `Submission notes: ${payload.notes}` : null,
            ]
              .filter(Boolean)
              .join("\n"),
            status: "new",
            lead_score: 0,
          }),
        });

        linkedProspectId = prospectId;
        prospectStatus = "created";
        createdProspectIds = [...createdProspectIds, prospectId];
      }

      entryRows.push({
        submission_id: submission.id,
        service_key: entry.service_key,
        service_label: serviceLabel,
        business_name: entry.business_name,
        contact_name: entry.contact_name,
        contact_number: entry.contact_number,
        linked_prospect_id: linkedProspectId,
        prospect_link_status: linkedProspectId ? prospectStatus : "not_linked",
      });
    }

    await supabaseFetch("recommendation_submission_entries", {
      method: "POST",
      body: JSON.stringify(entryRows),
    });

    // Fire-and-forget email notification — never block the response
    void sendReferralNotification({
      submissionId: submission.id,
      submitter_name: payload.submitter_name,
      submitter_email: payload.submitter_email,
      submitter_phone: payload.submitter_phone,
      relationship_to_community: payload.relationship_to_community,
      notes: payload.notes,
      entries: entryRows.map((row) => ({
        service_label: String(row.service_label ?? ""),
        business_name: String(row.business_name ?? ""),
        contact_name: (row.contact_name as string | null) ?? null,
        contact_number: (row.contact_number as string | null) ?? null,
      })),
    });

    return NextResponse.json({ ok: true, submissionId: submission.id });
  } catch (error) {
    if (submissionId) {
      await Promise.allSettled([
        supabaseFetch("recommendation_submissions", {
          method: "DELETE",
          query: { id: `eq.${submissionId}` },
        }),
        ...(createdProspectIds.length > 0
          ? [
              supabaseFetch("prospects", {
                method: "DELETE",
                query: { id: `in.(${createdProspectIds.join(",")})` },
              }),
            ]
          : []),
      ]);
    }

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to submit recommendation sheet.",
      },
      { status: 500 }
    );
  }
}
