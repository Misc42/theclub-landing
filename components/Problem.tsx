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
    v: "A trivial goal goes to a single agent in under 90 seconds. Complex multi-verb goals fan out across the whole roster — heuristic decides without burning a model call.",
  },
  {
    k: "Open roster · BYO keys",
    v: "Tauri desktop on your machine. Add any OpenAI-compatible or Anthropic endpoint, a local Ollama model, or the CLIs you already pay for. Your keys, zero analytics, zero telemetry, zero cloud middleware.",
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
          One agent isn&apos;t enough. A worktree runner that needs you on
          every diff{" "}
          <span className="serif-italic text-saffron">
            isn&apos;t serious.
          </span>
        </h2>
      </header>

      <div className="mt-12 grid gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* Editorial column */}
        <article className="text-base leading-[1.75] text-muted md:text-[1.04rem]">
          <p className="drop-cap">
            Every coding agent has a strength the others don&apos;t. Claude
            Code is best at high-level architecture and review. Gemini reads
            enormous contexts. Codex is sharp on terminal and devops chores.
            A local model is free and private. Most working days you need
            two or three of them on the same problem at once &mdash; and the
            roster is yours to set, not a fixed lineup we picked for you.
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
            confirmation dialog. The autonomous 8-phase pipeline that drives
            the roster stays the same; the transport underneath got
            replaced.
          </p>
          <p className="mt-5">
            And that pipeline is the whole point. A bare worktree runner
            hands you N parallel branches and walks away &mdash; you&apos;re
            still the one reading every diff, deciding what merges. theClub
            runs the plan &rarr; review &rarr; merge loop itself, on top of
            bring-your-own-CLI git worktrees, with a live flow-graph of the
            run. Because it stays local &mdash; your repo, your machine, no
            cloud sandbox, no forced PR &mdash; the per-seat, cloud-sandbox,
            pull-request incumbents structurally can&apos;t copy it.
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
