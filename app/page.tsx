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
          I like working on the whole path from someone landing on a page to becoming a customer. That includes the
          sign-up flow, the CRM automation behind it and the tracking that shows where people drop off, so I can make
          the next version convert better.
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
            I studied marketing at Tec de Monterrey and then taught myself to build. That&apos;s why I like being
            involved in both the design and development of a project, and in the measurement that shows how people
            actually use it. Working across design, code and growth lets me spot what isn&apos;t working and fix it
            quickly.
          </p>
          <p className="text-muted">
            I mostly work with Next.js, Tailwind and Supabase, connect projects to HubSpot and ad platforms, and do
            motion graphics and video editing when a project needs it.
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
