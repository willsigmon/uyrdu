import type { DeckData, DeckNavItem } from "./types";

type Tone = "accent" | "secondary" | "warm" | "deep";
type Icon =
  | "bridge"
  | "calendar"
  | "compass"
  | "heart"
  | "home"
  | "map"
  | "megaphone"
  | "people"
  | "shield"
  | "spark"
  | "story";
type ActionIcon = "credit-card" | "digital" | "form-builder";

interface ThemeConfig {
  readonly paper: string;
  readonly dark: string;
  readonly darkMid: string;
  readonly body: string;
  readonly muted: string;
  readonly accent: string;
  readonly accentDeep: string;
  readonly secondary: string;
  readonly secondaryDeep: string;
  readonly warm: string;
  readonly warmDeep: string;
}

interface DeckCard {
  readonly title: string;
  readonly body: string;
  readonly icon: Icon;
  readonly tone: Tone;
}

interface TimelineItem extends DeckCard {
  readonly kicker?: string;
}

interface PartnershipLevel {
  readonly label: string;
  readonly title: string;
  readonly body: string;
  readonly icon: Icon;
  readonly tone: Tone;
  readonly bullets: readonly string[];
}

interface ProspectDeckConfig {
  readonly title: string;
  readonly partnerName: string;
  readonly partnerLabel: string;
  readonly prospectName: string;
  readonly prospectRole: string;
  readonly theme: ThemeConfig;
  readonly cover: {
    readonly lineOne: string;
    readonly lineTwo: string;
    readonly lineThree: string;
    readonly subtitle: string;
    readonly pillars: readonly DeckCard[];
    readonly footerLeft: string;
    readonly footerRight: string;
  };
  readonly opportunity: {
    readonly heading: string;
    readonly quoteBefore: string;
    readonly quoteEmphasis: string;
    readonly quoteAfter: string;
    readonly attribution: string;
    readonly timeline: readonly TimelineItem[];
  };
  readonly platform: {
    readonly heading: string;
    readonly subtitle: string;
    readonly cards: readonly DeckCard[];
  };
  readonly benefits: {
    readonly heading: string;
    readonly cards: readonly DeckCard[];
  };
  readonly partnership: {
    readonly heading: string;
    readonly subtitle: string;
    readonly levels: readonly PartnershipLevel[];
  };
  readonly pricing: {
    readonly heading: string;
    readonly subtitle: string;
    readonly premiumNote: string;
    readonly fullPageNote: string;
    readonly standardNote: string;
    readonly entryNote: string;
  };
  readonly start: {
    readonly heading: string;
    readonly subtitle: string;
    readonly steps: readonly string[];
  };
}

const NAV_ITEMS: readonly DeckNavItem[] = [
  { href: "#cover", label: "Cover" },
  { href: "#why", label: "Opportunity" },
  { href: "#what", label: "Publication" },
  { href: "#synergy", label: "Benefits" },
  { href: "#partnership", label: "Partnership" },
  { href: "#pricing", label: "Pricing" },
  { href: "#start", label: "Next Steps" },
];

const PRICE_ROWS = [
  ["2-Page Spread", "$995", "$895", "$795"],
  ["Back Cover", "$955", "$860", "$765"],
  ["Inside Cover / Pg 2-3", "$845", "$760", "$675"],
  ["Full Page Standard", "$720", "$645", "$575"],
  ["1/2-Page Standard", "$415", "$370", "$330"],
  ["1/4-Page Premium Sponsorship", "$415", "$370", "$330"],
  ["1/3-Page Standard", "$320", "$285", "$255"],
  ["1/4-Page Standard", "$240", "$215", "$190"],
] as const;

const CREDIT_CARD_CAPTURE_URL = "https://portal.n2pub.com/credit_card_capture";
const FORM_BUILDER_URL = "https://portal.n2pub.com/agreement_builders";
const DIGITAL_SAMPLE_URL =
  "https://pubmanager.n2pub.com/flipbooks/publications/uniquely-you-mideastern-ohio-oh/current";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function iconSvg(icon: Icon): string {
  const attrs = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const paths: Record<Icon, string> = {
    bridge: '<path d="M5 19V9a7 7 0 0 1 14 0v10"/><path d="M3 19h18"/><path d="M8 19v-6"/><path d="M16 19v-6"/><path d="M9 9h6"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="M8 15h3"/><path d="M13 15h3"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16 8-2.3 5.7L8 16l2.3-5.7L16 8Z"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
    home: '<path d="m3 10 9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    map: '<path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15"/><path d="M15 6v15"/>',
    megaphone: '<path d="m3 11 18-5v12L3 13v-2Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    people: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
    spark: '<path d="M12 2 14.5 9.5 22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/>',
    story: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="M9 7h7"/><path d="M9 11h5"/>',
  };

  return `<svg ${attrs}>${paths[icon]}</svg>`;
}

function actionIconSvg(icon: ActionIcon): string {
  const attrs =
    'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const paths: Record<ActionIcon, string> = {
    "credit-card":
      '<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/><path d="M6 15h4"/><path d="M14 15h2"/>',
    digital:
      '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3Z"/><path d="M9 8h7"/><path d="M9 12h5"/>',
    "form-builder":
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/><path d="M8 9h2"/>',
  };

  return `<svg ${attrs}>${paths[icon]}</svg>`;
}

