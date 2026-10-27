import type { Project, SectionMedia } from "@/content/projects";
import { LoopVideo } from "./LoopVideo";

const fill = "absolute inset-0 h-full w-full object-cover";

/** Tile-sized media for the work index. */
export function ProjectThumb({ project }: { project: Project }) {
  const m = project.media;
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
      {!m && (
        <div className="pending absolute inset-0 flex items-end p-4 text-sm text-muted">
          Capture pending
        </div>
      )}
      {m?.type === "video" && <LoopVideo src={m.loop} poster={m.poster} alt={m.alt} className={fill} />}
      {m?.type === "image" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={m.thumb ?? m.src} alt={m.alt} loading="lazy" className={`${fill} object-top`} />
      )}
      {m?.type === "embed" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={m.poster} alt={m.alt} loading="lazy" className={fill} />
      )}
    </div>
  );
}

/** Full-size media for a project page: the full cut with sound and controls when there is one. */
export function ProjectHero({ project }: { project: Project }) {
  const m = project.media;
  if (!m) return null;
  const frame = "relative aspect-video overflow-hidden rounded-lg border border-line bg-surface shadow-sm";

  if (m.type === "video") {
    return (
      <div className={frame}>
        {m.full ? (
          <video src={m.full} poster={m.poster} controls playsInline preload="metadata" className={fill} aria-label={m.alt} />
        ) : (
          <LoopVideo src={m.loop} poster={m.poster} alt={m.alt} className={fill} />
        )}
      </div>
    );
  }
  if (m.type === "embed") {
    return (
      <div className={frame}>
        <iframe
          src={m.src}
          title={m.alt}
          className={fill}
          allow="encrypted-media; picture-in-picture; fullscreen"
          loading="lazy"
        />
      </div>
    );
  }
  // Screenshots keep their own proportions on the project page instead of being cropped to 16:9.
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={m.src} alt={m.alt} className="block h-auto w-full" />
    </div>
  );
}

/** Media inside a case study section, shown at its natural aspect ratio. */
function SectionItem({ item }: { item: SectionMedia }) {
  const natural = "block h-auto w-full";
  let content: React.ReactNode;
  if (item.type === "video") {
    content = item.full ? (
      <video src={item.full} poster={item.poster} controls playsInline preload="metadata" className={natural} aria-label={item.alt} />
    ) : (
      <LoopVideo src={item.loop} poster={item.poster} alt={item.alt} className={natural} />
    );
  } else if (item.type === "embed") {
    content = (
      <div className="relative aspect-video">
        <iframe src={item.src} title={item.alt} className={fill} allow="encrypted-media; picture-in-picture; fullscreen" loading="lazy" />
      </div>
    );
  } else {
    // eslint-disable-next-line @next/next/no-img-element
    content = <img src={item.src} alt={item.alt} loading="lazy" className={natural} />;
  }

  const mobile = item.frame === "mobile";
  return (
    <figure
      className={mobile ? "mx-auto w-full max-w-[320px]" : item.width ? "mx-auto w-full" : undefined}
      style={item.width && !mobile ? { maxWidth: item.width } : undefined}
    >
      <div
        className={`overflow-hidden border border-line bg-surface shadow-sm ${mobile ? "rounded-[2rem]" : "rounded-lg"}`}
      >
        {content}
      </div>
      {item.caption && <figcaption className="mt-2 text-sm text-muted">{item.caption}</figcaption>}
    </figure>
  );
}

export function SectionGallery({ items }: { items: SectionMedia[] }) {
  if (items.length === 1) return <SectionItem item={items[0]} />;
  return (
    <div className="grid items-start gap-6 sm:grid-cols-2">
      {items.map((item, i) => (
        <SectionItem key={i} item={item} />
      ))}
    </div>
  );
}
