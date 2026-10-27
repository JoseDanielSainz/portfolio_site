// All portfolio content lives here. To add a project, add an object to `projects`.
//
// - `draft: true` hides the project in production builds (it still shows in `npm run dev`
//   with a "capture pending" tile), so you can stage entries before their media is ready.
// - `media.loop` is a short silent clip for the index tile; `media.full` is the full piece
//   (with audio) shown on the project page.
// - Lines marked TODO(Daniel) need your confirmation before they go live.

export type Discipline = "interfaces" | "systems" | "motion";

export const disciplines: { id: Discipline; label: string }[] = [
  { id: "interfaces", label: "Interfaces" },
  { id: "systems", label: "Systems" },
  { id: "motion", label: "Motion" },
];

export type Media =
  | { type: "video"; loop: string; full?: string; poster: string; alt: string }
  /** `thumb` is an optional separate crop for the index tile (16:10); `src` is shown on the project page. */
  | { type: "image"; src: string; thumb?: string; alt: string }
  | { type: "embed"; src: string; poster: string; alt: string };

/** A media item inside a case study section. Same shapes as `Media`, plus a caption and frame. */
export type SectionMedia = Media & {
  caption?: string;
  /** "mobile" shows a phone-width capture in a narrow rounded frame instead of full width. */
  frame?: "mobile";
  /** Max display width in px, for tall or low-resolution images that shouldn't stretch to full width. */
  width?: number;
};

/**
 * A block of the project page. Everything except the heading is optional, so a section can be
 * text only, images only (e.g. `{ heading: "Screens", media: [...] }`), or both.
 * One media item spans the full width; two or more sit side by side in a 2-column grid.
 */
export type Section = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  media?: SectionMedia[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  disciplines: Discipline[];
  role: string;
  stack: string[];
  links?: { label: string; href: string }[];
  media?: Media;
  /** One concrete outcome, shown under the tile. Only real, shareable numbers. */
  outcome?: string;
  featured?: boolean;
  draft?: boolean;
  /** Never shown, even in dev. For retired projects you want to keep around. */
  hidden?: boolean;
  /** Shown in the project page details, e.g. "In progress". */
  status?: string;
  body?: Section[];
};

