import type { DeckData } from "@/lib/deck/types";

const data: DeckData = {
  title: "Uniquely You! — Partnership Conversation",
  navClass: "dot-nav on-dark",
  navItems: [
    { href: "#cover", label: "Cover" },
    { href: "#opportunity", label: "Opportunity" },
    { href: "#publication", label: "Publication" },
    { href: "#credibility", label: "Credibility" },
    { href: "#partnership", label: "Partnership" },
    { href: "#pricing", label: "Pricing" },
    { href: "#start", label: "Next Steps" },
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
  position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 36px 64px;
}
.slide--dark { background: linear-gradient(135deg, #1a0640 0%, var(--dark) 40%, #3D1275 100%); color: #fff; }
.slide--cream { background: var(--cream); color: var(--body); }
.slide-inner {
  max-width: 1200px; width: 100%; height: 100%; position: relative; z-index: 2;
  display: flex; flex-direction: column; justify-content: center; gap: 14px;
}

.orb { position: absolute; border-radius: 50%; pointer-events: none; z-index: 1; filter: blur(80px); }

[data-reveal] { opacity: 0; will-change: opacity, transform; transition: opacity 0.7s ease, transform 0.8s var(--spring); }
[data-reveal="up"] { transform: translateY(40px); }
[data-reveal="down"] { transform: translateY(-40px); }
[data-reveal="left"] { transform: translateX(-40px); }
[data-reveal="right"] { transform: translateX(40px); }
[data-reveal="scale"] { transform: scale(0.85); }
[data-reveal="fade"] { transform: none; }
@keyframes forceReveal { to { opacity: 1; transform: none; } }
[data-reveal] { animation: forceReveal 0s 1s forwards; }
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
  letter-spacing: 0.02em; line-height: 1; box-shadow: 0 4px 20px rgba(255,107,107,0.35); position: relative;
}
.uy-mark::after { content: ''; position: absolute; inset: -3px; border-radius: 17px; background: linear-gradient(135deg, var(--coral), var(--gold)); z-index: -1; opacity: 0.5; }
.partner-logotype { font-family: var(--sans); font-size: 1.1rem; font-weight: 600; color: rgba(255,247,241,0.85); letter-spacing: 0.06em; text-transform: uppercase; }
.cover-title { font-size: clamp(2.8rem, 5.5vw, 4.8rem); line-height: 1.05; color: #fff; margin-bottom: 8px; }
.cover-title .line-1 { display: block; color: rgba(255,247,241,0.6); }
.cover-title .line-2 { display: block; background: linear-gradient(90deg, var(--teal), var(--gold)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.cover-title .line-cross { display: block; font-family: var(--sans); font-weight: 300; font-size: clamp(1rem, 2vw, 1.6rem); color: rgba(255,247,241,0.4); letter-spacing: 0.3em; text-transform: uppercase; margin: 8px 0; }
.text-reveal-mask { overflow: hidden; display: block; }
.text-reveal-inner { display: block; transform: translateY(110%); animation: textSlideUp 0.9s var(--ease-out-expo) 0.8s forwards; }
@keyframes textSlideUp { to { transform: translateY(0); } }
.cover-subtitle { font-size: clamp(1rem, 1.8vw, 1.2rem); color: rgba(255,247,241,0.7); max-width: 600px; line-height: 1.7; font-weight: 400; margin-bottom: 20px; }
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
.section-eyebrow { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--purple-sec); }
.section-title { font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--dark); max-width: 700px; line-height: 1.15; }
.section-subtitle { font-size: 1.05rem; color: #666; max-width: 640px; line-height: 1.6; }

/* SLIDE 2 — ABOUT US / OPPORTUNITY */
.key-phrase { font-family: var(--display); font-size: clamp(1.2rem, 2vw, 1.5rem); color: var(--dark); line-height: 1.35; max-width: 800px; text-align: center; margin: 0 auto 12px; }
.key-phrase em { color: var(--coral); font-style: normal; }
.stat-row { display: flex; gap: 32px; justify-content: center; flex-wrap: wrap; margin: 8px 0; }
.stat-card { background: #fff; border-radius: 16px; padding: 20px 28px; text-align: center; box-shadow: 0 2px 12px rgba(0,0,0,0.04); flex: 1; min-width: 160px; max-width: 220px; }
.stat-card-number { font-family: var(--display); font-size: 2.2rem; line-height: 1; margin-bottom: 4px; }
.stat-card-label { font-size: 0.85rem; color: #666; line-height: 1.4; }
.origin-story { font-size: 0.95rem; color: #555; line-height: 1.7; max-width: 700px; text-align: center; margin: 0 auto; font-style: italic; }

/* SLIDE 3 — WHY IT WORKS */
.reasons-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
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
.s4-chart { display: flex; gap: 28px; justify-content: center; align-items: flex-end; margin-bottom: 20px; }
.s4-bar-col { display: flex; flex-direction: column; align-items: center; gap: 10px; flex: 1; max-width: 180px; }
.s4-bar-value { font-family: var(--display); font-size: 1.6rem; }
.s4-bar-track { width: 100%; border-radius: 12px; position: relative; overflow: hidden; }
.s4-bar-fill { border-radius: 12px; position: absolute; bottom: 0; width: 100%; }
.s4-bar-label { font-size: 0.85rem; color: #666; text-align: center; line-height: 1.4; }
.s4-context { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.s4-context-card { padding: 22px 24px; border-radius: 14px; }
.s4-context-card--quote { background: var(--lavender); border-left: 4px solid var(--purple-sec); }
.s4-context-card--aside { background: var(--mint); border-left: 4px solid var(--teal); }
.s4-context-card h3 { font-size: 1.1rem; color: var(--dark); margin-bottom: 8px; }
.s4-context-card p { font-size: 0.92rem; color: #555; line-height: 1.6; max-width: 44ch; }

/* SLIDE 5 — PARTNERSHIP OPTIONS */
.partner-features { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 16px; }
.partner-feature {
  background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  display: flex; flex-direction: column; align-items: center; text-align: center;
}
.partner-feature-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }
.partner-feature-icon svg { width: 24px; height: 24px; }
.partner-feature h3 { font-size: 1rem; color: var(--dark); margin-bottom: 6px; }
.partner-feature p { font-size: 0.85rem; color: #666; line-height: 1.5; }
.design-callout { display: flex; gap: 20px; justify-content: center; }
.design-option { background: #fff; border-radius: 14px; padding: 18px 24px; flex: 1; max-width: 340px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
.design-option--highlight { border: 2px solid var(--gold); position: relative; }
.design-option--highlight::before {
  content: 'Most popular'; position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
  background: var(--gold); color: var(--dark); font-family: var(--sans); font-size: 0.65rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.08em; padding: 2px 10px; border-radius: 20px;
}
.design-option h4 { font-size: 0.95rem; color: var(--dark); margin-bottom: 4px; }
.design-option p { font-size: 0.85rem; color: #666; line-height: 1.5; }
.design-option .price-tag { font-family: var(--display); font-size: 1.4rem; color: var(--purple-sec); margin-top: 6px; }

/* SLIDE 6 — PRICING REVEAL */
.pricing-runway { display: flex; gap: 16px; align-items: stretch; min-height: 260px; }
.tier-panel {
  flex: 0; min-width: 0; max-width: 0; opacity: 0; overflow: hidden; border-radius: 20px;
  padding: 0; display: flex; flex-direction: column; gap: 16px;
  transition: flex 0.6s var(--ease-out-expo), max-width 0.6s var(--ease-out-expo),
              opacity 0.5s ease 0.1s, padding 0.4s ease;
}
.tier-panel.tier-visible { flex: 1; max-width: 100%; opacity: 1; padding: 28px; }
.tier-panel--premium { background: linear-gradient(135deg, #3d1275, #2c0b5a); color: #fff; }
.tier-panel--fullpage { background: linear-gradient(135deg, #fff8e1, #fff3cd); color: var(--body); border: 1px solid rgba(255,199,45,0.25); }
.tier-panel--standard { background: linear-gradient(135deg, #e8f4fd, #d1e9f8); color: var(--body); border: 1px solid rgba(94,168,255,0.2); }
.tier-label { font-family: var(--display); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 4px; }
.tier-panel--premium .tier-label { color: rgba(255,247,241,0.5); }
.tier-panel--fullpage .tier-label { color: var(--purple-sec); }
.tier-panel--standard .tier-label { color: var(--blue); }
.tier-cards { display: flex; gap: 14px; flex: 1; }
.tier-card {
  flex: 1; border-radius: 14px; padding: 22px 18px; text-align: center; display: flex; flex-direction: column; justify-content: center;
}
.tier-panel--premium .tier-card { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); }
.tier-panel--fullpage .tier-card { background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.tier-panel--standard .tier-card { background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.tier-card-name { font-family: var(--display); font-size: 1.05rem; margin-bottom: 4px; }
.tier-panel--premium .tier-card-name { color: #fff; }
.tier-card-price { font-family: var(--display); font-size: 2rem; line-height: 1; margin: 6px 0; }
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
.rate-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
.rate-table th { background: var(--dark); color: #fff; padding: 10px 14px; font-weight: 600; text-align: center; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.06em; }
.rate-table td { padding: 10px 14px; text-align: center; border-bottom: 1px solid rgba(0,0,0,0.05); }
.rate-table td:first-child { text-align: left; font-weight: 600; color: var(--dark); }
.rate-table tr:last-child td { border-bottom: none; }
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

.decision-accordion { display: flex; flex-direction: column; gap: 0; margin-top: 16px; }
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
  flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.08);
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
      Uniquely You was created about five years ago when one of our publishers, inspired by her son with autism, brought the idea to N2's founders. Because we focus on bringing communities together, she received approval and started the first publication in Indiana.
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
        <div class="reason-highlight reason-highlight--coral">Our product sits on countertops and coffee tables and is constantly used and read by a hard-to-reach community.</div>
      </div>
      <div class="reason-card reason-card--teal">
        <div class="reason-number">Reason #2</div>
        <div class="reason-title">The Right Content</div>
        <div class="reason-body">Reader-generated content, similar to social media. Inspiring articles and key resources our readers care about. The right people are targeted for word of mouth.</div>
        <div class="reason-highlight reason-highlight--teal">We are like the Facebook of print, but trusted. Our content comes directly from our readers, so our partners know it's getting read.</div>
      </div>
    </div>

    <div style="text-align:center;margin-top:12px;" data-reveal="up" data-delay="350">
      <a class="pub-preview-link" href="https://pubmanager.n2pub.com/flipbooks/publications/uniquely-you-mideastern-ohio-oh/current" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        Preview a recent issue
      </a>
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
    <p class="section-subtitle" data-reveal="up" data-delay="200">Two businessmen, frustrated that their direct mail was being thrown out, started creating magazines written by the community for the community.</p>

    <div class="s4-chart" id="s4Chart">
      <div class="s4-bar-col" data-reveal="up" data-delay="300">
        <div class="s4-bar-value" style="color:var(--coral);">800+</div>
        <div class="s4-bar-track" style="height:120px;background:rgba(255,107,107,0.08);">
          <div class="s4-bar-fill" style="background:linear-gradient(to top,var(--coral),rgba(255,107,107,0.9));height:108px;"></div>
        </div>
        <div class="s4-bar-label">Publications in print nationwide</div>
      </div>
      <div class="s4-bar-col" data-reveal="up" data-delay="450">
        <div class="s4-bar-value" style="color:var(--teal);">$163M</div>
        <div class="s4-bar-track" style="height:120px;background:rgba(18,214,160,0.08);">
          <div class="s4-bar-fill" style="background:linear-gradient(to top,var(--teal),rgba(18,214,160,0.9));height:96px;"></div>
        </div>
        <div class="s4-bar-label">Annual revenue</div>
      </div>
      <div class="s4-bar-col" data-reveal="up" data-delay="600">
        <div class="s4-bar-value" style="color:var(--gold);">$30M+</div>
        <div class="s4-bar-track" style="height:120px;background:rgba(255,199,45,0.08);">
          <div class="s4-bar-fill" style="background:linear-gradient(to top,var(--gold),rgba(255,199,45,0.9));height:72px;"></div>
        </div>
        <div class="s4-bar-label">N2GIVES — donated to fight human trafficking</div>
      </div>
      <div class="s4-bar-col" data-reveal="up" data-delay="750">
        <div class="s4-bar-value" style="color:var(--purple-sec);">30K+</div>
        <div class="s4-bar-track" style="height:120px;background:rgba(110,38,142,0.06);">
          <div class="s4-bar-fill" style="background:linear-gradient(to top,var(--purple-sec),rgba(110,38,142,0.85));height:84px;"></div>
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
        <p>We produce niche publications for selective audiences — affluent neighborhood publications, REALTOR publications, new mover publications, and publications for families with disabilities.</p>
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
    <p class="section-subtitle" data-reveal="up" data-delay="150">Multi-month exposure for long-term relationship-building.</p>

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
        <p>Stories that highlight your business and help establish what makes you different. Included at 24+ month terms.</p>
      </div>
      <div class="partner-feature">
        <div class="partner-feature-icon" style="background:rgba(255,199,45,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </div>
        <h3>Community Connection</h3>
        <p>Unique ads relevant to the disability community. Build brand as a trusted community partner with word-of-mouth referrals.</p>
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
  </div>
</section>


<!-- ============================================================
     SLIDE 6: PRICING — HORIZONTAL TIER REVEAL
     ============================================================ -->
<section class="slide slide--cream" id="pricing" data-slide-index="5" data-theme="light" data-has-tier-reveal="true">
  <div class="orb" style="width:360px;height:360px;top:-120px;right:-120px;background:var(--gold);opacity:0.12;"></div>
  <div class="orb" style="width:320px;height:320px;bottom:-120px;left:-120px;background:var(--teal);opacity:0.08;"></div>

  <div class="slide-inner" style="justify-content:center;">
    <div class="section-eyebrow" data-reveal="up" data-delay="50">Investment</div>
    <h2 class="section-title" data-reveal="up" data-delay="100" style="max-width:none;">36-Month Partnership &mdash; Our Best Rate</h2>
    <p class="pricing-term-note" data-reveal="up" data-delay="140">Billed monthly. No upfront lump sum. Shorter terms (12- and 24-month) available at adjusted rates.</p>

    <div class="pricing-runway" data-reveal="up" data-delay="200">

      <!-- TIER 1: PREMIUM -->
      <div class="tier-panel tier-panel--premium" id="tier1">
        <div class="tier-label">Premium Placement</div>
        <div class="tier-cards">
          <div class="tier-card">
            <div class="tier-card-name">2-Page Spread</div>
            <div class="tier-card-price">$795<span>/mo</span></div>
            <div class="tier-card-desc">Maximum impact &mdash; grab attention with large images or before/after showcases</div>
            <span class="tier-term-badge">36 months</span>
          </div>
          <div class="tier-card">
            <div class="tier-card-name">Back Cover</div>
            <div class="tier-card-price">$765<span>/mo</span></div>
            <div class="tier-card-desc">Most prominent real estate &mdash; first thing a reader sees at the mailbox</div>
            <span class="tier-term-badge">36 months</span>
          </div>
        </div>
        <a class="tier-skip" href="#start">Ready? Let's go &rarr;</a>
      </div>

      <!-- TIER 2: FULL PAGE -->
      <div class="tier-panel tier-panel--fullpage" id="tier2">
        <div class="tier-label">Full Page Options</div>
        <div class="tier-cards">
          <div class="tier-card">
            <div class="tier-card-name">Inside Cover / Page 2-3</div>
            <div class="tier-card-price">$675<span>/mo</span></div>
            <div class="tier-card-desc">Premium full-page position &mdash; inside front cover or early pages</div>
            <span class="tier-term-badge">36 months</span>
          </div>
          <div class="tier-card">
            <div class="tier-card-name">Full Page Standard</div>
            <div class="tier-card-price">$575<span>/mo</span></div>
            <div class="tier-card-desc">Full-page body ad &mdash; maximum impact at a standard position</div>
            <span class="tier-term-badge">36 months</span>
          </div>
        </div>
        <a class="tier-skip" href="#start">Ready? Let's go &rarr;</a>
      </div>

      <!-- TIER 3: STANDARD -->
      <div class="tier-panel tier-panel--standard" id="tier3">
        <div class="tier-label">Our Most Popular</div>
        <div class="tier-cards">
          <div class="tier-card">
            <div class="tier-card-name">1/2-Page Standard</div>
            <div class="tier-card-price">$330<span>/mo</span></div>
            <div class="tier-card-desc">Available vertical or horizontal &mdash; versatile and hard to miss</div>
            <span class="tier-term-badge">36 months</span>
          </div>
          <div class="tier-card">
            <div class="tier-card-name">1/4-Page Sponsorship</div>
            <div class="tier-card-price">$330<span>/mo</span></div>
            <div class="tier-card-desc">Affordable, prominent &mdash; our most popular fixed placement</div>
            <span class="tier-term-badge">36 months</span>
          </div>
        </div>
        <a class="tier-skip" href="#start">Ready? Let's go &rarr;</a>
      </div>

    </div>

    <div style="text-align:center;">
      <button id="tierNextBtn">Something more affordable? &rarr;</button>
    </div>

    <!-- SUMMARY GRID (revealed after all tiers shown) -->
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
          1/4, 1/2, full page, 2-page spread, or back cover &mdash; paired with a 12, 24, or 36-month commitment. Longer terms unlock lower monthly rates and featured story bonuses.
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
};

export default data;
