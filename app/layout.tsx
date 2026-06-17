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
    default: "theClub — the Switzerland of coding agents",
    template: "%s — theClub",
  },
  description:
    "The neutral, local layer that drives every provider's coding agent on your machine — your claude / gemini / codex subscriptions, a fully local model, or any mix. Code and keys never leave your machine. Provider-neutral, locked to none. Open source.",
  openGraph: {
    title: "theClub — the Switzerland of coding agents",
    description:
      "Neutral, local-first. Drive any coding agent — the subscriptions you already pay for, or a fully local model — on your own machine. Provider-neutral, locked to none. Tauri + Rust. Linux v1. Open source.",
    siteName: "theClub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "theClub — the Switzerland of coding agents",
    description:
      "The neutral, local layer that drives any coding agent — your subscriptions, or a fully local model — on your own machine.",
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
