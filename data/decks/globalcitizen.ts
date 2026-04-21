import type { DeckData } from "@/lib/deck/types";

const data: DeckData = {
  title: "Global Citizen × Uniquely You! — Strategic Partnership",
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
  --ivory: #F5F1E8;
  --dark: #0B1F3A;
  --dark-mid: #1A3558;
  --body: #2C3E50;
  --teal: #2E8B8B;
  --teal-deep: #1F6B6B;
  --gold: #C9A961;
  --sage: #87A88A;
  --copper: #B87333;
  --parchment: #EBE4D2;
  --mist: #E3EDED;
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --display: 'Fraunces', 'Playfair Display', Georgia, serif;
  --sans: 'Inter', system-ui, sans-serif;
}

html { scroll-snap-type: y mandatory; scroll-behavior: smooth; overflow-x: hidden; }
body { font-family: var(--sans); color: var(--body); background: var(--ivory); -webkit-font-smoothing: antialiased; overflow-x: hidden; }
h1, h2, h3, h4 { font-family: var(--display); font-weight: 500; letter-spacing: -0.015em; }

.rainbow-bar {
  position: fixed; top: 0; left: 0; width: 100%; height: 3px;
  background: linear-gradient(90deg, var(--teal), var(--gold), var(--sage), var(--copper), var(--teal));
  background-size: 200% 100%; animation: shimmer 6s linear infinite; z-index: 1000;
}
@keyframes shimmer { 0% { background-position: 0% 0%; } 100% { background-position: -200% 0%; } }

