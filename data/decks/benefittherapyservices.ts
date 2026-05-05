import { createProspectDeck } from "@/lib/deck/prospect-template";

const deck = createProspectDeck({
  title: "Benefit Therapy Services × Uniquely You! — Strategic Partnership",
  partnerName: "Benefit Therapy Services",
  partnerLabel: "Benefit Therapy Services",
  prospectName: "Elizabeth Linde",
  prospectRole: "Marketing and Referral Coordinator",
  theme: {
    paper: "#F6F7F2",
    dark: "#082D34",
    darkMid: "#124852",
    body: "#263E43",
    muted: "#607277",
    accent: "#2E8B8B",
    accentDeep: "#176467",
    secondary: "#87A88A",
    secondaryDeep: "#5E7E61",
    warm: "#D6A85B",
    warmDeep: "#AA7930",
  },
  cover: {
    lineOne: "A trusted referral bridge for",
    lineTwo: "family-centered therapy",
    lineThree: "across the Triangle",
    subtitle:
      "A Uniquely You! partnership built around the parents, caregivers, adults, and referral partners who need Benefit Therapy Services before they know exactly what to ask for.",
    pillars: [
      {
        title: "Referral trust",
        body: "Make the first introduction feel warm before a family ever calls intake.",
        icon: "bridge",
        tone: "accent",
      },
      {
        title: "Family education",
        body: "Turn speech, feeding, OT, PT, and teletherapy questions into plain-language resources.",
        icon: "story",
        tone: "secondary",
      },
      {
        title: "Triangle reach",
        body: "Stay visible in Raleigh, Cary, Apex, Fuquay-Varina, Holly Springs, and nearby communities.",
        icon: "map",
        tone: "warm",
      },
    ],
    footerLeft: "Prepared for Elizabeth Linde",
    footerRight: "Uniquely You! Raleigh-Durham",
  },
  opportunity: {
    heading: "The families who need therapy services rarely make the decision from a single ad",
    quoteBefore: "When a caregiver is worried about speech, feeding, movement, or daily skills, they need",
    quoteEmphasis: "a local team they can trust",
    quoteAfter: "and a simple next step.",
    attribution: "The UY! family-centered partnership thesis",
    timeline: [
      {
        kicker: "Before referral",
        title: "Concern becomes action",
        body: "Parents and caregivers notice a delay, discharge need, school concern, feeding issue, or mobility change and start looking for guidance.",
        icon: "heart",
        tone: "accent",
      },
      {
        kicker: "During search",
        title: "Trust beats awareness",
        body: "Benefit Therapy Services can show up as an expert resource, not just a clinic name in a search result.",
        icon: "shield",
        tone: "secondary",
      },
      {
        kicker: "After intake",
        title: "Education keeps momentum",
        body: "Useful articles and recurring presence reinforce that therapy is a family-centered process, not a one-time appointment.",
        icon: "calendar",
        tone: "warm",
      },
    ],
  },
  platform: {
    heading: "A publication built for caregivers, families, and high-trust local decisions",
    subtitle:
      "Uniquely You! reaches the disability community and the people surrounding them: parents, caregivers, educators, nonprofit leaders, employers, and local families who save practical resources.",
    cards: [
      {
        title: "Therapy explainer series",
        body: "Short, useful pieces on speech milestones, feeding therapy, OT at home, PT after discharge, and when teletherapy fits.",
        icon: "story",
        tone: "accent",
      },
      {
        title: "Referral partner visibility",
        body: "A monthly reminder for pediatricians, schools, nonprofits, care coordinators, and family advocates who influence next steps.",
        icon: "people",
        tone: "secondary",
      },
      {
        title: "Local service clarity",
        body: "Make it easy to understand who Benefit serves, what families should expect, and how to start the intake conversation.",
        icon: "compass",
        tone: "warm",
      },
    ],
  },
  benefits: {
    heading: "What Benefit Therapy Services gets as a UY! partner",
    cards: [
      {
        title: "Warm introductions",
        body: "Monthly print and digital presence that positions Benefit as the family-centered therapy resource for the Triangle.",
        icon: "bridge",
        tone: "accent",
      },
      {
        title: "Education that lowers friction",
        body: "Content families can save, share, and bring to the first call, reducing confusion around services and fit.",
        icon: "story",
        tone: "secondary",
      },
      {
        title: "Service-line storytelling",
        body: "Speech, feeding, OT, PT, and teletherapy can each become approachable stories instead of a static services list.",
        icon: "spark",
        tone: "warm",
      },
      {
        title: "Directory presence",
        body: "A permanent online listing that gives readers and referral partners a clean path back to Benefit after the issue is read.",
        icon: "map",
        tone: "deep",
      },
    ],
  },
  partnership: {
    heading: "Three ways this becomes more than an ad buy",
    subtitle:
      "The right offer for Benefit is not generic awareness. It is a trust stack: recurring visibility, useful education, and referral-ready proof.",
    levels: [
      {
        label: "Visibility",
        title: "Be findable every month",
        body: "A beautiful ad and digital companion that keep Benefit in front of families and referral partners.",
        icon: "megaphone",
        tone: "accent",
        bullets: [
          "Print placement designed for you",
          "Digital companion with intake/contact path",
          "Directory listing for ongoing discovery",
        ],
      },
      {
        label: "Authority",
        title: "Be the guide families save",
        body: "A recurring resource angle where Benefit teaches families how to recognize needs and take the next step.",
        icon: "story",
        tone: "secondary",
        bullets: [
          "Sponsored therapy education column",
          "Speech, feeding, OT, PT topic rotation",
          "Referral partner-friendly resource language",
        ],
      },
      {
        label: "Legacy",
        title: "Be the local therapy story",
        body: "Feature-style storytelling around Benefit's family-centered approach, team culture, and whole-family outcomes.",
        icon: "heart",
        tone: "warm",
        bullets: [
          "Founder/team feature opportunities",
          "Family-centered care narrative",
          "Community amplification across UY! channels",
        ],
      },
    ],
  },
  pricing: {
    heading: "36-Month Partnership — our best rate",
    subtitle:
      "For Benefit, I would open with Authority: a half-page or full-page presence plus useful therapy education that makes referrals easier.",
    premiumNote: "Enough room for a therapy guide, service-line explainer, and family-centered call to action",
    fullPageNote: "Best fit for a recurring education-led presence families can save and share",
    standardNote: "Strong entry for consistent visibility while testing topic resonance",
    entryNote: "A clean way to establish presence before layering in feature content",
  },
  start: {
    heading: "Let’s make Benefit the therapy resource families already feel comfortable calling",
    subtitle:
      "The low-risk next move is to pick one service-line angle, design the first placement, and map the referral path before anything goes to print.",
    steps: [
      "Choose the first editorial angle: speech, feeding, OT, PT, or teletherapy.",
      "Confirm the best contact path for families and referral partners.",
      "Build the first ad/resource draft so Elizabeth can react to something concrete.",
    ],
  },
});

export default deck;
