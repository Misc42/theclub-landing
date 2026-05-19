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
    default: "theClub — one codebase, four minds",
    template: "%s — theClub",
  },
  description:
    "A local desktop orchestrator that runs four coding CLIs on one codebase in parallel — claude, gemini, codex, aider — through an 8-phase pipeline. No pty wrappers, no cloud middleware. Open source.",
  openGraph: {
    title: "theClub — one codebase, four minds",
    description:
      "Multi-agent coding orchestrator. Stream-JSON NDJSON adapters. Tauri + Rust. Linux v1. Open source.",
    siteName: "theClub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "theClub — one codebase, four minds",
    description:
      "Multi-agent coding orchestrator. claude + gemini + codex + aider on one codebase.",
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
