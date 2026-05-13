import { createProspectDeck } from "@/lib/deck/prospect-template";

const deck = createProspectDeck({
  title: "Integrity Ink × Uniquely You! — Community Partnership",
  partnerName: "Integrity Ink Administrative & Mobile Notary Services",
  partnerLabel: "Integrity Ink",
  prospectName: "Jessica Booker",
  prospectRole: "Notary Public",
  theme: {
    paper: "#F8F4EC",
    dark: "#172033",
    darkMid: "#263650",
    body: "#2E394A",
    muted: "#6B7484",
    accent: "#C28A2E",
    accentDeep: "#8F621D",
    secondary: "#3D87A3",
    secondaryDeep: "#246278",
    warm: "#D75D45",
    warmDeep: "#A74231",
  },
  cover: {
    lineOne: "A trusted document path for",
    lineTwo: "families at sensitive moments",
    lineThree: "across the Triangle",
    subtitle:
      "A Uniquely You! partnership built around Integrity Ink's mobile notary and document-logistics support for families, attorneys, caregivers, and local professionals when details matter.",
    pillars: [
      {
        title: "Mobile relief",
        body: "Bring notarization to homes, offices, hospitals, care facilities, and other high-friction settings.",
        icon: "home",
        tone: "accent",
      },
      {
        title: "Document confidence",
        body: "Help readers understand what to prepare before estate, financial, apostille, or loan-signing documents are executed.",
        icon: "shield",
        tone: "secondary",
      },
      {
        title: "Triangle coverage",
        body: "Stay visible to families and referral partners across Raleigh, Durham, Cary, Chapel Hill, and nearby communities.",
        icon: "map",
        tone: "warm",
      },
    ],
    footerLeft: "Prepared for Jessica Booker",
    footerRight: "Uniquely You! Raleigh-Durham",
  },
  opportunity: {
    heading: "The notary need often appears when a family is already under pressure",
    quoteBefore: "When paperwork hits during a care transition, estate plan, closing, or urgent deadline, families need",
    quoteEmphasis: "a calm professional who can bring the process to them",
    quoteAfter: "and reduce the back-and-forth.",
    attribution: "The UY! high-trust services thesis",
    timeline: [
      {
        kicker: "Trigger moment",
        title: "Paperwork cannot wait",
        body: "Estate, healthcare, real estate, apostille, and financial documents become urgent before a family has time to compare providers.",
        icon: "calendar",
        tone: "accent",
      },
      {
        kicker: "Hidden barrier",
        title: "Logistics create stress",
        body: "Printing, organizing, ID readiness, travel, scan-backs, and delivery can create more friction than the signature itself.",
        icon: "compass",
        tone: "secondary",
      },
      {
        kicker: "Trust outcome",
        title: "Execution feels handled",
        body: "Integrity Ink can be remembered as the local mobile option that respects sensitive documents and sensitive moments.",
        icon: "shield",
        tone: "warm",
      },
    ],
  },
  platform: {
    heading: "A publication built for caregivers, families, and referral-driven local trust",
    subtitle:
      "Uniquely You! reaches disability-community families and the people around them: caregivers, attorneys, care coordinators, realtors, nonprofits, employers, and local decision-makers who save practical resources.",
    cards: [
      {
        title: "Prepared-family guide",
        body: "Simple checklists on IDs, witnesses, document readiness, printing, medical-setting logistics, and what a notary can and cannot do.",
        icon: "story",
        tone: "accent",
      },
      {
        title: "Referral partner visibility",
        body: "Recurring presence with estate attorneys, elder-care teams, realtors, care facilities, and community navigators who influence the first call.",
        icon: "people",
        tone: "secondary",
      },
      {
        title: "Mobile service clarity",
        body: "Make it easy for families to understand where Jessica travels, what documents fit, and how to book without unnecessary delays.",
        icon: "compass",
        tone: "warm",
      },
    ],
  },
  benefits: {
    heading: "What Integrity Ink gets as a UY! partner",
    cards: [
      {
        title: "Trust before the call",
        body: "A recurring local presence that makes mobile notarization feel safe before someone shares sensitive financial or estate paperwork.",
        icon: "shield",
        tone: "accent",
      },
      {
        title: "Education that reduces friction",
        body: "Plain-language content helps families arrive prepared, lowering reschedules, incomplete packages, and avoidable confusion.",
        icon: "story",
        tone: "secondary",
      },
      {
        title: "Healthcare-setting fit",
        body: "UY! can highlight the practical value of coming to homes, hospitals, and care facilities when travel is hard or impossible.",
        icon: "heart",
        tone: "warm",
      },
      {
        title: "Directory recall",
        body: "A permanent online listing gives readers and referral partners a clean path back when a document need becomes immediate.",
        icon: "map",
        tone: "deep",
      },
    ],
  },
  partnership: {
    heading: "Three ways this becomes more than a notary ad",
    subtitle:
      "The strongest Integrity Ink offer stacks visibility, education, and referral trust so families remember Jessica before the urgent paperwork moment.",
    levels: [
      {
        label: "Visibility",
        title: "Be the name families save",
        body: "A polished placement and digital companion that keep Integrity Ink findable when paperwork becomes time-sensitive.",
        icon: "megaphone",
        tone: "accent",
        bullets: [
          "Print placement designed around mobile relief",
          "Digital companion with booking/contact path",
          "Directory presence for ongoing discovery",
        ],
      },
      {
        label: "Authority",
        title: "Be the document-readiness guide",
        body: "A practical education angle that makes notarization less intimidating without crossing into legal advice.",
        icon: "story",
        tone: "secondary",
        bullets: [
          "What to prepare before a mobile appointment",
          "Medical, estate, apostille, and loan-signing readiness",
          "Referral-partner-friendly checklist language",
        ],
      },
      {
        label: "Legacy",
        title: "Be the trusted Triangle operator",
        body: "Feature-style storytelling around Jessica's precision, professionalism, and the sensitive moments Integrity Ink helps families navigate.",
        icon: "heart",
        tone: "warm",
        bullets: [
          "Founder profile and service philosophy",
          "Care-setting and family logistics story",
          "Community amplification across UY! channels",
        ],
      },
    ],
  },
  pricing: {
    heading: "36-Month Partnership — our best rate",
    subtitle:
      "For Integrity Ink, I would open with Authority: a half-page or full-page presence tied to a document-readiness guide families and referral partners can save.",
    premiumNote: "Enough room for a checklist, sensitive-moment story, and clear appointment call to action",
    fullPageNote: "Best fit for explaining mobile service, document logistics, and care-setting convenience",
    standardNote: "Strong entry for consistent visibility while testing which document scenarios resonate",
    entryNote: "A clean way to establish presence before layering in feature content",
  },
  start: {
    heading: "Let’s make Integrity Ink the calm first call when paperwork matters",
    subtitle:
      "The low-risk next move is to choose one document-readiness angle, confirm the booking path, and design the first placement before anything goes to print.",
    steps: [
      "Choose the first resource angle: medical setting, estate documents, apostille, loan signing, or general mobile notary readiness.",
      "Confirm the best CTA: booking page, phone, email, or a dedicated Integrity Ink landing path.",
      "Build the first ad/resource draft so Jessica can react to a concrete concept.",
    ],
  },
});

export default deck;
