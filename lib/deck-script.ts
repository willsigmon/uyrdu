export type DeckScript = {
  title: string;
  subtitle?: string;
  body: string;
  prospect?: {
    name: string;
    role?: string;
    initials?: string;
    bio: string;
  };
};

const SCRIPT_SLUG_PATTERN = /^[a-z0-9-]+$/;

const SCRIPT_MODULES: Record<string, () => Promise<{ default: DeckScript }>> = {
  "benefit-therapy-services": () => import("@/data/deck-scripts/benefittherapyservices"),
  globalcitizen: () => import("@/data/deck-scripts/globalcitizen"),
  gotchacovered: () => import("@/data/deck-scripts/gotchacovered"),
  inspiredinsights: () => import("@/data/deck-scripts/inspiredinsights"),
  landy: () => import("@/data/deck-scripts/landy"),
  mercalis: () => import("@/data/deck-scripts/mercalis"),
  "spacelift-raleigh": () => import("@/data/deck-scripts/spaceliftraleigh"),
};

export async function readDeckScript(slug: string): Promise<DeckScript | null> {
  if (!SCRIPT_SLUG_PATTERN.test(slug)) return null;
  const loader = SCRIPT_MODULES[slug];
  if (!loader) return null;
  try {
    const mod = await loader();
    return mod.default;
  } catch {
    return null;
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInline(text: string): string {
  let out = escapeHtml(text);
  out = out.replace(/`([^`]+)`/g, (_m, code) => `<code>${code}</code>`);
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return out;
}

function renderMarkdown(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  let i = 0;

  const flushParagraph = (buf: string[]) => {
    if (!buf.length) return;
    out.push(`<p>${renderInline(buf.join(" "))}</p>`);
    buf.length = 0;
  };

  const paraBuf: string[] = [];

  while (i < lines.length) {
    const line = lines[i];

    if (/^\s*$/.test(line)) {
      flushParagraph(paraBuf);
      i++;
      continue;
    }

    if (/^---\s*$/.test(line)) {
      flushParagraph(paraBuf);
      out.push("<hr />");
      i++;
      continue;
    }

    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      flushParagraph(paraBuf);
      const level = h[1].length;
      out.push(`<h${level}>${renderInline(h[2])}</h${level}>`);
      i++;
      continue;
    }

    if (/^>\s?/.test(line)) {
      flushParagraph(paraBuf);
      const quote: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        quote.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      out.push(`<blockquote><p>${renderInline(quote.join(" "))}</p></blockquote>`);
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      flushParagraph(paraBuf);
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ""));
        i++;
      }
      out.push(
        `<ul>${items.map((it) => `<li>${renderInline(it)}</li>`).join("")}</ul>`
      );
      continue;
    }

    if (/^\|.*\|$/.test(line)) {
      flushParagraph(paraBuf);
      const rows: string[] = [];
      while (i < lines.length && /^\|.*\|$/.test(lines[i])) {
        rows.push(lines[i]);
        i++;
      }
      const parse = (row: string) =>
        row
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((c) => c.trim());
      const header = parse(rows[0]);
      const bodyRows = rows.slice(2).map(parse);
      out.push(
        `<table><thead><tr>${header
          .map((h) => `<th>${renderInline(h)}</th>`)
          .join("")}</tr></thead><tbody>${bodyRows
          .map(
            (r) =>
              `<tr>${r.map((c) => `<td>${renderInline(c)}</td>`).join("")}</tr>`
          )
          .join("")}</tbody></table>`
      );
      continue;
    }

    paraBuf.push(line.trim());
    i++;
  }

  flushParagraph(paraBuf);
  return out.join("\n");
}

function renderProspectBio(p: NonNullable<DeckScript["prospect"]>): string {
  const initials = p.initials
    ? p.initials
    : p.name
        .split(/\s+/)
        .map((w) => w[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase();
  const role = p.role ? `<div class="bio-role">${escapeHtml(p.role)}</div>` : "";
  return `<div class="bio">
    <div class="bio-mark" aria-hidden="true">${escapeHtml(initials)}</div>
    <div class="bio-body">
      <div class="bio-name">${escapeHtml(p.name)}</div>
      ${role}
      <div class="bio-desc">${renderInline(p.bio)}</div>
    </div>
  </div>`;
}

export function buildScriptHtml(script: DeckScript): string {
  const body = renderMarkdown(script.body);
  const sub = script.subtitle
    ? `<p class="sub">${escapeHtml(script.subtitle)}</p>`
    : "";
  const bio = script.prospect ? renderProspectBio(script.prospect) : "";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>${escapeHtml(script.title)}</title>
<style>
:root {
  --ink: #0B1F3A;
  --body: #2C3E50;
  --muted: #6C7A89;
  --accent: #2E8B8B;
  --accent-deep: #1F6B6B;
  --gold: #C9A961;
  --sage: #87A88A;
  --paper: #FAF7F0;
  --rule: rgba(11,31,58,0.12);
  --serif: 'Fraunces', 'Playfair Display', Georgia, serif;
  --sans: 'Inter', system-ui, -apple-system, sans-serif;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: var(--sans); color: var(--body); background: var(--paper);
  -webkit-font-smoothing: antialiased; line-height: 1.6; font-size: 17px;
}
main {
  max-width: 760px; margin: 0 auto; padding: 56px 28px 96px;
}
.bio {
  display: flex; gap: 16px; align-items: flex-start;
  padding: 16px 18px; margin: 0 0 32px;
  border: 1px solid var(--rule); border-radius: 12px;
  background: #fff;
}
.bio-mark {
  flex-shrink: 0; width: 44px; height: 44px; border-radius: 10px;
  background: linear-gradient(135deg, var(--accent), var(--gold));
  color: #fff; font-family: var(--serif); font-weight: 600; font-size: 1.05rem;
  display: flex; align-items: center; justify-content: center;
  letter-spacing: 0.02em;
}
.bio-body { flex: 1; min-width: 0; }
.bio-name {
  font-family: var(--serif); font-weight: 600; font-size: 1.02rem;
  color: var(--ink); line-height: 1.2;
}
.bio-role {
  font-size: 0.78rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.1em; color: var(--accent-deep); margin-top: 2px;
}
.bio-desc {
  font-size: 0.88rem; color: var(--muted); margin-top: 8px; line-height: 1.5;
}
.bio-desc em { color: var(--ink); font-style: italic; }
.eyebrow {
  font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.16em;
  color: var(--accent-deep); margin-bottom: 14px;
}
h1 {
  font-family: var(--serif); font-weight: 600; font-size: clamp(1.8rem, 3.4vw, 2.4rem);
  color: var(--ink); letter-spacing: -0.015em; line-height: 1.15; margin: 0 0 6px;
}
.sub { color: var(--muted); font-size: 0.95rem; margin: 0 0 28px; font-style: italic; }
h2 {
  font-family: var(--serif); font-weight: 600; font-size: 1.45rem; color: var(--ink);
  margin: 42px 0 12px; letter-spacing: -0.01em;
}
h3 {
  font-family: var(--serif); font-weight: 600; font-size: 1.15rem; color: var(--ink);
  margin: 28px 0 10px;
}
p { margin: 0 0 14px; }
em { color: var(--muted); }
strong { color: var(--ink); }
hr {
  border: none; height: 1px; background: var(--rule); margin: 32px 0;
}
blockquote {
  margin: 14px 0 18px; padding: 14px 20px; border-left: 3px solid var(--accent);
  background: rgba(46,139,139,0.06); border-radius: 0 8px 8px 0; color: var(--ink);
}
blockquote p { margin: 0; font-family: var(--serif); font-size: 1.05rem; }
ul { margin: 8px 0 16px; padding-left: 22px; }
li { margin-bottom: 6px; }
code {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  background: rgba(11,31,58,0.06); padding: 1px 6px; border-radius: 4px; font-size: 0.9em;
}
table {
  width: 100%; border-collapse: collapse; margin: 14px 0 18px;
  font-size: 0.92rem; background: #fff; border-radius: 10px; overflow: hidden;
  box-shadow: 0 1px 4px rgba(11,31,58,0.06);
}
th {
  background: var(--ink); color: #fff; text-align: left; padding: 10px 14px;
  font-weight: 600; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em;
}
td { padding: 10px 14px; border-bottom: 1px solid var(--rule); vertical-align: top; }
tr:last-child td { border-bottom: none; }
.footer {
  margin-top: 48px; padding-top: 20px; border-top: 1px solid var(--rule);
  font-size: 0.82rem; color: var(--muted);
}
@media print {
  body { background: #fff; }
  main { padding: 0; max-width: none; }
  blockquote { background: none; }
}
</style>
</head>
<body>
<main>
  ${bio}
  <div class="eyebrow">Pre-deck talk track · prospect dossier</div>
  <h1>${escapeHtml(script.title)}</h1>
  ${sub}
  ${body}
  <p class="footer">Internal use only · not for the prospect · Will Sigmon, N2 Area Director</p>
</main>
</body>
</html>`;
}
