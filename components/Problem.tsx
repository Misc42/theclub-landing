// "Why" section — editorial spread. Left column is a manifesto with a drop
// cap + pull-quote. Right column is a small ledger of countermeasures.

const COUNTERS: ReadonlyArray<{ k: string; v: string }> = [
  {
    k: "Direct stream-json transport",
    v: "Each CLI is spawned non-interactively with NDJSON output. No pty, no TUI, no banner that can jam the pipeline.",
  },
  {
    k: "One worktree per agent",
    v: "Each agent edits in its own git branch. Parallel work, structured merges, surgical rollback if a worker breaks the build.",
  },
  {
    k: "Cheap-path classifier",
    v: "A trivial goal goes to a single agent in under 90 seconds. Complex multi-verb goals fan out across all four — heuristic decides without burning a model call.",
  },
  {
    k: "Local · BYO keys",
    v: "Tauri desktop on your machine. Your claude / gemini / openai / openrouter keys. Zero analytics, zero telemetry, zero cloud middleware.",
  },
];

export default function Problem() {
  return (
    <section id="why" className="wrap mt-28 md:mt-36">
      {/* Section mark */}
      <header className="rule-double pb-4">
        <p className="dispatch-mark">
          <span className="dot" aria-hidden />
          The Problem · Editorial
        </p>
        <h2 className="section-title mt-3 max-w-3xl">
          One agent isn&apos;t enough.{" "}
          <span className="serif-italic text-saffron">
            Five tabs aren&apos;t serious.
          </span>
        </h2>
      </header>

      <div className="mt-12 grid gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* Editorial column */}
        <article className="text-base leading-[1.75] text-muted md:text-[1.04rem]">
          <p className="drop-cap">
            Every coding agent CLI has a strength the others don&apos;t.
            claude is best at high-level architecture and review. gemini
            reads enormous contexts. codex is sharp on terminal and devops
            chores. aider does surgical multi-file diffs nobody else
            matches. Most working days you need two or three of them on the
            same problem at once.
          </p>
          <p className="mt-5">
            Most existing wrappers proxy each CLI through a pseudo-terminal
            layer. It works until it doesn&apos;t. A codex update banner, a
            gemini edit-accept dialog, a claude policy confirmation
            mid-execution &mdash; every one of those interactive surfaces
            jams the wrapper, the orchestrator stalls, the pipeline aborts.
            We learned this the hard way across four live runs.
          </p>

          <blockquote className="pull mt-8">
            theClub doesn&apos;t paper over the pty problem.{" "}
            <span className="text-saffron">It removes the pty.</span>
          </blockquote>

          <p className="mt-8">
            Each agent now spawns directly with native stream-json flags.
            No terminal means no prompts can render, which means no
            interactive surface can break the run. The fix is architectural
            &mdash; not a config tweak, not a flag soup, not a vendored
            wrapper that&apos;ll rot the next time a CLI releases a
            confirmation dialog. The 8-phase pipeline that drives the four
            agents stays the same; the transport underneath got replaced.
          </p>
        </article>

        {/* Countermeasures ledger */}
        <aside>
          <p className="masthead mb-4">What theClub does instead</p>
          <ul className="grid gap-3">
            {COUNTERS.map(({ k, v }, i) => (
              <li
                key={k}
                className="grid grid-cols-[2.4rem_1fr] gap-3 border-t border-rule pt-4"
              >
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-saffron pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="serif-italic text-lg leading-tight text-ink">
                    {k}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {v}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
