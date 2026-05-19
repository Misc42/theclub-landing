const qa = [
  {
    q: "Why four agents and not one big model?",
    a: "Each CLI has a strength the others don't. claude is best at high-level architecture and review, gemini reads huge contexts, codex is sharp on terminal/devops, aider does surgical multi-file diffs. theClub plays them to their strengths inside one pipeline — analyze with gemini, plan with claude, execute with aider/codex, review back with claude. The cheap-path classifier short-circuits this when the task is trivial, so you don't pay for orchestration on a one-liner.",
  },
  {
    q: "Why not just use the CLIs in separate terminals?",
    a: "Because merging their work by hand is awful. Each agent in theClub edits in its own git worktree (parallel, no stomping). The orchestrator collects diffs, runs a single review pass, and merges only what survives review — with surgical rollback that bisects bad merges to find the culprit while preserving the good work. That's hours of manual reconciliation collapsed into seconds.",
  },
  {
    q: "Does this send my code anywhere?",
    a: "Only to the model providers you've authenticated. theClub itself is a local Tauri desktop app — no analytics, no telemetry, no cloud middleware. Each CLI talks to its own backend (claude / gemini / openai / openrouter) directly with your keys. The orchestrator just shuffles their inputs and outputs between worktrees on your machine.",
  },
  {
    q: "What happened to agentapi?",
    a: "v0.5.x wrapped each CLI through agentapi's pseudo-terminal proxy. Every mid-run prompt — codex update banners, gemini edit-accept gates, claude policy confirmations — could jam the wrapper and abort the pipeline. v0.6.0 removed the pty layer entirely: each adapter spawns its CLI directly with stream-json flags. No terminal means no prompts can render. The fix is in the architecture, not in config tweaks.",
  },
  {
    q: "Linux only?",
    a: "For now. Tauri v2 builds for macOS and Windows trivially, but the Linux build is what's actually been smoked. macOS / Windows installers come once Linux v1 stabilizes — probably v0.7.x.",
  },
  {
    q: "Is it free?",
    a: "theClub is open source (AGPL-3.0). You pay for whatever models you point it at. There's no theClub subscription, no hosted tier, no Pro version.",
  },
  {
    q: "Why is this a 'Misc42 Labs developer tool'?",
    a: "Misc42 Labs is the studio building consumer software for Indian users (Sanketra, Mukut, Tvashtra). theClub is the workshop instrument the studio uses to ship those products. We open-source it because if it's sharp enough for our own work, it's sharp enough to share.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="wrap py-20">
      <p className="masthead mb-5">FAQ</p>
      <h2 className="section-title max-w-2xl">
        Questions{" "}
        <span className="serif-italic text-saffron">people actually ask.</span>
      </h2>
      <div className="mt-12 grid gap-4">
        {qa.map(({ q, a }) => (
          <details
            key={q}
            className="card group"
          >
            <summary className="flex cursor-pointer items-baseline justify-between gap-4 list-none">
              <span className="serif-italic text-lg text-ink">{q}</span>
              <span
                className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-saffron transition group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-muted">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
