import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectHero, SectionGallery } from "@/components/ProjectMedia";
import { disciplines, getProject, visibleProjects } from "@/content/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return visibleProjects().map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const labels = project.disciplines.map((d) => disciplines.find((x) => x.id === d)?.label).join(", ");
  const meta: [string, React.ReactNode][] = [
    ["Year", project.year],
    ["Role", project.role],
    ["Type", labels],
  ];
  if (project.status) meta.push(["Status", project.status]);
  if (project.stack.length) meta.push(["Stack", project.stack.join(", ")]);
  if (project.links?.length)
    meta.push([
      "Live",
      <span key="links" className="flex flex-wrap gap-x-4">
        {project.links.map((l) => (
          <a key={l.href} href={l.href} className="link" target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </span>,
    ]);

  const all = visibleProjects();
  const next = all[(all.findIndex((p) => p.slug === project.slug) + 1) % all.length];

  return (
    <article className="pt-10 sm:pt-16">
      <Link href="/#work" className="text-[15px] text-muted hover:text-ink">
        ← All work
      </Link>

      <header className="mt-10 grid gap-10 sm:mt-14 sm:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-[450] leading-[1.15] tracking-[-0.02em]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-[48ch] text-lg text-muted">{project.summary}</p>
        </div>
        <dl className="grid content-start gap-3 text-[15px]">
          {meta.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[4.5rem_1fr] gap-3">
              <dt className="text-muted">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mt-12">
        <ProjectHero project={project} />
      </div>

      {project.outcome && (
        <p className="mt-6 text-[15px]">
          <span className="text-muted">Outcome </span>
          {project.outcome}
        </p>
      )}

      {project.body && (
        <div className="mt-16 space-y-14">
          {project.body.map((s) => (
            <section key={s.heading} className="grid gap-4 sm:grid-cols-[1fr_2fr]">
              <h2 className="text-[15px] font-medium">{s.heading}</h2>
              <div className="max-w-[62ch] space-y-4">
                {s.paragraphs?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.list && (
                  <ul className="space-y-2 pl-4">
                    {s.list.map((item) => (
                      <li key={item} className="list-['–__'] marker:text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {s.media?.length ? (
                <div className="mt-4 sm:col-span-2">
                  <SectionGallery items={s.media} />
                </div>
              ) : null}
            </section>
          ))}
        </div>
      )}

      {next && next.slug !== project.slug && (
        <nav className="mt-24 border-t border-line pt-4 text-[15px]">
          <span className="text-muted">Next </span>
          <Link href={`/work/${next.slug}`} className="link">
            {next.title}
          </Link>
        </nav>
      )}
    </article>
  );
}
