const PHASES: ReadonlyArray<{ n: string; title: string; body: string }> = [
  {
    n: "01 · PLAN",
    title: "It decomposes the goal",
    body: "A brain agent turns your goal into a dependency-ordered plan — per-task agent, file scope, priority.",
  },
  {
    n: "02 · EXECUTE",
    title: "Agents work in parallel",
    body: "Each agent gets its own git worktree, spawned with stream-json — no terminal, so no prompt can jam the run.",
  },
  {
    n: "03 · MERGE",
    title: "Only what survives review",
    body: "Every diff is scored against the plan; bad merges get bisected and rolled back. Build check runs last.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="border-t border-border bg-bg-alt">
      <div className="wrap py-20">
        <h2 className="text-[38px] font-bold leading-tight tracking-[-0.025em]">
          A goal in. A merged commit out.
        </h2>
        <p className="mt-3 max-w-[560px] text-base text-muted">
          Not a worktree runner that leaves you reading every diff — the full
          loop runs itself.
        </p>
        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {PHASES.map((p) => (
            <article
              key={p.n}
              className="rounded-[14px] border border-border bg-bg p-[26px]"
            >
              <p className="font-mono text-xs text-accent">{p.n}</p>
              <h3 className="mt-2.5 text-[19px] font-bold tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.55] text-muted">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
