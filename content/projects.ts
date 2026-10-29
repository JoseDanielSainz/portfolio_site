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
      "Referral platform where independent sales agents refer clients to ClickBalance for a commission.",
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
          "The idea behind the program is that people who already know business owners refer them to ClickBalance and earn a commission. Our sales team takes care of the demo and closing the sale.",
          "We still use ads, but to recruit agents instead of customers. One agent can bring in clients for months, and they only get paid when a referral books a demo or buys. For this to work, agents need a place to sign up, learn about the product, register referrals and get paid, and our team needs to see which agents are bringing in clients.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "I designed and built the platform from start to finish, and I also run the program's ads and email marketing.",
        ],
        list: [
          "Agent stages (registered, certified, active, closed a sale, inactive) synced with HubSpot, so sales and marketing see the same information.",
          "A course and certification module so agents understand the product before they start referring.",
          "Commissions with invoice upload, plus admin views to review and approve each step.",
          "A reports dashboard to see agent activity and conversion.",
          "Meta Pixel and Conversions API tracking, and a six-step email sequence that changes depending on each agent's stage.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          // TODO(Daniel): add the US dollar equivalent of MXN $3M
          "More than 1,800 agents have registered since launch, and their referrals add up to MXN $3M in active pipeline.",
          "Most agents sign up and never refer anyone, which is normal for referral programs, so the number I focus on is activation: the share of agents who refer at least one client. Monthly activation went from 4% in April to 10% in September after three changes:",
        ],
        list: [
          // TODO(Daniel): confirm these three describe what you actually changed
          "Ads focused on people who are more likely to refer clients.",
          "More transparency for agents about their commissions and the status of their referrals.",
          "Better course material, so agents feel confident explaining the product.",
        ],
        media: [
          {
            type: "image",
            src: "/work/agentes/reports.webp",
            alt: "Reports dashboard: agent funnel by stage, pipeline and revenue, agent growth and referred leads per month.",
            caption: "The reports view our team uses to see which agents are bringing in clients. Shown with demo data.",
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
          "I designed and built the launch site for ClickBalance One. Its goal is to explain the product to business owners and get them to book a demo with the sales team.",
        ],
        list: [
          "A native demo form that sends leads to HubSpot through its API, followed by the HubSpot Meetings scheduler.",
          "Conversion tracking with GTM and GA4 for Google Ads.",
          "SEO and GEO work to bring in more organic leads."
        ],
      },
      {
        heading: "What I'm testing next",
        paragraphs: [
          // TODO(Daniel): fill in once you have numbers you can share
          "I'm constantly updating the site with new information and design changes to see what has the biggest impact on conversion.",
        ],
      },
    ],
  },
  {
    slug: "lead-agent",
    title: "AI lead qualifying agent",
    summary:
      "Follows up with leads through WhatsApp or a phone call, qualifies them and hands them off to a sales rep.",
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
          "Right now, every demo request from the website waits for a sales rep to call. Leads that come in at night or on weekends wait until the next business day, and by then some of them don't remember signing up. When a rep does reach them, the first few minutes go to the same qualifying questions every time.",
        ],
      },
      {
        heading: "The approach",
        paragraphs: [
          "The form asks how the lead wants to be contacted. If they choose right now, the bot messages them on WhatsApp within a minute or calls them within five. It asks three questions (industry, website and what they want to solve) and sends the calendar link. Once the demo is booked, it sends reminders 24 and 2 hours before.",
          "A sales rep takes over when the lead chose to be contacted later, stops replying, asks to talk to a person or asks something the bot can't answer. In every case, the rep gives the demo with everything the bot collected already in HubSpot.",
          "I'm testing two versions of the form. In one, the form asks who the lead is and the bot asks what they need. In the other, the form only asks for contact details and the bot handles all the questions.",
        ],
      },
      {
        heading: "What success looks like",
        paragraphs: ["I'll compare these three things against how leads are handled today:"],
        list: [
          "Fewer leads who don't remember registering.",
          "Less time between signing up and first contact, especially outside business hours.",
          "Less repetitive qualifying work for sales reps.",
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
          "Instead of stock footage, I designed interface scenes for the video based on ClickBalance One's features. It starts with the different tools a business uses turning into one, then shows the assistant answering a question about a sales call and drafting a quote, and ends with a quick look at each module.",
          "Voice-over in Spanish.",
        ],
      },
    ],
  },
  {
    slug: "agile-method",
    title: "How ClickBalance works",
    summary: "Explainer video about the squad, chapter and tribe model we use at ClickBalance.",
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
          "These team structures are hard to picture from a written description, so the video builds them up step by step, using one icon for each person. First a squad and its mission, then the roles inside it, then chapters across squads and finally the tribe.",
          "It's three minutes long, with voice-over in Spanish, and it was made for the whole company.",
        ],
      },
    ],
  },
  {
    slug: "notedash",
    title: "NoteDash",
    summary: "Ear-training web app with timed drills to practice relative pitch.",
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
          "A side project I designed and built. You hear a note and answer with the mouse or keyboard before time runs out. You can choose sharps or flats, one or two octaves and rounds from 15 to 90 seconds, so it works for beginners and more advanced musicians.",
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
