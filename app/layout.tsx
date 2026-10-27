import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/schibsted-grotesk";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, url: site.url, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-paper text-ink">
        <div className="mx-auto flex min-h-dvh max-w-[1120px] flex-col px-4 sm:px-8">
          <header className="flex items-baseline justify-between py-6 text-[15px]">
            <Link href="/" className="font-medium">
              {site.name}
            </Link>
            <nav className="flex gap-5 text-muted">
              <Link href="/#work" className="hover:text-ink">
                Work
              </Link>
              <Link href="/#about" className="hover:text-ink">
                About
              </Link>
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                Contact
              </a>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-32 flex flex-wrap justify-between gap-4 border-t border-line py-8 text-sm text-muted">
            <p>{site.location}</p>
            <p className="flex gap-5">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} className="hover:text-ink" target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
