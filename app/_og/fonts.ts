import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Static Schibsted Grotesk for next/og, which can't read the variable woff2 the site uses. */
export async function ogFonts() {
  const load = (weight: 400 | 500) =>
    readFile(join(process.cwd(), `app/_og/schibsted-grotesk-latin-${weight}-normal.woff`));
  const [regular, medium] = await Promise.all([load(400), load(500)]);
  return [
    { name: "Schibsted Grotesk", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Schibsted Grotesk", data: medium, weight: 500 as const, style: "normal" as const },
  ];
}

// Light-mode tokens from globals.css.
export const colors = {
  paper: "#ffffff",
  ink: "#1a1a1c",
  muted: "#6b6b70",
  line: "#e4e4e7",
  accent: "#3346d3",
};
