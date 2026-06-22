import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Instrument_Serif,
  Tiro_Devanagari_Hindi,
} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const tiroDeva = Tiro_Devanagari_Hindi({
  subsets: ["devanagari", "latin"],
  weight: "400",
  variable: "--font-tiro-deva",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://misc42.github.io/theclub-landing"),
  title: {
    default: "theClub — one codebase, many minds",
    template: "%s — theClub",
  },
  description:
    "A local desktop orchestrator for the coding CLIs you already pay for — Claude Code, Codex, Gemini CLI, local models, or any mix. N agents on your repo, on your machine, through an autonomous 8-phase plan → review → merge pipeline with a live flow-graph. No cloud sandbox, no forced PR. Open source.",
  openGraph: {
    title: "theClub — one codebase, many minds",
    description:
      "Not just a worktree runner — an autonomous pipeline. Open-roster, any-model, BYO-CLI orchestrator with an 8-phase plan → review → merge loop and a live flow-graph. Local. Open source.",
    siteName: "theClub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "theClub — one codebase, many minds",
    description:
      "Open-roster coding orchestrator. Bring your own CLIs or local models; an autonomous 8-phase pipeline runs N agents on your repo, your machine — no cloud sandbox, no forced PR.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${plexSans.variable} ${plexMono.variable} ${tiroDeva.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
