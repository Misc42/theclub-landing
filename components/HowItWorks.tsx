export default function HowItWorks() {
  const phases = [
    {
      n: "0",
      name: "Classify",
      detail:
        "A heuristic-first classifier inspects the goal. Confident trivial / complex verdicts skip the LLM call entirely. Only ambiguous 'standard' tasks pay for a model tiebreak.",
    },
    {
      n: "1",
      name: "Clarify · Analyse",
      detail:
        "claude asks one clarifying question if the goal is underspecified (5-minute timeout + skip). gemini reads the repo and produces a structured analysis in parallel.",
    },
    {
      n: "2",
      name: "Plan",
      detail:
        "claude turns the goal + analysis into a strict-JSON plan: per-task agent assignment, file scope, priority.",
    },
    {
      n: "3-4",
      name: "Dispatch · Execute",
      detail:
        "Each task spawns its assigned agent in its own git worktree. NDJSON events stream back: file changes, commits, costs.",
    },
    {
      n: "5",
      name: "Review",
      detail:
        "claude scores each agent's diff against the plan. Approve / reject per task. Rejected tasks loop back to Execute with feedback.",
    },
    {
      n: "6",
      name: "Merge",
      detail:
        "Approved branches merge to main. Conflict detection runs ahead of time. Surgical rollback bisects bad merges to find the culprit while preserving good work.",
    },
    {
      n: "7-8",
      name: "Verify · Score",
      detail:
        "Build check runs (cargo / tsc / vite). Per-agent quality / speed / token-efficiency scores persist to .theclub/scores.json for adaptive routing.",
    },
  ];

  return (
    <section id="how" className="wrap border-b border-rule py-20">
      <p className="masthead mb-5">How it works</p>
      <h2 className="section-title max-w-2xl">
        An 8-phase pipeline,{" "}
        <span className="serif-italic text-saffron">end to end.</span>
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
        One goal in, one merged commit out &mdash; an autonomous loop, not a
        worktree runner waiting on you. Each phase has a strict contract:
        what comes in, what goes out, how it fails. Cheap-path tasks (single
        agent, &lt; 90s) skip the heavy stages. Complex multi-verb goals fan
        out across the whole roster. The CLIs below are illustrative
        examples &mdash; bring your own, or point a phase at a local model.
      </p>
      <ol className="mt-12 grid gap-4 md:grid-cols-2">
        {phases.map((p) => (
          <li
            key={p.name}
            className="card flex flex-col gap-2"
          >
            <header className="flex items-baseline gap-3">
              <span className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-saffron">
                Phase {p.n}
              </span>
              <span className="serif-italic text-xl text-ink">{p.name}</span>
            </header>
            <p className="text-sm leading-relaxed text-muted">{p.detail}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12 grid gap-6 lg:grid-cols-4">
        {[
          {
            t: "Claude Code",
            d: "stdbuf -oL claude --print --output-format stream-json --bare. Long-lived child with stdin pipe for multi-turn (saves 3s + cache load per turn).",
            color: "var(--accent-warm)",
          },
          {
            t: "Gemini CLI",
            d: "gemini -p --output-format stream-json --yolo --skip-trust. Env-scrubs GEMINI_API_KEY so OAuth wins. 200ms spawn stagger for refresh race.",
            color: "#8B5CF6",
          },
          {
            t: "Codex CLI",
            d: "codex exec --json --sandbox workspace-write. Exec mode hard-codes approval_policy=never — no interactive prompts possible.",
            color: "#3B82F6",
          },
          {
            t: "Aider",
            d: "aider --message --no-stream --no-pretty --yes-always. Regex stdout parser, scope-enforcement on each Applied-edit line, no-op detection via git rev-parse.",
            color: "var(--accent)",
          },
        ].map((a) => (
          <article key={a.t} className="card">
            <p
              className="serif-italic text-lg leading-tight"
              style={{ color: a.color }}
            >
              {a.t}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{a.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