.dot-nav {
  position: fixed; right: 24px; top: 50%; transform: translateY(-50%); z-index: 999;
  display: flex; flex-direction: column; gap: 14px;
}
.dot-nav a {
  width: 10px; height: 10px; border-radius: 50%; border: 2px solid rgba(11, 31, 58, 0.3);
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
.slide--dark { background: linear-gradient(135deg, #061428 0%, var(--dark) 45%, var(--dark-mid) 100%); color: #fff; }
.slide--ivory { background: var(--ivory); color: var(--body); }
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

.cover-gradient-strip {
  width: 100%; height: 4px; border-radius: 2px;
  background: linear-gradient(90deg, var(--teal), var(--gold), var(--sage), var(--copper), var(--teal));
  background-size: 200% 100%; animation: shimmer 5s linear infinite; margin-bottom: 20px; position: relative; overflow: hidden;
}
.cover-gradient-strip::after {
  content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  animation: stripShimmer 3s ease-in-out infinite;
}
@keyframes stripShimmer { 0% { left: -50%; } 100% { left: 150%; } }
.cover-logos { display: flex; align-items: center; gap: 20px; margin-bottom: 16px; }
.uy-mark {
  display: inline-flex; align-items: center; justify-content: center; background: var(--teal); color: #fff;
  font-family: var(--display); font-weight: 600; font-size: 1.7rem; padding: 10px 22px; border-radius: 12px;
  letter-spacing: 0.01em; line-height: 1; box-shadow: 0 4px 20px rgba(46,139,139,0.35); position: relative;
}
.uy-mark::after { content: ''; position: absolute; inset: -3px; border-radius: 15px; background: linear-gradient(135deg, var(--teal), var(--gold)); z-index: -1; opacity: 0.5; }
.logo-divider { width: 2px; height: 40px; background: rgba(255,255,255,0.15); border-radius: 1px; }
.partner-logotype { font-family: var(--sans); font-size: 1.15rem; font-weight: 600; color: rgba(245,241,232,0.9); letter-spacing: 0.08em; text-transform: uppercase; display: flex; align-items: center; gap: 10px; }
.partner-icon { width: 22px; height: 22px; flex-shrink: 0; }
.cover-title { font-size: clamp(2.6rem, 5vw, 4.4rem); line-height: 1.08; color: #fff; margin-bottom: 8px; }
.cover-title .line-1 { display: block; color: rgba(245,241,232,0.65); font-weight: 400; font-style: italic; }
.cover-title .line-2 { display: block; background: linear-gradient(90deg, var(--gold), var(--sage)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 600; }
.cover-title .line-cross { display: block; font-family: var(--sans); font-weight: 400; font-size: clamp(0.95rem, 1.7vw, 1.3rem); color: rgba(245,241,232,0.42); letter-spacing: 0.32em; text-transform: uppercase; margin: 10px 0; }
.cover-title .line-uy { display: block; color: var(--gold); font-weight: 500; }
.text-reveal-mask { overflow: hidden; display: block; }
.text-reveal-inner { display: block; transform: translateY(110%); animation: textSlideUp 0.9s var(--ease-out-expo) 0.8s forwards; }
@keyframes textSlideUp { to { transform: translateY(0); } }
.cover-subtitle { font-size: clamp(1rem, 1.7vw, 1.18rem); color: rgba(245,241,232,0.72); max-width: 640px; line-height: 1.65; font-weight: 400; margin-bottom: 22px; }
.cover-pillars { display: flex; gap: 40px; margin-bottom: 24px; }
.cover-pillar { display: flex; align-items: center; gap: 12px; }
.cover-pillar-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.cover-pillar-icon svg { width: 22px; height: 22px; }
.cover-pillar-icon--teal { background: rgba(46,139,139,0.20); }
.cover-pillar-icon--gold { background: rgba(201,169,97,0.20); }
.cover-pillar-icon--sage { background: rgba(135,168,138,0.20); }
.cover-pillar-label { font-weight: 600; font-size: 0.95rem; letter-spacing: 0.04em; }
.cover-pillar-label--teal { color: var(--teal); }
.cover-pillar-label--gold { color: var(--gold); }
.cover-pillar-label--sage { color: var(--sage); }
.cover-footer { display: flex; justify-content: space-between; color: rgba(245,241,232,0.42); font-size: 0.85rem; font-weight: 400; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08); }
.float-shape { position: absolute; pointer-events: none; z-index: 1; opacity: 0.06; }
@keyframes floatDrift { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(10px, -15px) rotate(5deg); } 50% { transform: translate(-5px, -25px) rotate(-3deg); } 75% { transform: translate(15px, -10px) rotate(7deg); } }

.section-eyebrow { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--teal-deep); }
.section-title { font-size: clamp(1.8rem, 3vw, 2.4rem); color: var(--dark); max-width: 720px; line-height: 1.18; }
.section-subtitle { font-size: 1.05rem; color: #4A5A6B; max-width: 660px; line-height: 1.65; }

.s2-quote {
  font-family: var(--display); font-size: clamp(1.25rem, 2.1vw, 1.55rem); line-height: 1.35;
  color: var(--dark); text-align: center; max-width: 920px; margin: 0 auto 8px; position: relative; font-style: italic;
}
.s2-quote::before {
  content: ''; display: block; width: 48px; height: 36px; margin: 0 auto 10px; background: var(--teal); opacity: 0.18;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 80 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40V20C0 9 9 0 20 0h10v10H20C15 10 10 15 10 20v5h20v20H0zm45 0V20C45 9 54 0 65 0h10v10H65C60 10 55 15 55 20v5h20v20H45z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 80 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40V20C0 9 9 0 20 0h10v10H20C15 10 10 15 10 20v5h20v20H0zm45 0V20C45 9 54 0 65 0h10v10H65C60 10 55 15 55 20v5h20v20H45z'/%3E%3C/svg%3E");
  -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: center; mask-position: center;
}
.s2-quote-em { color: var(--teal-deep); font-weight: 600; font-style: normal; font-family: var(--sans); }
.s2-author { text-align: center; font-weight: 600; color: var(--teal-deep); font-size: 0.92rem; margin-bottom: 16px; letter-spacing: 0.04em; }
.s2-timeline { display: flex; align-items: flex-start; position: relative; padding: 0 20px; }
.s2-timeline::before {
  content: ''; position: absolute; top: 28px; left: 60px; right: 60px; height: 3px;
  background: linear-gradient(90deg, var(--teal), var(--sage), var(--gold)); border-radius: 99px; z-index: 0;
  clip-path: inset(0 100% 0 0); transition: clip-path 1.2s var(--ease-out-expo);
}
.s2-timeline.line-drawn::before { clip-path: inset(0 0% 0 0); }
.s2-tl-item { flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1; }
.s2-tl-dot { width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
.s2-tl-dot svg { width: 26px; height: 26px; }
.s2-tl-dot--teal { background: #fff; border: 2px solid rgba(46,139,139,0.35); }
.s2-tl-dot--sage { background: #fff; border: 2px solid rgba(135,168,138,0.4); }
.s2-tl-dot--gold { background: #fff; border: 2px solid rgba(201,169,97,0.4); }
.s2-tl-title { font-family: var(--display); font-weight: 600; font-size: 1.18rem; color: var(--dark); margin-bottom: 6px; }
.s2-tl-desc { font-size: 0.9rem; color: #4A5A6B; line-height: 1.55; max-width: 260px; }

.s3-infographic { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; margin-bottom: 20px; }
.s3-viz { display: flex; flex-direction: column; align-items: center; text-align: center; }
.s3-viz-mark { width: 160px; height: 160px; position: relative; margin-bottom: 16px; }
.s3-viz-mark svg { width: 100%; height: 100%; }
.s3-viz-label { font-family: var(--display); font-weight: 600; font-size: 1.1rem; color: var(--dark); margin-bottom: 4px; }
.s3-viz-desc { font-size: 0.9rem; color: #4A5A6B; line-height: 1.55; max-width: 220px; }
.donut-wrap { position: relative; }
.donut-center-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); text-align: center; }
.donut-kicker { display: block; font-size: 0.88rem; color: #8A9AA8; font-weight: 500; }
.donut-value { display: block; font-family: var(--display); font-weight: 600; font-size: 3rem; color: var(--teal); line-height: 1; }
.s3-hero-number { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); font-family: var(--display); font-weight: 600; font-size: 3.5rem; line-height: 1; }
.s3-icon-badge { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); }
.s3-pillars { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 28px; }
.s3-pillar { background: #fff; border-radius: 16px; padding: 28px; box-shadow: 0 2px 14px rgba(11,31,58,0.05); border-top: 4px solid transparent; }
.s3-pillar--teal { border-top-color: var(--teal); }
.s3-pillar--sage { border-top-color: var(--sage); }
.s3-pillar--gold { border-top-color: var(--gold); }
.s3-pillar-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.s3-pillar-icon svg { width: 22px; height: 22px; }
.s3-pillar h3 { font-size: 1.1rem; color: var(--dark); margin-bottom: 8px; font-weight: 600; }
.s3-pillar p { font-size: 0.9rem; color: #4A5A6B; line-height: 1.6; }

.s4-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.s4-card { background: #fff; border-radius: 16px; padding: 28px; box-shadow: 0 2px 14px rgba(11,31,58,0.05); position: relative; overflow: hidden; transition: transform 0.3s var(--spring), box-shadow 0.3s ease; }
.s4-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(11,31,58,0.1); }
.s4-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; }
.s4-card--teal::before { background: linear-gradient(90deg, var(--teal), var(--gold)); }
.s4-card--sage::before { background: linear-gradient(90deg, var(--sage), var(--teal)); }
.s4-card--gold::before { background: linear-gradient(90deg, var(--gold), var(--copper)); }
.s4-card--copper::before { background: linear-gradient(90deg, var(--copper), var(--sage)); }
.s4-card-icon { width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.s4-card-icon svg { width: 24px; height: 24px; }
.s4-card h3 { font-size: 1.12rem; color: var(--dark); margin-bottom: 8px; font-weight: 600; }
.s4-card p { font-size: 0.92rem; color: #4A5A6B; line-height: 1.6; }

.s7-staircase { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; align-items: flex-start; }
.s7-step { background: #fff; border-radius: 16px; padding: 28px; box-shadow: 0 2px 16px rgba(11,31,58,0.05); position: relative; }
.s7-step--1 { margin-top: 60px; }
.s7-step--2 { margin-top: 30px; }
.s7-step--3 { margin-top: 0; }
.s7-level-label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--teal-deep); margin-bottom: 14px; }
.s7-step-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.s7-step-icon svg { width: 22px; height: 22px; }
.s7-step h3 { font-size: 1.12rem; color: var(--dark); margin-bottom: 8px; font-weight: 600; }
.s7-step p { font-size: 0.88rem; color: #4A5A6B; line-height: 1.55; margin-bottom: 14px; }
.s7-step-items { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.s7-step-items li { font-size: 0.85rem; color: var(--body); padding-left: 16px; position: relative; line-height: 1.45; }
.s7-step-items li::before { content: '\\2192'; position: absolute; left: 0; color: var(--sage); font-weight: 700; }

.pricing-runway { display: flex; gap: 16px; align-items: stretch; min-height: 260px; }
.tier-panel {
  flex: 0; min-width: 0; max-width: 0; opacity: 0; overflow: hidden; border-radius: 20px;
  padding: 0; display: flex; flex-direction: column; gap: 16px;
  transition: flex 0.6s var(--ease-out-expo), max-width 0.6s var(--ease-out-expo),
              opacity 0.5s ease 0.1s, padding 0.4s ease;
}
.tier-panel.tier-visible { flex: 1; max-width: 100%; opacity: 1; padding: 28px; }
.tier-panel--premium { background: linear-gradient(135deg, var(--dark-mid), var(--dark)); color: #fff; }
.tier-panel--fullpage { background: linear-gradient(135deg, #f5eed9, #efe4c0); color: var(--body); border: 1px solid rgba(201,169,97,0.3); }
.tier-panel--standard { background: linear-gradient(135deg, #e2ecec, #cfe0e0); color: var(--body); border: 1px solid rgba(46,139,139,0.25); }
.tier-panel--entry { background: linear-gradient(135deg, #e7efe4, #d4e2cf); color: var(--body); border: 1px solid rgba(135,168,138,0.3); }
.tier-label { font-family: var(--display); font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.14em; margin-bottom: 4px; }
.tier-panel--premium .tier-label { color: rgba(245,241,232,0.6); }
.tier-panel--fullpage .tier-label { color: var(--copper); }
.tier-panel--standard .tier-label { color: var(--teal-deep); }
.tier-panel--entry .tier-label { color: var(--sage); }
.tier-cards { display: flex; gap: 14px; flex: 1; }
.tier-card {
  flex: 1; border-radius: 14px; padding: 22px 18px; text-align: center; display: flex; flex-direction: column; justify-content: center;
}
.tier-panel--premium .tier-card { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); }
.tier-panel--fullpage .tier-card { background: #fff; box-shadow: 0 2px 8px rgba(11,31,58,0.05); }
.tier-panel--standard .tier-card { background: #fff; box-shadow: 0 2px 8px rgba(11,31,58,0.05); }
.tier-panel--entry .tier-card { background: #fff; box-shadow: 0 2px 8px rgba(11,31,58,0.05); }
.tier-card-name { font-family: var(--display); font-weight: 600; font-size: 1.05rem; margin-bottom: 4px; }
.tier-panel--premium .tier-card-name { color: #fff; }
.tier-card-price { font-family: var(--display); font-weight: 600; font-size: 2rem; line-height: 1; margin: 6px 0; }
.tier-panel--premium .tier-card-price { color: var(--gold); }
.tier-panel--fullpage .tier-card-price { color: var(--copper); }
.tier-panel--standard .tier-card-price { color: var(--teal-deep); }
.tier-panel--entry .tier-card-price { color: var(--sage); }
.tier-card-price span { font-size: 0.85rem; font-family: var(--sans); font-weight: 500; opacity: 0.72; }
.tier-card-desc { font-size: 0.8rem; line-height: 1.5; margin-top: 6px; }
.tier-panel--premium .tier-card-desc { color: rgba(245,241,232,0.65); }
.tier-panel--fullpage .tier-card-desc, .tier-panel--standard .tier-card-desc, .tier-panel--entry .tier-card-desc { color: #6C7A89; }
.tier-term-badge { display: inline-block; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 3px 10px; border-radius: 20px; margin-top: 8px; }
.tier-panel--premium .tier-term-badge { background: rgba(201,169,97,0.2); color: var(--gold); }
.tier-panel--fullpage .tier-term-badge { background: rgba(184,115,51,0.15); color: var(--copper); }
.tier-panel--standard .tier-term-badge { background: rgba(46,139,139,0.14); color: var(--teal-deep); }
.tier-panel--entry .tier-term-badge { background: rgba(135,168,138,0.18); color: var(--sage); }
.tier-skip {
  display: inline-block; align-self: center; margin-top: auto; padding: 8px 20px; border-radius: 30px;
  font-family: var(--sans); font-size: 0.8rem; font-weight: 600; text-decoration: none;
  transition: transform 0.3s var(--spring), background 0.3s ease;
}
.tier-panel--premium .tier-skip { color: var(--gold); background: rgba(201,169,97,0.14); }
.tier-panel--premium .tier-skip:hover { background: rgba(201,169,97,0.26); transform: translateY(-2px); }
.tier-panel--fullpage .tier-skip { color: var(--copper); background: rgba(184,115,51,0.14); }
.tier-panel--fullpage .tier-skip:hover { background: rgba(184,115,51,0.24); transform: translateY(-2px); }
.tier-panel--standard .tier-skip { color: var(--teal-deep); background: rgba(46,139,139,0.12); }
.tier-panel--standard .tier-skip:hover { background: rgba(46,139,139,0.22); transform: translateY(-2px); }
.tier-panel--entry .tier-skip { color: var(--sage); background: rgba(135,168,138,0.16); }
.tier-panel--entry .tier-skip:hover { background: rgba(135,168,138,0.28); transform: translateY(-2px); }
#tierNextBtn {
  display: inline-block; margin: 16px auto 0; padding: 12px 32px; border: none; border-radius: 40px; cursor: pointer;
  font-family: var(--sans); font-size: 0.95rem; font-weight: 600; color: #fff;
  background: linear-gradient(135deg, var(--teal), var(--gold)); box-shadow: 0 4px 16px rgba(46,139,139,0.3);
  transition: transform 0.3s var(--spring), box-shadow 0.3s ease;
}
#tierNextBtn:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 6px 24px rgba(46,139,139,0.4); }
#tierSummary {
  opacity: 0; max-height: 0; overflow: hidden; transition: opacity 0.6s ease, max-height 0.6s var(--ease-out-expo); margin-top: 0;
}
#tierSummary.summary-visible { opacity: 1; max-height: 500px; margin-top: 20px; }
.rate-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 12px rgba(11,31,58,0.06); }
.rate-table th { background: var(--dark); color: #fff; padding: 10px 14px; font-weight: 600; text-align: center; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; }
.rate-table td { padding: 10px 14px; text-align: center; border-bottom: 1px solid rgba(11,31,58,0.06); }
.rate-table td:first-child { text-align: left; font-weight: 600; color: var(--dark); }
.rate-table tr:last-child td { border-bottom: none; }
.rate-table .popular-col { background: rgba(201,169,97,0.08); }
.rate-table .popular-header { background: var(--gold); color: var(--dark); }

.s8-diagonal { position: absolute; top: -80px; right: -200px; width: 600px; height: 600px; background: rgba(255,255,255,0.02); transform: rotate(35deg); border-radius: 60px; pointer-events: none; }
.s8-title { font-family: var(--display); font-weight: 500; font-size: clamp(1.6rem, 2.8vw, 2.2rem); color: #fff; line-height: 1.18; }
.s8-rainbow { position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--teal), var(--gold), var(--sage), var(--copper), var(--teal)); background-size: 200% 100%; animation: shimmer 6s linear infinite; }
.s10-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.s10-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.09); border-radius: 16px; padding: 28px; backdrop-filter: blur(10px); }
.s10-card-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.48); margin-bottom: 18px; }
.s10-list { list-style: none; display: flex; flex-direction: column; gap: 14px; }
.s10-item { display: flex; align-items: flex-start; gap: 12px; color: rgba(245,241,232,0.86); font-size: 0.95rem; line-height: 1.55; }
.s10-num { width: 26px; height: 26px; border-radius: 8px; background: rgba(201,169,97,0.2); color: var(--gold); font-family: var(--display); font-weight: 600; font-size: 0.82rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.s10-cta-wrap { text-align: center; }
.s10-cta {
  display: inline-block; background: linear-gradient(135deg, var(--teal), var(--gold)); color: #fff; font-family: var(--display); font-weight: 600;
  font-size: 1rem; padding: 14px 36px; border-radius: 12px; text-decoration: none; box-shadow: 0 4px 20px rgba(46,139,139,0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.s10-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(46,139,139,0.4); }
.s10-cta--secondary {
  background: rgba(255,255,255,0.08); color: #fff; border: 1px solid rgba(255,255,255,0.2);
  box-shadow: none; margin-left: 12px;
}
.s10-cta--secondary:hover {
  background: rgba(255,255,255,0.14); transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
.s10-cta-sub { font-size: 0.78rem; color: rgba(245,241,232,0.42); margin-top: 8px; }
.s10-contact { text-align: center; font-size: 0.85rem; color: rgba(245,241,232,0.38); margin-top: 12px; }

#portrait-warning { display: none !important; }
.scroll-hint {
  position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); z-index: 5;
  opacity: 0.2; animation: hintBounce 2.4s ease-in-out infinite;
}
@keyframes hintBounce { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(6px); } }

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
}
`,
  slidesHtml: `
<section class="slide slide--dark" id="cover" data-slide-index="0" data-theme="dark">
  <div class="orb" style="width:500px;height:500px;top:-150px;right:-100px;background:var(--teal);opacity:0.12;animation:floatDrift 14s ease-in-out infinite;"></div>
  <div class="orb" style="width:350px;height:350px;bottom:-100px;left:-80px;background:var(--gold);opacity:0.08;animation:floatDrift 17s ease-in-out infinite 3s;"></div>
  <div class="orb" style="width:220px;height:220px;top:30%;left:60%;background:var(--sage);opacity:0.06;animation:floatDrift 12s ease-in-out infinite 1s;"></div>
  <svg class="float-shape" style="top:15%;right:8%;width:80px;height:80px;animation:floatDrift 18s ease-in-out infinite 2s;" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="32" stroke="rgba(201,169,97,0.3)" stroke-width="1.5"/></svg>
  <svg class="float-shape" style="bottom:25%;left:5%;width:60px;height:60px;animation:floatDrift 14s ease-in-out infinite 4s;" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="25" stroke="rgba(46,139,139,0.3)" stroke-width="1.5"/></svg>
  <div class="slide-inner">
    <div class="cover-gradient-strip" data-reveal="fade" data-delay="0"></div>
    <div class="cover-logos" data-reveal="up" data-delay="100">
      <span class="uy-mark">UY!</span>
      <span class="logo-divider"></span>
      <span class="partner-logotype">
        <svg class="partner-icon" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,97,0.88)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        Global Citizen, LLC
      </span>
    </div>
    <h1 class="cover-title">
      <span class="line-1" data-reveal="up" data-delay="200">Global</span>
      <span class="line-2" data-reveal="up" data-delay="300">Citizen</span>
      <span class="line-cross" data-reveal="fade" data-delay="500">- - - partnership with - - -</span>
      <span class="line-uy" data-reveal="up" data-delay="600">Uniquely You!</span>
    </h1>
    <p class="cover-subtitle">
      <span class="text-reveal-mask"><span class="text-reveal-inner">Equity-centered leadership, consulting, and transformation &mdash; meeting the Triangle&rsquo;s most engaged readers on the page and in the community.</span></span>
    </p>
    <div class="cover-pillars" data-reveal="up" data-delay="900">
      <div class="cover-pillar"><div class="cover-pillar-icon cover-pillar-icon--teal"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg></div><span class="cover-pillar-label cover-pillar-label--teal">Lead</span></div>
      <div class="cover-pillar"><div class="cover-pillar-icon cover-pillar-icon--sage"><svg viewBox="0 0 24 24" fill="none" stroke="var(--sage)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><span class="cover-pillar-label cover-pillar-label--sage">Belong</span></div>
      <div class="cover-pillar"><div class="cover-pillar-icon cover-pillar-icon--gold"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.39 7.36H22l-6.19 4.5L18.2 21 12 16.5 5.8 21l2.39-7.14L2 9.36h7.61z"/></svg></div><span class="cover-pillar-label cover-pillar-label--gold">Transform</span></div>
    </div>
    <div class="cover-footer" data-reveal="fade" data-delay="1100">
      <span>Prepared for Katherine L. Turner &middot; Global Citizen, LLC &nbsp;|&nbsp; April 2026</span>
      <span>Will Sigmon, Area Director</span>
    </div>
  </div>
  <div class="scroll-hint" data-reveal="fade" data-delay="1400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,232,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div>
</section>

<section class="slide slide--ivory" id="why" data-slide-index="1" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0" style="text-align:center;">The Opportunity</div>
    <h2 class="section-title" data-reveal="up" data-delay="100" style="text-align:center;margin-left:auto;margin-right:auto;">The audience that already believes what you believe</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="200" style="text-align:center;margin-left:auto;margin-right:auto;">UY! readers aren&rsquo;t just families &mdash; they&rsquo;re HR leaders, executives, educators, nonprofit boards, and advocates who actively invest in belonging. Your work meets them where they already are.</p>
    <div class="s2-quote" data-reveal="scale" data-delay="300">&ldquo;Equity work lands when it reaches <span class="s2-quote-em">people with both lived experience and decision-making power</span> &mdash; in a context that treats the subject with care.&rdquo;</div>
    <p class="s2-author" data-reveal="fade" data-delay="500">-- The UY! philosophy</p>
    <div class="s2-timeline" id="s2Timeline">
      <div class="s2-tl-item" data-reveal="up" data-delay="600">
        <div class="s2-tl-dot s2-tl-dot--teal"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
        <div class="s2-tl-title">Mission alignment</div>
        <div class="s2-tl-desc">Your equity, leadership, and belonging frameworks speak directly to the community UY! was built to serve &mdash; credibility is already assumed.</div>
      </div>
      <div class="s2-tl-item" data-reveal="up" data-delay="800">
        <div class="s2-tl-dot s2-tl-dot--sage"><svg viewBox="0 0 24 24" fill="none" stroke="var(--sage)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <div class="s2-tl-title">Decision-maker reach</div>
        <div class="s2-tl-desc">Readers include foundation program officers, C-suite parents, UNC faculty, and nonprofit leaders &mdash; the exact profiles that hire keynote speakers and consultants.</div>
      </div>
      <div class="s2-tl-item" data-reveal="up" data-delay="1000">
        <div class="s2-tl-dot s2-tl-dot--gold"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="s2-tl-title">Trusted network</div>
        <div class="s2-tl-desc">Part of N2&rsquo;s national network &mdash; 800+ publications, named to Inc.&rsquo;s fastest-growing list 8 years in a row, and 30,000+ businesses helped.</div>
      </div>
    </div>
  </div>
</section>

<section class="slide slide--ivory" id="what" data-slide-index="2" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0">What UY! Brings</div>
    <h2 class="section-title" data-reveal="up" data-delay="100">A platform built for mission-led work</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="200">Uniquely You! is the Triangle&rsquo;s only publication dedicated to the disability community &mdash; and a natural home for equity-centered thought leadership.</p>
    <div class="s3-infographic">
      <div class="s3-viz" data-reveal="scale" data-delay="300">
        <div class="s3-viz-mark donut-wrap" id="donutWrap"><svg viewBox="0 0 160 160" aria-hidden="true"><circle cx="80" cy="80" r="65" fill="none" stroke="#d8e5e5" stroke-width="18"/><circle class="donut-ring" id="donutRing" cx="80" cy="80" r="65" fill="none" stroke="var(--teal)" stroke-width="18" stroke-linecap="round" stroke-dasharray="408" stroke-dashoffset="306" transform="rotate(-90 80 80)"/></svg><div class="donut-center-text" id="donutText" aria-label="1 in 4"><span class="donut-kicker">1 in</span><span class="donut-value">4</span></div></div>
        <div class="s3-viz-label">Prevalence</div>
        <div class="s3-viz-desc">U.S. adults live with a disability</div>
      </div>
      <div class="s3-viz" data-reveal="scale" data-delay="450">
        <div class="s3-viz-mark"><svg viewBox="0 0 160 160" aria-hidden="true"><circle cx="80" cy="80" r="65" fill="none" stroke="#e0ebe1" stroke-width="18"/><circle cx="80" cy="80" r="65" fill="none" stroke="var(--sage)" stroke-width="18" stroke-linecap="round" stroke-dasharray="408" stroke-dashoffset="0" transform="rotate(-90 80 80)"/></svg><div class="s3-icon-badge" aria-hidden="true"><svg width="66" height="66" viewBox="0 0 66 66" fill="none"><rect x="10" y="12" width="46" height="42" rx="11" fill="#fff" stroke="rgba(135,168,138,0.5)" stroke-width="2"/><rect x="10" y="12" width="46" height="12" rx="11" fill="rgba(135,168,138,0.22)"/><line x1="22" y1="8" x2="22" y2="19" stroke="var(--sage)" stroke-width="2.4" stroke-linecap="round"/><line x1="44" y1="8" x2="44" y2="19" stroke="var(--sage)" stroke-width="2.4" stroke-linecap="round"/><line x1="19" y1="30" x2="47" y2="30" stroke="rgba(135,168,138,0.35)" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="39" r="2.4" fill="var(--sage)" opacity="0.55"/><circle cx="33" cy="39" r="2.4" fill="var(--sage)"/><circle cx="42" cy="39" r="2.4" fill="var(--sage)" opacity="0.55"/><rect x="24" y="45" width="18" height="4" rx="2" fill="var(--sage)" opacity="0.3"/></svg></div></div>
        <div class="s3-viz-label">Frequency</div>
        <div class="s3-viz-desc">Free monthly print publication</div>
      </div>
      <div class="s3-viz" data-reveal="scale" data-delay="600">
        <div class="s3-viz-mark"><svg viewBox="0 0 160 160" aria-hidden="true"><circle cx="80" cy="80" r="65" fill="none" stroke="#f0e6cf" stroke-width="18"/><circle cx="80" cy="80" r="65" fill="none" stroke="var(--gold)" stroke-width="18" stroke-linecap="round" stroke-dasharray="408" stroke-dashoffset="0" transform="rotate(-90 80 80)"/></svg><div class="s3-hero-number" style="color:var(--gold);">5</div></div>
        <div class="s3-viz-label">Coverage</div>
        <div class="s3-viz-desc">Counties across RDU</div>
      </div>
    </div>
    <div class="s3-pillars">
      <div class="s3-pillar s3-pillar--teal" data-reveal="up" data-delay="700"><div class="s3-pillar-icon" style="background:rgba(46,139,139,0.12);"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div><h3>Thought-Leadership Column</h3><p>A recurring space for frameworks from your UNC curriculum, global health work, and leadership practice &mdash; published in a credibility-rich context your ideal clients already trust.</p></div>
      <div class="s3-pillar s3-pillar--sage" data-reveal="up" data-delay="850"><div class="s3-pillar-icon" style="background:rgba(135,168,138,0.16);"><svg viewBox="0 0 24 24" fill="none" stroke="var(--sage)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></div><h3>Community Resource Hub</h3><p>Reader-facing calendars, DEIB events, and speaker listings &mdash; a direct channel to the HR leaders, nonprofit EDs, and parents-of-advocates who book keynotes and coaching.</p></div>
      <div class="s3-pillar s3-pillar--gold" data-reveal="up" data-delay="1000"><div class="s3-pillar-icon" style="background:rgba(201,169,97,0.16);"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><line x1="12" y1="2" x2="12" y2="4"/></svg></div><h3>Inspiration &amp; Advocacy</h3><p>Long-form features that share the why behind your work &mdash; 50+ countries, UNC graduate classroom, equity frameworks &mdash; in a format readers keep, cite, and forward to their boards.</p></div>
    </div>
  </div>
</section>

<section class="slide slide--ivory" id="synergy" data-slide-index="3" data-theme="light">
  <div class="orb" style="width:300px;height:300px;top:-100px;left:-80px;background:var(--sage);opacity:0.1;"></div>
  <div class="orb" style="width:250px;height:250px;bottom:-80px;right:-60px;background:var(--gold);opacity:0.08;"></div>
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0" style="text-align:center;">Why Partners Join</div>
    <h2 class="section-title" data-reveal="up" data-delay="100" style="max-width:none;text-align:center;margin-left:auto;margin-right:auto;">What you get as a UY! partner</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="200" style="text-align:center;margin-left:auto;margin-right:auto;">More than an ad &mdash; a standing presence among readers who already believe in the work, and who hire the people who do it well.</p>
    <div class="s4-grid">
      <div class="s4-card s4-card--teal" data-reveal="up" data-delay="350"><div class="s4-card-icon" style="background:rgba(46,139,139,0.12);"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg></div><h3>Print + Digital Every Month</h3><p>Your placement in a high-quality magazine mailed directly to homes &mdash; plus a digital companion with clickable links to your speaker reel, book-a-call, or latest keynote. We handle the design.</p></div>
      <div class="s4-card s4-card--sage" data-reveal="up" data-delay="450"><div class="s4-card-icon" style="background:rgba(135,168,138,0.16);"><svg viewBox="0 0 24 24" fill="none" stroke="var(--sage)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h3>Your Ideal Client Reads UY!</h3><p>Executives, HR directors, foundation leaders, educators, and parent-advocates &mdash; many sitting on boards and committees where your frameworks get proposed, cited, and funded.</p></div>
      <div class="s4-card s4-card--gold" data-reveal="up" data-delay="550"><div class="s4-card-icon" style="background:rgba(201,169,97,0.16);"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg></div><h3>Feature Story Opportunities</h3><p>Your practice, the UNC work, the 50+ countries of global health experience &mdash; shared as a spotlight article that does the introduction work for you, long before a discovery call.</p></div>
      <div class="s4-card s4-card--copper" data-reveal="up" data-delay="650"><div class="s4-card-icon" style="background:rgba(184,115,51,0.12);"><svg viewBox="0 0 24 24" fill="none" stroke="var(--copper)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></div><h3>Community Directory</h3><p>A permanent, searchable presence in our online directory at uyrdu.com &mdash; so when someone asks &ldquo;who do we know who does equity-centered leadership work?&rdquo; your name is already there.</p></div>
    </div>
  </div>
</section>

<section class="slide slide--ivory" id="partnership" data-slide-index="4" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0">Partnership</div>
    <h2 class="section-title" data-reveal="up" data-delay="100">Three ways this works</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="200">Visibility, authority, and a durable body of work &mdash; matched to the register your practice already carries.</p>
    <div class="s7-staircase">
      <div class="s7-step s7-step--1" data-reveal="up" data-delay="400"><div class="s7-level-label">Visibility</div><div class="s7-step-icon" style="background:rgba(46,139,139,0.12);"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg></div><h3>Be Present</h3><p>A beautifully designed ad in every issue &mdash; we handle the creative so it reads as editorial, not interruption. Global Citizen in front of decision-makers every month.</p><ul class="s7-step-items"><li>Print ad &mdash; we design it for you</li><li>Digital companion with clickable speaker / book-a-call link</li><li>Logo in partner directory</li></ul></div>
      <div class="s7-step s7-step--2" data-reveal="up" data-delay="600"><div class="s7-level-label">Authority</div><div class="s7-step-icon" style="background:rgba(135,168,138,0.16);"><svg viewBox="0 0 24 24" fill="none" stroke="var(--sage)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div><h3>Be Useful</h3><p>A sponsored column where you publish short, quotable pieces on leadership, equity, and belonging &mdash; the kind readers forward to a colleague or a board chair.</p><ul class="s7-step-items"><li>Recurring expert column</li><li>Frameworks, Q&amp;A, field notes</li><li>Seasonal DEIB and leadership features</li></ul></div>
      <div class="s7-step s7-step--3" data-reveal="up" data-delay="800"><div class="s7-level-label">Legacy</div><div class="s7-step-icon" style="background:rgba(201,169,97,0.16);"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg></div><h3>Be Remembered</h3><p>Long-form features that tell the Global Citizen story &mdash; the 50+ countries, the UNC classroom, the clients transformed &mdash; content readers save and cite for years.</p><ul class="s7-step-items"><li>Two feature profiles per year</li><li>Social media amplification</li><li>Community event co-branding</li></ul></div>
    </div>
  </div>
</section>

<section class="slide slide--ivory" id="pricing" data-slide-index="5" data-theme="light" data-has-tier-reveal="true">
  <div class="orb" style="width:360px;height:360px;top:-120px;right:-120px;background:var(--gold);opacity:0.14;"></div>
  <div class="orb" style="width:320px;height:320px;bottom:-120px;left:-120px;background:var(--teal);opacity:0.1;"></div>
  <div class="slide-inner" style="justify-content:center;">
    <div class="section-eyebrow" data-reveal="up" data-delay="50">Investment</div>
    <h2 class="section-title" data-reveal="up" data-delay="100" style="max-width:none;">36-Month Partnership &mdash; Our Best Rate</h2>
    <p style="text-align:center;font-size:0.82rem;color:#8A9AA8;margin-top:4px;" data-reveal="up" data-delay="140">Billed monthly. No upfront lump sum. Shorter terms (12- and 24-month) available at adjusted rates.</p>
    <div class="pricing-runway" data-reveal="up" data-delay="200">
      <div class="tier-panel tier-panel--premium" id="tier1"><div class="tier-label">Premium Placement</div><div class="tier-cards"><div class="tier-card"><div class="tier-card-name">2-Page Spread</div><div class="tier-card-price">$795<span>/mo</span></div><div class="tier-card-desc">Editorial-scale presence &mdash; room for image, frameworks, and call to action</div><span class="tier-term-badge">36 months</span></div><div class="tier-card"><div class="tier-card-name">Back Cover</div><div class="tier-card-price">$765<span>/mo</span></div><div class="tier-card-desc">Most prominent real estate &mdash; first thing seen at the mailbox</div><span class="tier-term-badge">36 months</span></div></div><a class="tier-skip" href="#start">Ready? Let's go &rarr;</a></div>
      <div class="tier-panel tier-panel--fullpage" id="tier2"><div class="tier-label">Full Page Options</div><div class="tier-cards"><div class="tier-card"><div class="tier-card-name">Inside Cover / Page 2-3</div><div class="tier-card-price">$675<span>/mo</span></div><div class="tier-card-desc">Premium full-page position</div><span class="tier-term-badge">36 months</span></div><div class="tier-card"><div class="tier-card-name">Full Page Standard</div><div class="tier-card-price">$575<span>/mo</span></div><div class="tier-card-desc">Full-page body ad &mdash; maximum impact</div><span class="tier-term-badge">36 months</span></div></div><a class="tier-skip" href="#start">Ready? Let's go &rarr;</a></div>
      <div class="tier-panel tier-panel--standard" id="tier3"><div class="tier-label">Our Most Popular</div><div class="tier-cards"><div class="tier-card"><div class="tier-card-name">1/2-Page Standard</div><div class="tier-card-price">$330<span>/mo</span></div><div class="tier-card-desc">Available vertical or horizontal</div><span class="tier-term-badge">36 months</span></div><div class="tier-card"><div class="tier-card-name">1/4-Page Premium Sponsorship</div><div class="tier-card-price">$330<span>/mo</span></div><div class="tier-card-desc">Affordable, prominent placement</div><span class="tier-term-badge">36 months</span></div></div><a class="tier-skip" href="#start">Ready? Let's go &rarr;</a></div>
      <div class="tier-panel tier-panel--entry" id="tier4"><div class="tier-label">Entry Options</div><div class="tier-cards"><div class="tier-card"><div class="tier-card-name">1/3-Page Standard</div><div class="tier-card-price">$255<span>/mo</span></div><div class="tier-card-desc">Full-width ad &mdash; sharp, professional look</div><span class="tier-term-badge">36 months</span></div><div class="tier-card"><div class="tier-card-name">1/4-Page Standard</div><div class="tier-card-price">$190<span>/mo</span></div><div class="tier-card-desc">Our entry point &mdash; a great way to get started</div><span class="tier-term-badge">36 months</span></div></div><a class="tier-skip" href="#start">Ready? Let's go &rarr;</a></div>
    </div>
    <div style="text-align:center;"><button id="tierNextBtn">See more options &rarr;</button></div>
    <div id="tierSummary"><table class="rate-table"><thead><tr><th>Ad Size</th><th>12 months</th><th>24 months</th><th class="popular-header">36 months</th></tr></thead><tbody><tr><td>2-Page Spread</td><td>$995</td><td>$895</td><td class="popular-col"><strong>$795</strong></td></tr><tr><td>Back Cover</td><td>$955</td><td>$860</td><td class="popular-col"><strong>$765</strong></td></tr><tr><td>Inside Cover / Pg 2-3</td><td>$845</td><td>$760</td><td class="popular-col"><strong>$675</strong></td></tr><tr><td>Full Page Standard</td><td>$720</td><td>$645</td><td class="popular-col"><strong>$575</strong></td></tr><tr><td>1/2-Page Standard</td><td>$415</td><td>$370</td><td class="popular-col"><strong>$330</strong></td></tr><tr><td>1/4-Page Premium Sponsorship</td><td>$415</td><td>$370</td><td class="popular-col"><strong>$330</strong></td></tr><tr><td>1/3-Page Standard</td><td>$320</td><td>$285</td><td class="popular-col"><strong>$255</strong></td></tr><tr><td>1/4-Page Standard</td><td>$240</td><td>$215</td><td class="popular-col"><strong>$190</strong></td></tr></tbody></table></div>
  </div>
</section>

<section class="slide slide--dark" id="start" data-slide-index="6" data-theme="dark">
  <div class="s8-diagonal"></div>
  <div class="orb" style="width:400px;height:400px;top:-140px;left:-120px;background:var(--gold);opacity:0.09;"></div>
  <div class="orb" style="width:320px;height:320px;bottom:-100px;right:-80px;background:var(--teal);opacity:0.08;"></div>
  <div class="slide-inner" style="display:flex;flex-direction:column;justify-content:center;">
    <div class="section-eyebrow" data-reveal="up" data-delay="50" style="color:rgba(245,241,232,0.6);">Next steps</div>
    <h2 class="s8-title" data-reveal="up" data-delay="100" style="margin-bottom:8px;">Let&rsquo;s put your work in front of the right readers</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="180" style="color:rgba(245,241,232,0.76);max-width:840px;margin-bottom:20px;">Here&rsquo;s what the path forward looks like &mdash; whether we kick things off now or take a beat to think it over.</p>
    <div class="s10-grid" data-reveal="up" data-delay="260">
      <div class="s10-card"><div class="s10-card-label">Ready to move forward</div><ul class="s10-list"><li class="s10-item"><span class="s10-num">1</span><span>Pick the size and term that feels right</span></li><li class="s10-item"><span class="s10-num">2</span><span>Handle the logistics</span></li><li class="s10-item"><span class="s10-num">3</span><span>Lock in the launch issue</span></li><li class="s10-item"><span class="s10-num">4</span><span>Creative kickoff &mdash; we design your ad for you</span></li></ul></div>
      <div class="s10-card"><div class="s10-card-label">Want to think it over</div><ul class="s10-list"><li class="s10-item"><span class="s10-num">1</span><span>Totally fine &mdash; no pressure at all</span></li><li class="s10-item"><span class="s10-num">2</span><span>We&rsquo;ll schedule a quick follow-up</span></li><li class="s10-item"><span class="s10-num">3</span><span>Everything stays the same &mdash; no rush pricing</span></li><li class="s10-item"><span class="s10-num">4</span><span>Creative starts whenever you&rsquo;re ready</span></li></ul></div>
    </div>
    <div class="s10-cta-wrap" data-reveal="scale" data-delay="380" style="margin-top:20px;">
      <a class="s10-cta" href="https://portal.n2pub.com/credit_card_capture" target="_blank" rel="noopener">Set Up Billing</a>
      <a class="s10-cta" href="https://portal.n2pub.com/agreement_builders" target="_blank" rel="noopener" style="background:linear-gradient(135deg, var(--sage), var(--teal-deep));box-shadow:0 8px 30px rgba(46,139,139,0.3);">Build Agreement</a>
      <a class="s10-cta s10-cta--secondary" href="https://pubmanager.n2pub.com/flipbooks/publications/uniquely-you-mideastern-ohio-oh/current" target="_blank" rel="noopener" style="font-size:0.85rem;padding:10px 24px;">Preview the publication</a>
      <div class="s10-cta-sub">Opens the partner portal</div>
    </div>
    <div class="s10-contact" data-reveal="fade" data-delay="440">Will Sigmon &middot; Area Director &middot; will.sigmon@n2co.com</div>
  </div>
  <div class="s8-rainbow"></div>
</section>
`,
  extraScripts: `
  (function() {
    var panels = document.querySelectorAll('.tier-panel');
    var btn = document.getElementById('tierNextBtn');
    var summary = document.getElementById('tierSummary');
    if (panels.length < 4 || !btn) return;
    var labels = ['See more options', 'More options', 'See all rates'];
    var idx = 0;
    var newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    function reveal() {
      idx++;
      if (idx < panels.length) panels[idx].classList.add('tier-visible');
      if (idx < labels.length) newBtn.textContent = labels[idx] + ' \\u2192';
      if (idx >= panels.length) {
        newBtn.style.display = 'none';
        if (summary) summary.classList.add('summary-visible');
      }
    }
    function unreveal() {
      if (idx <= 0) return;
      panels[idx].classList.remove('tier-visible');
      idx--;
      newBtn.style.display = '';
      if (idx < labels.length) newBtn.textContent = labels[idx] + ' \\u2192';
      if (summary) summary.classList.remove('summary-visible');
    }
    newBtn.addEventListener('click', function(e) { e.preventDefault(); reveal(); });
    document.addEventListener('keydown', function(e) {
      var slide = document.querySelector('.slide[data-has-tier-reveal="true"]');
      if (!slide) return;
      var rect = slide.getBoundingClientRect();
      var visible = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
      if (!visible) return;
      if (e.key === 'ArrowRight' && idx < panels.length) { e.preventDefault(); e.stopPropagation(); reveal(); }
      if (e.key === 'ArrowLeft' && idx > 0) { e.preventDefault(); e.stopPropagation(); unreveal(); }
    }, true);
  })();
  `,
};

export default data;
