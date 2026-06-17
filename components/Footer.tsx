// Colophon — printed footer in the spirit of a journal's back matter.

import Link from "next/link";

const LINKS: ReadonlyArray<readonly [string, string]> = [
  ["Misc42 Labs", "https://misc42.github.io/misc42labs/"],
  ["GitHub", "https://github.com/Misc42/theClub"],
  ["X", "https://x.com/tanaymisra97"],
];

export default function Footer() {
  return (
    <footer className="wrap mt-24 mb-10">
      <div className="rule-double pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="dispatch-mark">
              <span className="dot" aria-hidden />
              Colophon
            </p>
            <p className="serif-italic mt-4 max-w-2xl text-[clamp(1.05rem,1.7vw,1.25rem)] leading-snug text-muted">
              theClub is a{" "}
              <Link
                href="https://misc42.github.io/misc42labs/"
                target="_blank"
                rel="noreferrer"
                className="text-ink underline decoration-rule underline-offset-4 transition hover:text-saffron"
              >
                Misc42 Labs
              </Link>{" "}
              workshop instrument. Source under AGPL-3.0. Set in IBM Plex
              Sans &amp; Mono, Instrument Serif, and Tiro Devanagari Hindi.
              The newsprint texture overlay is the same one the rest of the
              studio uses &mdash; same paper, same press.
            </p>
            <p className="mt-4 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-faint">
              Provider-neutral &middot; local-first &middot; no analytics &middot; no telemetry
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] lg:justify-end">
            {LINKS.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition hover:text-saffron"
              >
                {label} <span aria-hidden>&#x2197;</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-wrap items-baseline justify-between gap-3 border-t border-rule pt-4 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-faint">
          <span>&copy; 2026 &middot; Tanay Misra &middot; Bharat</span>
          <span className="text-saffron">एक कोडबेस, चार दिमाग</span>
        </div>
      </div>
    </footer>
  );
}
