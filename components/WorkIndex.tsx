"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { disciplines, type Discipline, type Project } from "@/content/projects";
import { ProjectThumb } from "./ProjectMedia";

type Filter = Discipline | "all";
const isFilter = (v: string): v is Filter => v === "all" || disciplines.some((d) => d.id === v);

/**
 * Filterable grid. The filter lives in the URL hash (#interfaces, #systems, #motion),
 * so links in the intro copy can open the index already filtered.
 */
export function WorkIndex({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  // Only fade after a filter change, not on first paint.
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    const sync = (scroll: boolean) => {
      const hash = window.location.hash.slice(1);
      if (!isFilter(hash)) return;
      const has = hash === "all" || projects.some((p) => p.disciplines.includes(hash));
      setFilter(has ? hash : "all");
      setFiltered(true);
      if (scroll) document.getElementById("work")?.scrollIntoView({ block: "start" });
    };
    sync(true);
    const onHash = () => sync(true);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [projects]);

  const choose = (f: Filter) => {
    setFilter(f);
    setFiltered(true);
    history.replaceState(null, "", f === "all" ? "#work" : `#${f}`);
  };

  const shown = filter === "all" ? projects : projects.filter((p) => p.disciplines.includes(filter));
  const count = (f: Filter) => (f === "all" ? projects.length : projects.filter((p) => p.disciplines.includes(f)).length);

  const options: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    ...disciplines.filter((d) => count(d.id) > 0),
  ];

  return (
    <section id="work" className="scroll-mt-6">
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b border-line pb-4">
        <h2 className="text-[15px] font-medium">Work</h2>
        <div role="group" aria-label="Filter work" className="flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
          {options.map((o) => (
            <button
              key={o.id}
              type="button"
              aria-pressed={filter === o.id}
              onClick={() => choose(o.id)}
              className="text-muted transition-colors hover:text-ink aria-pressed:text-ink"
            >
              {o.label}
              <sup className="ml-0.5 text-[11px] text-muted">{count(o.id)}</sup>
            </button>
          ))}
        </div>
      </div>

      <ul key={filter} className={`grid gap-x-6 gap-y-12 sm:grid-cols-2 ${filtered ? "fade-in" : ""}`}>
        {shown.map((p) => (
          <li key={p.slug}>
            <Link href={`/work/${p.slug}`} className="group block">
              <ProjectThumb project={p} />
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <h3 className="font-medium group-hover:underline group-hover:underline-offset-4">
                  {p.title}
                  {p.draft && <span className="ml-2 text-xs font-normal text-accent">draft</span>}
                </h3>
                <span className="shrink-0 text-sm tabular-nums text-muted">{p.year}</span>
              </div>
              <p className="mt-1 max-w-[52ch] text-[15px] text-muted">{p.summary}</p>
              {p.outcome && <p className="mt-2 text-[15px]">{p.outcome}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
