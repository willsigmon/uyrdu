import type { DeckData } from "@/lib/deck/types";

const data: DeckData = {
  title: "Jenna × Uniquely You! — Partnership Conversation",
  navClass: "dot-nav on-dark",
  navItems: [
    { href: "#cover", label: "Cover" },
    { href: "#why", label: "The Opportunity" },
    { href: "#what", label: "Publication" },
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

/* SECTION SHARED */
.section-eyebrow { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--purple-sec); }
.section-title { font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--dark); max-width: 700px; line-height: 1.15; }
.section-subtitle { font-size: 1.05rem; color: #666; max-width: 640px; line-height: 1.6; }

/* SLIDE 2 — WHY */
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
.donut-wrap { position: relative; }
.donut-center-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); text-align: center; }
.donut-kicker { display: block; font-size: 0.9rem; color: #999; font-weight: 500; }
.donut-value { display: block; font-family: var(--display); font-size: 3rem; color: var(--coral); line-height: 1; }
.s3-hero-number { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); font-family: var(--display); font-size: 3.5rem; line-height: 1; }
.s3-icon-badge { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); }
.s3-viz-label { font-family: var(--display); font-size: 0.85rem; color: var(--dark); margin-bottom: 4px; }
.s3-viz-desc { font-size: 0.9rem; color: #666; line-height: 1.5; max-width: 220px; }
.s3-pillars { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 28px; }
.s3-pillar { background: #fff; border-radius: 16px; padding: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); border-top: 4px solid transparent; }
.s3-pillar--coral { border-top-color: var(--coral); }
.s3-pillar--teal { border-top-color: var(--teal); }
.s3-pillar--gold { border-top-color: var(--gold); }
.s3-pillar-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
.s3-pillar-icon svg { width: 22px; height: 22px; }
.s3-pillar h3 { font-size: 1.1rem; color: var(--dark); margin-bottom: 8px; }
.s3-pillar p { font-size: 0.9rem; color: #666; line-height: 1.6; }

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

/* SLIDE 5 — PARTNERSHIP */
.s7-staircase { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 16px; }
.s7-step {
  display: flex; flex-direction: column; align-items: center; text-align: center;
  padding: 22px 18px; background: #fff; border-radius: 16px; box-shadow: 0 4px 20px rgba(44,11,90,0.06);
  position: relative;
}
.s7-step--1 { border-top: 3px solid var(--coral); margin-top: 24px; }
.s7-step--2 { border-top: 4px solid var(--teal); margin-top: 10px; }
.s7-step--3 { border-top: 5px solid var(--gold); margin-top: -4px; }
.s7-level-label {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  background: var(--dark); color: #fff; font-family: var(--sans); font-size: 0.7rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em; padding: 3px 12px; border-radius: 20px;
}
.s7-step-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; margin-top: 8px; }
.s7-step-icon svg { width: 22px; height: 22px; }
.s7-step h3 { font-size: 1.15rem; color: var(--dark); margin-bottom: 6px; }
.s7-step p { font-size: 0.88rem; color: #666; line-height: 1.5; max-width: 260px; margin-bottom: 10px; }
.s7-step-items { list-style: none; text-align: left; font-size: 0.85rem; color: #555; line-height: 1.7; }
.s7-step-items li { padding-left: 18px; position: relative; }
.s7-step-items li::before { content: '\\2713'; position: absolute; left: 0; color: var(--teal); font-weight: 700; }

/* SLIDE 6 — PRICING */
.pricing-intro { font-size: 1rem; color: #666; max-width: 680px; line-height: 1.6; }
.rate-table-wrap { overflow-x: auto; border-radius: 20px; box-shadow: 0 8px 40px rgba(44,11,90,0.08); }
.rate-table { width: 100%; border-collapse: collapse; font-size: 0.95rem; background: #fff; }
.rate-table thead th {
  padding: 16px 18px; text-align: center; vertical-align: bottom; font-family: var(--sans); font-weight: 600;
  border-bottom: 2px solid rgba(44,11,90,0.06);
}
.rate-table thead th:first-child { text-align: left; }
.th-term { display: block; font-size: 1rem; font-weight: 700; margin-bottom: 2px; }
.th-issues { display: block; font-size: 0.8rem; color: #999; font-weight: 500; }
.th-savings { display: block; font-size: 0.75rem; color: #aaa; font-weight: 400; }
.th-save-badge {
  display: inline-block; margin-top: 4px; padding: 2px 10px; border-radius: 20px;
  background: rgba(18,214,160,0.12); color: var(--teal); font-size: 0.72rem; font-weight: 700;
}
.best-value-head { background: rgba(18,214,160,0.04) !important; }
.best-value { background: rgba(18,214,160,0.03); }
.popular-col { background: rgba(255,199,45,0.04); }
.rate-table tbody td {
  padding: 14px 18px; text-align: center; border-bottom: 1px solid rgba(44,11,90,0.04);
}
.rate-table tbody td:first-child { text-align: left; }
.td-size-name { display: block; font-weight: 700; color: var(--dark); font-size: 1rem; }
.td-size-desc { display: block; font-size: 0.78rem; color: #999; margin-top: 2px; }
.td-price { font-family: var(--display); font-size: 1.3rem; color: var(--dark); }
.td-per { font-size: 0.78rem; color: #999; }
.pricing-notes { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-top: 16px; }
.pricing-note {
  background: #fff; border-radius: 12px; padding: 16px 18px; font-size: 0.85rem; color: #555; line-height: 1.5;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}
.pricing-note strong { display: block; color: var(--dark); margin-bottom: 4px; font-size: 0.88rem; }
.pricing-note--highlight { background: var(--lavender); border: 1px solid rgba(110,38,142,0.1); }

/* SLIDE 7 — NEXT STEPS */
.s8-diagonal {
  position: absolute; top: -10%; left: -5%; width: 110%; height: 120%;
  background: linear-gradient(165deg, rgba(255,107,107,0.04) 0%, transparent 40%, rgba(18,214,160,0.03) 100%);
  pointer-events: none; z-index: 0;
}
.s8-title { font-size: clamp(2rem, 3.5vw, 3rem); color: #fff; line-height: 1.1; }
.s8-rainbow {
  position: absolute; bottom: 0; left: 0; width: 100%; height: 4px;
  background: linear-gradient(90deg, #12D6A0, #FFC72D, #FF6B6B, #5EA8FF);
}
.s10-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-bottom: 16px; }
.s10-card {
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 28px;
}
.s10-card-label { font-family: var(--display); font-size: 1.1rem; color: #fff; margin-bottom: 16px; }
.s10-list { list-style: none; }
.s10-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; color: rgba(255,247,241,0.8); font-size: 0.95rem; line-height: 1.5; }
.s10-num {
  flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center; font-family: var(--display); font-size: 0.8rem; color: var(--gold);
}
.s10-cta-wrap { text-align: center; margin-top: 8px; }
.s10-cta {
  display: inline-block; padding: 14px 40px; border-radius: 60px; font-family: var(--display); font-size: 1.1rem;
  color: var(--dark); background: linear-gradient(135deg, var(--gold), var(--coral)); text-decoration: none;
  box-shadow: 0 8px 30px rgba(255,107,107,0.3); transition: transform 0.3s var(--spring), box-shadow 0.3s ease;
}
.s10-cta:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 12px 40px rgba(255,107,107,0.4); }
.s10-cta-sub { font-size: 0.8rem; color: rgba(255,247,241,0.4); margin-top: 8px; }
.s10-contact { text-align: center; font-size: 0.85rem; color: rgba(255,247,241,0.5); margin-top: 10px; }

/* PORTRAIT WARNING */
#portrait-warning {
  display: none; position: fixed; inset: 0; z-index: 10000; background: var(--dark);
  flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;
}
.pw-title { font-family: var(--display); font-size: 1.4rem; color: #fff; margin-bottom: 12px; }
.pw-body { font-size: 1rem; color: rgba(255,247,241,0.6); max-width: 280px; line-height: 1.6; }
@media (max-width: 768px) and (orientation: portrait) {
  #portrait-warning { display: flex; }
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .slide { padding: 24px 28px; }
  .s3-infographic, .s3-pillars, .s7-staircase { grid-template-columns: 1fr; }
  .s2-timeline { flex-direction: column; gap: 20px; }
  .s4-chart { flex-wrap: wrap; }
  .s10-grid, .s4-context, .pricing-notes { grid-template-columns: 1fr; }
  .cover-pillars { flex-direction: column; gap: 16px; }
  .dot-nav { display: none; }
  .s7-step--1, .s7-step--2, .s7-step--3 { margin-top: 0; }
  .rate-table { font-size: 0.85rem; }
}
`,
  slidesHtml: `
<!-- ============================================================
     SLIDE 1: COVER
     ============================================================ -->
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
        <svg class="partner-icon" viewBox="0 0 24 24" fill="none" stroke="rgba(18,214,160,0.8)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        Already Autism Health
      </span>
    </div>

    <h1 class="cover-title">
      <span class="line-1" data-reveal="up" data-delay="200">Already Autism</span>
      <span class="line-2" data-reveal="up" data-delay="300">Health</span>
      <span class="line-cross" data-reveal="fade" data-delay="500">- - - partnership with - - -</span>
      <span class="line-uy" data-reveal="up" data-delay="600">Uniquely You!</span>
    </h1>

    <p class="cover-subtitle">
      <span class="text-reveal-mask">
        <span class="text-reveal-inner">Your Raleigh clinic has capacity. The families who need you are in our readership. A recurring presence in the disability community's own magazine helps them find you before the waitlist, not after.</span>
      </span>
    </p>

    <div class="cover-pillars" data-reveal="up" data-delay="900">
      <div class="cover-pillar">
        <div class="cover-pillar-icon cover-pillar-icon--coral">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--coral)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
          </svg>
        </div>
        <span class="cover-pillar-label cover-pillar-label--coral">Visibility</span>
      </div>
      <div class="cover-pillar">
        <div class="cover-pillar-icon cover-pillar-icon--teal">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        </div>
        <span class="cover-pillar-label cover-pillar-label--teal">Referrals</span>
      </div>
      <div class="cover-pillar">
        <div class="cover-pillar-icon cover-pillar-icon--gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
        </div>
        <span class="cover-pillar-label cover-pillar-label--gold">Capacity</span>
      </div>
    </div>

    <div class="cover-footer" data-reveal="fade" data-delay="1100">
      <span>Prepared for Jenna, Regional Director &nbsp;|&nbsp; April 2026</span>
      <span>Will Sigmon, Area Director &middot; Uniquely You! Raleigh Metro</span>
    </div>
  </div>
</section>


<!-- ============================================================
     SLIDE 2: THE OPPORTUNITY
     ============================================================ -->
<section class="slide slide--cream" id="why" data-slide-index="1" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0">The Opportunity</div>
    <h2 class="section-title" data-reveal="up" data-delay="100" style="text-align:center;margin-left:auto;margin-right:auto;">You have capacity. Families don't know you're there.</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="200" style="text-align:center;margin-left:auto;margin-right:auto;">Your Raleigh Six Forks clinic is running below capacity right now. The families who need ABA are in the same five counties we mail to every month.</p>

    <div class="s2-quote" data-reveal="scale" data-delay="300">
      "ABA is one of the most searched, least understood services in the disability space. <span class="s2-quote-em">The providers who are already visible and trusted are the ones who get the call when a family finally gets a diagnosis.</span>"
    </div>
    <p class="s2-author" data-reveal="fade" data-delay="500">-- On why awareness before crisis matters</p>

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
        <div class="s2-tl-title">Capacity gap</div>
        <div class="s2-tl-desc">Your Raleigh clinic has room for more families right now. A monthly presence in a trusted community magazine turns unused capacity into filled caseloads.</div>
      </div>

      <div class="s2-tl-item" data-reveal="up" data-delay="800">
        <div class="s2-tl-dot s2-tl-dot--teal">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
          </svg>
        </div>
        <div class="s2-tl-title">Right geography</div>
        <div class="s2-tl-desc">10,000+ households across Wake, Durham, Orange, Johnston, and Chatham counties. Families already navigating IEPs, evaluations, and therapy decisions every month.</div>
      </div>

      <div class="s2-tl-item" data-reveal="up" data-delay="1000">
        <div class="s2-tl-dot s2-tl-dot--gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        </div>
        <div class="s2-tl-title">B2B network effect</div>
        <div class="s2-tl-desc">We're connecting ABA clinics, adaptive equipment makers, service dog trainers, and therapists. Your clinic becomes part of a referral ecosystem, not just an ad in a magazine.</div>
      </div>
    </div>
  </div>
</section>


<!-- ============================================================
     SLIDE 3: WHAT UY BRINGS
     ============================================================ -->
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
        <div class="s3-viz-desc">Free monthly print + digital</div>
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
        <h3>Family Spotlight Stories</h3>
        <p>Real families in the Triangle navigating disability with courage. Profiles that celebrate their journey and connect them to the community.</p>
      </div>
      <div class="s3-pillar s3-pillar--teal" data-reveal="up" data-delay="850">
        <div class="s3-pillar-icon" style="background:rgba(18,214,160,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
          </svg>
        </div>
        <h3>Resource Directory</h3>
        <p>Every issue includes a curated directory of local providers, clinics, and services. Your listing lives alongside the resources families are already using.</p>
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
        <p>Policy updates, accessibility news, and employer spotlights. Content that moves the needle on inclusion across the Raleigh metro.</p>
      </div>
    </div>
  </div>
</section>


<!-- ============================================================
     SLIDE 4: CREDIBILITY
     ============================================================ -->
<section class="slide slide--cream" id="credibility" data-slide-index="3" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0">Credibility</div>
    <h2 class="section-title" data-reveal="up" data-delay="100">Why this publication has credibility</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="200">Part of a 36-market national network with real reach and real results.</p>

    <div class="s4-chart" id="s4Chart">
      <div class="s4-bar-col" data-reveal="up" data-delay="300">
        <div class="s4-bar-value" style="color:var(--coral);">800+</div>
        <div class="s4-bar-track" style="height:120px;background:rgba(255,107,107,0.08);">
          <div class="s4-bar-fill" style="background:linear-gradient(to top,var(--coral),rgba(255,107,107,0.9));position:absolute;bottom:0;width:100%;height:108px;"></div>
        </div>
        <div class="s4-bar-label">Publications nationwide</div>
      </div>
      <div class="s4-bar-col" data-reveal="up" data-delay="450">
        <div class="s4-bar-value" style="color:var(--teal);">$163M</div>
        <div class="s4-bar-track" style="height:120px;background:rgba(18,214,160,0.08);">
          <div class="s4-bar-fill" style="background:linear-gradient(to top,var(--teal),rgba(18,214,160,0.9));position:absolute;bottom:0;width:100%;height:96px;"></div>
        </div>
        <div class="s4-bar-label">Annual spending power reached</div>
      </div>
      <div class="s4-bar-col" data-reveal="up" data-delay="600">
        <div class="s4-bar-value" style="color:var(--gold);">$30M</div>
        <div class="s4-bar-track" style="height:120px;background:rgba(255,199,45,0.08);">
          <div class="s4-bar-fill" style="background:linear-gradient(to top,var(--gold),rgba(255,199,45,0.9));position:absolute;bottom:0;width:100%;height:72px;"></div>
        </div>
        <div class="s4-bar-label">N2GIVES — donated to fight human trafficking</div>
      </div>
      <div class="s4-bar-col" data-reveal="up" data-delay="750">
        <div class="s4-bar-value" style="color:var(--purple-sec);">36</div>
        <div class="s4-bar-track" style="height:120px;background:rgba(110,38,142,0.06);">
          <div class="s4-bar-fill" style="background:linear-gradient(to top,var(--purple-sec),rgba(110,38,142,0.85));position:absolute;bottom:0;width:100%;height:84px;"></div>
        </div>
        <div class="s4-bar-label">Markets across the country</div>
      </div>
    </div>

    <div class="s4-context">
      <div class="s4-context-card s4-context-card--quote" data-reveal="left" data-delay="900">
        <h3>Proven infrastructure</h3>
        <p>This isn't a startup experiment. N2 has 20+ years of operational infrastructure, editorial standards, and a proven advertising model refined across 36 cities. The Raleigh Metro edition benefits from all of it on day one.</p>
      </div>
      <div class="s4-context-card s4-context-card--aside" data-reveal="right" data-delay="1000">
        <h3>Why ABA is Tier 1</h3>
        <p>ABA therapy is one of our highest-priority advertiser categories. Families search for it constantly, it's misunderstood in mainstream media, and the providers who show up consistently in trusted community channels fill caseloads faster.</p>
      </div>
    </div>
  </div>
</section>


<!-- ============================================================
     SLIDE 5: PARTNERSHIP
     ============================================================ -->
<section class="slide slide--cream" id="partnership" data-slide-index="4" data-theme="light">
  <div class="slide-inner">
    <div class="section-eyebrow" data-reveal="up" data-delay="0">Partnership</div>
    <h2 class="section-title" data-reveal="up" data-delay="100">What a strong partnership looks like</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="200">Three tiers of engagement — each one reinforces the next.</p>

    <div class="s7-staircase">
      <div class="s7-step s7-step--1" data-reveal="up" data-delay="400">
        <div class="s7-level-label">Foundation</div>
        <div class="s7-step-icon" style="background:rgba(255,107,107,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--coral)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
            <path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>
          </svg>
        </div>
        <h3>Be Present</h3>
        <p>Consistent, professionally designed ad in every issue — we design it for you.</p>
        <ul class="s7-step-items">
          <li>Print ad updated monthly if you want</li>
          <li>Digital edition with clickable link</li>
          <li>Logo in the provider directory</li>
        </ul>
      </div>

      <div class="s7-step s7-step--2" data-reveal="up" data-delay="600">
        <div class="s7-level-label">Engagement</div>
        <div class="s7-step-icon" style="background:rgba(18,214,160,0.1);">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>
          </svg>
        </div>
        <h3>Be Useful</h3>
        <p>Value-first content that helps families understand ABA before they ever call.</p>
        <ul class="s7-step-items">
          <li>ABA myth-busting explainers</li>
          <li>Parent guides to evaluations &amp; intake</li>
          <li>School transition resources</li>
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
        <p>Feature stories that put real families front and center — professionally photographed, editorially written, the kind of content people keep.</p>
        <ul class="s7-step-items">
          <li>Two feature stories per year</li>
          <li>Professional photography included</li>
          <li>Social media amplification</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<!-- ============================================================
     SLIDE 6: PRICING
     ============================================================ -->
<section class="slide slide--cream" id="pricing" data-slide-index="5" data-theme="light">
  <div class="orb" style="width:360px;height:360px;top:-120px;right:-120px;background:var(--gold);opacity:0.12;"></div>
  <div class="orb" style="width:320px;height:320px;bottom:-120px;left:-120px;background:var(--teal);opacity:0.08;"></div>

  <div class="slide-inner" style="justify-content:center;">
    <div class="section-eyebrow" data-reveal="up" data-delay="50">Investment</div>
    <h2 class="section-title" data-reveal="up" data-delay="100" style="max-width:none;">Simple pricing. Longer commitments save more.</h2>
    <p class="pricing-intro" data-reveal="up" data-delay="180">Every ad size, every term length, billed monthly. Pick the placement and runway that fit best — no upfront lump sum required.</p>

    <div class="rate-table-wrap" data-reveal="up" data-delay="260">
      <table class="rate-table">
        <thead>
          <tr>
            <th style="background:var(--dark);color:#fff;border-radius:16px 0 0 0;">
              <span class="th-term">Ad size</span>
              <span class="th-issues" style="color:#fff;">Monthly rate by term</span>
            </th>
            <th>
              <span class="th-term">Standard</span>
              <span class="th-issues">12 issues</span>
              <span class="th-savings">12-month commitment</span>
            </th>
            <th class="best-value-head">
              <span class="th-term">Add a story</span>
              <span class="th-issues">24 issues</span>
              <span class="th-savings">24-month commitment</span>
              <span class="th-save-badge">Save ~11%</span>
              <span class="th-savings">+ 1 feature story</span>
            </th>
            <th class="popular-col">
              <span class="th-term">Most popular</span>
              <span class="th-issues">36 issues</span>
              <span class="th-savings">36-month commitment</span>
              <span class="th-save-badge">Save ~25%</span>
              <span class="th-savings">+ 2 feature stories</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="td-size-name">1/4 Page</span><span class="td-size-desc">3.5" &times; 4.875" — strong presence</span></td>
            <td><span class="td-price">$395</span><span class="td-per">/ month</span></td>
            <td class="best-value"><span class="td-price">$350</span><span class="td-per">/ month</span></td>
            <td class="popular-col"><span class="td-price">$295</span><span class="td-per">/ month</span></td>
          </tr>
          <tr>
            <td><span class="td-size-name">1/2 Page</span><span class="td-size-desc">7.25" &times; 4.875" — dominant layout</span></td>
            <td><span class="td-price">$495</span><span class="td-per">/ month</span></td>
            <td class="best-value"><span class="td-price">$450</span><span class="td-per">/ month</span></td>
            <td class="popular-col"><span class="td-price">$395</span><span class="td-per">/ month</span></td>
          </tr>
          <tr>
            <td><span class="td-size-name">Full Page</span><span class="td-size-desc">8.75" &times; 11.5" — maximum impact</span></td>
            <td><span class="td-price">$695</span><span class="td-per">/ month</span></td>
            <td class="best-value"><span class="td-price">$650</span><span class="td-per">/ month</span></td>
            <td class="popular-col"><span class="td-price">$595</span><span class="td-per">/ month</span></td>
          </tr>
          <tr>
            <td><span class="td-size-name">Back Cover</span><span class="td-size-desc">9" &times; 7.25" — premium, first thing seen</span></td>
            <td><span class="td-price">$795</span><span class="td-per">/ month</span></td>
            <td class="best-value"><span class="td-price">$750</span><span class="td-per">/ month</span></td>
            <td class="popular-col"><span class="td-price">$695</span><span class="td-per">/ month</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pricing-notes" data-reveal="up" data-delay="360">
      <div class="pricing-note">
        <strong>Always billed monthly</strong>
        No upfront lump sum. The commitment length lowers the monthly rate — you pay less per issue, not more up front.
      </div>
      <div class="pricing-note">
        <strong>Every payment method</strong>
        Credit card, ACH, e-check, or invoice. Whatever works for your organization's process.
      </div>
      <div class="pricing-note pricing-note--highlight">
        <strong>Included at every tier</strong>
        Print placement, digital-edition exposure, directory listing, ad design support, and a feature story bonus at 24+ issues.
      </div>
    </div>
  </div>
</section>


<!-- ============================================================
     SLIDE 7: NEXT STEPS
     ============================================================ -->
<section class="slide slide--dark" id="start" data-slide-index="6" data-theme="dark">
  <div class="s8-diagonal"></div>
  <div class="orb" style="width:400px;height:400px;top:-140px;left:-120px;background:var(--gold);opacity:0.06;"></div>
  <div class="orb" style="width:320px;height:320px;bottom:-100px;right:-80px;background:var(--coral);opacity:0.05;"></div>

  <div class="slide-inner" style="display:flex;flex-direction:column;justify-content:center;">
    <div class="section-eyebrow" data-reveal="up" data-delay="50" style="color:rgba(255,247,241,0.58);">Decision path</div>
    <h2 class="s8-title" data-reveal="up" data-delay="100" style="margin-bottom:8px;">Decision and approval path</h2>
    <p class="section-subtitle" data-reveal="up" data-delay="180" style="color:rgba(255,247,241,0.74);max-width:900px;margin-bottom:20px;">If the scope feels right, pricing and the approval path can be confirmed here. If corporate or leadership review is required, the next conversation can be scheduled before leaving the room.</p>

    <div class="s10-grid" data-reveal="up" data-delay="260">
      <div class="s10-card">
        <div class="s10-card-label">If approved to move forward</div>
        <ul class="s10-list">
          <li class="s10-item"><span class="s10-num">1</span><span>Selected scope: 12, 24, or 36 issues</span></li>
          <li class="s10-item"><span class="s10-num">2</span><span>Billing contact confirmed</span></li>
          <li class="s10-item"><span class="s10-num">3</span><span>Story angle + primary CTA confirmed</span></li>
          <li class="s10-item"><span class="s10-num">4</span><span>First issue and creative brief timing confirmed</span></li>
        </ul>
      </div>

      <div class="s10-card">
        <div class="s10-card-label">If additional approval is needed</div>
        <ul class="s10-list">
          <li class="s10-item"><span class="s10-num">1</span><span>Corporate or leadership approver identified</span></li>
          <li class="s10-item"><span class="s10-num">2</span><span>Follow-up meeting set with that contact included</span></li>
          <li class="s10-item"><span class="s10-num">3</span><span>Same selected scope carried into that conversation</span></li>
          <li class="s10-item"><span class="s10-num">4</span><span>Creative planning begins after approval</span></li>
        </ul>
      </div>
    </div>

    <div class="s10-cta-wrap" data-reveal="scale" data-delay="380" style="margin-top:20px;">
      <a class="s10-cta" href="https://portal.n2pub.com/credit_card_capture" target="_blank" rel="noopener">Ready to get started?</a>
      <div class="s10-cta-sub">Opens Compass Portal authorization</div>
    </div>
    <div class="s10-contact" data-reveal="fade" data-delay="440">Will Sigmon &middot; Area Director &middot; will.sigmon@n2co.com</div>
  </div>

  <div class="s8-rainbow"></div>
</section>
`,
};

export default data;
