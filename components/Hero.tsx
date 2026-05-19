import Link from "next/link";

export default function Hero() {
  return (
    <section className="wrap grid gap-14 border-b border-rule pb-20 pt-12 lg:grid-cols-[0.95fr_1fr] lg:items-center">
      <div className="flex flex-col items-start">
        <p className="masthead mb-5">theClub &middot; Misc42 Labs</p>
        <h1 className="section-title max-w-xl">
          One codebase.
          <br />
          <span className="text-saffron">Four minds.</span>
        </h1>
        <p
          className="deva mt-6 text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] text-saffron"
          lang="hi"
        >
          एक कोडबेस, चार दिमाग
        </p>
        <p className="serif-italic mt-3 text-[clamp(1.2rem,2.4vw,1.6rem)] leading-snug text-muted">
          A local desktop orchestrator that runs claude, gemini, codex, and aider
          on the same project in parallel &mdash; and merges their work cleanly.
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          Each agent works in its own git worktree. An 8-phase pipeline drives
          them through analyse, plan, execute, review, merge, verify. Direct
          NDJSON stream-json transport &mdash; no pty wrappers, no cloud
          middleware, no mystery prompts mid-run. Your API keys, your machine,
          your code.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="https://github.com/Misc42/theClub"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-saffron bg-saffron px-5 py-3 font-mono text-[0.74rem] uppercase tracking-[0.14em] text-paper transition hover:bg-transparent hover:text-saffron"
          >
            See on GitHub
            <span aria-hidden>&rarr;</span>
          </Link>
          <Link
            href="#how"
            className="inline-flex items-center gap-2 border-b border-rule pb-2 font-mono text-[0.74rem] uppercase tracking-[0.14em] text-ink transition hover:border-saffron hover:text-saffron"
          >
            How it works
            <span aria-hidden>&darr;</span>
          </Link>
        </div>
      </div>
      <figure className="card overflow-hidden">
        <div className="relative aspect-[4/3] w-full bg-paper">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 p-6">
            {[
              { name: "Claude Code", role: "Orchestrator", color: "var(--accent-warm)" },
              { name: "Gemini CLI", role: "Research", color: "#8B5CF6" },
              { name: "Codex CLI", role: "Terminal", color: "#3B82F6" },
              { name: "Aider", role: "Multi-file", color: "var(--accent)" },
            ].map((agent) => (
              <div
                key={agent.name}
                className="flex flex-col justify-between rounded-md border border-rule bg-surface p-4"
              >
                <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: agent.color }}
                  />
                  Stable
                </div>
                <div>
                  <p
                    className="serif-italic text-lg leading-tight"
                    style={{ color: agent.color }}
                  >
                    {agent.name}
                  </p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-faint">
                    {agent.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <figcaption className="flex items-center justify-between gap-4 border-t border-rule px-5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-faint">
          <span>4 agents, 4 worktrees, 1 codebase</span>
          <span className="text-saffron">v0.6.0 &middot; Linux</span>
        </figcaption>
      </figure>
    </section>
  );
}
