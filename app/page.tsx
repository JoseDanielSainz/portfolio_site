import { WorkIndex } from "@/components/WorkIndex";
import { visibleProjects, type Discipline } from "@/content/projects";
import { site } from "@/content/site";

export default function Home() {
  const projects = visibleProjects();
  // Each phrase opens the index filtered to that discipline, once there is work in it.
  const filterLink = (d: Discipline, text: string) =>
    projects.some((p) => p.disciplines.includes(d)) ? (
      <a href={`#${d}`} className="link">
        {text}
      </a>
    ) : (
      text
    );

  return (
    <>
      <section className="pb-24 pt-16 sm:pb-32 sm:pt-28">
        <p className="max-w-[24ch] text-[clamp(1.75rem,4.2vw,2.75rem)] font-[450] leading-[1.15] tracking-[-0.02em]">
          I design and build {filterLink("interfaces", "web interfaces")}, wire up the {filterLink("systems", "systems")}{" "}
          behind them, and make {filterLink("motion", "motion pieces")} when something needs explaining.
        </p>
        <p className="mt-8 max-w-[56ch]">
          I care about the whole path from someone landing on a page to becoming a customer. That means the sign-up
          flow, the CRM automation behind it, and the tracking that shows where people drop off, so the next
          version converts better.
        </p>
        <p className="mt-4 max-w-[56ch] text-muted">
          Based in Culiacán, Mexico. At{" "}
          <a href="https://clickbalance.one" className="link text-ink" target="_blank" rel="noreferrer">
            ClickBalance
          </a>
          , a B2B software company, I own two acquisition channels end to end.
        </p>
      </section>

      <WorkIndex projects={projects} />

      <section id="about" className="mt-32 grid scroll-mt-6 gap-8 border-t border-line pt-4 sm:grid-cols-[1fr_2fr]">
        <h2 className="text-[15px] font-medium">About</h2>
        <div className="max-w-[60ch] space-y-5">
          <p>
            I studied marketing at Tec de Monterrey and then taught myself to build, which is why I care whether a
            design ships and whether it converts. Most of my work sits between design, code and growth: a page is only
            done when it&apos;s live, tracked and getting better.
          </p>
          <p className="text-muted">
            I work mostly in Next.js, Tailwind and Supabase, wire products into HubSpot and ad platforms, and do motion
            and video when an idea needs to move.
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="link">
              {site.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
