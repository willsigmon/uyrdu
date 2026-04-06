import type { DeckData } from "@/lib/deck/types";

const data: DeckData = {
  title: "Uniquely You! — Partnership Conversation",
  navClass: "dot-nav on-dark",
  navItems: [
    { href: "#cover", label: "Intro + rapport" },
    { href: "#opportunity", label: "The why" },
    { href: "#publication", label: "Not better, different" },
    { href: "#credibility", label: "Ask: current marketing?" },
    { href: "#partnership", label: "Show publication here" },
    { href: "#pricing", label: "Blueprint + drop-down" },
    { href: "#start", label: "Close: size > directory > design > card" },
  ],
  css: `
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --cream: #FFF7F1;
  --dark: #2C0B5A;
  --dark-mid: #3D1275;
  --body: #333333;
  --coral: #FF6B6B;
  --teal: #12D6A0;
  --gold: #FFC72D;
  --purple-sec: #6E268E;
  --blue: #5EA8FF;
  --lavender: #F5E9FF;
  --peach: #FFE5D1;
  --mint: #E2F0F3;
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --display: 'Archivo Black', sans-serif;
  --sans: 'Plus Jakarta Sans', system-ui, sans-serif;
}

html { scroll-snap-type: y mandatory; scroll-behavior: smooth; overflow-x: hidden; }
body { font-family: var(--sans); color: var(--body); background: var(--cream); -webkit-font-smoothing: antialiased; overflow-x: hidden; }
h1, h2, h3, h4 { font-family: var(--display); font-weight: 400; letter-spacing: -0.02em; }

.rainbow-bar {
  position: fixed; top: 0; left: 0; width: 100%; height: 4px;
  background: linear-gradient(90deg, #12D6A0, #FFC72D, #FF6B6B, #5EA8FF, #12D6A0, #FFC72D, #FF6B6B, #5EA8FF);
  background-size: 200% 100%; animation: shimmer 4s linear infinite; z-index: 1000;
}
@keyframes shimmer { 0% { background-position: 0% 0%; } 100% { background-position: -200% 0%; } }

.dot-nav {
  position: fixed; right: 24px; top: 50%; transform: translateY(-50%); z-index: 999;
  display: flex; flex-direction: column; gap: 14px;
}
.dot-nav a {
  width: 10px; height: 10px; border-radius: 50%; border: 2px solid rgba(44, 11, 90, 0.3);
  background: transparent; cursor: pointer; transition: all 0.3s ease; position: relative; display: block; text-decoration: none;
}
.dot-nav a::after {
  content: attr(data-label); position: absolute; right: 22px; top: 50%; transform: translateY(-50%);
  background: var(--dark); color: #fff; font-family: var(--sans); font-size: 0.75rem; font-weight: 600;
  padding: 4px 10px; border-radius: 6px; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.2s ease;
}
.dot-nav a:hover::after { opacity: 1; }
.dot-nav.on-dark a { border-color: rgba(255,255,255,0.4); }
.dot-nav.on-dark a::after { background: #fff; color: var(--dark); }
.dot-nav a.active { background: var(--dark); border-color: var(--dark); transform: scale(1.4); }
.dot-nav.on-dark a.active { background: #fff; border-color: #fff; }

.slide {
  width: 100vw; height: 100vh; min-height: 100vh; max-height: 100vh; scroll-snap-align: start;
  position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 48px 72px;
}
.slide--dark { background: linear-gradient(135deg, #1a0640 0%, var(--dark) 40%, #3D1275 100%); color: #fff; }
.slide--cream { background: var(--cream); color: var(--body); }
.slide-inner {
  max-width: 1200px; width: 100%; height: 100%; position: relative; z-index: 2;
  display: flex; flex-direction: column; justify-content: center; gap: 20px;
}

.orb { position: absolute; border-radius: 50%; pointer-events: none; z-index: 1; filter: blur(80px); }

[data-reveal] { opacity: 0; will-change: opacity, transform; transition: opacity 0.7s ease, transform 0.8s var(--spring); }
[data-reveal="up"] { transform: translateY(40px); }
[data-reveal="down"] { transform: translateY(-40px); }
[data-reveal="left"] { transform: translateX(-40px); }
[data-reveal="right"] { transform: translateX(40px); }
[data-reveal="scale"] { transform: scale(0.85); }
[data-reveal="fade"] { transform: none; }
[data-reveal].visible { opacity: 1 !important; transform: none !important; transition: opacity 0.6s ease, transform 0.75s var(--spring); }

/* COVER */
.cover-gradient-strip {
  width: 100%; height: 6px; border-radius: 3px;
  background: linear-gradient(90deg, #12D6A0, #FFC72D, #FF6B6B, #5EA8FF, #12D6A0);
  background-size: 200% 100%; animation: shimmer 3s linear infinite; margin-bottom: 20px; position: relative; overflow: hidden;
}
.cover-gradient-strip::after {
  content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  animation: stripShimmer 2.5s ease-in-out infinite;
}
@keyframes stripShimmer { 0% { left: -50%; } 100% { left: 150%; } }
.cover-logos { display: flex; align-items: center; gap: 20px; margin-bottom: 16px; }
.uy-mark {
  display: inline-flex; align-items: center; justify-content: center; background: var(--coral); color: #fff;
  font-family: var(--display); font-size: 1.8rem; padding: 10px 22px; border-radius: 14px;
  letter-spacing: 0.02em; line-height: 1; box-shadow: 0 4px 20px rgba(255,107,107,0.35); position: relative; transition: box-shadow 0.4s ease;
}

.uy-mark:hover { box-shadow: 0 6px 28px rgba(255,107,107,0.5); }
.uy-mark::after { content: ''; position: absolute; inset: -3px; border-radius: 17px; background: linear-gradient(135deg, var(--coral), var(--gold)); z-index: -1; opacity: 0.5; }
.partner-logotype { font-family: var(--sans); font-size: 1.1rem; font-weight: 600; color: rgba(255,247,241,0.85); letter-spacing: 0.06em; text-transform: uppercase; }
.cover-title { font-size: clamp(2.8rem, 5.5vw, 4.8rem); line-height: 1.05; color: #fff; margin-bottom: 8px; }
.cover-title .line-1 { display: block; color: rgba(255,247,241,0.6); }
.cover-title .line-2 { display: block; background: linear-gradient(90deg, var(--teal), var(--gold)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.cover-title .line-cross { display: block; font-family: var(--sans); font-weight: 300; font-size: clamp(1rem, 2vw, 1.6rem); color: rgba(255,247,241,0.4); letter-spacing: 0.3em; text-transform: uppercase; margin: 8px 0; }
.text-reveal-mask { overflow: hidden; display: block; }
.text-reveal-inner { display: block; transform: translateY(110%); animation: textSlideUp 0.9s var(--ease-out-expo) 0.8s forwards; }
@keyframes textSlideUp { to { transform: translateY(0); } }
.cover-subtitle { font-size: clamp(1rem, 1.8vw, 1.2rem); color: rgba(255,247,241,0.7); max-width: 600px; line-height: 1.7; font-weight: 400; margin-bottom: 28px; }
.cover-pillars { display: flex; gap: 40px; margin-bottom: 24px; }
.cover-pillar { display: flex; align-items: center; gap: 12px; }
.cover-pillar-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.cover-pillar-icon svg { width: 22px; height: 22px; }
.cover-pillar-icon--coral { background: rgba(255,107,107,0.15); }
.cover-pillar-icon--teal { background: rgba(18,214,160,0.15); }
.cover-pillar-icon--gold { background: rgba(255,199,45,0.15); }
.cover-pillar-label { font-weight: 600; font-size: 0.95rem; letter-spacing: 0.04em; }
.cover-pillar-label--coral { color: var(--coral); }
.cover-pillar-label--teal { color: var(--teal); }
.cover-pillar-label--gold { color: var(--gold); }
.cover-footer { display: flex; justify-content: space-between; color: rgba(255,247,241,0.4); font-size: 0.85rem; font-weight: 400; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.06); }
.float-shape { position: absolute; pointer-events: none; z-index: 1; opacity: 0.06; }
@keyframes floatDrift { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(10px, -15px) rotate(5deg); } 50% { transform: translate(-5px, -25px) rotate(-3deg); } 75% { transform: translate(15px, -10px) rotate(7deg); } }

/* SECTION SHARED */
.section-eyebrow { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--purple-sec); margin-bottom: 6px; }
.section-eyebrow::after {
  content: ''; display: block; width: 32px; height: 3px;
  background: linear-gradient(90deg, var(--coral), var(--gold));
  margin-top: 8px; border-radius: 2px;
}
.slide-inner[style*=text-align:center] .section-eyebrow::after,
.slide-inner[style*=align-items:center] .section-eyebrow::after { margin-left: auto; margin-right: auto; }
.section-title { font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--dark); max-width: 700px; line-height: 1.15; margin-bottom: 4px; text-wrap: balance; }
.section-subtitle { font-size: 1.05rem; color: #666; max-width: 640px; line-height: 1.6; }

/* SLIDE 2 — ABOUT US / OPPORTUNITY */
.key-phrase { font-family: var(--display); font-size: clamp(1.2rem, 2vw, 1.5rem); color: var(--dark); line-height: 1.35; max-width: 800px; text-align: center; margin: 0 auto 12px; }
.key-phrase em { color: var(--coral); font-style: normal; }
.stat-row { display: flex; gap: 40px; justify-content: center; flex-wrap: wrap; margin: 16px 0; }
.stat-card { background: #fff; border-radius: 16px; padding: 20px 28px; text-align: center; box-shadow: 0 2px 12px rgba(0,0,0,0.04); flex: 1; min-width: 160px; max-width: 220px; }
.stat-card-number { font-family: var(--display); font-size: 2.2rem; line-height: 1; margin-bottom: 4px; }
.stat-card-label { font-size: 0.85rem; color: #666; line-height: 1.4; }
.stat-card:nth-child(1) { border-top: 3px solid var(--coral); }
.stat-card:nth-child(2) { border-top: 3px solid var(--teal); }
.stat-card:nth-child(3) { border-top: 3px solid var(--gold); }
.origin-story { font-size: 0.95rem; color: #555; line-height: 1.7; max-width: 700px; text-align: center; margin: 0 auto; font-style: italic; }

/* SLIDE 3 — WHY IT WORKS */
.reasons-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.reason-card { background: #fff; border-radius: 20px; padding: 32px; box-shadow: 0 2px 16px rgba(0,0,0,0.04); }
.reason-card--coral { border-top: 4px solid var(--coral); }
.reason-card--teal { border-top: 4px solid var(--teal); }
.reason-number { font-family: var(--display); font-size: 0.75rem; color: var(--purple-sec); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 8px; }
.reason-title { font-family: var(--display); font-size: 1.3rem; color: var(--dark); margin-bottom: 10px; }
.reason-body { font-size: 0.92rem; color: #555; line-height: 1.65; margin-bottom: 10px; }
.reason-highlight { font-weight: 600; color: var(--dark); font-size: 0.88rem; padding: 10px 14px; border-radius: 10px; line-height: 1.5; }
.reason-highlight--coral { background: rgba(255,107,107,0.08); }
.reason-highlight--teal { background: rgba(18,214,160,0.08); }
.pub-preview-link {
  display: inline-flex; align-items: center; gap: 8px; margin-top: 14px; padding: 10px 20px;
  background: var(--dark); color: #fff; font-family: var(--sans); font-size: 0.85rem; font-weight: 600;
  text-decoration: none; border-radius: 10px; transition: transform 0.3s var(--spring), background 0.3s ease;
}
.pub-preview-link:hover { transform: translateY(-2px); background: var(--dark-mid); }
.pub-preview-link svg { width: 16px; height: 16px; flex-shrink: 0; }

/* SLIDE 4 — CREDIBILITY */
.s4-chart { display: flex; gap: 36px; justify-content: center; align-items: flex-end; margin-bottom: 28px; }
.s4-bar-col { display: flex; flex-direction: column; align-items: center; gap: 10px; flex: 1; max-width: 200px; }
.s4-bar-value { font-family: var(--display); font-size: 1.6rem; }
.s4-bar-track { width: 100%; border-radius: 12px; position: relative; overflow: hidden; }
.s4-bar-fill { border-radius: 12px; position: absolute; bottom: 0; width: 100%; transform: scaleY(0); transform-origin: bottom; transition: transform 0.8s var(--ease-out-expo); }
.s4-bar-fill.animate { transform: scaleY(1); }
.s4-bar-label { font-size: 0.8rem; color: #666; text-align: center; line-height: 1.35; min-height: 2.7em; display: flex; align-items: flex-start; justify-content: center; }
.s4-context { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.s4-context-card { padding: 22px 24px; border-radius: 14px; }
.s4-context-card--quote { background: var(--lavender); border-left: 4px solid var(--purple-sec); }
.s4-context-card--aside { background: var(--mint); border-left: 4px solid var(--teal); }
.s4-context-card h3 { font-size: 1.1rem; color: var(--dark); margin-bottom: 8px; }
.s4-context-card--quote h3::before { content: '\\201C'; font-family: var(--display); font-size: 1.6rem; color: var(--purple-sec); opacity: 0.3; margin-right: 6px; line-height: 1; vertical-align: -0.1em; }
.s4-context-card p { font-size: 0.92rem; color: #555; line-height: 1.6; max-width: 44ch; }
#credibility .slide-inner { align-items: center; text-align: center; }
#credibility .section-title { max-width: 900px; text-wrap: balance; }
#credibility .section-subtitle { max-width: 700px; margin-left: auto; margin-right: auto; }
#credibility .s4-context { max-width: 900px; margin: 0 auto; }
#credibility .section-eyebrow::after { margin-left: auto; margin-right: auto; }

/* SLIDE 5 — PARTNERSHIP OPTIONS */
.partner-features { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 28px; margin-bottom: 16px; }
.partner-feature {
  background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  display: flex; flex-direction: column; align-items: center; text-align: center;
}
.partner-feature-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }
.partner-feature-icon svg { width: 24px; height: 24px; }
.partner-feature h3 { font-size: 1rem; color: var(--dark); margin-bottom: 6px; }
.partner-feature { border-bottom: 3px solid transparent; }
.partner-feature:nth-child(1) { border-bottom-color: var(--coral); }
.partner-feature:nth-child(2) { border-bottom-color: var(--teal); }
.partner-feature:nth-child(3) { border-bottom-color: var(--gold); }
.partner-feature p { font-size: 0.85rem; color: #666; line-height: 1.5; }
.design-callout { display: flex; gap: 28px; justify-content: center; }
.design-option { background: #fff; border-radius: 14px; padding: 18px 24px; flex: 1; max-width: 340px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
.design-option--highlight { border: 2px solid var(--gold); position: relative; }
.design-option--highlight::before {
  content: 'Most popular'; position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
  background: var(--gold); color: var(--dark); font-family: var(--sans); font-size: 0.65rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.08em; padding: 2px 10px; border-radius: 20px;
}
.design-option h4 { font-size: 0.95rem; color: var(--dark); margin-bottom: 4px; }
.design-option:first-child h4::before { content: '\\270E'; margin-right: 6px; opacity: 0.5; }
.design-option:last-child h4::before { content: '\\2728'; margin-right: 6px; opacity: 0.5; }
.design-option p { font-size: 0.85rem; color: #666; line-height: 1.5; }
.design-option .price-tag { font-family: var(--display); font-size: 1.4rem; color: var(--purple-sec); margin-top: 6px; }


/* BLUEPRINT LAYOUT */
.blueprint-wrap { display: flex; gap: 32px; align-items: flex-start; justify-content: center; width: 100%; }
.blueprint-mag { position: relative; width: 520px; flex-shrink: 0; }
.blueprint-spread {
  display: grid; grid-template-columns: 1fr 1fr; border: 2px solid var(--dark);
  border-radius: 4px; aspect-ratio: 1.55 / 1; overflow: hidden;
  background: repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(44,11,90,0.04) 19px, rgba(44,11,90,0.04) 20px),
              repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(44,11,90,0.04) 19px, rgba(44,11,90,0.04) 20px);
}
.blueprint-spread::after {
  content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 2px;
  background: var(--dark); opacity: 0.25; transform: translateX(-50%);
}
.bp-page { position: relative; border: 1px dashed rgba(44,11,90,0.12); display: flex; flex-direction: column; }
.bp-zone {
  position: absolute; border: 2px solid; border-radius: 4px; display: flex; align-items: center; justify-content: center;
  font-family: var(--sans); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
  transition: all 0.3s ease; cursor: default; opacity: 0.85;
}
.bp-zone:hover { opacity: 1; transform: scale(1.02); z-index: 5; }
.bp-zone--spread { left: 2%; top: 4%; width: 96%; height: 92%; border-color: var(--coral); background: rgba(255,107,107,0.08); color: var(--coral); }
.bp-zone--backcover { left: 4%; top: 4%; width: 92%; height: 92%; border-color: var(--gold); background: rgba(255,199,45,0.1); color: var(--gold); }
.bp-zone--inside { left: 4%; top: 4%; width: 92%; height: 92%; border-color: var(--purple-sec); background: rgba(110,38,142,0.06); color: var(--purple-sec); }
.bp-zone--fullpage { left: 4%; top: 4%; width: 92%; height: 92%; border-color: var(--purple-sec); background: rgba(110,38,142,0.06); color: var(--purple-sec); }
.bp-zone--half { left: 4%; bottom: 4%; width: 92%; height: 44%; border-color: var(--blue); background: rgba(94,168,255,0.08); color: var(--blue); }
.bp-zone--quarter-sponsor { left: 50%; top: 4%; width: 44%; height: 44%; transform: translateX(-50%); border-color: var(--blue); background: rgba(94,168,255,0.08); color: var(--blue); }
.bp-zone--third { left: 4%; bottom: 4%; width: 92%; height: 30%; border-color: var(--teal); background: rgba(18,214,160,0.08); color: var(--teal); }
.bp-zone--quarter { left: 4%; bottom: 4%; width: 44%; height: 30%; border-color: var(--teal); background: rgba(18,214,160,0.08); color: var(--teal); }
.bp-zone-label { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.bp-zone-price { font-size: 0.85rem; font-weight: 800; }
.bp-legend { display: flex; flex-direction: column; gap: 10px; flex: 1; min-width: 200px; }
.bp-legend-item {
  display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px;
  background: #fff; box-shadow: 0 1px 4px rgba(0,0,0,0.04); font-family: var(--sans); font-size: 0.8rem;
  transition: all 0.25s ease; cursor: default;
}
.bp-legend-item:hover { box-shadow: 0 2px 10px rgba(0,0,0,0.08); transform: translateX(4px); }
.bp-legend-swatch { width: 14px; height: 14px; border-radius: 4px; flex-shrink: 0; border: 2px solid; }
.bp-legend-name { font-weight: 700; color: var(--dark); }
.bp-legend-price { margin-left: auto; font-weight: 800; }
.bp-legend-item--coral .bp-legend-swatch { border-color: var(--coral); background: rgba(255,107,107,0.15); }
.bp-legend-item--coral .bp-legend-price { color: var(--coral); }
.bp-legend-item--gold .bp-legend-swatch { border-color: var(--gold); background: rgba(255,199,45,0.2); }
.bp-legend-item--gold .bp-legend-price { color: var(--gold); }
.bp-legend-item--purple .bp-legend-swatch { border-color: var(--purple-sec); background: rgba(110,38,142,0.1); }
.bp-legend-item--purple .bp-legend-price { color: var(--purple-sec); }
.bp-legend-item--blue .bp-legend-swatch { border-color: var(--blue); background: rgba(94,168,255,0.15); }
.bp-legend-item--blue .bp-legend-price { color: var(--blue); }
.bp-legend-item--teal .bp-legend-swatch { border-color: var(--teal); background: rgba(18,214,160,0.15); }
.bp-legend-item--teal .bp-legend-price { color: var(--teal); }
.bp-page-label {
  position: absolute; bottom: -22px; left: 50%; transform: translateX(-50%);
  font-family: var(--sans); font-size: 0.6rem; color: rgba(44,11,90,0.4);
  text-transform: uppercase; letter-spacing: 0.1em; white-space: nowrap;
}
.bp-spine {
  position: absolute; left: 50%; top: -18px; transform: translateX(-50%);
  font-family: var(--sans); font-size: 0.55rem; color: rgba(44,11,90,0.35);
  text-transform: uppercase; letter-spacing: 0.12em;
}
.bp-tab-row { display: flex; gap: 6px; justify-content: center; margin-bottom: 16px; }
.bp-tab {
  font-family: var(--sans); font-size: 0.7rem; font-weight: 600; padding: 6px 14px;
  border-radius: 8px; border: 1.5px solid rgba(44,11,90,0.15); background: transparent;
  color: var(--dark); cursor: pointer; transition: all 0.2s ease; letter-spacing: 0.02em;
}
.bp-tab:hover { background: rgba(44,11,90,0.04); }
.bp-tab.active { background: var(--dark); color: #fff; border-color: var(--dark); }
.bp-view { display: none; }
.bp-view.active { display: grid; }



/* DROP-DOWN PROGRESSIVE REVEAL */
.bp-tab.bp-hidden { display: none; }
.bp-tab.bp-hidden.bp-revealed { display: inline-block; animation: tabReveal 0.4s var(--spring) forwards; }
@keyframes tabReveal { from { opacity: 0; transform: translateY(8px) scale(0.9); } to { opacity: 1; transform: none; } }
.bp-dropdown-btn {
  font-family: var(--sans); font-size: 0.78rem; font-weight: 600; padding: 8px 22px;
  border-radius: 10px; border: 1.5px dashed rgba(44,11,90,0.2); background: transparent;
  color: var(--dark); cursor: pointer; transition: all 0.25s ease; letter-spacing: 0.02em;
  opacity: 0.7;
}
.bp-dropdown-btn:hover { border-color: var(--dark); opacity: 1; background: rgba(44,11,90,0.03); }
.bp-detail-ask {
  font-family: var(--sans); font-size: 0.82rem; font-weight: 600; color: var(--dark);
  text-align: center; margin-top: 6px; padding: 10px; border-radius: 10px;
  background: rgba(255,199,45,0.08); border: 1px solid rgba(255,199,45,0.15);
  line-height: 1.4;
}
.bp-detail-ask em { font-style: italic; color: var(--purple-sec); }

/* COMBINED BLUEPRINT + DETAIL */
.bp-combined { display: flex; gap: 24px; align-items: flex-start; justify-content: center; width: 100%; }
.bp-detail { flex: 1; min-width: 260px; max-width: 340px; }
.bp-detail-panel { display: none; flex-direction: column; gap: 10px; }
.bp-detail-panel.active { display: flex; }
.bp-detail-title { font-family: var(--display); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
.bp-detail-cards { display: flex; flex-direction: column; gap: 8px; }
.bp-detail-card {
  background: #fff; border-radius: 12px; padding: 14px 16px; box-shadow: 0 1px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.bp-detail-card:hover { transform: translateY(-2px); box-shadow: 0 3px 12px rgba(0,0,0,0.08); }
.bp-detail-name { font-family: var(--sans); font-weight: 700; font-size: 0.85rem; color: var(--dark); margin-bottom: 2px; }
.bp-detail-price { font-family: var(--display); font-size: 1.4rem; line-height: 1.1; }
.bp-detail-price span { font-family: var(--sans); font-size: 0.7rem; font-weight: 400; opacity: 0.5; }
.bp-detail-desc { font-family: var(--sans); font-size: 0.72rem; color: #888; margin-top: 4px; line-height: 1.4; }
.bp-detail-cta {
  display: inline-block; text-align: center; margin-top: 8px; padding: 10px 20px;
  font-family: var(--sans); font-size: 0.8rem; font-weight: 700; border-radius: 10px;
  background: var(--dark); color: #fff; text-decoration: none; transition: all 0.25s ease;
  letter-spacing: 0.02em;
}
.bp-detail-cta:hover { background: var(--dark-mid); transform: translateY(-2px); }
.bp-zone { cursor: pointer; }

/* SLIDE 6 — PRICING REVEAL */
.pricing-runway { display: flex; flex-wrap: wrap; gap: 16px; align-items: stretch; min-height: 260px; }
.tier-panel {
  flex: 0; min-width: 0; max-width: 0; opacity: 0; overflow: hidden; border-radius: 20px;
  padding: 0; display: flex; flex-direction: column; gap: 16px;
  will-change: flex, max-width, opacity;
  transition: flex 0.6s var(--ease-out-expo), max-width 0.6s var(--ease-out-expo),
              opacity 0.5s ease 0.15s, padding 0.4s ease;
}
.tier-panel.tier-visible { flex: 1 1 calc(50% - 10px); min-width: 280px; max-width: 100%; opacity: 1; padding: 24px; }
.tier-panel--premium { background: linear-gradient(135deg, #3d1275, #2c0b5a); color: #fff; }
.tier-panel--fullpage { background: linear-gradient(135deg, #fff8e1, #fff3cd); color: var(--body); border: 1px solid rgba(255,199,45,0.25); }
.tier-panel--standard { background: linear-gradient(135deg, #e8f4fd, #d1e9f8); color: var(--body); border: 1px solid rgba(94,168,255,0.2); }
.tier-label { font-family: var(--display); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 4px; }
.tier-panel--premium .tier-label { color: rgba(255,247,241,0.5); }
.tier-panel--fullpage .tier-label { color: var(--purple-sec); }
.tier-panel--standard .tier-label { color: var(--blue); }
.tier-cards { display: flex; gap: 14px; flex: 1; }
.tier-card {
  flex: 1; border-radius: 14px; padding: 16px 14px; text-align: center; display: flex; flex-direction: column; justify-content: center;
}
.tier-panel--premium .tier-card { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); }
.tier-panel--fullpage .tier-card { background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.tier-panel--standard .tier-card { background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.tier-card-name { font-family: var(--display); font-size: 0.9rem; margin-bottom: 4px; }
.tier-panel--premium .tier-card-name { color: #fff; }
.tier-card-price { font-family: var(--display); font-size: 1.6rem; line-height: 1; margin: 6px 0; }
.tier-panel--premium .tier-card-price { color: var(--gold); }
.tier-panel--fullpage .tier-card-price { color: var(--purple-sec); }
.tier-panel--standard .tier-card-price { color: var(--blue); }
.tier-card-price span { font-size: 0.85rem; font-family: var(--sans); font-weight: 500; opacity: 0.7; }
.tier-card-desc { font-size: 0.8rem; line-height: 1.45; margin-top: 6px; }
.tier-panel--premium .tier-card-desc { color: rgba(255,247,241,0.6); }
.tier-panel--fullpage .tier-card-desc, .tier-panel--standard .tier-card-desc { color: #888; }
.tier-term-badge { display: inline-block; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 3px 10px; border-radius: 20px; margin-top: 8px; }
.tier-panel--premium .tier-term-badge { background: rgba(255,199,45,0.15); color: var(--gold); }
.tier-panel--fullpage .tier-term-badge { background: rgba(110,38,142,0.08); color: var(--purple-sec); }
.tier-panel--standard .tier-term-badge { background: rgba(94,168,255,0.1); color: var(--blue); }

.tier-skip {
  display: inline-block; align-self: center; margin-top: auto; padding: 8px 20px; border-radius: 30px;
  font-family: var(--sans); font-size: 0.8rem; font-weight: 600; text-decoration: none;
  transition: transform 0.3s var(--spring), background 0.3s ease;
}
.tier-panel--premium .tier-skip { color: var(--gold); background: rgba(255,199,45,0.12); }
.tier-panel--premium .tier-skip:hover { background: rgba(255,199,45,0.22); transform: translateY(-2px); }
.tier-panel--fullpage .tier-skip { color: var(--purple-sec); background: rgba(110,38,142,0.08); }
.tier-panel--fullpage .tier-skip:hover { background: rgba(110,38,142,0.14); transform: translateY(-2px); }
.tier-panel--standard .tier-skip { color: var(--blue); background: rgba(94,168,255,0.1); }
.tier-panel--standard .tier-skip:hover { background: rgba(94,168,255,0.18); transform: translateY(-2px); }
.tier-panel--entry { background: linear-gradient(135deg, #e8f8f0, #d1f0e3); color: var(--body); border: 1px solid rgba(18,214,160,0.2); }
.tier-panel--entry .tier-label { color: var(--teal); }
.tier-panel--entry .tier-card { background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.tier-panel--entry .tier-card-price { color: var(--teal); }
.tier-panel--entry .tier-card-desc { color: #888; }
.tier-panel--entry .tier-term-badge { background: rgba(18,214,160,0.1); color: var(--teal); }
.tier-panel--entry .tier-skip { color: var(--teal); background: rgba(18,214,160,0.1); }
.tier-panel--entry .tier-skip:hover { background: rgba(18,214,160,0.18); transform: translateY(-2px); }

#tierNextBtn {
  display: inline-block; margin: 16px auto 0; padding: 12px 32px; border: none; border-radius: 40px; cursor: pointer;
  font-family: var(--sans); font-size: 0.95rem; font-weight: 600; color: var(--dark);
  background: linear-gradient(135deg, var(--gold), var(--coral)); box-shadow: 0 4px 16px rgba(255,107,107,0.2);
  transition: transform 0.3s var(--spring), box-shadow 0.3s ease;
}
#tierNextBtn:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 6px 24px rgba(255,107,107,0.3); }

.pricing-term-note { text-align: center; font-size: 0.82rem; color: #999; margin-top: 8px; line-height: 1.5; }
.pricing-term-note strong { color: var(--dark); }

/* PRICING SUMMARY GRID */
#tierSummary {
  opacity: 0; max-height: 0; overflow: hidden; transition: opacity 0.6s ease, max-height 0.6s var(--ease-out-expo); margin-top: 0;
}
#tierSummary.summary-visible { opacity: 1; max-height: 500px; margin-top: 20px; }
#pricing { min-height: 100vh; height: auto; max-height: none; overflow: visible; scroll-snap-align: start; }
#pricing .slide-inner { height: auto; min-height: 100vh; padding-bottom: 48px; }
.rate-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
.rate-table th { background: var(--dark); color: #fff; padding: 10px 14px; font-weight: 600; text-align: center; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.06em; }
.rate-table td { padding: 10px 14px; text-align: center; border-bottom: 1px solid rgba(0,0,0,0.05); }
.rate-table td:first-child { text-align: left; font-weight: 600; color: var(--dark); }
.rate-table tr:last-child td { border-bottom: none; }
.rate-table tbody tr:nth-child(odd) { background: rgba(255,247,241,0.5); }
.rate-table .popular-col { background: rgba(255,199,45,0.06); }
.rate-table .popular-header { background: var(--gold); color: var(--dark); }
.rate-table .story-badge { display: inline-block; font-size: 0.6rem; background: var(--teal); color: #fff; padding: 1px 6px; border-radius: 8px; margin-left: 4px; vertical-align: middle; }

/* SLIDE 7 — NEXT STEPS */
.s8-diagonal {
  position: absolute; top: -10%; left: -5%; width: 110%; height: 120%;
  background: linear-gradient(165deg, rgba(255,107,107,0.04) 0%, transparent 40%, rgba(18,214,160,0.03) 100%);
  pointer-events: none; z-index: 0;
}
.s8-title { font-size: clamp(2rem, 3.5vw, 3rem); color: #fff; line-height: 1.1; }
.s8-rainbow { position: absolute; bottom: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #12D6A0, #FFC72D, #FF6B6B, #5EA8FF); }

.decision-accordion { display: flex; flex-direction: column; gap: 0; margin-top: 24px; }
.decision-step {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px;
  margin-bottom: 8px; overflow: hidden; transition: all 0.4s ease;
}
.decision-step-header {
  display: flex; align-items: center; gap: 14px; padding: 16px 22px; cursor: pointer;
  user-select: none; transition: background 0.3s ease;
}
.decision-step-header:hover { background: rgba(255,255,255,0.04); }
.decision-step-num {
  flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center; font-family: var(--display); font-size: 0.85rem; color: var(--gold);
  transition: background 0.3s ease, color 0.3s ease;
}
.decision-step.open .decision-step-num { background: var(--gold); color: var(--dark); }
.decision-step-title { font-family: var(--display); font-size: 1rem; color: #fff; flex: 1; }
.decision-step-arrow { width: 20px; height: 20px; transition: transform 0.3s ease; color: rgba(255,247,241,0.4); }
.decision-step.open .decision-step-arrow { transform: rotate(180deg); color: var(--gold); }
.decision-step-body {
  max-height: 0; overflow: hidden; transition: max-height 0.5s ease, padding 0.3s ease;
  padding: 0 22px; color: rgba(255,247,241,0.7); font-size: 0.95rem; line-height: 1.6;
}
.decision-step.open .decision-step-body { max-height: 200px; padding: 0 22px 18px; }

.cta-links { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 20px; }
.s10-cta {
  display: inline-block; padding: 14px 36px; border-radius: 60px; font-family: var(--display); font-size: 1rem;
  color: var(--dark); background: linear-gradient(135deg, var(--gold), var(--coral)); text-decoration: none;
  box-shadow: 0 8px 30px rgba(255,107,107,0.3); transition: transform 0.3s var(--spring), box-shadow 0.3s ease;
}
.s10-cta:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 12px 40px rgba(255,107,107,0.4); }
.s10-cta--secondary {
  background: rgba(255,255,255,0.08); color: #fff; border: 1px solid rgba(255,255,255,0.2); box-shadow: none;
}
.s10-cta--secondary:hover { background: rgba(255,255,255,0.14); transform: translateY(-3px) scale(1.03); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.cta-hidden { opacity: 0; max-height: 0; overflow: hidden; transition: opacity 0.6s ease, max-height 0.5s ease; pointer-events: none; }
.cta-hidden.cta-visible { opacity: 1; max-height: 200px; pointer-events: auto; }

.s10-contact { text-align: center; font-size: 0.85rem; color: rgba(255,247,241,0.5); margin-top: 10px; }


/* PRESENTER MODE — toggle with P key */
.presenter-bar {
  display: none; position: fixed; bottom: 0; left: 0; width: 100%;
  background: rgba(44,11,90,0.95); color: rgba(255,247,241,0.9);
  font-family: var(--sans); font-size: 0.82rem; line-height: 1.5;
  padding: 10px 24px; z-index: 9999; backdrop-filter: blur(10px);
  border-top: 2px solid var(--gold); transition: opacity 0.3s ease;
}
.presenter-bar.active { display: block; }
.presenter-bar strong { color: var(--gold); }

/* PORTRAIT WARNING */
#portrait-warning {
  display: none; position: fixed; inset: 0; z-index: 10000; background: var(--dark);
  flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;
}
.pw-title { font-family: var(--display); font-size: 1.4rem; color: #fff; margin-bottom: 12px; }
.pw-body { font-size: 1rem; color: rgba(255,247,241,0.6); max-width: 280px; line-height: 1.6; }
@media (max-width: 768px) and (orientation: portrait) { #portrait-warning { display: flex; } }

/* RESPONSIVE */
@media (max-width: 900px) {
  .slide { padding: 24px 28px; }
  .reasons-grid, .partner-features, .s4-context { grid-template-columns: 1fr; }
  .s4-chart { flex-wrap: wrap; }
  .stat-row { flex-direction: column; align-items: center; }
  .cover-pillars { flex-direction: column; gap: 16px; }
  .dot-nav { display: none; }
  .pricing-runway { flex-direction: column; }
  .tier-panel.tier-visible { max-width: 100%; }
  .design-callout { flex-direction: column; align-items: center; }
  .rate-table { font-size: 0.75rem; }
}
`,

  slidesHtml: `
<!-- ============================================================
     SLIDE 1: COVER
     ============================================================ -->
<section class="slide slide--dark" id="cover" data-slide-index="0" data-theme="dark">
  <div class="orb" style="width:500px;height:500px;top:-150px;right:-100px;background:var(--coral);opacity:0.08;animation:floatDrift 12s ease-in-out infinite;"></div>
  <div class="orb" style="width:350px;height:350px;bottom:-100px;left:-80px;background:var(--teal);opacity:0.06;animation:floatDrift 15s ease-in-out infinite 3s;"></div>

  <div class="slide-inner">
    <div class="cover-gradient-strip" data-reveal="fade" data-delay="0"></div>

    <div class="cover-logos" data-reveal="up" data-delay="100">
      <span class="uy-mark">UY!</span>
      <span class="partner-logotype" style="margin-left:12px;">A Magazine for the Disability Community</span>
    </div>

    <h1 class="cover-title">
      <span class="line-1" data-reveal="up" data-delay="200">Partnership</span>
      <span class="line-2" data-reveal="up" data-delay="300">Conversation</span>
      <span class="line-cross" data-reveal="fade" data-delay="500">- - - Uniquely You! Raleigh Metro - - -</span>
    </h1>

    <p class="cover-subtitle">
      <span class="text-reveal-mask">
        <span class="text-reveal-inner">Celebrating the disability community through stories, connection, and local resources. Celebrate &middot; Connect &middot; Impact</span>
      </span>
    </p>

    <div class="cover-pillars" data-reveal="up" data-delay="900">
      <div class="cover-pillar">
        <div class="cover-pillar-icon cover-pillar-icon--coral">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--coral)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
        </div>
        <span class="cover-pillar-label cover-pillar-label--coral">Celebrate</span>
      </div>
      <div class="cover-pillar">
        <div class="cover-pillar-icon cover-pillar-icon--teal">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </div>
        <span class="cover-pillar-label cover-pillar-label--teal">Connect</span>
      </div>
      <div class="cover-pillar">
        <div class="cover-pillar-icon cover-pillar-icon--gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
        </div>
        <span class="cover-pillar-label cover-pillar-label--gold">Impact</span>
      </div>
    </div>

    <div class="cover-footer" data-reveal="fade" data-delay="1100">
      <span>Uniquely You! Raleigh Metro</span>
      <span>Will Sigmon, Area Director</span>
    </div>
  </div>
</section>


<!-- ============================================================
     SLIDE 2: THE OPPORTUNITY — ABOUT UY
     ============================================================ -->
<section class="slide slide--cream" id="opportunity" data-slide-index="1" data-theme="light">
  <div class="slide-inner" style="align-items:center; text-align:center;">
    <div class="section-eyebrow" data-reveal="up" data-delay="0">The Opportunity</div>

    <p class="key-phrase" data-reveal="up" data-delay="100">
      We help businesses reach their ideal clients while <em>Celebrating</em> the disability community, <em>Connecting</em> families, and having an <em>Impact</em> by providing key resources.
    </p>

    <div class="stat-row" data-reveal="up" data-delay="250">
      <div class="stat-card">
        <div class="stat-card-number" style="color:var(--coral);">1 in 4</div>
        <div class="stat-card-label">U.S. adults live with some type of disability</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-number" style="color:var(--teal);">1 in 31</div>
        <div class="stat-card-label">Children have autism</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-number" style="color:var(--gold);">8+</div>
        <div class="stat-card-label">States and growing nationwide</div>
      </div>
    </div>

    <p class="origin-story" data-reveal="fade" data-delay="400">
      Uniquely You was created about five years ago when one of our publishers, inspired by her son with autism, brought the idea to N2's founders. Because we believe in magazines written by the community, for the community, she received approval and started the first publication in Indiana. Every reader opts in to receive the magazine &mdash; you simply can't buy a list to reach this audience.
    </p>
  </div>
</section>


<!-- ============================================================
     SLIDE 3: WHY IT WORKS — DIFFERENT APPROACH + RIGHT CONTENT
     ============================================================ -->
<section class="slide slide--cream" id="publication" data-slide-index="2" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0">Why It Works</div>
    <h2 class="section-title" data-reveal="up" data-delay="100">Not better. Just different.</h2>

    <div class="reasons-grid" data-reveal="up" data-delay="200">
      <div class="reason-card reason-card--coral">
        <div class="reason-number">Reason #1</div>
        <div class="reason-title">A Different Approach to Reach Your Audience</div>
        <div class="reason-body">Marketing only works when it's seen. Marketing is only valuable when it's seen by the right people. Different sources reach different people in different ways.</div>
        <div class="reason-highlight reason-highlight--coral">Our product sits on countertops and coffee tables, seen by the right eyes &mdash; a hard-to-reach community that actually reads it.</div>
      </div>
      <div class="reason-card reason-card--teal">
        <div class="reason-number">Reason #2</div>
        <div class="reason-title">The Right Content</div>
        <div class="reason-body">Reader-generated content, similar to social media. Inspiring articles and key resources our readers care about. Your name is seen every month by the people you want word-of-mouth referrals from.</div>
        <div class="reason-highlight reason-highlight--teal">We are like the Facebook of print, but trusted. Our content comes directly from our readers, so our partners know it's getting read.</div>
      </div>
    </div>


  </div>
</section>


<!-- ============================================================
     SLIDE 4: CREDIBILITY — N2 COMPANY
     ============================================================ -->
<section class="slide slide--cream" id="credibility" data-slide-index="3" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0">Credibility</div>
    <h2 class="section-title" data-reveal="up" data-delay="100">Part of a magazine company that's been around more than 20 years</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="200">Two businessmen, frustrated that their direct mail was being thrown out, started creating magazines by the community, for the community &mdash; and it worked.</p>

    <div class="s4-chart" id="s4Chart">
      <div class="s4-bar-col" data-reveal="up" data-delay="300">
        <div class="s4-bar-value" style="color:var(--coral);">800+</div>
        <div class="s4-bar-track" style="height:60px;background:rgba(255,107,107,0.08);">
          <div class="s4-bar-fill" style="background:linear-gradient(to top,var(--coral),rgba(255,107,107,0.9));height:60px;"></div>
        </div>
        <div class="s4-bar-label">Publications in print nationwide</div>
      </div>
      <div class="s4-bar-col" data-reveal="up" data-delay="450">
        <div class="s4-bar-value" style="color:var(--teal);">$163M</div>
        <div class="s4-bar-track" style="height:80px;background:rgba(18,214,160,0.08);">
          <div class="s4-bar-fill" style="background:linear-gradient(to top,var(--teal),rgba(18,214,160,0.9));height:80px;"></div>
        </div>
        <div class="s4-bar-label">Annual revenue</div>
      </div>
      <div class="s4-bar-col" data-reveal="up" data-delay="600">
        <div class="s4-bar-value" style="color:var(--gold);">$30M+</div>
        <div class="s4-bar-track" style="height:100px;background:rgba(255,199,45,0.08);">
          <div class="s4-bar-fill" style="background:linear-gradient(to top,var(--gold),rgba(255,199,45,0.9));height:100px;"></div>
        </div>
        <div class="s4-bar-label">N2GIVES — donated to fight human trafficking</div>
      </div>
      <div class="s4-bar-col" data-reveal="up" data-delay="750">
        <div class="s4-bar-value" style="color:var(--purple-sec);">30K+</div>
        <div class="s4-bar-track" style="height:120px;background:rgba(110,38,142,0.06);">
          <div class="s4-bar-fill" style="background:linear-gradient(to top,var(--purple-sec),rgba(110,38,142,0.85));height:120px;"></div>
        </div>
        <div class="s4-bar-label">Local businesses we help reach their ideal clients</div>
      </div>
    </div>

    <div class="s4-context">
      <div class="s4-context-card s4-context-card--quote" data-reveal="left" data-delay="900">
        <h3>Inc. Magazine recognized</h3>
        <p>Named one of the fastest-growing private companies in the U.S. for eight years in a row. We've seen success in every economic climate because we solve a real problem businesses have.</p>
      </div>
      <div class="s4-context-card s4-context-card--aside" data-reveal="right" data-delay="1000">
        <h3>Niche publications, selective audiences</h3>
        <p>We produce niche publications for selective, opt-in audiences &mdash; affluent neighborhood publications, REALTOR publications, new mover publications, and publications for families with disabilities.</p>
      </div>
    </div>
  </div>
</section>


<!-- ============================================================
     SLIDE 5: PARTNERSHIP OPTIONS
     ============================================================ -->
<section class="slide slide--cream" id="partnership" data-slide-index="4" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0">Partnership Options</div>
    <h2 class="section-title" data-reveal="up" data-delay="100">What's included</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="150">This is relationship marketing. Many partners stay for 36+ issues because real relationships take time to build.</p>

    <div class="partner-features" data-reveal="up" data-delay="250">
      <div class="partner-feature">
        <div class="partner-feature-icon" style="background:rgba(255,107,107,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--coral)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/></svg>
        </div>
        <h3>Print + Digital Ad</h3>
        <p>Professionally designed ad in every issue, plus the digital edition with clickable links.</p>
      </div>
      <div class="partner-feature">
        <div class="partner-feature-icon" style="background:rgba(18,214,160,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
        </div>
        <h3>Featured Articles</h3>
        <p>The front cover is for the community &mdash; your story appears inside, where readers are already engaged. Included at 24+ month terms.</p>
      </div>
      <div class="partner-feature">
        <div class="partner-feature-icon" style="background:rgba(255,199,45,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </div>
        <h3>Community Connection</h3>
        <p>Readers opt in &mdash; you can't buy a list to reach this audience. Build trust as a community partner through word-of-mouth referrals.</p>
      </div>
    </div>

    <div class="design-callout" data-reveal="up" data-delay="400">
      <div class="design-option">
        <h4>Use your own designer</h4>
        <p>Provide your own ad creative. One-time fee to change your ad each month.</p>
        <div class="price-tag">$199</div>
      </div>
      <div class="design-option design-option--highlight">
        <h4>We design it for you</h4>
        <p>Our team handles everything. You review proofs before print. Keep all designs.</p>
        <div class="price-tag">$499</div>
      </div>
    </div>

    <div style="text-align:center;margin-top:16px;" data-reveal="up" data-delay="500">
      <a class="pub-preview-link" href="https://pubmanager.n2pub.com/flipbooks/publications/uniquely-you-mideastern-ohio-oh/current" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        Preview a recent issue
      </a>
    </div>
  </div>
</section>



<!-- ============================================================
     SLIDE 5: INVESTMENT — BLUEPRINT + PRICING MODAL
     ============================================================ -->
<section class="slide slide--cream" id="pricing" data-slide-index="5" data-theme="light">
  <div class="orb" style="width:360px;height:360px;top:-120px;right:-120px;background:var(--gold);opacity:0.1;"></div>
  <div class="orb" style="width:300px;height:300px;bottom:-100px;left:-100px;background:var(--teal);opacity:0.06;"></div>

  <div class="slide-inner" style="justify-content:center;">
    <div class="section-eyebrow" data-reveal="up" data-delay="50">Investment</div>
    <h2 class="section-title" data-reveal="up" data-delay="100" style="max-width:none;">36-Month Partnership &mdash; Our Best Rate</h2>
    <p class="pricing-term-note" data-reveal="up" data-delay="140">Billed monthly. No upfront lump sum. 24-month terms include a featured story. 36-month terms include two stories plus a two-page sponsor spotlight.</p>

    <div class="bp-tab-row" data-reveal="up" data-delay="180">
      <button class="bp-tab active" data-bp="premium">Premium</button>
      <button class="bp-tab bp-hidden" data-bp="fullpage">Full Page</button>
      <button class="bp-tab bp-hidden" data-bp="popular">Popular</button>
      <button class="bp-tab bp-hidden" data-bp="entry">Entry</button>
          <button class="bp-dropdown-btn" id="bpDropdown">Other placement options &rarr;</button>
    </div>

    <div class="bp-combined" data-reveal="up" data-delay="220">

      <div class="blueprint-mag">
        <span class="bp-spine">&laquo; spine &raquo;</span>

        <!-- PREMIUM VIEW -->
        <div class="blueprint-spread bp-view active" id="bpPremium">
          <div class="bp-page" style="position:relative;">
            <div class="bp-zone bp-zone--spread" style="left:2%;top:4%;width:196%;height:92%;z-index:3;" data-modal="modalPremium">
              <div class="bp-zone-label"><span>2-Page Spread</span><span class="bp-zone-price">$795/mo</span></div>
            </div>
            <span class="bp-page-label">Left Page</span>
          </div>
          <div class="bp-page" style="position:relative;"><span class="bp-page-label">Right Page</span></div>
        </div>

        <div class="blueprint-spread bp-view" id="bpBackcover" style="grid-template-columns:1fr;">
          <div class="bp-page" style="position:relative;">
            <div class="bp-zone bp-zone--backcover" data-modal="modalPremium">
              <div class="bp-zone-label"><span>Back Cover</span><span class="bp-zone-price">$765/mo</span></div>
            </div>
            <span class="bp-page-label">Outside Back Cover</span>
          </div>
        </div>

        <!-- FULL PAGE VIEW -->
        <div class="blueprint-spread bp-view" id="bpFullpage">
          <div class="bp-page" style="position:relative;">
            <div class="bp-zone bp-zone--inside" data-modal="modalFullpage">
              <div class="bp-zone-label"><span>Inside Cover / Pg 2-3</span><span class="bp-zone-price">$675/mo</span></div>
            </div>
            <span class="bp-page-label">Premium Position</span>
          </div>
          <div class="bp-page" style="position:relative;">
            <div class="bp-zone bp-zone--fullpage" data-modal="modalFullpage">
              <div class="bp-zone-label"><span>Full Page Standard</span><span class="bp-zone-price">$575/mo</span></div>
            </div>
            <span class="bp-page-label">Body Placement</span>
          </div>
        </div>

        <!-- POPULAR VIEW -->
        <div class="blueprint-spread bp-view" id="bpPopular">
          <div class="bp-page" style="position:relative;">
            <div class="bp-zone bp-zone--half" data-modal="modalPopular">
              <div class="bp-zone-label"><span>1/2 Page</span><span class="bp-zone-price">$330/mo</span></div>
            </div>
            <div style="position:absolute;top:8%;left:8%;right:8%;height:40%;border:1px dashed rgba(44,11,90,0.08);border-radius:3px;display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:0.55rem;color:rgba(44,11,90,0.2);text-transform:uppercase;letter-spacing:0.1em;">Editorial Content</div>
            <span class="bp-page-label">Vertical or Horizontal</span>
          </div>
          <div class="bp-page" style="position:relative;">
            <div class="bp-zone bp-zone--quarter-sponsor" data-modal="modalPopular">
              <div class="bp-zone-label" style="font-size:0.55rem;"><span>1/4-Page Sponsorship</span><span class="bp-zone-price">$330/mo</span></div>
            </div>
            <div style="position:absolute;top:4%;right:4%;width:48%;height:92%;border:1px dashed rgba(44,11,90,0.08);border-radius:3px;display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:0.55rem;color:rgba(44,11,90,0.2);text-transform:uppercase;letter-spacing:0.1em;">Issue Preview</div>
            <span class="bp-page-label">Near Contents Page</span>
          </div>
        </div>

        <!-- ENTRY VIEW -->
        <div class="blueprint-spread bp-view" id="bpEntry">
          <div class="bp-page" style="position:relative;">
            <div class="bp-zone bp-zone--third" data-modal="modalEntry">
              <div class="bp-zone-label"><span>1/3 Page</span><span class="bp-zone-price">$255/mo</span></div>
            </div>
            <div style="position:absolute;top:6%;left:6%;right:6%;height:58%;border:1px dashed rgba(44,11,90,0.08);border-radius:3px;display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:0.55rem;color:rgba(44,11,90,0.2);text-transform:uppercase;letter-spacing:0.1em;">Editorial Content</div>
            <span class="bp-page-label">Full-Width Ad</span>
          </div>
          <div class="bp-page" style="position:relative;">
            <div class="bp-zone bp-zone--quarter" data-modal="modalEntry">
              <div class="bp-zone-label"><span>1/4 Page</span><span class="bp-zone-price">$190/mo</span></div>
            </div>
            <div style="position:absolute;top:6%;left:6%;right:6%;height:62%;border:1px dashed rgba(44,11,90,0.08);border-radius:3px;display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:0.55rem;color:rgba(44,11,90,0.2);text-transform:uppercase;letter-spacing:0.1em;">Editorial Content</div>
            <span class="bp-page-label">Body Placement</span>
          </div>
        </div>
      </div>

      <!-- DETAIL PANEL (right side, swaps with tabs) -->
      <div class="bp-detail" id="bpDetail">
        <div class="bp-detail-panel active" id="modalPremium">
          <div class="bp-detail-title" style="color:var(--coral);">Premium Placement</div>
          <div class="bp-detail-cards">
            <div class="bp-detail-card">
              <div class="bp-detail-name">2-Page Spread</div>
              <div class="bp-detail-price" style="color:var(--gold);">$795<span>/mo</span></div>
              <div class="bp-detail-desc">Maximum impact &mdash; grab attention with large images or before/after showcases</div>
            </div>
            <div class="bp-detail-card">
              <div class="bp-detail-name">Back Cover</div>
              <div class="bp-detail-price" style="color:var(--gold);">$765<span>/mo</span></div>
              <div class="bp-detail-desc">Most prominent real estate &mdash; first thing a reader sees at the mailbox</div>
            </div>
          </div>
          <div class="bp-detail-ask"><em>"Do you like the idea of being on one of these premium options?"</em></div>
          <a class="bp-detail-cta" href="#start">Ready? Let\&#39;s go &rarr;</a>
        </div>
        <div class="bp-detail-panel" id="modalFullpage">
          <div class="bp-detail-title" style="color:var(--purple-sec);">Full Page Options</div>
          <div class="bp-detail-cards">
            <div class="bp-detail-card">
              <div class="bp-detail-name">Inside Cover / Page 2-3</div>
              <div class="bp-detail-price" style="color:var(--purple-sec);">$675<span>/mo</span></div>
              <div class="bp-detail-desc">Premium full-page position &mdash; inside front cover or early pages</div>
            </div>
            <div class="bp-detail-card">
              <div class="bp-detail-name">Full Page Standard</div>
              <div class="bp-detail-price" style="color:var(--purple-sec);">$575<span>/mo</span></div>
              <div class="bp-detail-desc">Full-page body ad &mdash; maximum impact at a standard position</div>
            </div>
          </div>
          <div class="bp-detail-ask"><em>"How does something like this sound?"</em></div>
          <a class="bp-detail-cta" href="#start">Ready? Let\&#39;s go &rarr;</a>
        </div>
        <div class="bp-detail-panel" id="modalPopular">
          <div class="bp-detail-title" style="color:var(--blue);">Our Most Popular</div>
          <div class="bp-detail-cards">
            <div class="bp-detail-card">
              <div class="bp-detail-name">1/2-Page Standard</div>
              <div class="bp-detail-price" style="color:var(--blue);">$330<span>/mo</span></div>
              <div class="bp-detail-desc">Available vertical or horizontal &mdash; versatile and hard to miss</div>
            </div>
            <div class="bp-detail-card">
              <div class="bp-detail-name">1/4-Page Sponsorship</div>
              <div class="bp-detail-price" style="color:var(--blue);">$330<span>/mo</span></div>
              <div class="bp-detail-desc">Prominent, fixed placement &mdash; our most popular option</div>
            </div>
          </div>
          <div class="bp-detail-ask"><em>"Do you like the half page or the sponsorship better?"</em></div>
          <a class="bp-detail-cta" href="#start">Ready? Let\&#39;s go &rarr;</a>
        </div>
        <div class="bp-detail-panel" id="modalEntry">
          <div class="bp-detail-title" style="color:var(--teal);">Entry Options</div>
          <div class="bp-detail-cards">
            <div class="bp-detail-card">
              <div class="bp-detail-name">1/3 Page</div>
              <div class="bp-detail-price" style="color:var(--teal);">$255<span>/mo</span></div>
              <div class="bp-detail-desc">Full-width ad &mdash; sharp, professional look that stands out</div>
            </div>
            <div class="bp-detail-card">
              <div class="bp-detail-name">1/4 Page</div>
              <div class="bp-detail-price" style="color:var(--teal);">$190<span>/mo</span></div>
              <div class="bp-detail-desc">Our entry point &mdash; a great way to get started and build community presence</div>
            </div>
          </div>
          <div class="bp-detail-ask"><em>"Which one do you feel most comfortable starting with?"</em></div>
          <a class="bp-detail-cta" href="#start">Ready? Let\&#39;s go &rarr;</a>
        </div>
      </div>

    </div>

    <div style="text-align:center;margin-top:12px;" data-reveal="up" data-delay="300">
      <button id="bpShowRates" style="font-family:var(--sans);font-size:0.8rem;font-weight:700;padding:10px 28px;border-radius:12px;border:none;background:var(--coral);color:#fff;cursor:pointer;transition:all 0.25s ease;letter-spacing:0.02em;">See all rates &rarr;</button>
    </div>

    <div id="tierSummary">
      <table class="rate-table">
        <thead>
          <tr>
            <th>Ad Size</th>
            <th>12 months</th>
            <th>24 months <span class="story-badge">+1 story</span></th>
            <th class="popular-header">36 months <span class="story-badge">+2 stories</span></th>
          </tr>
        </thead>
        <tbody>
          <tr><td>2-Page Spread</td><td>$995</td><td>$895</td><td class="popular-col"><strong>$795</strong></td></tr>
          <tr><td>Back Cover</td><td>$955</td><td>$860</td><td class="popular-col"><strong>$765</strong></td></tr>
          <tr><td>Inside Cover / Pg 2-3</td><td>$845</td><td>$760</td><td class="popular-col"><strong>$675</strong></td></tr>
          <tr><td>Full Page Standard</td><td>$720</td><td>$645</td><td class="popular-col"><strong>$575</strong></td></tr>
          <tr><td>1/2-Page Standard</td><td>$415</td><td>$370</td><td class="popular-col"><strong>$330</strong></td></tr>
          <tr><td>1/4-Page Sponsorship</td><td>$415</td><td>$370</td><td class="popular-col"><strong>$330</strong></td></tr>
          <tr><td>1/3 Page</td><td>$320</td><td>$285</td><td class="popular-col"><strong>$255</strong></td></tr>
          <tr><td>1/4 Page</td><td>$240</td><td>$215</td><td class="popular-col"><strong>$190</strong></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ============================================================
     SLIDE 7: NEXT STEPS — PROGRESSIVE REVEAL
     ============================================================ -->
<section class="slide slide--dark" id="start" data-slide-index="6" data-theme="dark">
  <div class="s8-diagonal"></div>
  <div class="orb" style="width:400px;height:400px;top:-140px;left:-120px;background:var(--gold);opacity:0.06;"></div>
  <div class="orb" style="width:320px;height:320px;bottom:-100px;right:-80px;background:var(--coral);opacity:0.05;"></div>

  <div class="slide-inner" style="display:flex;flex-direction:column;justify-content:center;">
    <div class="section-eyebrow" data-reveal="up" data-delay="50" style="color:rgba(255,247,241,0.58);">Next steps</div>
    <h2 class="s8-title" data-reveal="up" data-delay="100" style="margin-bottom:8px;">Here's how we move forward</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="180" style="color:rgba(255,247,241,0.74);max-width:900px;margin-bottom:16px;">Walk through each step at your pace. Click to open.</p>

    <div class="decision-accordion" data-reveal="up" data-delay="260">
      <div class="decision-step" id="step1">
        <div class="decision-step-header" onclick="toggleStep('step1')">
          <span class="decision-step-num">1</span>
          <span class="decision-step-title">Pick your ad size and term</span>
          <svg class="decision-step-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="decision-step-body">
          1/4, 1/2, full page, 2-page spread, or back cover &mdash; paired with a 12, 24, or 36-month commitment. Longer terms unlock lower monthly rates and featured story bonuses. It's a simple decision either way &mdash; no budget committee needed.
        </div>
      </div>

      <div class="decision-step" id="step2">
        <div class="decision-step-header" onclick="toggleStep('step2')">
          <span class="decision-step-num">2</span>
          <span class="decision-step-title">Confirm billing contact</span>
          <svg class="decision-step-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="decision-step-body">
          Who handles billing? We'll set up monthly invoicing through our portal &mdash; credit card, ACH, e-check, or invoice. Whatever works for your organization.
        </div>
      </div>

      <div class="decision-step" id="step3">
        <div class="decision-step-header" onclick="toggleStep('step3')">
          <span class="decision-step-num">3</span>
          <span class="decision-step-title">Ad design + story angle</span>
          <svg class="decision-step-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="decision-step-body">
          Would you like us to take care of the ad design for you? We'll also plan your first feature story angle for 24+ month terms.
        </div>
      </div>

      <div class="decision-step" id="step4">
        <div class="decision-step-header" onclick="toggleStep('step4')">
          <span class="decision-step-num">4</span>
          <span class="decision-step-title">First issue + creative brief</span>
          <svg class="decision-step-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="decision-step-body">
          We'll confirm your start date and kick off the creative brief. Our design team handles everything &mdash; you review a proof before it goes to print.
        </div>
      </div>
    </div>

    <div class="cta-hidden" id="ctaReveal">
      <div class="cta-links">
        <a class="s10-cta" href="https://portal.n2pub.com/credit_card_capture" target="_blank" rel="noopener">Set Up Billing</a>
        <a class="s10-cta" href="https://portal.n2pub.com/agreement_builders" target="_blank" rel="noopener" style="background:linear-gradient(135deg, var(--teal), var(--blue));box-shadow:0 8px 30px rgba(18,214,160,0.3);">Build Agreement</a>
      </div>
      <div class="cta-links" style="margin-top:10px;">
        <a class="s10-cta s10-cta--secondary" href="https://pubmanager.n2pub.com/flipbooks/publications/uniquely-you-mideastern-ohio-oh/current" target="_blank" rel="noopener" style="font-size:0.85rem;padding:10px 24px;">Preview the publication</a>
      </div>
      <div style="text-align:center;margin-top:8px;font-size:0.8rem;color:rgba(255,247,241,0.4);">All links open securely via Compass Portal</div>
    </div>

    <div class="s10-contact" data-reveal="fade" data-delay="440">Will Sigmon &middot; Area Director &middot; will.sigmon@n2co.com</div>
  </div>

  <div class="s8-rainbow"></div>
</section>
`,

  extraScripts: `
    (function() {
      var notes = {
        0: '<strong>COVER</strong> &mdash; Set the tone. Keep it relaxed. <em>"I have a few slides that will give you a big-picture view of who we are and what we do. After that, I\\'ll walk you through one of our publications. If we think it\\'s a good fit, we\\'ll go over pricing and find something we\\'re both comfortable with today. If it\\'s not a fit, no big deal. Sound good?"</em>',
        1: '<strong>THE OPPORTUNITY</strong> &mdash; Lead with mission, not product. Hit the three pillars: <em>Celebrating</em> the disability community, <em>Connecting</em> families, and having an <em>Impact</em> through key resources. Pause on the stats and let them react naturally. Ask what drew them to serving this community.',
        2: '<strong>WHY IT WORKS</strong> &mdash; Core phrase: <em>"Marketing only works when it\\'s seen &mdash; and only valuable when it\\'s seen by the right people."</em> Let this land, then ask: <em>"Tell me about your current marketing &mdash; what\\'s working for you right now?"</em> Listen. Connect their answer to what makes UY different.',
        3: '<strong>CREDIBILITY</strong> &mdash; Reinforce that N2 has 800+ publications, $163M in revenue, and 20+ years of track record. Key phrase: <em>"Magazines written by the community, for the community."</em> Transition: <em>"Based on what you\\'ve seen so far, does this potentially make sense for your company?"</em> Gauge interest before moving on.',
        4: '<strong>PARTNERSHIP OPTIONS</strong> &mdash; Now walk through the publication. <em>"We would never put a business on the front cover &mdash; this audience deserves to shine."</em> Show the sponsor spotlight, featured stories, and ad placements. Emphasize that readers opt in &mdash; you can\\'t buy this audience. End with design options, then: <em>"Would you like us to take care of the ad design for you?"</em>',
        5: '<strong>INVESTMENT</strong> &mdash; Start at premium. Describe the two-page spread and back cover richly. <em>"Do you like the idea of being on one of these premium options?"</em> If no, click to reveal the next tier. Ask for the sale at EACH level before dropping down. Spend MORE time on premium, less on each subsequent tier. You\\'ll sell whatever you describe the most. Click the dropdown button to reveal options one at a time.',
        6: '<strong>NEXT STEPS</strong> &mdash; Once they say yes to a size, pivot smoothly &mdash; no re-asking, no hesitation. <em>"Great &mdash; you\\'ll land in our resource directory. What category fits best?"</em> Then ad design, then credit card: <em>"This just holds your reservation &mdash; nothing is charged until we\\'re ready to go."</em> Close with: <em>"You\\'re locked in. You\\'re ready to roll."</em>'
      };
      var bar = document.createElement('div');
      bar.className = 'presenter-bar';
      document.body.appendChild(bar);
      var on = false;
      var currentIdx = 0;
      function updateBar() { bar.innerHTML = notes[currentIdx] || ''; }
      document.addEventListener('keydown', function(e) {
        if (e.key === 'p' || e.key === 'P') {
          on = !on;
          bar.classList.toggle('active', on);
          if (on) updateBar();
        }
      });
      document.querySelectorAll('.slide').forEach(function(s) {
        new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              currentIdx = parseInt(entry.target.dataset.slideIndex);
              if (on) updateBar();
            }
          });
        }, { threshold: 0.5 }).observe(s);
      });
    })();

    (function() {
      var tabs = document.querySelectorAll('.bp-tab');
      var tierOrder = ['premium', 'fullpage', 'popular', 'entry'];
      var viewMap = { premium: 'bpPremium', fullpage: 'bpFullpage', popular: 'bpPopular', entry: 'bpEntry' };
      var modalMap = { premium: 'modalPremium', fullpage: 'modalFullpage', popular: 'modalPopular', entry: 'modalEntry' };
      var dropBtn = document.getElementById('bpDropdown');
      var rateBtn = document.getElementById('bpShowRates');
      var summary = document.getElementById('tierSummary');
      var revealIdx = 0;
      var btnLabels = ['Other placement options \u2192', 'More options \u2192', 'Entry options \u2192', 'See all rates \u2192'];

      function switchTo(key) {
        tabs.forEach(function(t) { t.classList.remove('active'); });
        document.querySelectorAll('.bp-tab[data-bp="' + key + '"]').forEach(function(t) { t.classList.add('active'); });
        document.querySelectorAll('.bp-view').forEach(function(v) { v.classList.remove('active'); });
        var v = document.getElementById(viewMap[key]);
        if (v) v.classList.add('active');
        document.querySelectorAll('.bp-detail-panel').forEach(function(p) { p.classList.remove('active'); });
        var m = document.getElementById(modalMap[key]);
        if (m) m.classList.add('active');
      }

      tabs.forEach(function(tab) {
        tab.addEventListener('click', function() { switchTo(tab.dataset.bp); });
      });

      document.querySelectorAll('.bp-zone[data-modal]').forEach(function(zone) {
        zone.addEventListener('click', function() {
          var mid = zone.dataset.modal;
          for (var k in modalMap) { if (modalMap[k] === mid) { switchTo(k); break; } }
        });
      });

      if (dropBtn) {
        dropBtn.addEventListener('click', function() {
          revealIdx++;
          if (revealIdx < tierOrder.length) {
            var nextKey = tierOrder[revealIdx];
            var nextTab = document.querySelector('.bp-tab[data-bp="' + nextKey + '"]');
            if (nextTab) { nextTab.classList.add('bp-revealed'); }
            switchTo(nextKey);
            dropBtn.textContent = btnLabels[revealIdx] || 'See all rates \u2192';
          } else {
            if (summary) summary.classList.toggle('summary-visible');
            dropBtn.style.display = 'none';
            if (rateBtn) rateBtn.style.display = '';
          }
        });
      }

      if (rateBtn && summary) {
        rateBtn.style.display = 'none';
        rateBtn.addEventListener('click', function() {
          summary.classList.toggle('summary-visible');
          rateBtn.textContent = summary.classList.contains('summary-visible') ? 'Hide rates' : 'See all rates \u2192';
        });
      }
    })();

  `,
};

export default data;