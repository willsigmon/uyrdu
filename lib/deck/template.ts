import type { DeckData } from "./types";
import { DECK_SCRIPTS } from "./scripts";

const PORTRAIT_WARNING = `
<div id="portrait-warning">
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,247,241,0.5)" stroke-width="2" stroke-linecap="round" style="margin-bottom:24px;">
    <rect x="14" y="6" width="20" height="36" rx="3"/>
    <path d="M14 6l20 36M34 6L14 42" stroke-width="1" opacity="0.3"/>
    <path d="M8 32l4-4 4 4" stroke="var(--teal)" stroke-width="2.5"/>
  </svg>
  <div class="pw-title">Rotate for the full experience</div>
  <p class="pw-body">This pitch deck is built for landscape or desktop viewing.</p>
</div>`;

function buildNav(data: DeckData): string {
  const navClass = data.navClass ?? "dot-nav on-dark";
  const items = data.navItems
    .map(
      (item, i) =>
        `  <a href="${item.href}" data-slide="${i}" data-label="${item.label}"${i === 0 ? ' class="active"' : ""}></a>`
    )
    .join("\n");

  return `<nav class="${navClass}" id="dotNav">\n${items}\n</nav>`;
}

export function buildDeckHtml(data: DeckData): string {
  const nav = buildNav(data);
  const extraScripts = data.extraScripts ?? "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
<style>
${data.css}
</style>
</head>
<body>

<div class="rainbow-bar"></div>

${PORTRAIT_WARNING}

${nav}

${data.slidesHtml}

<script>
${DECK_SCRIPTS}
${extraScripts}
</script>
</body>
</html>`;
}
