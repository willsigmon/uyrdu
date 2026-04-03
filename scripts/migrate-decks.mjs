#!/usr/bin/env node
/**
 * Migrates static deck HTML files into TypeScript data files.
 *
 * For each public/deck/{slug}/index.html:
 *   1. Extracts the <title> text
 *   2. Extracts the CSS (between <style> and </style>)
 *   3. Extracts the nav items (href, data-label, nav class)
 *   4. Extracts slide sections (between </nav> and <script>)
 *   5. Extracts any extra scripts (beyond the shared base)
 *   6. Writes data/decks/{slug}.ts
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const DECK_DIR = join(ROOT, "public", "deck");
const OUT_DIR = join(ROOT, "data", "decks");

mkdirSync(OUT_DIR, { recursive: true });

const slugs = readdirSync(DECK_DIR).filter((d) => {
  try {
    readFileSync(join(DECK_DIR, d, "index.html"), "utf8");
    return true;
  } catch {
    return false;
  }
});

console.log(`Found ${slugs.length} decks: ${slugs.join(", ")}`);

for (const slug of slugs) {
  const html = readFileSync(join(DECK_DIR, slug, "index.html"), "utf8");

  // 1. Extract title
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : `${slug} — Deck`;

  // 2. Extract CSS (between first <style> and </style>)
  const cssMatch = html.match(/<style>\n?([\s\S]*?)\n?<\/style>/);
  const css = cssMatch ? cssMatch[1].trim() : "";

  // 3. Extract nav items
  const navMatch = html.match(/<nav\s+class="([^"]*)"[^>]*id="dotNav"[^>]*>([\s\S]*?)<\/nav>/);
  const navClass = navMatch ? navMatch[1] : "dot-nav on-dark";
  const navHtml = navMatch ? navMatch[2] : "";
  const navItems = [];
  const navRegex = /href="([^"]*)"[^>]*data-slide="(\d+)"[^>]*data-label="([^"]*)"/g;
  let navItemMatch;
  while ((navItemMatch = navRegex.exec(navHtml)) !== null) {
    navItems.push({ href: navItemMatch[1], label: navItemMatch[3] });
  }

  // 4. Extract slides HTML (between </nav> and <script>)
  const bodyStartIdx = html.indexOf("</nav>");
  const scriptStartIdx = html.indexOf("<script>");
  const slidesHtml =
    bodyStartIdx !== -1 && scriptStartIdx !== -1
      ? html.slice(bodyStartIdx + "</nav>".length, scriptStartIdx).trim()
      : "";

  // 5. Check for extra scripts beyond shared base
  const scriptMatch = html.match(/<script>\n?([\s\S]*?)\n?<\/script>/);
  const fullScript = scriptMatch ? scriptMatch[1].trim() : "";

  // The shared script starts with "(function() {" and ends with "})();"
  // Any code AFTER the main IIFE is extra
  const iifeEnd = fullScript.lastIndexOf("})();");
  const extraScripts =
    iifeEnd !== -1 ? fullScript.slice(iifeEnd + "})();".length).trim() : "";

  // 6. Write TypeScript data file
  const navItemsStr = navItems
    .map((n) => `    { href: "${n.href}", label: "${n.label}" }`)
    .join(",\n");

  const output = `import type { DeckData } from "@/lib/deck/types";

const data: DeckData = {
  title: ${JSON.stringify(title)},
  navClass: ${JSON.stringify(navClass)},
  navItems: [
${navItemsStr},
  ],
  css: \`
${css.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}
\`,
  slidesHtml: \`
${slidesHtml.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}
\`,${extraScripts ? `\n  extraScripts: \`\n${extraScripts.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}\n\`,` : ""}
};

export default data;
`;

  const outPath = join(OUT_DIR, `${slug}.ts`);
  writeFileSync(outPath, output, "utf8");
  console.log(`  ✓ ${slug} → data/decks/${slug}.ts (${navItems.length} nav items, ${css.split("\n").length} CSS lines, ${slidesHtml.split("\n").length} slide lines)`);
}

console.log(`\nDone. ${slugs.length} deck data files written to data/decks/`);
