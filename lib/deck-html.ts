import { readFile } from "node:fs/promises";
import path from "node:path";
import { buildDeckHtml } from "./deck/template";
import type { DeckData } from "./deck/types";

const DECK_SLUG_PATTERN = /^[a-z0-9-]+$/;

const DECK_MODULES: Record<string, () => Promise<{ default: DeckData }>> = {
  alyssa: () => import("@/data/decks/alyssa"),
  demo: () => import("@/data/decks/demo"),
  fci: () => import("@/data/decks/fci"),
  flooringhub: () => import("@/data/decks/flooringhub"),
  fyzical: () => import("@/data/decks/fyzical"),
  helpcenternc: () => import("@/data/decks/helpcenternc"),
  jenna: () => import("@/data/decks/jenna"),
  made4me: () => import("@/data/decks/made4me"),
  modernapotheca: () => import("@/data/decks/modernapotheca"),
  raleighparks: () => import("@/data/decks/raleighparks"),
  lorraine: () => import("@/data/decks/lorraine"),
  shelley: () => import("@/data/decks/shelley"),
  tammy: () => import("@/data/decks/tammy"),
  thrive: () => import("@/data/decks/thrive"),
};

export async function readDeckHtml(slug: string) {
  if (!DECK_SLUG_PATTERN.test(slug)) {
    return null;
  }

  // Try template-based generation first
  const loader = DECK_MODULES[slug];
  if (loader) {
    try {
      const mod = await loader();
      return buildDeckHtml(mod.default);
    } catch {
      // Fall through to static file
    }
  }

  // Fallback: read static HTML from public/deck/
  const htmlPath = path.join(process.cwd(), "public", "deck", slug, "index.html");
  try {
    return await readFile(htmlPath, "utf8");
  } catch {
    return null;
  }
}

export function createDeckHtmlResponse(html: string) {
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=600",
    },
  });
}
