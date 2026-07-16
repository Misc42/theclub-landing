// Photographic plate gallery — five screenshots of the actual desktop app,
// framed as editorial dispatches. Each plate gets a serif title + a single
// line of dry mono caption so the image is the headline, not the prose.
// Every image is a real capture of theClub driving a live three-worker run.

import Image from "next/image";
import { asset } from "@/lib/asset";

type Tone = "saffron" | "claude" | "agy" | "green" | "codex" | "aider";

type Plate = {
  src: string;
  alt: string;
  title: string;
  body: string;
  caption: string;
  // Native pixel size of the capture — the figure renders at its own aspect,
  // so nothing is cropped or stretched.
  w: number;
  h: number;
  // tone tells the figure's left rail which agent-coloured stripe to wear.
  tone: Tone;
};

const PLATES: ReadonlyArray<Plate> = [
  {
    src: asset("/screenshots/runsheet-complete.png"),
    alt: "theClub's run sheet after a finished run — the phase spine down the left, 01 PLAN with six tasks across three waves, 02 EXECUTE, 03 REVIEW & MERGE with a score and merge tier per task, and a PARTIAL — 1 PRESERVED verdict.",
    title: "The whole run, one document",
    body: "No dashboard to reassemble in your head. The phases run down the left — Clarify, Analyze, Plan, Dispatch, Execute, Review, Merge, Verify, Score — and the run itself reads top to bottom: the plan it wrote, the waves it ran, the diffs it merged, the verdict it will not soften.",
    caption: "Plate 01 · run sheet · top to bottom",
    w: 2800,
    h: 2768,
    tone: "claude",
  },
  {
    src: asset("/screenshots/runsheet-merge.png"),
    alt: "The REVIEW & MERGE band — six tasks, each with a reviewer score and the merge tier that landed it (clean, union, ai-semantic), one task held at GATE UNPROVEN with a Merge anyway button, one rejected and re-dispatched.",
    title: "Which tier landed it",
    body: "Every task shows the score the reviewer gave it and the tier that actually landed the diff — clean, union, ai-semantic. T3 could not prove its gate, so it sits at GATE UNPROVEN with a Merge anyway button and nothing merged behind your back. The run closes PARTIAL — 1 PRESERVED.",
    caption: "Plate 02 · merge · the tier ladder",
    w: 1960,
    h: 1045,
    tone: "codex",
  },
  {
    src: asset("/screenshots/runsheet-clarify.png"),
    alt: "A run paused at the Clarify phase — a panel titled THE BRAIN ASKS with the question 'Should the refresh token rotate on every use, or only on a detected reuse (RTR)?' and an answer box.",
    title: "It asks before it plans",
    body: "An ambiguous goal stops the run at Clarify instead of quietly guessing. Here the brain wants to know whether the refresh token rotates on every use or only on a detected reuse — and the plan waits on your answer.",
    caption: "Plate 03 · clarify · the brain asks",
    w: 2800,
    h: 864,
    tone: "saffron",
  },
  {
    src: asset("/screenshots/roster-studio.png"),
    alt: "Roster Studio — four drag-ordered slots on the left, an inspector on the right for name, role, colour, tuning, harness, backend and model, and a roster valid state at the foot.",
    title: "Roster Studio",
    body: "Cast the lineup yourself. Drag the slots into order, open one, and set its role, colour, tuning, harness and model — an agentic CLI, or a direct-api slot pointed at a keyless local model. Sixteen slots, parallel or serial, saved to one TOML.",
    caption: "Plate 04 · roster · bring your own",
    w: 2800,
    h: 1800,
    tone: "aider",
  },
  {
    src: asset("/screenshots/settings-drawer.png"),
    alt: "The settings drawer — one card per agent showing status, tokens used, context window, a rolling quality/speed/trust score, and a manual-override toggle.",
    title: "Every agent, tuned",
    body: "Open any slot for its real numbers — status, tokens burnt, context window, a rolling quality / speed / trust score — and flip the manual override that tells the orchestrator to skip it on the next dispatch.",
    caption: "Plate 05 · per-agent · live dials",
    w: 2800,
    h: 1800,
    tone: "green",
  },
];

const RAIL: Record<Tone, string> = {
  saffron: "var(--accent-warm)",
  claude: "var(--agent-claude)",
  agy: "var(--agent-agy)",
  green: "var(--accent)",
  codex: "var(--agent-codex)",
  aider: "var(--agent-aider)",
};

export default function Interface() {
  return (
    <section id="interface" className="wrap mt-28 md:mt-36">
      <header className="rule-double pb-4">
        <p className="dispatch-mark">
          <span className="dot" aria-hidden />
          The Interface · five plates
        </p>
        <h2 className="section-title mt-3 max-w-3xl">
          The run sheet, photographed{" "}
          <span className="serif-italic text-saffron">as it closed.</span>
        </h2>
        <p className="serif-italic mt-5 max-w-2xl text-[clamp(1.05rem,1.7vw,1.2rem)] leading-snug text-muted">
          theClub is a desktop app, not a hosted dashboard. Every plate below is
          a real screenshot of the running app on Linux &mdash; three of one run
          read end to end, two of the controls behind it. No mockups, no faked
          numbers, no &ldquo;coming soon&rdquo; sticker.
        </p>
      </header>

      <ol className="mt-12 flex flex-col gap-16 md:gap-24">
        {PLATES.map((p, i) => {
          // Alternate the caption side for an editorial, broadsheet rhythm.
          const flip = i % 2 === 1;
          return (
            <li
              key={p.src}
              className={`grid gap-6 lg:items-end ${
                flip
                  ? "lg:grid-cols-[18rem_minmax(0,1fr)]"
                  : "lg:grid-cols-[minmax(0,1fr)_18rem]"
              }`}
            >
              <figure
                className={`relative overflow-hidden rounded-sm border border-rule ${
                  flip ? "lg:order-2" : ""
                }`}
              >
                {/* Left rail in the plate's agent tone — anchors the image to
                    its caption. Same trick the Pipeline rail uses. */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 z-10 w-[3px]"
                  style={{
                    background: RAIL[p.tone],
                    boxShadow: `0 0 28px color-mix(in srgb, ${RAIL[p.tone]} 45%, transparent)`,
                  }}
                />
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  priority={i === 0}
                  className="block h-auto w-full"
                  sizes="(min-width: 1024px) 60rem, 100vw"
                />
                {/* A faint inner border for the "press-printed" feel. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-sm"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px color-mix(in srgb, var(--ink) 6%, transparent)",
                  }}
                />
              </figure>

              <figcaption
                className={`lg:pb-1 ${flip ? "lg:order-1 lg:text-right" : "lg:pl-2"}`}
              >
                <p
                  className="font-mono text-[0.66rem] uppercase tracking-[0.22em]"
                  style={{ color: RAIL[p.tone] }}
                >
                  {p.caption}
                </p>
                <h3 className="serif-italic mt-3 text-[clamp(1.4rem,2.2vw,1.75rem)] leading-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-muted">
                  {p.body}
                </p>
              </figcaption>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
