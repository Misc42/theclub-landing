// Vertical filmstrip of the 8 phases. Each row has a phase-number bullet, a
// title + body, and a row of agent-coloured claim bars showing who runs that
// phase. The bullets connect via a saffron rail running down the left side.

type AgentKey = "claude" | "gemini" | "codex" | "aider";

type Phase = {
  n: string;
  name: string;
  body: string;
  agents: ReadonlyArray<AgentKey>;
};

const PHASES: ReadonlyArray<Phase> = [
  {
    n: "00",
    name: "Classify",
    body:
      "A heuristic-first classifier inspects the goal. Confident trivial / complex verdicts skip the model call entirely. Only the genuinely ambiguous middle pays for a tiebreak.",
    agents: ["claude"],
  },
  {
    n: "01",
    name: "Clarify · Analyse",
    body:
      "claude asks one clarifying question if the goal is underspecified (5-minute timeout, skippable). gemini reads the repo in parallel and returns a structured analysis.",
    agents: ["claude", "gemini"],
  },
  {
    n: "02",
    name: "Plan",
    body:
      "claude turns the goal + analysis into a strict-JSON plan. Per-task agent assignment, file scope, priority — no free-text guesswork.",
    agents: ["claude"],
  },
  {
    n: "03",
    name: "Dispatch",
    body:
      "Each plan task spawns its assigned agent in its own git worktree. Per-agent stream-json adapters tee NDJSON events back to the orchestrator.",
    agents: ["claude", "gemini", "codex", "aider"],
  },
  {
    n: "04",
    name: "Execute",
    body:
      "Agents work in parallel. File changes, commits, costs — every event is captured. The orchestrator never blocks on a single agent's interactive surface (there are none).",
    agents: ["codex", "aider"],
  },
  {
    n: "05",
    name: "Review",
    body:
      "claude scores each agent's diff against the plan. Approve / reject per task. Rejected work loops back into Execute with feedback — capped at three reflections.",
    agents: ["claude"],
  },
  {
    n: "06",
    name: "Merge",
    body:
      "Approved branches merge to main. Conflict detection runs ahead of time. A bad merge triggers a bisect — the orchestrator finds the culprit branch and rolls it back, preserving the good work.",
    agents: ["claude"],
  },
  {
    n: "07",
    name: "Verify · Score",
    body:
      "Build check runs (cargo / tsc / vite). Per-agent quality / speed / token-efficiency scores persist to .theclub/scores.json for adaptive routing on future runs.",
    agents: ["codex", "claude"],
  },
];

const AGENT_COLOR: Record<AgentKey, string> = {
  claude: "var(--agent-claude)",
  gemini: "var(--agent-gemini)",
  codex: "var(--agent-codex)",
  aider: "var(--agent-aider)",
};

export default function Pipeline() {
  return (
    <section id="how" className="wrap mt-28 md:mt-36">
      <header className="rule-double pb-4">
        <p className="dispatch-mark">
          <span className="dot" aria-hidden />
          The Pipeline · 8 movements
        </p>
        <h2 className="section-title mt-3 max-w-3xl">
          One goal in,{" "}
          <span className="serif-italic text-saffron">one merged commit out.</span>
        </h2>
        <p className="serif-italic mt-5 max-w-2xl text-[clamp(1.05rem,1.7vw,1.2rem)] leading-snug text-muted">
          Each phase has a strict contract &mdash; what comes in, what goes
          out, how it fails. Cheap-path tasks skip the heavy stages.
          Complex multi-verb goals fan out across all four agents.
        </p>
      </header>

      <ol className="phase-rail mt-12 flex flex-col gap-12">
        {PHASES.map((p) => (
          <li
            key={p.n}
            className="flex items-start gap-5 md:gap-7"
          >
            <span className="phase-bullet">
              <span className="num">{p.n}</span>
            </span>
            <div className="flex-1 min-w-0">
              <header className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="serif-italic text-[clamp(1.4rem,2.4vw,1.85rem)] leading-tight text-ink">
                  {p.name}
                </h3>
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-faint">
                  phase {p.n}
                </p>
              </header>
              <p className="mt-3 max-w-2xl text-[0.96rem] leading-relaxed text-muted">
                {p.body}
              </p>

              {/* Agent claim row — one coloured bar per agent that runs this phase. */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {p.agents.map((k) => (
                  <span
                    key={k}
                    className="agent-chip"
                    // @ts-expect-error CSS variable for chip colour
                    style={{ "--agent-color": AGENT_COLOR[k] }}
                  >
                    <span className="pulse" aria-hidden />
                    {k}
                  </span>
                ))}
                {p.agents.length === 1 ? (
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-faint">
                    solo
                  </span>
                ) : (
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-faint">
                    parallel · {p.agents.length} agents
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
