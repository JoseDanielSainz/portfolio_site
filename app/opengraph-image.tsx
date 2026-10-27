import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { colors, ogFonts } from "./_og/fonts";

export const alt = `${site.name}, design engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Link preview card shown when the site is shared. */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          background: colors.paper,
          color: colors.ink,
          fontFamily: "Schibsted Grotesk",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, fontWeight: 500 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: colors.accent }} />
          {site.name}
        </div>

        <div style={{ display: "flex", fontSize: 58, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 980 }}>
          {site.description}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `2px solid ${colors.line}`,
            paddingTop: 28,
            fontSize: 26,
            color: colors.muted,
          }}
        >
          <span>{new URL(site.url).host}</span>
          <span>{site.location}</span>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
