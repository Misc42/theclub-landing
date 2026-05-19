export default function Problem() {
  return (
    <section id="why" className="wrap border-b border-rule py-20">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="masthead mb-5">Why &middot; the problem</p>
          <h2 className="section-title max-w-xl">
            One agent isn&apos;t enough.{" "}
            <span className="serif-italic text-saffron">Five tabs aren&apos;t serious.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Every coding agent CLI has a strength &mdash; claude on
            architecture, gemini on big-context research, codex on terminal
            ops, aider on surgical multi-file diffs. Most days you need two or
            three of them on the same problem, but switching contexts is
            friction and merging their work by hand is worse.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Existing wrappers proxy each CLI through a pseudo-terminal layer
            (agentapi-style). Every mid-run interactive prompt &mdash; an
            update banner, an edit-accept gate, a policy confirmation &mdash;
            jams the wrapper. The orchestrator stalls. The pipeline aborts.
            <span className="text-ink"> theClub goes around that whole problem.</span>
          </p>
        </div>
        <ul className="grid gap-4 self-start">
          {[
            {
              k: "Direct stream-json transport",
              v: "Spawn each CLI in non-interactive mode with NDJSON output. No pty, no TUI, no prompts that can hang the pipeline.",
            },
            {
              k: "One worktree per agent",
              v: "Each agent edits in its own git branch. Parallel work, structured merges, surgical rollback if a worker breaks the build.",
            },
            {
              k: "8-phase orchestration",
              v: "Analyse → clarify → plan → dispatch → execute → review → merge → verify. Cheap-path classifier short-circuits trivial tasks to a single agent.",
            },
            {
              k: "Local, BYO keys",
              v: "Runs on your machine. Your claude / gemini / codex / openrouter keys. No analytics, no telemetry, no cloud middleware.",
            },
          ].map(({ k, v }) => (
            <li key={k} className="card">
              <p className="serif-italic text-lg text-ink">{k}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
