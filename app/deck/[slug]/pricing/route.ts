import { createDeckHtmlResponse, readDeckHtml } from "@/lib/deck-html";

export const runtime = "nodejs";

const PRICING_OVERRIDES = `
<style>
  html { scroll-snap-type: none !important; }
  .rainbow-bar, .dot-nav, #portrait-warning, .scroll-hint { display: none !important; }
  .slide:not(#pricing) { display: none !important; }
  .slide#pricing {
    min-height: 100vh; height: auto; max-height: none;
    scroll-snap-align: none; padding: 48px 64px;
  }
</style>
`;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const html = await readDeckHtml(slug);

  if (!html) {
    return new Response("Not found", { status: 404 });
  }

  // Inject overrides right before </head>
  const pricingHtml = html.replace("</head>", `${PRICING_OVERRIDES}\n</head>`);

  return createDeckHtmlResponse(pricingHtml);
}
