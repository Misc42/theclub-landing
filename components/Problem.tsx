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
    k: "Local · neutral · BYO",
    v: "Tauri desktop on your machine. Your claude / gemini / openai / openrouter keys — or a fully local model over Ollama, no provider account at all. Code and keys never leave the box. Zero analytics, zero telemetry, zero cloud middleware.",
  },
];

export default function Problem() {
  return (
    <section id="why" className="wrap mt-28 md:mt-36">
      {/* Section mark */}
      <header className="rule-double pb-4">
        <p className="dispatch-mark">
          <span className="dot" aria-hidden />
          The Wedge · Editorial
        </p>
        <h2 className="section-title mt-3 max-w-3xl">
          Every agent. None of them in charge.{" "}
          <span className="serif-italic text-saffron">
            That part can&apos;t be bought.
          </span>
        </h2>
      </header>

      <div className="mt-12 grid gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* Editorial column */}
        <article className="text-base leading-[1.75] text-muted md:text-[1.04rem]">
          <p className="drop-cap">
            Autonomous multi-agent coding is no longer rare &mdash; every
            funded lab ships it now. What none of them can ship is
            neutrality. Their orchestrator routes you toward their model and
            their per-seat plan, because that is the business. theClub runs
            on your machine and drives whatever you already own &mdash; the
            claude, gemini, and codex subscriptions you pay for, a fully
            local model over Ollama, or any mix &mdash; and earns nothing
            from which one you pick.
          </p>
          <p className="mt-5">
            And neutrality isn&apos;t a slogan here &mdash; it is wired in.
            Alongside the provider CLIs, theClub now drives any model
            directly through a native adapter: any OpenAI-compatible,
            Anthropic, or Ollama endpoint, no vendor CLI required. A local
            Qwen-Coder over Ollama has already run a task end to end
            &mdash; dispatch, edit, review, merge &mdash; with two local
            models working in parallel. Any model, even fully local. No
            provider lock.
          </p>

          <blockquote className="pull mt-8">
            A funded incumbent can&apos;t be neutral &mdash; neutrality
            cannibalises its own model and per-seat revenue.{" "}
            <span className="text-saffron">theClub has nothing to protect.</span>
          </blockquote>

          <p className="mt-8">
            Under the hood the orchestration is honest engineering, not
            magic: each agent spawns non-interactively with native
            stream-json flags, so no terminal prompt can jam a run, and the
            8-phase pipeline coordinates them in parallel across isolated git
            worktrees. The funded incumbents have all of that too. What they
            structurally cannot give you is a layer that sits on your
            hardware, drives your subscriptions, and is loyal to no provider.
            That is the whole point.
          </p>
        </article>

        {/* Countermeasures ledger */}
        <aside>
          <p className="masthead mb-4">What makes it un-copyable</p>
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
