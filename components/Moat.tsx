// The Moat — the observability argument. Every other agent dashboard draws a
// tree or a waterfall, which can only say "this, then this." theClub runs up to
// sixteen worktrees at once across dependency waves and draws the one thing a
// tree cannot: who is working in parallel, right now. The schematic below is a
// pure-CSS contrast — a sequential waterfall against a lane-per-worker wave —
// built from the same agent-colour tokens the app uses.

// One bar in the mini-Gantt. Coloured gradient + faint glow, matching the
// app's "claim" bars. `left`/`width` are track percentages.
function Bar({
  color,
  left,
  width,
  faint = false,
}: {
  color: string;
  left: number;
  width: number;
  faint?: boolean;
}) {
  return (
    <div
      aria-hidden
      className="absolute h-[9px] rounded-full"
      style={{
        left: `${left}%`,
        width: `${width}%`,
        background: `linear-gradient(90deg, color-mix(in srgb, ${color} ${faint ? 38 : 85}%, transparent), color-mix(in srgb, ${color} ${faint ? 12 : 32}%, transparent))`,
        boxShadow: faint
          ? "none"
          : `0 0 0 1px color-mix(in srgb, ${color} 40%, transparent) inset, 0 0 16px color-mix(in srgb, ${color} 26%, transparent)`,
      }}
    />
  );
}

const WORKER = [
  "var(--accent)", // qwen-a — emerald
  "var(--agent-codex)", // qwen-b — azure
  "var(--agent-aider)", // qwen-c — amber
  "var(--agent-gemini)", // qwen-d — violet
];

export default function Moat() {
  // Lane geometry, shared by both panels so the two charts read on one scale.
  const laneH = 26;
  const lanes = [0, 1, 2, 3, 4];

  return (
    <section id="moat" className="wrap mt-28 md:mt-36">
      <header className="rule-double pb-4">
        <p className="dispatch-mark">
          <span className="dot" aria-hidden />
          The Moat · the view nobody else has
        </p>
        <h2 className="section-title mt-3 max-w-3xl">
          The field draws{" "}
          <span className="serif-italic text-saffron">waterfalls.</span>
          <br />
          theClub draws the{" "}
          <span className="serif-italic text-green">wave.</span>
        </h2>
        <p className="serif-italic mt-5 max-w-2xl text-[clamp(1.05rem,1.7vw,1.2rem)] leading-snug text-muted">
          Every other agent dashboard renders a tree or a waterfall &mdash; a
          shape that can only ever say &ldquo;this, then this, then this.&rdquo;
          theClub runs up to sixteen worktrees at once across dependency waves,
          and draws the one thing a tree structurally cannot: who is working in
          parallel, right now.
        </p>
      </header>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* ── The waterfall — everyone else ──────────────────────────── */}
        <figure className="card-thick flex flex-col">
          <figcaption className="order-2 mt-6">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-faint">
              The waterfall · everyone else
            </p>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">
              Tasks stack down and to the right. The chart is a list with
              timestamps &mdash; honest about order, blind to overlap.
            </p>
          </figcaption>
          <div
            className="relative order-1"
            style={{ height: lanes.length * laneH }}
            aria-hidden
          >
            {/* baseline gridlines */}
            {lanes.map((l) => (
              <div
                key={l}
                className="absolute left-0 right-0"
                style={{
                  top: l * laneH + laneH / 2,
                  height: 1,
                  background:
                    "color-mix(in srgb, var(--rule) 70%, transparent)",
                }}
              />
            ))}
            {/* a descending staircase — strictly sequential */}
            {lanes.map((l) => (
              <div
                key={l}
                className="absolute left-0 right-0"
                style={{ top: l * laneH }}
              >
                <Bar color="var(--ink-muted)" left={4 + l * 18} width={17} faint />
              </div>
            ))}
            <div
              className="absolute bottom-[-6px] right-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-faint"
            >
              5 tasks · 5 steps long
            </div>
          </div>
        </figure>

        {/* ── The wave — theClub ─────────────────────────────────────── */}
        <figure className="card-thick flex flex-col">
          <figcaption className="order-2 mt-6">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-green">
              The wave · theClub
            </p>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">
              Four workers share one time axis; a gridline marks the wave they
              ran in. You can see, not infer, that they ran at once.
            </p>
          </figcaption>
          <div
            className="relative order-1"
            style={{ height: lanes.length * laneH }}
            aria-hidden
          >
            {/* baseline gridlines */}
            {lanes.map((l) => (
              <div
                key={l}
                className="absolute left-0 right-0"
                style={{
                  top: l * laneH + laneH / 2,
                  height: 1,
                  background:
                    "color-mix(in srgb, var(--rule) 70%, transparent)",
                }}
              />
            ))}
            {/* wave-boundary gridlines (vertical, dashed) */}
            {[6, 66].map((x) => (
              <div
                key={x}
                className="absolute top-0 bottom-0"
                style={{
                  left: `${x}%`,
                  width: 0,
                  borderLeft:
                    "1px dashed color-mix(in srgb, var(--accent-warm) 55%, transparent)",
                }}
              />
            ))}
            {/* wave 1 — four workers, same start, different lanes */}
            {WORKER.map((c, l) => (
              <div
                key={l}
                className="absolute left-0 right-0"
                style={{ top: l * laneH }}
              >
                <Bar color={c} left={6} width={54} />
              </div>
            ))}
            {/* wave 2 — the merge / review, after the boundary */}
            <div className="absolute left-0 right-0" style={{ top: 4 * laneH }}>
              <Bar color="var(--agent-claude)" left={66} width={28} />
            </div>
            <div className="absolute bottom-[-6px] left-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-green">
              wave 1 · ×4
            </div>
            <div className="absolute bottom-[-6px] right-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-saffron">
              wave 2 · merge
            </div>
          </div>
        </figure>
      </div>

      <blockquote className="pull mt-14 max-w-3xl">
        A waterfall tells you what happened, in order. The wave tells you what is
        happening, at once &mdash; and past a handful of workers, that is the
        only number worth watching.
      </blockquote>
    </section>
  );
}
