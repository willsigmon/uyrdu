import { buildScriptHtml, readDeckScript } from "@/lib/deck-script";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const script = await readDeckScript(slug);

  if (!script) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(buildScriptHtml(script), {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "private, no-store",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}
