// FAQ — newspaper Q&A column. Questions set in serif italic at editorial
// scale; answers in body sans. Open/close uses native <details> for zero JS.

const QA: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Why many agents and not one big model?",
    a: "Because different agents have different strengths, and you don't have to pick just one. Claude Code is sharpest on high-level architecture and review, Antigravity is one CLI that reaches Gemini's huge context plus Claude and GPT-OSS, Codex handles terminal and devops chores, a local model is free and private. theClub plays each to its strength inside one pipeline — analyse with one, plan with another, execute in parallel, review back with a strong reasoner. The roster is open: any OpenAI-compatible or Anthropic endpoint, a local Ollama model, or the CLIs you already pay for. When the goal is trivial the cheap-path classifier short-circuits all of that to a single agent.",
  },
  {
    q: "How is this different from a worktree runner?",
    a: "A worktree runner gives you N parallel branches and stops there — you're still the human reading every diff and deciding what merges. theClub is not just a worktree runner; it's an autonomous pipeline on top of one. It runs the full plan → review → merge loop itself: collects diffs, scores each against the plan, merges only what survives — with surgical rollback that bisects bad merges to find the culprit while preserving good work — and shows the whole run as a live flow-graph. Hours of manual reconciliation collapse into seconds, and you stay on your machine the whole time.",
  },
  {
    q: "Can cloud orchestrators copy this?",
    a: "Not without abandoning their model. The per-seat, cloud-sandbox, pull-request incumbents run your code on their infrastructure and hand you a PR to review. theClub runs N agents locally — your repo, your machine, your worktrees, no forced PR — and merges autonomously where you want it to. That local, BYO-CLI, no-sandbox posture is the structural moat: a cloud sandbox business can't ship it without becoming a different product.",
  },
  {
    q: "Does this send my code anywhere?",
    a: "Only to the model providers you've authenticated. theClub itself is a local Tauri desktop app — no analytics, no telemetry, no cloud middleware, no cloud sandbox. Each agent talks to its own backend directly with your keys — Claude / Antigravity / OpenAI / OpenRouter, any OpenAI-compatible or Anthropic endpoint, or a local model that never leaves the box. The orchestrator just shuffles inputs and outputs between worktrees on your machine.",
  },
  {
    q: "What happened to agentapi?",
    a: "v0.5.x wrapped each CLI through agentapi's pseudo-terminal proxy. Every mid-run prompt — codex update banners, gemini edit-accept gates, claude policy confirmations — could jam the wrapper and abort the pipeline. v0.6.0 removed the pty layer entirely: each adapter spawns its CLI directly with stream-json flags. No terminal means no prompts can render. The fix is in the architecture, not in config tweaks.",
  },
  {
    q: "Linux only?",
    a: "For now. Tauri v2 builds for macOS and Windows trivially, but the Linux build is what's actually been smoked. macOS and Windows installers come once Linux v1 stabilises — likely v0.7.x.",
  },
  {
    q: "Is it free?",
    a: "theClub is a Misc42 Labs product, currently in early-access testing and paid at launch — pricing is announced then. It runs entirely on your machine, and you bring your own model access: the CLIs you already pay for, or a local Ollama model. Your keys never touch theClub; agents talk to their providers directly.",
  },
  {
    q: "Why is this a ‘Misc42 Labs developer tool’?",
    a: "Misc42 Labs is the studio building consumer software for Indian users (Sanketra, Mukut, Tvashtra). theClub is the workshop instrument the studio uses to ship those products — a tool sharp enough to build our own products, now offered as a product in its own right.",
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