function renderCard(card: DeckCard, className: string): string {
  return `<article class="${className} tone-${card.tone}" data-reveal="up">
    <div class="card-mark">${iconSvg(card.icon)}</div>
    <h3>${escapeHtml(card.title)}</h3>
    <p>${escapeHtml(card.body)}</p>
  </article>`;
}

function renderTimeline(items: readonly TimelineItem[]): string {
  return `<div class="s2-timeline" id="s2Timeline">
    ${items
      .map(
        (item, index) => `<div class="s2-tl-item tone-${item.tone}" data-reveal="up" data-delay="${600 + index * 160}">
          <div class="s2-tl-dot">${iconSvg(item.icon)}</div>
          ${item.kicker ? `<div class="mini-kicker">${escapeHtml(item.kicker)}</div>` : ""}
          <div class="s2-tl-title">${escapeHtml(item.title)}</div>
          <div class="s2-tl-desc">${escapeHtml(item.body)}</div>
        </div>`
      )
      .join("")}
  </div>`;
}

function renderPartnershipLevels(levels: readonly PartnershipLevel[]): string {
  return `<div class="s7-staircase">
    ${levels
      .map(
        (level, index) => `<article class="s7-step s7-step--${index + 1} tone-${level.tone}" data-reveal="up" data-delay="${380 + index * 180}">
          <div class="s7-level-label">${escapeHtml(level.label)}</div>
          <div class="s7-step-icon">${iconSvg(level.icon)}</div>
          <h3>${escapeHtml(level.title)}</h3>
          <p>${escapeHtml(level.body)}</p>
          <ul class="s7-step-items">${level.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
        </article>`
      )
      .join("")}
  </div>`;
}

function renderPricing(config: ProspectDeckConfig["pricing"]): string {
  const rows = PRICE_ROWS.map(
    ([name, oneYear, twoYear, threeYear]) =>
      `<tr><td>${name}</td><td>${oneYear}</td><td>${twoYear}</td><td class="popular-col"><strong>${threeYear}</strong></td></tr>`
  ).join("");

  return `<section class="slide slide--paper" id="pricing" data-slide-index="5" data-theme="light" data-has-tier-reveal="true">
    <div class="slide-inner">
      <div class="section-eyebrow" data-reveal="up">Partnership menu</div>
      <h2 class="section-title" data-reveal="up" data-delay="100" style="max-width:none;">${escapeHtml(config.heading)}</h2>
      <p class="section-subtitle" data-reveal="up" data-delay="180">${escapeHtml(config.subtitle)}</p>
      <div class="pricing-runway" data-reveal="up" data-delay="300">
        <div class="tier-panel tier-panel--premium" id="tier1"><div class="tier-label">Premium Placement</div><div class="tier-cards"><div class="tier-card"><div class="tier-card-name">2-Page Spread</div><div class="tier-card-price">$795<span>/mo</span></div><div class="tier-card-desc">${escapeHtml(config.premiumNote)}</div><span class="tier-term-badge">36 months</span></div><div class="tier-card"><div class="tier-card-name">Back Cover</div><div class="tier-card-price">$765<span>/mo</span></div><div class="tier-card-desc">Mailbox-first visibility for a category-of-one local story</div><span class="tier-term-badge">36 months</span></div></div><a class="tier-skip" href="#start">Ready? Let's go &rarr;</a></div>
        <div class="tier-panel tier-panel--fullpage" id="tier2"><div class="tier-label">Full Page Options</div><div class="tier-cards"><div class="tier-card"><div class="tier-card-name">Inside Cover / Page 2-3</div><div class="tier-card-price">$675<span>/mo</span></div><div class="tier-card-desc">${escapeHtml(config.fullPageNote)}</div><span class="tier-term-badge">36 months</span></div><div class="tier-card"><div class="tier-card-name">Full Page Standard</div><div class="tier-card-price">$575<span>/mo</span></div><div class="tier-card-desc">Strong monthly authority presence with room for useful education</div><span class="tier-term-badge">36 months</span></div></div><a class="tier-skip" href="#start">Ready? Let's go &rarr;</a></div>
        <div class="tier-panel tier-panel--standard" id="tier3"><div class="tier-label">Our Most Popular</div><div class="tier-cards"><div class="tier-card"><div class="tier-card-name">1/2-Page Standard</div><div class="tier-card-price">$330<span>/mo</span></div><div class="tier-card-desc">${escapeHtml(config.standardNote)}</div><span class="tier-term-badge">36 months</span></div><div class="tier-card"><div class="tier-card-name">1/4-Page Premium Sponsorship</div><div class="tier-card-price">$330<span>/mo</span></div><div class="tier-card-desc">Affordable, prominent sponsorship in the issue</div><span class="tier-term-badge">36 months</span></div></div><a class="tier-skip" href="#start">Ready? Let's go &rarr;</a></div>
        <div class="tier-panel tier-panel--entry" id="tier4"><div class="tier-label">Entry Options</div><div class="tier-cards"><div class="tier-card"><div class="tier-card-name">1/3-Page Standard</div><div class="tier-card-price">$255<span>/mo</span></div><div class="tier-card-desc">${escapeHtml(config.entryNote)}</div><span class="tier-term-badge">36 months</span></div><div class="tier-card"><div class="tier-card-name">1/4-Page Standard</div><div class="tier-card-price">$190<span>/mo</span></div><div class="tier-card-desc">Clean entry point with professional creative handled for you</div><span class="tier-term-badge">36 months</span></div></div><a class="tier-skip" href="#start">Ready? Let's go &rarr;</a></div>
      </div>
      <div style="text-align:center;"><button id="tierNextBtn">See more options &rarr;</button></div>
      <div id="tierSummary"><div class="rate-table-shell"><table class="rate-table"><thead><tr><th>Ad Size</th><th>12 months</th><th>24 months</th><th class="popular-header">36 months</th></tr></thead><tbody>${rows}</tbody></table></div></div>
    </div>
  </section>`;
}

function renderActionDock(): string {
  const actions: readonly {
    readonly href: string;
    readonly icon: ActionIcon;
    readonly label: string;
    readonly kicker: string;
    readonly body: string;
  }[] = [
    {
      href: CREDIT_CARD_CAPTURE_URL,
      icon: "credit-card",
      label: "Credit Card Capture",
      kicker: "Billing",
      body: "Open the partner portal flow to capture payment details.",
    },
    {
      href: DIGITAL_SAMPLE_URL,
      icon: "digital",
      label: "Digital Version",
      kicker: "Preview",
      body: "Click straight into a live Uniquely You! flipbook sample.",
    },
    {
      href: FORM_BUILDER_URL,
      icon: "form-builder",
      label: "Form Builder",
      kicker: "Agreement",
      body: "Open the agreement builder when they are ready to move.",
    },
  ];

  return `<div class="action-dock" data-reveal="up" data-delay="420">
    ${actions
      .map(
        (action) => `<a class="action-card" href="${action.href}" target="_blank" rel="noopener">
          <span class="action-icon">${actionIconSvg(action.icon)}</span>
          <span class="action-copy">
            <span class="action-kicker">${escapeHtml(action.kicker)}</span>
            <strong>${escapeHtml(action.label)}</strong>
            <span>${escapeHtml(action.body)}</span>
          </span>
          <span class="action-arrow" aria-hidden="true">&rarr;</span>
        </a>`
      )
      .join("")}
  </div>`;
}

function buildCss(theme: ThemeConfig): string {
  return `
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --paper: ${theme.paper}; --dark: ${theme.dark}; --dark-mid: ${theme.darkMid}; --body: ${theme.body}; --muted: ${theme.muted};
  --accent: ${theme.accent}; --accent-deep: ${theme.accentDeep}; --secondary: ${theme.secondary}; --secondary-deep: ${theme.secondaryDeep}; --warm: ${theme.warm}; --warm-deep: ${theme.warmDeep};
  --accent-soft: color-mix(in srgb, var(--accent) 14%, white); --secondary-soft: color-mix(in srgb, var(--secondary) 16%, white); --warm-soft: color-mix(in srgb, var(--warm) 18%, white); --deep-soft: color-mix(in srgb, var(--dark-mid) 12%, white);
  --rule: rgba(10, 27, 45, 0.12); --spring: cubic-bezier(0.34, 1.56, 0.64, 1); --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --display: 'Fraunces', 'Playfair Display', Georgia, serif; --sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
html { scroll-behavior: smooth; overflow-x: hidden; }
body { font-family: var(--sans); color: var(--body); background: var(--paper); -webkit-font-smoothing: antialiased; overflow-x: hidden; }
h1, h2, h3 { font-family: var(--display); font-weight: 600; letter-spacing: -0.018em; }
.rainbow-bar { position: fixed; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--accent), var(--secondary), var(--warm), var(--accent)); background-size: 200% 100%; animation: shimmer 7s linear infinite; z-index: 1000; }
@keyframes shimmer { to { background-position: -200% 0; } }
.dot-nav { position: fixed; right: 24px; top: 50%; transform: translateY(-50%); z-index: 999; display: flex; flex-direction: column; gap: 14px; }
.dot-nav a { width: 10px; height: 10px; border-radius: 50%; border: 2px solid rgba(12, 22, 41, 0.32); background: transparent; cursor: pointer; transition: all .25s ease; position: relative; display: block; text-decoration: none; }
.dot-nav a::after { content: attr(data-label); position: absolute; right: 22px; top: 50%; transform: translateY(-50%); background: var(--dark); color: #fff; font-size: .75rem; font-weight: 700; padding: 4px 10px; border-radius: 6px; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity .2s ease; }
.dot-nav a:hover::after { opacity: 1; }
.dot-nav.on-dark a { border-color: rgba(255,255,255,.44); }
.dot-nav.on-dark a::after { background: #fff; color: var(--dark); }
.dot-nav a.active { background: var(--dark); border-color: var(--dark); transform: scale(1.4); }
.dot-nav.on-dark a.active { background: #fff; border-color: #fff; }
#portrait-warning { display: none; }
.slide { width: 100%; min-height: 100svh; height: auto; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: clamp(36px, 5vw, 64px); }
.slide--dark { background: radial-gradient(circle at 20% 10%, color-mix(in srgb, var(--accent) 28%, transparent), transparent 34%), linear-gradient(135deg, #06101f 0%, var(--dark) 52%, var(--dark-mid) 100%); color: #fff; }
.slide--dark::before { content: ''; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px), radial-gradient(circle at 72% 18%, color-mix(in srgb, var(--secondary) 24%, transparent), transparent 28%); background-size: 42px 42px, 42px 42px, auto; mask-image: linear-gradient(to bottom, rgba(0,0,0,.85), rgba(0,0,0,.18)); opacity: .8; }
.slide--paper { background: radial-gradient(circle at 86% 12%, color-mix(in srgb, var(--warm) 11%, transparent), transparent 30%), radial-gradient(circle at 8% 92%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 28%), var(--paper); color: var(--body); }
.slide-inner { max-width: 1200px; width: 100%; min-height: calc(100svh - clamp(72px, 10vw, 128px)); position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; gap: 16px; }
.orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; opacity: .38; }
.orb-a { width: 360px; height: 360px; background: var(--accent); top: -120px; right: -80px; }
.orb-b { width: 280px; height: 280px; background: var(--warm); bottom: -120px; left: 8%; opacity: .2; }
[data-reveal] { opacity: 0; will-change: opacity, transform; transition: opacity .7s ease, transform .8s var(--spring); transform: translateY(34px); }
[data-reveal="scale"] { transform: scale(.9); }
[data-reveal="fade"] { transform: none; }
@keyframes forceReveal { to { opacity: 1; transform: none; } }
[data-reveal] { animation: forceReveal 0s 1s forwards; }
[data-reveal].visible { opacity: 1 !important; transform: none !important; }
.tone-accent { --tone: var(--accent); --tone-soft: var(--accent-soft); }
.tone-secondary { --tone: var(--secondary); --tone-soft: var(--secondary-soft); }
.tone-warm { --tone: var(--warm); --tone-soft: var(--warm-soft); }
.tone-deep { --tone: var(--dark-mid); --tone-soft: var(--deep-soft); }
.cover-gradient-strip { width: 100%; height: 4px; border-radius: 99px; background: linear-gradient(90deg, var(--accent), var(--secondary), var(--warm), var(--accent)); background-size: 200% 100%; animation: shimmer 6s linear infinite; margin-bottom: 20px; }
.cover-logos { display: flex; align-items: center; gap: 18px; margin-bottom: 16px; }
.uy-mark { display: inline-flex; align-items: center; justify-content: center; background: var(--accent); color: #fff; font-family: var(--display); font-size: 1.65rem; font-weight: 700; padding: 10px 22px; border-radius: 14px; box-shadow: 0 12px 32px color-mix(in srgb, var(--accent) 35%, transparent); }
.logo-divider { width: 2px; height: 42px; background: rgba(255,255,255,.14); border-radius: 99px; }
.partner-logotype { color: rgba(255,255,255,.82); font-size: 1rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.cover-title { font-size: clamp(2.35rem, 4.9vw, 4.65rem); line-height: 1.03; color: #fff; max-width: 920px; }
.cover-title span { display: block; }
.cover-title .line-1 { color: rgba(255,255,255,.64); font-style: italic; font-weight: 400; }
.cover-title .line-2 { color: #fff; }
.cover-title .line-3 { color: var(--warm); }
.cover-subtitle { font-size: clamp(1rem, 1.65vw, 1.18rem); color: rgba(255,255,255,.74); max-width: 720px; line-height: 1.65; margin-top: 8px; }
.cover-pillar-row { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; max-width: 980px; margin-top: 18px; }
.cover-pillar { border: 1px solid rgba(255,255,255,.14); background: linear-gradient(145deg, rgba(255,255,255,.11), rgba(255,255,255,.035)); backdrop-filter: blur(16px); border-radius: 22px; padding: 18px; box-shadow: inset 0 1px 0 rgba(255,255,255,.09), 0 18px 40px rgba(0,0,0,.12); }
.cover-pillar .card-mark { margin-bottom: 10px; background: rgba(255,255,255,.1); color: var(--warm); }
.cover-pillar h3 { font-family: var(--sans); font-size: .95rem; color: #fff; margin-bottom: 4px; letter-spacing: 0; }
.cover-pillar p { font-size: .86rem; color: rgba(255,255,255,.66); line-height: 1.55; }
.cover-footer { display: flex; justify-content: space-between; gap: 20px; color: rgba(255,255,255,.42); font-size: .84rem; padding-top: 18px; border-top: 1px solid rgba(255,255,255,.1); max-width: 980px; }
.section-eyebrow { font-size: .76rem; font-weight: 800; text-transform: uppercase; letter-spacing: .15em; color: var(--accent-deep); }
.section-title { font-size: clamp(1.9rem, 3.3vw, 2.7rem); line-height: 1.14; color: var(--dark); max-width: 820px; }
.section-subtitle { font-size: 1.03rem; color: var(--muted); max-width: 760px; line-height: 1.62; }
.s2-quote { font-family: var(--display); font-size: clamp(1.28rem, 2.35vw, 1.8rem); line-height: 1.34; color: var(--dark); text-align: center; max-width: 980px; margin: 0 auto 8px; font-style: italic; }
.s2-quote-em { color: var(--accent-deep); font-weight: 700; font-style: normal; }
.s2-author { text-align: center; color: var(--accent-deep); font-weight: 800; font-size: .88rem; letter-spacing: .04em; margin-bottom: 18px; }
.s2-timeline { display: flex; align-items: flex-start; position: relative; padding: 0 16px; gap: 14px; }
.s2-timeline::before { content: ''; position: absolute; top: 28px; left: 70px; right: 70px; height: 3px; background: linear-gradient(90deg, var(--accent), var(--secondary), var(--warm)); border-radius: 99px; z-index: 0; clip-path: inset(0 100% 0 0); transition: clip-path 1.1s var(--ease-out-expo); }
.s2-timeline.line-drawn::before { clip-path: inset(0); }
.s2-tl-item { flex: 1; text-align: center; position: relative; z-index: 1; }
.s2-tl-dot, .card-mark, .s7-step-icon { width: 54px; height: 54px; border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; background: var(--tone-soft); color: var(--tone); box-shadow: 0 8px 24px rgba(12,22,41,.07); }
.s2-tl-dot svg, .card-mark svg, .s7-step-icon svg { width: 25px; height: 25px; }
.mini-kicker { margin-top: 12px; font-size: .68rem; text-transform: uppercase; letter-spacing: .12em; color: var(--tone); font-weight: 800; }
.s2-tl-title { font-family: var(--display); font-weight: 700; font-size: 1.18rem; color: var(--dark); margin: 7px 0 5px; }
.s2-tl-desc { font-size: .9rem; color: var(--muted); line-height: 1.55; max-width: 285px; margin: 0 auto; }
.s3-infographic { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 18px; }
.s3-viz { text-align: center; }
.s3-viz-mark { width: 154px; height: 154px; border-radius: 50%; border: 18px solid var(--tone-soft); color: var(--tone); display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; position: relative; }
.s3-viz-mark strong { font-family: var(--display); font-size: 3.3rem; line-height: 1; color: var(--tone); }
.s3-viz-mark span { font-weight: 800; font-size: .86rem; color: var(--muted); display: block; text-transform: uppercase; letter-spacing: .08em; }
.s3-viz-label { font-family: var(--display); font-size: 1.14rem; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
.s3-viz-desc { font-size: .9rem; color: var(--muted); line-height: 1.52; max-width: 225px; margin: 0 auto; }
.card-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.platform-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.benefit-card, .platform-card, .s7-step { background: linear-gradient(145deg, rgba(255,255,255,.96), rgba(255,255,255,.78)); border: 1px solid var(--rule); border-radius: 22px; padding: 24px; box-shadow: 0 16px 44px rgba(12,22,41,.07); position: relative; overflow: hidden; }
.benefit-card::after, .platform-card::after, .s7-step::after { content: ''; position: absolute; right: -42px; bottom: -42px; width: 112px; height: 112px; border-radius: 999px; background: var(--tone-soft); opacity: .62; pointer-events: none; }
.benefit-card > *, .platform-card > *, .s7-step > * { position: relative; z-index: 1; }
.benefit-card::before, .platform-card::before { content: ''; position: absolute; inset: 0 0 auto; height: 4px; background: linear-gradient(90deg, var(--tone), var(--warm)); }
.benefit-card .card-mark, .platform-card .card-mark { margin-bottom: 14px; }
.benefit-card h3, .platform-card h3 { font-family: var(--display); color: var(--dark); font-size: 1.12rem; margin-bottom: 8px; }
.benefit-card p, .platform-card p, .s7-step p { color: var(--muted); font-size: .9rem; line-height: 1.58; }
.s7-staircase { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; align-items: flex-start; }
.s7-step--1 { margin-top: 58px; } .s7-step--2 { margin-top: 29px; }
.s7-level-label { font-size: .7rem; font-weight: 900; text-transform: uppercase; letter-spacing: .14em; color: var(--tone); margin-bottom: 14px; }
.s7-step-icon { margin-bottom: 14px; }
.s7-step h3 { color: var(--dark); font-size: 1.18rem; margin-bottom: 8px; }
.s7-step-items { list-style: none; display: flex; flex-direction: column; gap: 7px; margin-top: 14px; }
.s7-step-items li { font-size: .84rem; color: var(--body); line-height: 1.44; padding-left: 17px; position: relative; }
.s7-step-items li::before { content: '→'; position: absolute; left: 0; color: var(--tone); font-weight: 900; }
.pricing-runway { display: flex; gap: 15px; align-items: stretch; min-height: 285px; overflow: visible; padding-bottom: 2px; }
.tier-panel { flex: 0 1 0; min-width: 0; max-width: 0; opacity: 0; overflow: hidden; border-radius: 24px; padding: 0; display: flex; flex-direction: column; gap: 14px; transition: flex .6s var(--ease-out-expo), max-width .6s var(--ease-out-expo), opacity .5s ease .1s, padding .4s ease, transform .5s var(--spring); transform: translateY(10px); box-shadow: 0 16px 40px rgba(12,22,41,.08); }
.tier-panel.tier-visible { flex: 1 1 0; max-width: 100%; opacity: 1; padding: 22px; transform: translateY(0); }
.tier-panel--premium { background: linear-gradient(135deg, var(--dark-mid), var(--dark)); color: #fff; }
.tier-panel--fullpage { background: linear-gradient(135deg, color-mix(in srgb, var(--warm) 22%, white), #fff7e5); color: var(--body); border: 1px solid color-mix(in srgb, var(--warm) 32%, transparent); }
.tier-panel--standard { background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 14%, white), #fff); color: var(--body); border: 1px solid color-mix(in srgb, var(--accent) 28%, transparent); }
.tier-panel--entry { background: linear-gradient(135deg, color-mix(in srgb, var(--secondary) 16%, white), #fff); color: var(--body); border: 1px solid color-mix(in srgb, var(--secondary) 28%, transparent); }
.tier-label { font-family: var(--display); font-weight: 700; font-size: .75rem; text-transform: uppercase; letter-spacing: .14em; margin-bottom: 2px; }
.tier-cards { display: flex; gap: 12px; flex: 1; }
.pricing-runway:has(.tier-panel:nth-child(2).tier-visible) .tier-cards { flex-direction: column; }
.pricing-runway:has(.tier-panel:nth-child(2).tier-visible) .tier-panel.tier-visible { padding: 18px; gap: 10px; }
.pricing-runway:has(.tier-panel:nth-child(2).tier-visible) .tier-card { min-height: 0; padding: 12px; }
.pricing-runway:has(.tier-panel:nth-child(2).tier-visible) .tier-card-name { font-size: .94rem; }
.pricing-runway:has(.tier-panel:nth-child(2).tier-visible) .tier-card-price { font-size: 1.68rem; margin: 4px 0; }
.pricing-runway:has(.tier-panel:nth-child(2).tier-visible) .tier-card-desc { font-size: .74rem; line-height: 1.34; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.pricing-runway:has(.tier-panel:nth-child(2).tier-visible) .tier-term-badge { margin-top: 6px; }
.pricing-runway:has(.tier-panel:nth-child(2).tier-visible) .tier-skip { padding: 7px 15px; font-size: .76rem; }
.tier-card { flex: 1; min-height: 96px; border-radius: 17px; padding: 16px 15px; text-align: center; display: flex; flex-direction: column; justify-content: center; background: rgba(255,255,255,.82); box-shadow: 0 2px 9px rgba(12,22,41,.05), inset 0 1px 0 rgba(255,255,255,.5); }
.tier-panel--premium .tier-card { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12); }
.tier-card-name { font-family: var(--display); font-weight: 700; font-size: 1rem; margin-bottom: 4px; }
.tier-card-price { font-family: var(--display); font-weight: 800; font-size: 2rem; line-height: 1; margin: 6px 0; color: var(--accent-deep); }
.tier-panel--premium .tier-card-price { color: var(--warm); }
.tier-card-price span { font-size: .82rem; font-family: var(--sans); font-weight: 600; opacity: .7; }
.tier-card-desc { font-size: .79rem; line-height: 1.48; color: var(--muted); margin-top: 4px; }
.tier-panel--premium .tier-card-desc { color: rgba(255,255,255,.66); }
.tier-term-badge { display: inline-block; align-self: center; font-size: .63rem; font-weight: 900; text-transform: uppercase; letter-spacing: .1em; padding: 3px 10px; border-radius: 99px; margin-top: 8px; background: color-mix(in srgb, var(--accent) 13%, white); color: var(--accent-deep); }
.tier-skip { display: inline-block; align-self: center; margin-top: auto; padding: 8px 18px; border-radius: 30px; font-size: .8rem; font-weight: 800; text-decoration: none; color: inherit; border: 1px solid currentColor; opacity: .74; transition: all .2s ease; }
.tier-skip:hover { opacity: 1; transform: translateY(-2px); }
#tierNextBtn { margin: 12px auto 0; background: linear-gradient(135deg, var(--dark), var(--dark-mid)); color: #fff; border: 0; border-radius: 99px; padding: 11px 22px; font-family: var(--sans); font-weight: 900; cursor: pointer; transition: transform .2s var(--spring), box-shadow .2s ease; }
#tierNextBtn:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(12,22,41,.18); }
#tierSummary { max-height: 0; overflow: hidden; opacity: 0; transition: max-height .6s ease, opacity .4s ease; }
#tierSummary.summary-visible { max-height: 720px; opacity: 1; margin-top: 12px; }
.rate-table-shell { overflow: visible; border-radius: 14px; background: #fff; box-shadow: 0 8px 28px rgba(12,22,41,.07); }
.rate-table { width: 100%; border-collapse: collapse; background: #fff; font-size: .82rem; }
.rate-table th, .rate-table td { padding: 9px 13px; text-align: left; border-bottom: 1px solid var(--rule); }
.rate-table th { background: var(--dark); color: #fff; font-weight: 800; }
.rate-table .popular-header, .rate-table .popular-col { background: var(--accent-soft); color: var(--accent-deep); }
.s8-diagonal { position: absolute; top: -80px; right: -200px; width: 620px; height: 620px; background: rgba(255,255,255,.025); transform: rotate(35deg); border-radius: 62px; pointer-events: none; }
#start .slide-inner { gap: clamp(14px, 2vw, 22px); }
.s8-title { color: #fff; font-size: clamp(1.85rem, 3vw, 2.62rem); line-height: 1.12; max-width: 940px; }
.next-layout { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(280px, .72fr); gap: 18px; align-items: stretch; max-width: 1080px; }
.next-card, .next-proof-card { background: linear-gradient(145deg, rgba(255,255,255,.12), rgba(255,255,255,.045)); border: 1px solid rgba(255,255,255,.14); border-radius: 24px; padding: 22px; box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 22px 55px rgba(0,0,0,.18); backdrop-filter: blur(16px); }
.next-card p { color: rgba(255,255,255,.76); line-height: 1.6; font-size: .98rem; margin-bottom: 14px; }
.next-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; list-style: none; counter-reset: next; }
.next-steps li { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.08); border-radius: 16px; padding: 14px; color: rgba(255,255,255,.84); font-size: .88rem; line-height: 1.45; position: relative; overflow: hidden; }
.next-steps li::before { counter-increment: next; content: counter(next); display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; margin-bottom: 10px; border-radius: 999px; background: color-mix(in srgb, var(--warm) 82%, white); color: #1b2430; font-weight: 900; font-size: .78rem; }
.next-proof-card { display: flex; flex-direction: column; justify-content: center; gap: 10px; }
.next-proof-kicker { color: var(--warm); font-size: .72rem; font-weight: 900; text-transform: uppercase; letter-spacing: .14em; }
.next-proof-card strong { color: #fff; font-family: var(--display); font-size: clamp(1.2rem, 1.8vw, 1.52rem); line-height: 1.14; }
.next-proof-card span:last-child { color: rgba(255,255,255,.66); line-height: 1.52; font-size: .9rem; }
.action-dock { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; max-width: 1080px; }
.action-card { color: #fff; text-decoration: none; min-height: 116px; display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 16px; border-radius: 22px; border: 1px solid rgba(255,255,255,.14); background: linear-gradient(145deg, rgba(255,255,255,.13), rgba(255,255,255,.045)); box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 16px 42px rgba(0,0,0,.18); backdrop-filter: blur(16px); transition: transform .22s var(--spring), border-color .22s ease, background .22s ease; }
.action-card:hover { transform: translateY(-3px); border-color: color-mix(in srgb, var(--warm) 55%, white); background: linear-gradient(145deg, color-mix(in srgb, var(--accent) 26%, rgba(255,255,255,.1)), rgba(255,255,255,.06)); }
.action-icon { width: 42px; height: 42px; border-radius: 14px; display: inline-flex; align-items: center; justify-content: center; color: #101828; background: linear-gradient(135deg, var(--warm), color-mix(in srgb, var(--secondary) 72%, white)); box-shadow: 0 10px 24px color-mix(in srgb, var(--warm) 22%, transparent); }
.action-icon svg { width: 22px; height: 22px; }
.action-copy { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.action-kicker { color: rgba(255,255,255,.52); font-size: .66rem; font-weight: 900; letter-spacing: .14em; text-transform: uppercase; }
.action-copy strong { color: #fff; font-size: .96rem; line-height: 1.15; }
.action-copy span:last-child { color: rgba(255,255,255,.64); font-size: .78rem; line-height: 1.35; }
.action-arrow { color: rgba(255,255,255,.58); font-weight: 900; }
.next-contact { color: rgba(255,255,255,.5); font-size: .82rem; max-width: 1080px; }
.s8-rainbow { position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--accent), var(--secondary), var(--warm), var(--accent)); background-size: 200% 100%; animation: shimmer 7s linear infinite; }
@media (max-height: 820px) and (min-width: 901px) {
  #pricing.slide { padding-top: 42px; padding-bottom: 42px; }
  #pricing .slide-inner { min-height: calc(100svh - 84px); gap: 10px; }
  #pricing .section-title { font-size: clamp(2.1rem, 3.5vw, 3rem); }
  #pricing .section-subtitle { font-size: .98rem; line-height: 1.45; }
  #pricing .pricing-runway { min-height: 260px; }
  #pricing .rate-table { font-size: .76rem; }
  #pricing .rate-table th, #pricing .rate-table td { padding: 6px 11px; }
}
@media (max-width: 900px) {
  html { scroll-snap-type: none; }
  .slide { height: auto; min-height: 100vh; max-height: none; padding: 40px 24px; }
  .dot-nav { display: none; }
  .cover-pillar-row, .s3-infographic, .platform-grid, .card-grid, .s7-staircase, .next-layout, .next-steps, .action-dock { grid-template-columns: 1fr; }
  .s2-timeline { flex-direction: column; gap: 24px; }
  .s2-timeline::before { display: none; }
  .s7-step--1, .s7-step--2 { margin-top: 0; }
  .pricing-runway, .tier-cards, .cover-footer { flex-direction: column; }
  .tier-panel, .tier-panel.tier-visible { max-width: none; opacity: 1; flex: 1; padding: 22px; }
  .action-card { min-height: auto; }
  #tierNextBtn { display: none; }
  #tierSummary { max-height: none; opacity: 1; }
}
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .001ms !important; transition-duration: .001ms !important; scroll-behavior: auto !important; } }
`;
}

function renderSlides(config: ProspectDeckConfig): string {
  return `
<section class="slide slide--dark" id="cover" data-slide-index="0" data-theme="dark">
  <div class="orb orb-a"></div><div class="orb orb-b"></div>
  <div class="slide-inner">
    <div class="cover-gradient-strip"></div>
    <div class="cover-logos" data-reveal="up">
      <div class="uy-mark">UY!</div><div class="logo-divider"></div><div class="partner-logotype">${escapeHtml(config.partnerLabel)}</div>
    </div>
    <h1 class="cover-title" data-reveal="up" data-delay="120"><span class="line-1">${escapeHtml(config.cover.lineOne)}</span><span class="line-2">${escapeHtml(config.cover.lineTwo)}</span><span class="line-3">${escapeHtml(config.cover.lineThree)}</span></h1>
    <p class="cover-subtitle" data-reveal="up" data-delay="220">${escapeHtml(config.cover.subtitle)}</p>
    <div class="cover-pillar-row">${config.cover.pillars.map((card, index) => `<div class="cover-pillar tone-${card.tone}" data-reveal="up" data-delay="${330 + index * 110}"><div class="card-mark">${iconSvg(card.icon)}</div><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.body)}</p></div>`).join("")}</div>
    <div class="cover-footer" data-reveal="fade" data-delay="720"><span>${escapeHtml(config.cover.footerLeft)}</span><span>${escapeHtml(config.cover.footerRight)}</span></div>
  </div>
</section>
<section class="slide slide--paper" id="why" data-slide-index="1" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" style="text-align:center;">Why this audience</div>
    <h2 class="section-title" data-reveal="up" data-delay="100" style="text-align:center;margin-left:auto;margin-right:auto;">${escapeHtml(config.opportunity.heading)}</h2>
    <div class="s2-quote" data-reveal="scale" data-delay="280">&ldquo;${escapeHtml(config.opportunity.quoteBefore)} <span class="s2-quote-em">${escapeHtml(config.opportunity.quoteEmphasis)}</span> ${escapeHtml(config.opportunity.quoteAfter)}&rdquo;</div>
    <p class="s2-author" data-reveal="fade" data-delay="430">-- ${escapeHtml(config.opportunity.attribution)}</p>
    ${renderTimeline(config.opportunity.timeline)}
  </div>
</section>
<section class="slide slide--paper" id="what" data-slide-index="2" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up">The publication</div>
    <h2 class="section-title" data-reveal="up" data-delay="100">${escapeHtml(config.platform.heading)}</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="180">${escapeHtml(config.platform.subtitle)}</p>
    <div class="s3-infographic">
      <div class="s3-viz tone-accent" data-reveal="scale" data-delay="300"><div class="s3-viz-mark"><div><span>1 in</span><strong>4</strong></div></div><div class="s3-viz-label">Prevalence</div><div class="s3-viz-desc">U.S. adults live with a disability</div></div>
      <div class="s3-viz tone-secondary" data-reveal="scale" data-delay="430"><div class="s3-viz-mark"><div><span>Every</span><strong>mo</strong></div></div><div class="s3-viz-label">Frequency</div><div class="s3-viz-desc">Free monthly print publication</div></div>
      <div class="s3-viz tone-warm" data-reveal="scale" data-delay="560"><div class="s3-viz-mark"><div><span>RDU</span><strong>5</strong></div></div><div class="s3-viz-label">Coverage</div><div class="s3-viz-desc">Counties across the Triangle</div></div>
    </div>
    <div class="platform-grid">${config.platform.cards.map((card, index) => renderCard(card, "platform-card").replace('data-reveal="up"', `data-reveal="up" data-delay="${680 + index * 120}"`)).join("")}</div>
  </div>
</section>
<section class="slide slide--paper" id="synergy" data-slide-index="3" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" style="text-align:center;">Partner value</div>
    <h2 class="section-title" data-reveal="up" data-delay="100" style="max-width:none;text-align:center;margin-left:auto;margin-right:auto;">${escapeHtml(config.benefits.heading)}</h2>
    <div class="card-grid">${config.benefits.cards.map((card, index) => renderCard(card, "benefit-card").replace('data-reveal="up"', `data-reveal="up" data-delay="${300 + index * 110}"`)).join("")}</div>
  </div>
</section>
<section class="slide slide--paper" id="partnership" data-slide-index="4" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up">The offer stack</div>
    <h2 class="section-title" data-reveal="up" data-delay="100">${escapeHtml(config.partnership.heading)}</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="180">${escapeHtml(config.partnership.subtitle)}</p>
    ${renderPartnershipLevels(config.partnership.levels)}
  </div>
</section>
${renderPricing(config.pricing)}
<section class="slide slide--dark" id="start" data-slide-index="6" data-theme="dark">
  <div class="s8-diagonal"></div><div class="orb orb-a"></div>
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" style="color:rgba(255,255,255,.62);">Next steps</div>
    <h2 class="s8-title" data-reveal="up" data-delay="100">${escapeHtml(config.start.heading)}</h2>
    <div class="next-layout" data-reveal="up" data-delay="220">
      <div class="next-card">
        <p>${escapeHtml(config.start.subtitle)}</p>
        <ul class="next-steps">${config.start.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ul>
      </div>
      <div class="next-proof-card">
        <span class="next-proof-kicker">Ready rail</span>
        <strong>Everything needed to move from conversation to paperwork is one click away.</strong>
        <span>Use the buttons below live on the call: payment capture, a digital publication sample, and the agreement builder.</span>
      </div>
    </div>
    ${renderActionDock()}
    <div class="next-contact" data-reveal="fade" data-delay="520">Will Sigmon &middot; Area Director &middot; will.sigmon@n2co.com</div>
  </div>
  <div class="s8-rainbow"></div>
</section>`;
}

export function createProspectDeck(config: ProspectDeckConfig): DeckData {
  return {
    title: config.title,
    navClass: "dot-nav on-dark",
    navItems: NAV_ITEMS,
    css: buildCss(config.theme),
    slidesHtml: renderSlides(config),
  };
}
