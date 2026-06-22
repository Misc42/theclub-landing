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

      {/* Hero composition — the oversized "Many minds." line is the centerpiece
          on the right; the headline + supporting body play the supporting role
          on the left. Stamp + meta sit beneath in a deliberate asymmetric
          column. */}
      <div className="grid gap-10 lg:grid-cols-[1fr_auto_1.05fr] lg:items-center">
        {/* LEFT — headline + supporting body */}
        <div className="order-2 lg:order-1">
          <p className="masthead mb-5">theClub &middot; v0.6.0</p>
          <h1 className="section-title text-balance">
            One codebase.
            <br />
            <span className="serif-italic text-saffron">Many minds.</span>
          </h1>
          <p className="serif-italic mt-5 max-w-md text-[clamp(1.1rem,2vw,1.35rem)] leading-snug text-muted">
            Orchestrate the coding CLIs you already pay for &mdash;
            <span className="text-ink"> Claude Code</span>,
            <span className="text-ink"> Codex</span>,
            <span className="text-ink"> Gemini CLI</span>, local models,
            or any mix &mdash; as N agents on{" "}
            <span className="text-ink">your</span> repo, on{" "}
            <span className="text-ink">your</span> machine. No cloud
            sandbox. No forced PR.
          </p>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted">
            <span className="text-ink">
              Not just a worktree runner &mdash; an autonomous pipeline.
            </span>{" "}
            An 8-phase plan &rarr; review &rarr; merge loop with a live
            flow-graph, running on top of bring-your-own-CLI git worktrees.
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

        {/* MIDDLE — vertical hairline rule separating the headline column from
            the oversized centerpiece. On mobile this collapses; on desktop it
            doubles as a visual seam. */}
        <div
          aria-hidden
          className="order-1 hidden h-full w-px lg:order-2 lg:block"
          style={{
            background:
              "linear-gradient(180deg, transparent, color-mix(in srgb, var(--accent-warm) 35%, transparent), transparent)",
          }}
        />

        {/* RIGHT — THE moment. Oversized editorial typography. */}
        <figure className="order-3 flex flex-col items-start gap-4 lg:items-end lg:text-right">
          <p
            className="ink-press text-[clamp(2.8rem,7vw,5.4rem)] leading-[0.98] tracking-tight text-ink"
            style={{
              textShadow:
                "0 0 38px color-mix(in srgb, var(--accent-warm) 22%, transparent)",
            }}
          >
            One codebase,
            <br />
            <span className="text-saffron">many minds.</span>
          </p>
          <figcaption className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-faint">
            any model &middot; any CLI &middot; your machine
          </figcaption>
          <span className="stamp mt-3">
            <span aria-hidden>&#x2715;</span>
            v0.6.0 &middot; live on Linux
          </span>
        </figure>
      </div>

      {/* The score visual — the moment that earns "many agents working in parallel".
          The four named CLIs below are illustrative supported examples, not the
          full roster. */}
      <div className="mt-20 md:mt-24">
        <Score />
      </div>
    </section>
  );
}
