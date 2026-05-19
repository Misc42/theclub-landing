// The cast — four agent "character cards", each with its brand colour as a
// left accent stripe + interior glow, role in serif italic, and the actual
// theClub CLI invocation in a code block at the foot.

type AgentCard = {
  key: "claude" | "gemini" | "codex" | "aider";
  name: string;
  role: string;
  what: string;
  invocation: string;
  color: string;
};

const CAST: ReadonlyArray<AgentCard> = [
  {
    key: "claude",
    name: "claude",
    role: "The orchestrator",
    what:
      "High-level architecture, planning, and review. Drives the pipeline phases. Long-lived child with stdin-streamed turns — saves 3 seconds + a cache reload on every follow-up.",
    invocation:
      "stdbuf -oL claude --print \\\n  --output-format stream-json \\\n  --input-format stream-json \\\n  --permission-mode bypassPermissions \\\n  --bare --session-id <uuid>",
    color: "var(--agent-claude)",
  },
  {
    key: "gemini",
    name: "gemini",
    role: "The reader",
    what:
      "Big-context analysis. Sweeps the repo, returns structured maps. Env-scrubs GEMINI_API_KEY / GOOGLE_API_KEY so OAuth wins; a 200 ms spawn stagger dodges the refresh race.",
    invocation:
      "gemini -p \"<prompt>\" \\\n  --output-format stream-json \\\n  --yolo --skip-trust \\\n  --include-directories <wt> \\\n  --session-id <uuid>",
    color: "var(--agent-gemini)",
  },
  {
    key: "codex",
    name: "codex",
    role: "The hand on the terminal",
    what:
      "Devops, build, and config chores. Exec mode hard-codes approval_policy=never in the binary itself — no interactive prompts can render, full stop. Resume via thread-id for multi-turn.",
    invocation:
      "codex exec --json \\\n  --sandbox workspace-write \\\n  --cd <worktree> \\\n  --skip-git-repo-check \\\n  --output-last-message <path>",
    color: "var(--agent-codex)",
  },
  {
    key: "aider",
    name: "aider",
    role: "The surgeon",
    what:
      "Surgical multi-file diffs via SEARCH/REPLACE blocks. No native NDJSON — the adapter parses stdout with a regex set. Scope enforcement guards each Applied-edit; no-op detection via git rev-parse pre/post.",
    invocation:
      "aider --message \"<task>\" \\\n  --no-stream --no-pretty \\\n  --yes-always \\\n  --file <path> [--file ...] \\\n  --edit-format diff",
    color: "var(--agent-aider)",
  },
];

export default function Cast() {
  return (
    <section id="cast" className="wrap mt-28 md:mt-36">
      <header className="rule-double pb-4">
        <p className="dispatch-mark">
          <span className="dot" aria-hidden />
          The Cast · Dramatis Personae
        </p>
        <h2 className="section-title mt-3 max-w-3xl">
          Four CLIs.{" "}
          <span className="serif-italic text-saffron">Each plays to type.</span>
        </h2>
        <p className="serif-italic mt-5 max-w-2xl text-[clamp(1.05rem,1.7vw,1.2rem)] leading-snug text-muted">
          theClub doesn&apos;t average the four agents into a single
          mediocre voice. Each one keeps its character &mdash; the
          orchestrator plays each to its strength.
        </p>
      </header>

      <ul className="mt-10 grid gap-5 md:grid-cols-2">
        {CAST.map((a) => (
          <li
            key={a.key}
            className="relative overflow-hidden rounded-lg border border-rule bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] p-7 transition hover:translate-y-[-2px]"
            style={{
              // soft glow drawing from the agent colour
              boxShadow: `0 0 0 1px color-mix(in srgb, ${a.color} 25%, transparent) inset, 0 30px 60px -28px color-mix(in srgb, ${a.color} 28%, transparent)`,
            }}
          >
            {/* Accent stripe — the character's "spotlight" */}
            <span
              aria-hidden
              className="absolute left-0 top-0 h-full w-[3px]"
              style={{
                background: `linear-gradient(180deg, ${a.color}, color-mix(in srgb, ${a.color} 12%, transparent))`,
                boxShadow: `0 0 22px ${a.color}`,
              }}
            />
            <header className="flex items-baseline justify-between gap-3">
              <h3
                className="font-serif italic text-[clamp(1.7rem,2.6vw,2.1rem)] leading-none"
                style={{ color: a.color }}
              >
                {a.name}
              </h3>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-faint">
                role
              </span>
            </header>
            <p className="mt-1 font-mono text-[0.74rem] uppercase tracking-[0.2em] text-ink">
              {a.role}
            </p>
            <p className="mt-4 max-w-prose text-[0.95rem] leading-relaxed text-muted">
              {a.what}
            </p>
            <pre className="command mt-5 px-4 py-3 text-[0.78rem] leading-relaxed">
{a.invocation}
            </pre>
          </li>
        ))}
      </ul>
    </section>
  );
}
