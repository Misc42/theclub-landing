import Link from "next/link";
import Score from "@/components/Score";

export default function Hero() {
  return (
    <section className="wrap pt-6 md:pt-10">
      {/* Dispatch masthead — issue / date / edition */}
      <div className="flex flex-wrap items-center justify-between gap-4 rule-double pb-4 mb-12 md:mb-16">
        <p className="dispatch-mark">
          <span className="dot" aria-hidden />
          A Misc42 Labs dispatch
        </p>
        <p className="dispatch-mark">
          Volume 06 &middot; Edition 2026 &middot; Linux
        </p>
      </div>

      {/* Hero composition — the Devanagari line is the centerpiece, English plays
          the supporting role above it. Stamp + meta sit beneath in a deliberate
          asymmetric column. */}
      <div className="grid gap-10 lg:grid-cols-[1fr_auto_1.05fr] lg:items-center">
        {/* LEFT — English supporting headline + supporting body */}
        <div className="order-2 lg:order-1">
          <p className="masthead mb-5">theClub &middot; v0.6.0</p>
          <h1 className="section-title text-balance">
            One codebase.
            <br />
            <span className="serif-italic text-saffron">Four minds.</span>
          </h1>
          <p className="serif-italic mt-5 max-w-md text-[clamp(1.1rem,2vw,1.35rem)] leading-snug text-muted">
            A workshop instrument for the developer who already pays for
            <span className="text-ink"> claude</span>,
            <span className="text-ink"> gemini</span>,
            <span className="text-ink"> codex</span>, and
            <span className="text-ink"> aider</span> &mdash; and wants them
            playing in the same orchestra, not four separate tabs.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="https://github.com/Misc42/theClub"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-saffron bg-saffron px-5 py-3 font-mono text-[0.74rem] uppercase tracking-[0.14em] text-paper transition hover:bg-transparent hover:text-saffron"
            >
              Read the source
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="#how"
              className="inline-flex items-center gap-2 border-b border-rule pb-2 font-mono text-[0.74rem] uppercase tracking-[0.14em] text-ink transition hover:border-saffron hover:text-saffron"
            >
              See the pipeline
              <span aria-hidden>&darr;</span>
            </Link>
          </div>
        </div>

        {/* MIDDLE — vertical hairline rule separating English from Devanagari.
            On mobile this collapses; on desktop it doubles as a visual seam.  */}
        <div
          aria-hidden
          className="order-1 hidden h-full w-px lg:order-2 lg:block"
          style={{
            background:
              "linear-gradient(180deg, transparent, color-mix(in srgb, var(--accent-warm) 35%, transparent), transparent)",
          }}
        />

        {/* RIGHT — THE moment. Devanagari typography at full editorial scale. */}
        <figure className="order-3 flex flex-col items-start gap-4 lg:items-end lg:text-right">
          <p
            className="deva ink-press text-[clamp(2.8rem,7vw,5.4rem)] leading-[0.98] tracking-tight text-ink"
            lang="hi"
            style={{
              textShadow:
                "0 0 38px color-mix(in srgb, var(--accent-warm) 22%, transparent)",
            }}
          >
            एक कोडबेस,
            <br />
            <span className="text-saffron">चार दिमाग।</span>
          </p>
          <figcaption className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-faint">
            one codebase &middot; four minds
          </figcaption>
          <span className="stamp mt-3">
            <span aria-hidden>&#x2715;</span>
            v0.6.0 &middot; live on Linux
          </span>
        </figure>
      </div>

      {/* The score visual — the moment that earns "four agents working in parallel". */}
      <div className="mt-20 md:mt-24">
        <Score />
      </div>
    </section>
  );
}
