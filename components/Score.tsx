// Conductor's score — a worked example with four staves, one per agent.
// Coloured event marks across the timeline show where each agent acts.
// Vertical hairlines mark phase boundaries (0..8). A saffron playhead sweeps
// left → right. The four CLIs shown are illustrative supported examples — the
// roster is open, so a real run can field more or fewer agents.
// All CSS / inline SVG — no JS state, no external deps.

type Agent = {
  key: "claude" | "gemini" | "codex" | "aider";
  name: string;
  role: string;
  color: string;
  /** Beats (0..100) on the score where this agent is "playing". */
  beats: ReadonlyArray<[number, number]>; // [start, end] pairs
};

const AGENTS: ReadonlyArray<Agent> = [
  {
    key: "claude",
    name: "claude",
    role: "Orchestrator · plan · review",
    color: "var(--agent-claude)",
    beats: [
      [4, 14],   // analyse/clarify
      [22, 38],  // plan
      [70, 86],  // review
    ],
  },
  {
    key: "gemini",
    name: "gemini",
    role: "Research · long context",
    color: "var(--agent-gemini)",
    beats: [
      [6, 24],   // codebase analyse
      [42, 54],  // mid-execute relay
    ],
  },
  {
    key: "codex",
    name: "codex",
    role: "Terminal · devops · build",
    color: "var(--agent-codex)",
    beats: [
      [40, 56],  // execute (terminal tasks)
      [60, 68],  // verify build
    ],
  },
  {
    key: "aider",
    name: "aider",
    role: "Surgical multi-file edits",
    color: "var(--agent-aider)",
    beats: [
      [40, 66],  // execute (code edits)
    ],
  },
];

const PHASES: ReadonlyArray<{ at: number; label: string }> = [
  { at: 0,   label: "Classify" },
  { at: 6,   label: "Clarify" },
  { at: 14,  label: "Analyse" },
  { at: 24,  label: "Plan" },
  { at: 40,  label: "Dispatch" },
  { at: 58,  label: "Execute" },
  { at: 70,  label: "Review" },
  { at: 88,  label: "Merge" },
  { at: 100, label: "Verify" },
];

export default function Score() {
  return (
    <figure className="card-thick relative overflow-hidden">
      <header className="flex flex-wrap items-end justify-between gap-2 border-b border-rule pb-4">
        <div>
          <p className="masthead">A goal, scored for many agents</p>
          <h2 className="serif-italic mt-2 text-[clamp(1.4rem,2.2vw,1.9rem)] leading-tight">
            <span className="text-ink">8 phases, N voices, one merged commit.</span>
          </h2>
        </div>
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-faint">
          read left &rarr; right &middot; one run &middot; example roster
        </p>
      </header>

      {/* The score itself */}
      <div className="relative mt-8">
        {/* Phase ticks — top axis */}
        <div className="ml-[9.5rem] mb-3 hidden md:grid"
             style={{ gridTemplateColumns: "repeat(100, minmax(0, 1fr))" }}>
          {PHASES.map((p) => (
            <div
              key={p.label}
              className="col-span-1 -translate-x-1/2 whitespace-nowrap font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint"
              style={{ gridColumnStart: Math.max(1, Math.min(100, p.at)) }}
            >
              {p.label}
            </div>
          ))}
        </div>

        {/* Staves */}
        <div className="relative">
          {/* Playhead — animated saffron line sweeping the score */}
          <div
            aria-hidden
            className="score-playhead absolute left-[9.5rem]"
            style={{ width: "calc(100% - 9.5rem)" }}
          />
          <ul className="flex flex-col gap-4">
            {AGENTS.map((agent) => (
              <li
                key={agent.key}
                className="grid items-center gap-3 md:grid-cols-[9.5rem_1fr]"
              >
                {/* Agent label — left */}
                <div className="flex flex-col">
                  <span
                    className="font-serif italic text-[1.15rem] leading-tight"
                    style={{ color: agent.color }}
                  >
                    {agent.name}
                  </span>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-faint">
                    {agent.role}
                  </span>
                </div>

                {/* Stave + claims — right */}
                <div className="relative h-10 score-bg overflow-visible rounded-md border border-rule bg-[color-mix(in_srgb,var(--surface)_60%,transparent)]">
                  {/* Hairline centred along the stave */}
                  <div
                    aria-hidden
                    className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, color-mix(in srgb, var(--rule) 90%, transparent), transparent)",
                    }}
                  />
                  {/* Beat / claim marks */}
                  {agent.beats.map(([start, end], i) => (
                    <span
                      key={i}
                      className="claim absolute top-1/2 -translate-y-1/2"
                      style={{
                        // @ts-expect-error CSS variable for the claim's brand colour
                        "--agent-color": agent.color,
                        left: `${start}%`,
                        width: `${Math.max(2, end - start)}%`,
                      }}
                      aria-label={`${agent.name} beats ${start}-${end}`}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom axis with merge marker */}
        <div className="relative mt-6 ml-[9.5rem]">
          <div
            aria-hidden
            className="h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in srgb, var(--rule) 70%, transparent) 12%, color-mix(in srgb, var(--rule) 70%, transparent) 88%, transparent)",
            }}
          />
          <div className="mt-3 flex items-baseline justify-between text-faint font-mono text-[0.62rem] uppercase tracking-[0.2em]">
            <span>0 · classify</span>
            <span className="text-saffron">100 · merged commit &#x2605;</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <footer className="mt-8 flex flex-wrap gap-3 border-t border-rule pt-5">
        {AGENTS.map((a) => (
          <span
            key={a.key}
            className="agent-chip"
            // @ts-expect-error CSS variable for the chip's brand colour
            style={{ "--agent-color": a.color }}
          >
            <span className="pulse" aria-hidden />
            {a.name}
          </span>
        ))}
        <span className="ml-auto font-mono text-[0.62rem] uppercase tracking-[0.2em] text-faint">
          parallel · per-worktree · merged with conflict-bisect
        </span>
      </footer>
    </figure>
  );
}
