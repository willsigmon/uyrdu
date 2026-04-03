import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const placeId = req.nextUrl.searchParams.get("placeId");
  const sessionToken = req.nextUrl.searchParams.get("sessionToken");

  if (!placeId) {
    return NextResponse.json({ error: "Missing placeId" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/details/json"
  );
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "address_components,formatted_address");
  url.searchParams.set("key", apiKey);
  if (sessionToken) url.searchParams.set("sessiontoken", sessionToken);

  const res = await fetch(url.toString());
  if (!res.ok) {
    return NextResponse.json({ error: "API error" }, { status: res.status });
  }

  const data = (await res.json()) as {
    status: string;
    result?: {
      address_components?: Array<{
        long_name: string;
        short_name: string;
        types: string[];
      }>;
      formatted_address?: string;
    };
  };

  if (data.status !== "OK" || !data.result) {
    return NextResponse.json({ error: data.status }, { status: 400 });
  }

  return NextResponse.json({
    addressComponents: (data.result.address_components ?? []).map((c) => ({
      longText: c.long_name,
      shortText: c.short_name,
      types: c.types,
    })),
    formattedAddress: data.result.formatted_address,
  });
}
