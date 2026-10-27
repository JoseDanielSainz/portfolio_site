import { ImageResponse } from "next/og";
import { colors, ogFonts } from "./fonts";

/** "DS" monogram used for the favicon and the Apple touch icon. */
export async function monogram(px: number, radius: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.ink,
          borderRadius: radius,
          color: colors.paper,
          fontFamily: "Schibsted Grotesk",
          fontWeight: 500,
          fontSize: px * 0.5,
          letterSpacing: "-0.04em",
        }}
      >
        DS
      </div>
    ),
    { width: px, height: px, fonts: await ogFonts() },
  );
}