export const projects: Project[] = [
  {
    slug: "agentes",
    title: "Agentes ClickBalance",
    summary:
      "Referral platform that turns independent sales agents into an acquisition channel.",
    year: "2025–now",
    disciplines: ["interfaces", "systems"],
    role: "Product design, full-stack build, lifecycle marketing",
    stack: ["Next.js", "Supabase", "HubSpot", "Meta Conversions API", "GTM"],
    outcome: "Monthly agent activation from 4% to 10%",
    featured: true,
    draft: false, // TODO(Daniel): captures done. Confirm the copy below, then remove this line
    media: {
      type: "image",
      src: "/work/agentes/home.webp",
      thumb: "/work/agentes/tile.webp",
      alt: "Agent home in the Agentes platform: refer a client, invoice commissions, top agents leaderboard.",
    },
    body: [
      {
        heading: "The problem",
        paragraphs: [
          "The idea behind the program: people who already know business owners refer them to ClickBalance and earn a commission. Our sales team handles the demo and the close.",
          "Ads still play a part, but they recruit agents instead of customers. One agent can bring in clients for months, and commissions are tied to results: a booked demo or a closed sale. To make that work, agents need a place to sign up, learn the product, register referrals and get paid, and the team needs to see which agents are actually producing.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "I designed and built the platform end to end, and I run the program's acquisition and lifecycle marketing.",
        ],
        list: [
          "An agent lifecycle (registered → certified → active → closed a sale → inactive) synced to HubSpot, so sales and marketing work from the same stages.",
          "A learning and certification module so agents can explain the product before they pitch it.",
          "Commissions with invoice upload, and admin views where every state change is a single, explicit action.",
          "A reports dashboard showing agent activity and conversion.",
          "Meta Pixel and Conversions API tracking, and a six-stage lifecycle email program triggered by each agent's stage.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          // TODO(Daniel): add the US dollar equivalent of MXN $3M
          "More than 1,800 agents have registered since launch, and their referrals account for MXN $3M in active pipeline.",
          "Most agents sign up and never refer anyone, which is normal for referral programs. That makes activation, the share of agents who refer at least one client, the number worth working on. Monthly activation went from 4% in April to 10% in September after three changes:",
        ],
        list: [
          // TODO(Daniel): confirm these three describe what you actually changed
          "Ads aimed at recruiting people likely to refer, not just people likely to sign up.",
          "More transparency for agents: clear commission terms and visibility into where each referral stands.",
          "Rewritten course material, so agents can explain the product with confidence before they pitch it.",
        ],
        media: [
          {
            type: "image",
            src: "/work/agentes/reports.webp",
            alt: "Reports dashboard: agent funnel by stage, pipeline and revenue, agent growth and referred leads per month.",
            caption: "The reports view the team uses to see which agents are actually producing. Shown with demo data.",
          },
        ],
      },
    ],
  },
  {
    slug: "clickbalance-one-site",
    title: "ClickBalance One website",
    summary:
      "Marketing site and demo funnel for an AI-first business platform.",
    year: "2026",
    disciplines: ["interfaces", "systems"],
    role: "Design, front-end build, conversion tracking",
    stack: ["Next.js", "Tailwind", "HubSpot", "GTM", "GA4"],
    links: [{ label: "clickbalance.one", href: "https://clickbalance.one" }],
    featured: true,
    draft: false, // TODO(Daniel): hero capture done. Add the form/scheduler flow and mobile, then remove this line
    media: {
      type: "image",
      src: "/work/clickbalance-one-site/home.webp",
      thumb: "/work/clickbalance-one-site/tile.webp",
      alt: "ClickBalance One homepage: headline, demo call to action and a preview of the product dashboard with an AI prompt.",
    },
    body: [
      {
        heading: "What I did",
        paragraphs: [
          "Designed and built the launch site for ClickBalance One. The site's job is to inform business owners about the product and to have them book a demo with the sales team.",
        ],
        list: [
          "Native demo form posting to HubSpot through its API, followed by a HubSpot Meetings scheduler.",
          "End-to-end conversion tracking with GTM and GA4 for Google Ads.",
          "SEO and GEO optimization to get more organic leads."
        ],
      },
      {
        heading: "What I'm testing next",
        paragraphs: [
          // TODO(Daniel): fill in once you have numbers you can share
          "I constantly update the site with new information and design tweaks to test what has a higher impact on conversion rates.",
        ],
      },
    ],
  },
  {
    slug: "lead-agent",
    title: "AI lead qualifying agent",
    summary:
      "Follows up and qualifies leads through WhatsApp or voice, then hands off to a sales rep.",
    year: "2026",
    disciplines: ["systems"],
    role: "Design and build",
    stack: ["Next.js", "Supabase", "HubSpot", "Twilio", "ElevenLabs"],
    status: "In progress",
    draft: false, // TODO(Daniel): decide whether to publish while in progress
    media: {
      type: "image",
      src: "/work/lead-agent/flow.svg",
      alt: "Flow diagram: the lead fills the form, the bot reaches out, asks three questions and offers the demo; a sales rep takes over when needed and gives the demo.",
    },
    body: [
      {
        heading: "The problem",
        paragraphs: [
          "Every demo request from the website waits for a sales rep to call. Leads that arrive at night or on a weekend wait until the next business day, and by then some of them don't remember signing up. When a rep does get through, the first minutes go to the same qualification questions on every call.",
        ],
      },
      {
        heading: "The approach",
        paragraphs: [
          "The form asks how the lead wants to be contacted. If they pick now, the bot writes on WhatsApp within a minute or calls within five, asks three questions (industry, website, what they want to solve) and sends the calendar link. Once the demo is booked, it sends reminders 24 hours and 2 hours before.",
          "A sales rep takes over whenever the bot shouldn't keep going: the lead chose to be contacted later, stops replying, asks for a person, or asks something the bot can't answer. Either way, the rep gives the demo with everything the bot collected already in HubSpot.",
          "I'm testing two versions of the form. In one, the form asks who the lead is and the bot asks what they need. In the other, the form only asks for contact details and the bot does all the qualifying.",
        ],
      },
      {
        heading: "What success looks like",
        paragraphs: ["Three numbers, measured against how leads are handled today:"],
        list: [
          "Fewer leads who don't recognize having registered.",
          "Shorter time from sign-up to first contact, especially outside business hours.",
          "Less repeated qualification work for sales reps.",
        ],
      },
      {
        heading: "Working document",
        paragraphs: ["The original map of version A, in Spanish."],
        media: [
          {
            type: "image",
            src: "/work/lead-agent/flow-a-working.webp",
            alt: "Original flow chart in Spanish for version A of the lead flow, with the demo form beside it.",
            width: 640,
          },
        ],
      },
    ],
  },
  {
    slug: "one-launch",
    title: "ClickBalance One launch film",
    summary: "Thirty-second launch spot for ClickBalance One.",
    year: "2026",
    disciplines: ["motion"],
    role: "Motion design and edit",
    stack: [], // TODO(Daniel): tools used (After Effects? Premiere?)
    featured: true,
    media: {
      type: "video",
      loop: "/work/one-launch/loop.mp4",
      full: "/work/one-launch/full.mp4",
      poster: "/work/one-launch/poster.jpg",
      alt: "Animated ClickBalance One interface: an AI assistant answers a question about a sales call.",
    },
    body: [
      {
        heading: "Approach",
        paragraphs: [
          "No stock footage. Every shot is the real interface, rebuilt for motion: the tools a business juggles collapse into one, the assistant answers a question about a sales call and drafts the quote, then each module gets its moment.",
          "Voice-over in Spanish.",
        ],
      },
    ],
  },
  {
    slug: "agile-method",
    title: "How ClickBalance works",
    summary: "Explainer that teaches the company's squad, chapter and tribe model one layer at a time.",
    year: "2025",
    disciplines: ["motion"],
    role: "Script, motion design and edit", // TODO(Daniel): confirm
    stack: [],
    featured: true,
    media: {
      type: "video",
      loop: "/work/agile-method/loop.mp4",
      full: "/work/agile-method/full.mp4",
      poster: "/work/agile-method/poster.jpg",
      alt: "Diagram animation: people grouped into squads, chapters and a tribe.",
    },
    body: [
      {
        heading: "Approach",
        paragraphs: [
          "Org models are abstract on paper. The piece uses one visual unit, a person, and builds it up step by step: a squad and its mission, the roles inside it, chapters across squads, and the tribe around them.",
          "Three minutes, voice-over in Spanish, made for the whole company.",
        ],
      },
    ],
  },
  {
    slug: "notedash",
    title: "NoteDash",
    summary: "Ear-training web app with timed drills for building relative pitch.",
    year: "2025",
    disciplines: ["interfaces"],
    role: "Design and build",
    stack: ["Next.js"], // TODO(Daniel): confirm stack
    links: [{ label: "notedash.dev", href: "https://www.notedash.dev" }],
    media: {
      type: "image",
      src: "/notedash_thumbnail.png",
      alt: "NoteDash drill screen with note buttons from C to B.",
    },
    body: [
      {
        heading: "What it is",
        paragraphs: [
          "A side project I designed and shipped. You hear a note and answer by mouse or keyboard before the timer runs out. Settings for sharps or flats, one or two octaves and 15 to 90 second rounds keep it useful from beginner to advanced.",
        ],
      },
    ],
  },

  {
    slug: "clickbalance-teams",
    hidden: true, // deprecated
    title: "ClickBalance Teams",
    summary:
      "Internal tool that joins Google Meet attendance with ClickUp time tracking for team hour reports.",
    year: "2025",
    disciplines: ["systems"],
    role: "Design and build",
    stack: ["Supabase", "Google Workspace API", "ClickUp API", "pg_cron"],
    draft: true,
  },
  {
    slug: "soy-autonomo",
    hidden: true, // deprecated
    title: "Soy Autónomo",
    summary: "TODO(Daniel): one line on what this site is and what you did.",
    year: "2025",
    disciplines: ["interfaces"],
    role: "Design and build",
    stack: [],
    links: [{ label: "soyautonomo.mx", href: "https://soyautonomo.mx" }],
    draft: true,
  },
];

const showDrafts = process.env.NODE_ENV !== "production";

export function visibleProjects() {
  return projects.filter((p) => !p.hidden && (showDrafts || !p.draft));
}

export function getProject(slug: string) {
  return visibleProjects().find((p) => p.slug === slug);
}
