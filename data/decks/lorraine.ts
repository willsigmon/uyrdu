import type { DeckData } from "@/lib/deck/types";

const data: DeckData = {
  title: "Lorraine Chai × Uniquely You! — Strategic Partnership",
  navClass: "dot-nav on-dark",
  navItems: [
    { href: "#cover", label: "Cover" },
    { href: "#why", label: "Opportunity" },
    { href: "#what", label: "Publication" },
    { href: "#synergy", label: "Benefits" },
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
.slide::after { content: ''; position: absolute; inset: -50%; width: 200%; height: 200%; opacity: 0.04; pointer-events: none; z-index: 3; mix-blend-mode: multiply; }

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
.logo-divider { width: 2px; height: 40px; background: rgba(255,255,255,0.15); border-radius: 1px; }
.partner-logotype { font-family: var(--sans); font-size: 1.2rem; font-weight: 600; color: rgba(255,247,241,0.85); letter-spacing: 0.06em; text-transform: uppercase; display: flex; align-items: center; gap: 8px; }
.partner-icon { width: 22px; height: 22px; flex-shrink: 0; }
.cover-title { font-size: clamp(2.8rem, 5.5vw, 4.8rem); line-height: 1.05; color: #fff; margin-bottom: 8px; }
.cover-title .line-1 { display: block; color: rgba(255,247,241,0.6); }
.cover-title .line-2 { display: block; background: linear-gradient(90deg, var(--teal), var(--gold)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.cover-title .line-cross { display: block; font-family: var(--sans); font-weight: 300; font-size: clamp(1rem, 2vw, 1.6rem); color: rgba(255,247,241,0.4); letter-spacing: 0.3em; text-transform: uppercase; margin: 8px 0; }
.cover-title .line-uy { display: block; color: var(--coral); }
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
.cover-lottie{position:absolute;right:5%;top:50%;transform:translateY(-50%);width:280px;height:280px;opacity:0.15;pointer-events:none;z-index:0}
@media(max-width:768px){.cover-lottie{display:none}}

/* SECTION SHARED */
.section-eyebrow { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--purple-sec); }
.section-title { font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--dark); max-width: 700px; line-height: 1.15; }
.section-subtitle { font-size: 1.05rem; color: #666; max-width: 640px; line-height: 1.6; }

/* SLIDE 2 — WHY LORRAINE */
.s2-quote {
  font-family: var(--display); font-size: clamp(1.3rem, 2.2vw, 1.6rem); line-height: 1.3;
  color: var(--dark); text-align: center; max-width: 900px; margin: 0 auto 8px; position: relative;
}
.s2-quote::before {
  content: ''; display: block; width: 48px; height: 36px; margin: 0 auto 10px; background: var(--purple-sec); opacity: 0.12;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 80 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40V20C0 9 9 0 20 0h10v10H20C15 10 10 15 10 20v5h20v20H0zm45 0V20C45 9 54 0 65 0h10v10H65C60 10 55 15 55 20v5h20v20H45z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 80 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40V20C0 9 9 0 20 0h10v10H20C15 10 10 15 10 20v5h20v20H0zm45 0V20C45 9 54 0 65 0h10v10H65C60 10 55 15 55 20v5h20v20H45z'/%3E%3C/svg%3E");
  -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: center; mask-position: center;
}
.s2-quote-em { color: var(--purple-sec); font-style: italic; font-family: var(--sans); font-weight: 500; }
.s2-author { text-align: center; font-weight: 600; color: var(--purple-sec); font-size: 0.95rem; margin-bottom: 16px; }
.s2-timeline { display: flex; align-items: flex-start; position: relative; padding: 0 20px; }
.s2-timeline::before {
  content: ''; position: absolute; top: 28px; left: 60px; right: 60px; height: 3px;
  background: linear-gradient(90deg, var(--coral), var(--teal), var(--gold)); border-radius: 99px; z-index: 0;
  clip-path: inset(0 100% 0 0); transition: clip-path 1.2s var(--ease-out-expo);
}
.s2-timeline.line-drawn::before { clip-path: inset(0 0% 0 0); }
.s2-tl-item { flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1; }
.s2-tl-dot { width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
.s2-tl-dot svg { width: 26px; height: 26px; }
.s2-tl-dot--coral { background: #fff; border: 2px solid rgba(255,107,107,0.3); }
.s2-tl-dot--teal { background: #fff; border: 2px solid rgba(18,214,160,0.3); }
.s2-tl-dot--gold { background: #fff; border: 2px solid rgba(255,199,45,0.3); }
.s2-tl-title { font-family: var(--display); font-size: 1.2rem; color: var(--dark); margin-bottom: 6px; }
.s2-tl-desc { font-size: 0.9rem; color: #666; line-height: 1.5; max-width: 260px; }

/* SLIDE 3 — WHAT UY BRINGS */
.s3-infographic { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; margin-bottom: 20px; }
.s3-viz { display: flex; flex-direction: column; align-items: center; text-align: center; }
.s3-viz-mark { width: 160px; height: 160px; position: relative; margin-bottom: 16px; }
.s3-viz-mark svg { width: 100%; height: 100%; }
.s3-viz-label { font-family: var(--display); font-size: 1.1rem; color: var(--dark); margin-bottom: 4px; }
.s3-viz-desc { font-size: 0.9rem; color: #666; line-height: 1.5; max-width: 220px; }
.donut-wrap { position: relative; }
.donut-center-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); text-align: center; }
.donut-kicker { display: block; font-size: 0.9rem; color: #999; font-weight: 500; }
.donut-value { display: block; font-family: var(--display); font-size: 3rem; color: var(--coral); line-height: 1; }
.s3-hero-number { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); font-family: var(--display); font-size: 3.5rem; line-height: 1; }
.s3-icon-badge { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); }
.s3-pillars { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 28px; }
.s3-pillar { background: #fff; border-radius: 16px; padding: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); border-top: 4px solid transparent; }
.s3-pillar--coral { border-top-color: var(--coral); }
.s3-pillar--teal { border-top-color: var(--teal); }
.s3-pillar--gold { border-top-color: var(--gold); }
.s3-pillar-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.s3-pillar-icon svg { width: 22px; height: 22px; }
.s3-pillar h3 { font-size: 1.1rem; color: var(--dark); margin-bottom: 8px; }
.s3-pillar p { font-size: 0.9rem; color: #666; line-height: 1.6; }

/* SLIDE 4 — SYNERGY */
.s4-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.s4-card { background: #fff; border-radius: 16px; padding: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); position: relative; overflow: hidden; transition: transform 0.3s var(--spring), box-shadow 0.3s ease; }
.s4-card:hover { transform: translateY(-4px); box-shadow: 0 8px 28px rgba(0,0,0,0.08); }
.s4-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; }
.s4-card--coral::before { background: linear-gradient(90deg, var(--coral), var(--gold)); }
.s4-card--teal::before { background: linear-gradient(90deg, var(--teal), var(--blue)); }
.s4-card--gold::before { background: linear-gradient(90deg, var(--gold), var(--coral)); }
.s4-card--purple::before { background: linear-gradient(90deg, var(--purple-sec), var(--blue)); }
.s4-card-icon { width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.s4-card-icon svg { width: 24px; height: 24px; }
.s4-card h3 { font-size: 1.1rem; color: var(--dark); margin-bottom: 8px; }
.s4-card p { font-size: 0.9rem; color: #666; line-height: 1.6; }
.s4-venn { display: flex; align-items: center; justify-content: center; gap: 0; margin-bottom: 20px; }
.s4-venn-circle { width: 200px; height: 200px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-align: center; font-family: var(--display); font-size: 0.95rem; line-height: 1.3; padding: 20px; }
.s4-venn-circle--left { background: rgba(255,107,107,0.12); color: var(--coral); margin-right: -40px; z-index: 1; }
.s4-venn-circle--right { background: rgba(18,214,160,0.12); color: var(--teal); margin-left: -40px; z-index: 1; }
.s4-venn-overlap {
  width: 120px; height: 120px; border-radius: 50%; z-index: 2;
  background: linear-gradient(135deg, rgba(255,107,107,0.15), rgba(18,214,160,0.15));
  border: 2px solid rgba(255,199,45,0.3);
  display: flex; align-items: center; justify-content: center; text-align: center;
  font-family: var(--display); font-size: 0.8rem; color: var(--dark); line-height: 1.3; padding: 12px;
  margin-left: -60px; margin-right: -60px;
}

/* SLIDE 5 — PARTNERSHIP */
.s7-staircase { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; align-items: flex-start; }
.s7-step { background: #fff; border-radius: 16px; padding: 28px; box-shadow: 0 2px 16px rgba(0,0,0,0.04); position: relative; }
.s7-step--1 { margin-top: 60px; }
.s7-step--2 { margin-top: 30px; }
.s7-step--3 { margin-top: 0; }
.s7-level-label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--purple-sec); margin-bottom: 14px; }
.s7-step-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.s7-step-icon svg { width: 22px; height: 22px; }
.s7-step h3 { font-size: 1.1rem; color: var(--dark); margin-bottom: 8px; }
.s7-step p { font-size: 0.88rem; color: #666; line-height: 1.5; margin-bottom: 14px; }
.s7-step-items { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.s7-step-items li { font-size: 0.85rem; color: var(--body); padding-left: 16px; position: relative; line-height: 1.4; }
.s7-step-items li::before { content: '\\2192'; position: absolute; left: 0; color: var(--teal); font-weight: 700; }

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

/* SLIDE 7 — NEXT STEPS */
.s8-diagonal { position: absolute; top: -80px; right: -200px; width: 600px; height: 600px; background: rgba(255,255,255,0.015); transform: rotate(35deg); border-radius: 60px; pointer-events: none; }
.s8-title { font-family: var(--display); font-size: clamp(1.6rem, 2.8vw, 2.2rem); color: #fff; line-height: 1.15; }
.s8-rainbow { position: absolute; bottom: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #12D6A0, #FFC72D, #FF6B6B, #5EA8FF, #12D6A0); background-size: 200% 100%; animation: shimmer 4s linear infinite; }
.s10-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.s10-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px; backdrop-filter: blur(10px); }
.s10-card-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.45); margin-bottom: 18px; }
.s10-list { list-style: none; display: flex; flex-direction: column; gap: 14px; }
.s10-item { display: flex; align-items: flex-start; gap: 12px; color: rgba(255,247,241,0.85); font-size: 0.95rem; line-height: 1.5; }
.s10-num { width: 26px; height: 26px; border-radius: 8px; background: rgba(18,214,160,0.15); color: var(--teal); font-family: var(--display); font-size: 0.8rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.s10-cta-wrap { text-align: center; }
.s10-cta {
  display: inline-block; background: linear-gradient(135deg, var(--coral), var(--gold)); color: var(--dark); font-family: var(--display);
  font-size: 1rem; padding: 14px 36px; border-radius: 12px; text-decoration: none; box-shadow: 0 4px 20px rgba(255,107,107,0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.s10-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(255,107,107,0.4); }
.s10-cta--secondary {
  background: rgba(255,255,255,0.08); color: #fff; border: 1px solid rgba(255,255,255,0.2);
  box-shadow: none; margin-left: 12px;
}
.s10-cta--secondary:hover {
  background: rgba(255,255,255,0.14); transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
.s10-cta-sub { font-size: 0.78rem; color: rgba(255,247,241,0.4); margin-top: 8px; }
.s10-contact { text-align: center; font-size: 0.85rem; color: rgba(255,247,241,0.35); margin-top: 12px; }

/* RESPONSIVE */
@media (max-width: 900px) {
  .slide { padding: 28px 24px; }
  .s3-infographic, .s3-pillars, .s7-staircase { grid-template-columns: 1fr; }
  .s10-grid, .s4-grid { grid-template-columns: 1fr; }
  .s2-timeline { flex-direction: column; gap: 28px; }
  .s2-timeline::before { display: none; }
  .cover-pillars { flex-direction: column; gap: 16px; }
  .dot-nav { display: none; }
  .s7-step--1, .s7-step--2, .s7-step--3 { margin-top: 0; }
  .pricing-runway { flex-direction: column; }
  .tier-panel.tier-visible { max-width: 100%; }
  .rate-table { font-size: 0.85rem; }
  .s4-venn { flex-direction: column; }
  .s4-venn-circle { margin: 0; }
  .s4-venn-overlap { margin: -30px 0; }
}
`,
  slidesHtml: `
<!-- SLIDE 1: COVER -->
<section class="slide slide--dark" id="cover" data-slide-index="0" data-theme="dark">
  <div class="orb" style="width:500px;height:500px;top:-150px;right:-100px;background:var(--coral);opacity:0.08;animation:floatDrift 12s ease-in-out infinite;"></div>
  <div class="orb" style="width:350px;height:350px;bottom:-100px;left:-80px;background:var(--teal);opacity:0.06;animation:floatDrift 15s ease-in-out infinite 3s;"></div>
  <div class="orb" style="width:200px;height:200px;top:30%;left:60%;background:var(--gold);opacity:0.05;animation:floatDrift 10s ease-in-out infinite 1s;"></div>

  <svg class="float-shape" style="top:15%;right:8%;width:80px;height:80px;animation:floatDrift 16s ease-in-out infinite 2s;" viewBox="0 0 80 80" fill="none">
    <polygon points="40,5 75,65 5,65" stroke="rgba(255,199,45,0.3)" stroke-width="1.5"/>
  </svg>
  <svg class="float-shape" style="bottom:25%;left:5%;width:60px;height:60px;animation:floatDrift 13s ease-in-out infinite 4s;" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="25" stroke="rgba(18,214,160,0.25)" stroke-width="1.5"/>
  </svg>

  <div class="slide-inner">
    <div class="cover-gradient-strip" data-reveal="fade" data-delay="0"></div>

    <div class="cover-logos" data-reveal="up" data-delay="100">
      <span class="uy-mark">UY!</span>
      <span class="logo-divider"></span>
      <span class="partner-logotype">
        <svg class="partner-icon" viewBox="0 0 24 24" fill="none" stroke="rgba(255,199,45,0.8)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        S2E &middot; Solopreneur 2 Entrepreneur
      </span>
    </div>

    <h1 class="cover-title">
      <span class="line-1" data-reveal="up" data-delay="200">Lorraine</span>
      <span class="line-2" data-reveal="up" data-delay="300">Chai</span>
      <span class="line-cross" data-reveal="fade" data-delay="500">- - - partnership with - - -</span>
      <span class="line-uy" data-reveal="up" data-delay="600">Uniquely You!</span>
    </h1>

    <p class="cover-subtitle">
      <span class="text-reveal-mask">
        <span class="text-reveal-inner">A community-first publication connecting families, caregivers, and local businesses across the Triangle — and the partner opportunity behind it.</span>
      </span>
    </p>

    <div class="cover-pillars" data-reveal="up" data-delay="900">
      <div class="cover-pillar">
        <div class="cover-pillar-icon cover-pillar-icon--coral">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--coral)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
          </svg>
        </div>
        <span class="cover-pillar-label cover-pillar-label--coral">Strategy</span>
      </div>
      <div class="cover-pillar">
        <div class="cover-pillar-icon cover-pillar-icon--teal">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        </div>
        <span class="cover-pillar-label cover-pillar-label--teal">Community</span>
      </div>
      <div class="cover-pillar">
        <div class="cover-pillar-icon cover-pillar-icon--gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
        </div>
        <span class="cover-pillar-label cover-pillar-label--gold">Scale</span>
      </div>
    </div>

    <div class="cover-footer" data-reveal="fade" data-delay="1100">
      <span>Prepared for Lorraine Chai, S2E &nbsp;|&nbsp; April 2026</span>
      <span>Will Sigmon, Area Director</span>
    </div>
  </div>

  <div class="cover-lottie lottie-anim" data-src="https://assets-v2.lottiefiles.com/a/46ef1528-a41b-11ee-a79c-6b92c18b54d9/7il9RR8XbU.json" aria-hidden="true"></div>
</section>


<!-- SLIDE 2: WHY LORRAINE -->
<section class="slide slide--cream" id="why" data-slide-index="1" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0" style="text-align:center;">The Opportunity</div>
    <h2 class="section-title" data-reveal="up" data-delay="100" style="text-align:center;margin-left:auto;margin-right:auto;">A community that's underserved and growing</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="200" style="text-align:center;margin-left:auto;margin-right:auto;">Families navigating disability in the Triangle don't have a single trusted resource. That's what we're building.</p>

    <div class="s2-quote" data-reveal="scale" data-delay="300">
      "There is no local publication in the RDU area dedicated to the disability community. <span class="s2-quote-em">No resource guide. No spotlight on the families and businesses serving them. Until now.</span>"
    </div>
    <p class="s2-author" data-reveal="fade" data-delay="500">-- The gap Uniquely You! fills</p>

    <div class="s2-timeline" id="s2Timeline">
      <div class="s2-tl-item" data-reveal="up" data-delay="600">
        <div class="s2-tl-dot s2-tl-dot--coral">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--coral)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div class="s2-tl-title">Massive audience</div>
        <div class="s2-tl-desc">1 in 4 U.S. adults has a disability. In the Triangle alone, that's hundreds of thousands of people — plus their families, caregivers, and support networks.</div>
      </div>

      <div class="s2-tl-item" data-reveal="up" data-delay="800">
        <div class="s2-tl-dot s2-tl-dot--teal">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
          </svg>
        </div>
        <div class="s2-tl-title">Zero competition</div>
        <div class="s2-tl-desc">No other publication serves this community in the RDU metro. Uniquely You! is the first and only — early partners get first-mover advantage.</div>
      </div>

      <div class="s2-tl-item" data-reveal="up" data-delay="1000">
        <div class="s2-tl-dot s2-tl-dot--gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div class="s2-tl-title">Trusted network</div>
        <div class="s2-tl-desc">Part of N2's 36-market national network with 800+ publications, $163M in reach, and 20+ years of proven infrastructure behind every issue.</div>
      </div>
    </div>
  </div>
</section>


<!-- SLIDE 3: WHAT UY BRINGS -->
<section class="slide slide--cream" id="what" data-slide-index="2" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0">What UY! Brings</div>
    <h2 class="section-title" data-reveal="up" data-delay="100">A trusted publication, deeply embedded</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="200">In the disability community across the Triangle.</p>

    <div class="s3-infographic">
      <div class="s3-viz" data-reveal="scale" data-delay="300">
        <div class="s3-viz-mark donut-wrap" id="donutWrap">
          <svg viewBox="0 0 160 160" aria-hidden="true">
            <circle cx="80" cy="80" r="65" fill="none" stroke="#e8e0f0" stroke-width="18"/>
            <circle class="donut-ring" id="donutRing" cx="80" cy="80" r="65" fill="none" stroke="var(--coral)" stroke-width="18" stroke-linecap="round" stroke-dasharray="408" stroke-dashoffset="306" transform="rotate(-90 80 80)"/>
          </svg>
          <div class="donut-center-text" id="donutText" aria-label="1 in 4">
            <span class="donut-kicker">1 in</span>
            <span class="donut-value">4</span>
          </div>
        </div>
        <div class="s3-viz-label">Prevalence</div>
        <div class="s3-viz-desc">U.S. adults live with a disability</div>
      </div>

      <div class="s3-viz" data-reveal="scale" data-delay="450">
        <div class="s3-viz-mark">
          <svg viewBox="0 0 160 160" aria-hidden="true">
            <circle cx="80" cy="80" r="65" fill="none" stroke="#d8f6ec" stroke-width="18"/>
            <circle cx="80" cy="80" r="65" fill="none" stroke="var(--teal)" stroke-width="18" stroke-linecap="round" stroke-dasharray="408" stroke-dashoffset="0" transform="rotate(-90 80 80)"/>
          </svg>
          <div class="s3-icon-badge" aria-hidden="true">
            <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
              <rect x="10" y="12" width="46" height="42" rx="11" fill="#fff" stroke="rgba(18,214,160,0.32)" stroke-width="2"/>
              <rect x="10" y="12" width="46" height="12" rx="11" fill="rgba(18,214,160,0.16)"/>
              <line x1="22" y1="8" x2="22" y2="19" stroke="var(--teal)" stroke-width="2.4" stroke-linecap="round"/>
              <line x1="44" y1="8" x2="44" y2="19" stroke="var(--teal)" stroke-width="2.4" stroke-linecap="round"/>
              <line x1="19" y1="30" x2="47" y2="30" stroke="rgba(18,214,160,0.25)" stroke-width="2" stroke-linecap="round"/>
              <circle cx="24" cy="39" r="2.4" fill="var(--teal)" opacity="0.45"/>
              <circle cx="33" cy="39" r="2.4" fill="var(--teal)" opacity="0.9"/>
              <circle cx="42" cy="39" r="2.4" fill="var(--teal)" opacity="0.45"/>
              <rect x="24" y="45" width="18" height="4" rx="2" fill="var(--teal)" opacity="0.22"/>
            </svg>
          </div>
        </div>
        <div class="s3-viz-label">Frequency</div>
        <div class="s3-viz-desc">Free monthly print publication</div>
      </div>

      <div class="s3-viz" data-reveal="scale" data-delay="600">
        <div class="s3-viz-mark">
          <svg viewBox="0 0 160 160" aria-hidden="true">
            <circle cx="80" cy="80" r="65" fill="none" stroke="#d4eee8" stroke-width="18"/>
            <circle cx="80" cy="80" r="65" fill="none" stroke="var(--gold)" stroke-width="18" stroke-linecap="round" stroke-dasharray="408" stroke-dashoffset="0" transform="rotate(-90 80 80)"/>
          </svg>
          <div class="s3-hero-number" style="color:var(--gold);">5</div>
        </div>
        <div class="s3-viz-label">Coverage</div>
        <div class="s3-viz-desc">Counties across RDU</div>
      </div>
    </div>

    <div class="s3-pillars">
      <div class="s3-pillar s3-pillar--coral" data-reveal="up" data-delay="700">
        <div class="s3-pillar-icon" style="background:rgba(255,107,107,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--coral)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>
          </svg>
        </div>
        <h3>Spotlight Stories</h3>
        <p>Every issue features real people in the Triangle living boldly with disability — profiles that celebrate their stories and strengthen community.</p>
      </div>
      <div class="s3-pillar s3-pillar--teal" data-reveal="up" data-delay="850">
        <div class="s3-pillar-icon" style="background:rgba(18,214,160,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
          </svg>
        </div>
        <h3>Resource Hub</h3>
        <p>Local events, service directories, support groups, and community calendars — connecting readers to what they need.</p>
      </div>
      <div class="s3-pillar s3-pillar--gold" data-reveal="up" data-delay="1000">
        <div class="s3-pillar-icon" style="background:rgba(255,199,45,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            <line x1="12" y1="2" x2="12" y2="4"/>
          </svg>
        </div>
        <h3>Advocacy &amp; Awareness</h3>
        <p>Policy updates, accessibility news, employer spotlights — content that moves the needle on inclusion in RDU.</p>
      </div>
    </div>
  </div>
</section>


<!-- SLIDE 4: SYNERGY -->
<section class="slide slide--cream" id="synergy" data-slide-index="3" data-theme="light">
  <div class="orb" style="width:300px;height:300px;top:-100px;left:-80px;background:var(--teal);opacity:0.06;"></div>
  <div class="orb" style="width:250px;height:250px;bottom:-80px;right:-60px;background:var(--gold);opacity:0.05;"></div>

  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0" style="text-align:center;">Why Partners Join</div>
    <h2 class="section-title" data-reveal="up" data-delay="100" style="max-width:none;text-align:center;margin-left:auto;margin-right:auto;">What you get as a UY! partner</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="200" style="text-align:center;margin-left:auto;margin-right:auto;">More than an ad — a relationship with a loyal, engaged, and growing community.</p>

    <div class="s4-grid">
      <div class="s4-card s4-card--coral" data-reveal="up" data-delay="350">
        <div class="s4-card-icon" style="background:rgba(255,107,107,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--coral)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
            <path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>
          </svg>
        </div>
        <h3>Print + Digital Every Month</h3>
        <p>Your ad appears in a high-quality magazine mailed directly to homes — plus a digital companion with clickable links. We handle all the design.</p>
      </div>

      <div class="s4-card s4-card--teal" data-reveal="up" data-delay="450">
        <div class="s4-card-icon" style="background:rgba(18,214,160,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h3>Engaged Readers</h3>
        <p>UY! readers are families, caregivers, educators, therapists, and business owners. They read cover to cover because the content is about them and their community.</p>
      </div>

      <div class="s4-card s4-card--gold" data-reveal="up" data-delay="550">
        <div class="s4-card-icon" style="background:rgba(255,199,45,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
          </svg>
        </div>
        <h3>Feature Story Opportunities</h3>
        <p>Partners can be featured in spotlight articles — your story, your mission, your expertise shared with thousands of readers who value purpose-driven businesses.</p>
      </div>

      <div class="s4-card s4-card--purple" data-reveal="up" data-delay="650">
        <div class="s4-card-icon" style="background:rgba(110,38,142,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--purple-sec)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
          </svg>
        </div>
        <h3>Community Directory</h3>
        <p>Every partner is listed in our online resource directory at uyrdu.com — a permanent, searchable presence connecting you to families actively looking for support.</p>
      </div>
    </div>
  </div>
</section>


<!-- SLIDE 5: PARTNERSHIP -->
<section class="slide slide--cream" id="partnership" data-slide-index="4" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0">Partnership</div>
    <h2 class="section-title" data-reveal="up" data-delay="100">Three ways this works</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="200">Visibility, credibility, and a direct line to the people you serve.</p>

    <div class="s7-staircase">
      <div class="s7-step s7-step--1" data-reveal="up" data-delay="400">
        <div class="s7-level-label">Visibility</div>
        <div class="s7-step-icon" style="background:rgba(255,107,107,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--coral)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
            <path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>
          </svg>
        </div>
        <h3>Be Present</h3>
        <p>A beautifully designed ad in every issue — we handle the creative. Your brand in front of families and business owners every month.</p>
        <ul class="s7-step-items">
          <li>Print ad — we design it for you</li>
          <li>Digital companion with clickable link</li>
          <li>Logo in partner directory</li>
        </ul>
      </div>

      <div class="s7-step s7-step--2" data-reveal="up" data-delay="600">
        <div class="s7-level-label">Authority</div>
        <div class="s7-step-icon" style="background:rgba(18,214,160,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
        </div>
        <h3>Be Useful</h3>
        <p>Value-first content that positions you as a go-to resource. Contributed tips, expert insights, or seasonal spotlights — we help you create it.</p>
        <ul class="s7-step-items">
          <li>Sponsored expert column</li>
          <li>Seasonal tips and resources</li>
          <li>Workshop or event highlights</li>
        </ul>
      </div>

      <div class="s7-step s7-step--3" data-reveal="up" data-delay="800">
        <div class="s7-level-label">Legacy</div>
        <div class="s7-step-icon" style="background:rgba(255,199,45,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>
          </svg>
        </div>
        <h3>Be Remembered</h3>
        <p>Feature stories that share your mission, your background, and your why — the kind of content people keep and pass along.</p>
        <ul class="s7-step-items">
          <li>Two feature profiles per year</li>
          <li>Social media amplification</li>
          <li>Community event co-branding</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<!-- SLIDE 6: PRICING -->
<section class="slide slide--cream" id="pricing" data-slide-index="5" data-theme="light" data-has-tier-reveal="true">
  <div class="orb" style="width:360px;height:360px;top:-120px;right:-120px;background:var(--gold);opacity:0.12;"></div>
  <div class="orb" style="width:320px;height:320px;bottom:-120px;left:-120px;background:var(--teal);opacity:0.08;"></div>

  <div class="slide-inner" style="justify-content:center;">
    <div class="section-eyebrow" data-reveal="up" data-delay="50">Investment</div>
    <h2 class="section-title" data-reveal="up" data-delay="100" style="max-width:none;">36-Month Partnership &mdash; Our Best Rate</h2>
    <p style="text-align:center;font-size:0.82rem;color:#999;margin-top:4px;" data-reveal="up" data-delay="140">Billed monthly. No upfront lump sum. Shorter terms (12- and 24-month) available at adjusted rates.</p>

    <div class="pricing-runway" data-reveal="up" data-delay="200">
      <div class="tier-panel tier-panel--premium" id="tier1">
        <div class="tier-label">Premium Placement</div>
        <div class="tier-cards">
          <div class="tier-card">
            <div class="tier-card-name">2-Page Spread</div>
            <div class="tier-card-price">$795<span>/mo</span></div>
            <div class="tier-card-desc">Maximum impact — grab attention with large images</div>
            <span class="tier-term-badge">36 months</span>
          </div>
          <div class="tier-card">
            <div class="tier-card-name">Back Cover</div>
            <div class="tier-card-price">$765<span>/mo</span></div>
            <div class="tier-card-desc">Most prominent real estate — first thing seen at the mailbox</div>
            <span class="tier-term-badge">36 months</span>
          </div>
        </div>
        <a class="tier-skip" href="#start">Ready? Let's go &rarr;</a>
      </div>
      <div class="tier-panel tier-panel--fullpage" id="tier2">
        <div class="tier-label">Full Page Options</div>
        <div class="tier-cards">
          <div class="tier-card">
            <div class="tier-card-name">Inside Cover / Page 2-3</div>
            <div class="tier-card-price">$675<span>/mo</span></div>
            <div class="tier-card-desc">Premium full-page position</div>
            <span class="tier-term-badge">36 months</span>
          </div>
          <div class="tier-card">
            <div class="tier-card-name">Full Page Standard</div>
            <div class="tier-card-price">$575<span>/mo</span></div>
            <div class="tier-card-desc">Full-page body ad — maximum impact</div>
            <span class="tier-term-badge">36 months</span>
          </div>
        </div>
        <a class="tier-skip" href="#start">Ready? Let's go &rarr;</a>
      </div>
      <div class="tier-panel tier-panel--standard" id="tier3">
        <div class="tier-label">Our Most Popular</div>
        <div class="tier-cards">
          <div class="tier-card">
            <div class="tier-card-name">1/2-Page Standard</div>
            <div class="tier-card-price">$330<span>/mo</span></div>
            <div class="tier-card-desc">Available vertical or horizontal</div>
            <span class="tier-term-badge">36 months</span>
          </div>
          <div class="tier-card">
            <div class="tier-card-name">1/4-Page Sponsorship</div>
            <div class="tier-card-price">$330<span>/mo</span></div>
            <div class="tier-card-desc">Affordable, prominent placement</div>
            <span class="tier-term-badge">36 months</span>
          </div>
        </div>
        <a class="tier-skip" href="#start">Ready? Let's go &rarr;</a>
      </div>
    </div>

    <div style="text-align:center;">
      <button id="tierNextBtn">Something more affordable? &rarr;</button>
    </div>

    <div id="tierSummary">
      <table class="rate-table">
        <thead>
          <tr>
            <th>Ad Size</th>
            <th>12 months</th>
            <th>24 months</th>
            <th class="popular-header">36 months</th>
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


<!-- SLIDE 7: NEXT STEPS -->
<section class="slide slide--dark" id="start" data-slide-index="6" data-theme="dark">
  <div class="s8-diagonal"></div>
  <div class="orb" style="width:400px;height:400px;top:-140px;left:-120px;background:var(--gold);opacity:0.06;"></div>
  <div class="orb" style="width:320px;height:320px;bottom:-100px;right:-80px;background:var(--coral);opacity:0.05;"></div>

  <div class="slide-inner" style="display:flex;flex-direction:column;justify-content:center;">
    <div class="section-eyebrow" data-reveal="up" data-delay="50" style="color:rgba(255,247,241,0.58);">Next steps</div>
    <h2 class="s8-title" data-reveal="up" data-delay="100" style="margin-bottom:8px;">Let's make it happen</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="180" style="color:rgba(255,247,241,0.74);max-width:840px;margin-bottom:20px;">Here's what the path forward looks like — whether we kick things off now or take a beat to think it over.</p>

    <div class="s10-grid" data-reveal="up" data-delay="260">
      <div class="s10-card">
        <div class="s10-card-label">Ready to move forward</div>
        <ul class="s10-list">
          <li class="s10-item"><span class="s10-num">1</span><span>Pick the size and term that feels right</span></li>
          <li class="s10-item"><span class="s10-num">2</span><span>Handle the logistics</span></li>
          <li class="s10-item"><span class="s10-num">3</span><span>Lock in the launch issue</span></li>
          <li class="s10-item"><span class="s10-num">4</span><span>Creative kickoff — we design your ad for you</span></li>
        </ul>
      </div>

      <div class="s10-card">
        <div class="s10-card-label">Want to think it over</div>
        <ul class="s10-list">
          <li class="s10-item"><span class="s10-num">1</span><span>Totally fine — no pressure at all</span></li>
          <li class="s10-item"><span class="s10-num">2</span><span>We'll schedule a quick follow-up</span></li>
          <li class="s10-item"><span class="s10-num">3</span><span>Everything stays the same — no rush pricing</span></li>
          <li class="s10-item"><span class="s10-num">4</span><span>Creative starts whenever you're ready</span></li>
        </ul>
      </div>
    </div>

    <div class="s10-cta-wrap" data-reveal="scale" data-delay="380" style="margin-top:20px;">
      <a class="s10-cta" href="https://portal.n2pub.com/credit_card_capture" target="_blank" rel="noopener">Set Up Billing</a>
      <a class="s10-cta" href="https://portal.n2pub.com/agreement_builders" target="_blank" rel="noopener" style="background:linear-gradient(135deg, var(--teal), var(--blue));box-shadow:0 8px 30px rgba(18,214,160,0.3);">Build Agreement</a>
      <a class="s10-cta s10-cta--secondary" href="https://pubmanager.n2pub.com/flipbooks/publications/uniquely-you-mideastern-ohio-oh/current" target="_blank" rel="noopener" style="font-size:0.85rem;padding:10px 24px;">Preview the publication</a>
      <div class="s10-cta-sub">Opens the partner portal</div>
    </div>
    <div class="s10-contact" data-reveal="fade" data-delay="440">Will Sigmon &middot; Area Director &middot; will.sigmon@n2co.com</div>
  </div>

  <div class="s8-rainbow"></div>
</section>
`,
};

export default data;
