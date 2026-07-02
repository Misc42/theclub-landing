"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS: ReadonlyArray<readonly [string, string]> = [
  ["How it works", "/#how"],
  ["Screenshots", "/#plates"],
  ["Install", "/#install"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="wrap flex h-[68px] items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2.5">
          <span className="text-[17px] font-bold tracking-[-0.02em]">
            theClub
          </span>
          <span className="deva hidden text-[15px] font-medium text-faint sm:inline">
            एक कोडबेस, चार दिमाग
          </span>
        </Link>
        <nav className="hidden items-center gap-[30px] text-sm font-medium text-muted md:flex">
          {LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://github.com/Misc42/theClub"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-lg bg-ink px-[18px] py-[9px] text-[13.5px] font-semibold text-bg transition-colors hover:bg-[#C9C9CE] md:inline-flex"
        >
          Star on GitHub
        </Link>
        <button
          type="button"
          className="rounded-md border border-border-2 px-3 py-2 text-sm text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open navigation</span>
          Menu
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`absolute left-[var(--pad)] right-[var(--pad)] top-full z-20 mt-2 grid gap-4 rounded-xl border border-border bg-bg-alt p-5 shadow-2xl transition md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        {LINKS.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="py-1 text-ink"
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="https://github.com/Misc42/theClub"
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-flex justify-center rounded-lg bg-ink px-[18px] py-[9px] text-[13.5px] font-semibold text-bg"
          onClick={() => setOpen(false)}
        >
          Star on GitHub
        </Link>
      </div>
    </header>
  );
}
