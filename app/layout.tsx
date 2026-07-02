import type { Metadata } from "next";
import {
  Schibsted_Grotesk,
  Anek_Devanagari,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted-grotesk",
  display: "swap",
});

const anekDevanagari = Anek_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-anek-devanagari",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://misc42.github.io/theclub-landing"),
  title: {
    default: "theClub — one codebase, many minds",
    template: "%s — theClub",
  },
  description:
    "Run the coding agents you already pay for — Claude Code, Codex, Gemini CLI, local models — in parallel on one repo. Planned, reviewed, and merged autonomously, on your machine. Open source, AGPL-3.0.",
  openGraph: {
    title: "theClub — one codebase, many minds",
    description:
      "A goal in. A merged commit out. Run the coding agents you already pay for in parallel on one repo — planned, reviewed, and merged autonomously, on your machine.",
    siteName: "theClub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "theClub — one codebase, many minds",
    description:
      "A goal in. A merged commit out. Run the coding agents you already pay for in parallel on one repo, on your machine.",
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
      className={`${schibstedGrotesk.variable} ${anekDevanagari.variable} ${geistMono.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
