// FAQ — newspaper Q&A column. Questions set in serif italic at editorial
// scale; answers in body sans. Open/close uses native <details> for zero JS.

const QA: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Why four agents and not one big model?",
    a: "Each CLI has a strength the others don't. claude is sharpest on high-level architecture and review, gemini absorbs huge contexts, codex handles terminal and devops chores, aider does surgical multi-file diffs that nobody else matches. theClub plays each to its strength inside one pipeline — analyse with gemini, plan with claude, execute with aider and codex, review back with claude. When the goal is trivial the cheap-path classifier short-circuits all of that to a single agent. And you're not boxed into those four: a native direct-API adapter drives any OpenAI-compatible, Anthropic, or Ollama model — including a fully local one — into the exact same pipeline.",
  },
  {
    q: "Why not just open four terminals?",
    a: "Because reconciling four parallel diffs by hand is awful. Each agent in theClub edits in its own git worktree (parallel, no stomping). The orchestrator collects diffs, runs one review pass, and merges only what survives — with surgical rollback that bisects bad merges to find the culprit while preserving the good work. Hours of manual reconciliation collapse into seconds.",
  },
  {
    q: "Does this send my code anywhere?",
    a: "Only to the model providers you choose to authenticate — and if you point it at a local model over Ollama, nothing leaves the machine at all. theClub itself is a local Tauri desktop app: no analytics, no telemetry, no cloud sandbox, no middleware. Each CLI talks to its own backend (claude / gemini / openai / openrouter) directly with your keys; the orchestrator just shuffles inputs and outputs between git worktrees on your hardware.",
  },
  {
    q: "What happened to agentapi?",
    a: "v0.5.x wrapped each CLI through agentapi's pseudo-terminal proxy. Every mid-run prompt — codex update banners, gemini edit-accept gates, claude policy confirmations — could jam the wrapper and abort the pipeline. v0.6.0 removed the pty layer entirely: each adapter spawns its CLI directly with stream-json flags. No terminal means no prompts can render. The fix is in the architecture, not in config tweaks.",
  },
  {
    q: "How is this different from Replit Agent, Cognition, or GitHub's agent?",
    a: "Those are excellent cloud products — and that's exactly the difference. They run on the vendor's compute, route you toward the vendor's model, and bill per seat, because that is their business. theClub runs on your machine, drives the subscriptions you already own (or a fully local model), resells no compute, and charges nothing per seat. A funded incumbent structurally can't be neutral — neutrality would cannibalise its own model and seat revenue. theClub has nothing to protect, so it can be loyal to no provider. That's the moat.",
  },
  {
    q: "Linux only?",
    a: "For now. Tauri v2 builds for macOS and Windows trivially, but the Linux build is what's actually been smoked. macOS and Windows installers come once Linux v1 stabilises — likely v0.7.x.",
  },
  {
    q: "Is it free?",
    a: "theClub is open source under AGPL-3.0. You pay for whatever models you point it at. There's no theClub subscription, no hosted tier, no Pro version.",
  },
  {
    q: "Why is this a ‘Misc42 Labs developer tool’?",
    a: "Misc42 Labs is the studio building consumer software for Indian users (Sanketra, Mukut, Tvashtra). theClub is the workshop instrument the studio uses to ship those products. We open-source it because if a workshop instrument is sharp enough to ship our own products, it's sharp enough to share.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="wrap mt-28 md:mt-36 mb-12">
      <header className="rule-double pb-4">
        <p className="dispatch-mark">
          <span className="dot" aria-hidden />
          FAQ · Letters to the editor
        </p>
        <h2 className="section-title mt-3 max-w-3xl">
          Questions{" "}
          <span className="serif-italic text-saffron">people actually ask.</span>
        </h2>
      </header>

      <div className="mt-12 grid gap-3">
        {QA.map(({ q, a }, i) => (
          <details
            key={q}
            className="group border-t border-rule pt-6 last:border-b last:pb-6"
          >
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-faint">
                  Q&middot;{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="serif-italic text-[clamp(1.25rem,1.8vw,1.55rem)] leading-snug text-ink group-hover:text-saffron transition">
                  {q}
                </h3>
              </div>
              <span
                aria-hidden
                className="font-mono text-[1.1rem] leading-none text-saffron transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 ml-0 max-w-3xl pl-[3.2rem] text-[0.96rem] leading-[1.7] text-muted">
              {a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
