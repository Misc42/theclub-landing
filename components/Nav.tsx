"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS: ReadonlyArray<readonly [string, string]> = [
  ["Why", "/#why"],
  ["Pipeline", "/#how"],
  ["Cast", "/#cast"],
  ["Install", "/#install"],
  ["FAQ", "/#faq"],
  ["GitHub", "https://github.com/Misc42/theClub"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="wrap flex items-center justify-between py-7 font-mono text-[0.78rem] uppercase tracking-[0.08em] text-faint">
      {/* Wordmark — theClub in roman, Hindi tagline in italic Devanagari beside it */}
      <Link
        href="/"
        className="group flex items-baseline gap-3 text-ink"
      >
        <span className="font-semibold tracking-[0.14em]">theClub</span>
        <span
          aria-hidden
          className="hidden h-3 w-px bg-rule sm:inline-block"
        />
        <span className="deva hidden text-base italic normal-case tracking-normal text-muted transition group-hover:text-saffron sm:inline-block">
          एक कोडबेस, चार दिमाग
        </span>
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        {LINKS.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="border-b border-transparent transition hover:border-saffron hover:text-saffron"
          >
            {label}
          </Link>
        ))}
      </nav>
      <button
        type="button"
        className="rounded-sm border border-rule px-3 py-2 text-ink md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Open navigation</span>
        Menu
      </button>
      <div
        id="mobile-nav"
        className={`absolute left-[var(--pad)] right-[var(--pad)] top-20 z-20 grid gap-4 rounded-md border border-rule bg-surface p-5 shadow-2xl transition md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        {LINKS.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="py-1 text-ink"
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}
