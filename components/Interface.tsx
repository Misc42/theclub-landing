// Photographic plate gallery — six screenshots of the actual desktop app,
// framed as editorial dispatches. Each plate gets a serif title + a single
// line of dry mono caption so the image is the headline, not the prose.
// Every image is a real capture of theClub driving a live four-worker run.

import Image from "next/image";
import { asset } from "@/lib/asset";

type Tone = "saffron" | "claude" | "gemini" | "green" | "codex" | "aider";

type Plate = {
  src: string;
  alt: string;
  title: string;
  body: string;
  caption: string;
  // tone tells the figure's left rail which agent-coloured stripe to wear.
  tone: Tone;
};

const PLATES: ReadonlyArray<Plate> = [
  {
    src: asset("/screenshots/agents-running.png"),
    alt:
      "theClub's stage during a live run — Claude in the lead pane orchestrating, with four local qwen-coder workers stacked below, each assigned its own file and streaming logs while the wave runs.",
    title: "One brain, four local hands",
    body:
      "Claude plans the work and hands it out; four local qwen-coder workers take a file each and run at once. Every card wears its agent's colour, its live log, and the model behind it — here all four are ollama, all four keyless.",
    caption: "Plate 01 · stage · wave 1 of 1",
    tone: "claude",
  },
  {
    src: asset("/screenshots/blackboard.png"),
    alt:
      "The Blackboard modal caught mid-run — a single status board listing all four agents (Claude plus three local Qwen workers), each with its task and live token count; the three workers read COMPLETE while the reviewer is still reading the diffs.",
    title: "The Blackboard",
    body:
      "One keystroke pulls up the conductor's score: every agent on a single board — its task, elapsed time, context burn and real token spend. Here it's caught mid-run — the three local workers have each finished their file, the reviewer is reading the diffs. One glance and you know exactly where the pipeline stands.",
    caption: "Plate 02 · ctrl+b · mid-run",
    tone: "gemini",
  },
  {
    src: asset("/screenshots/settings-drawer.png"),
    alt:
      "The per-agent settings drawer scoped to the Qwen workers — each showing status, tokens used, context window, a rolling quality/speed/trust score, and a manual-override toggle.",
    title: "Every worker, tuned",
    body:
      "Open any worker for its real numbers — tokens, context window, a rolling quality / speed / trust score — and flip the manual override that tells the orchestrator to skip it on the next dispatch. This one's a local qwen-coder over ollama's direct-api.",
    caption: "Plate 03 · per-agent · live dials",
    tone: "green",
  },
  {
    src: asset("/screenshots/soulmandala.png"),
    alt:
      "The SoulMandala view — the orchestrator drawn as a central deity in a mandorla, the four workers as a retinue on a single orbit ring, the prompt set as an italic caption at the heart of the folio.",
    title: "A god's-eye folio",
    body:
      "The same run, drawn as an illuminated manuscript: the brain a central deity, the workers a retinue on the orbit ring, the prompt set at the heart. It holds still until something moves — a token burst pulses, a stall fades, a finished worker shines.",
    caption: "Plate 04 · mandala · the retinue",
    tone: "saffron",
  },
  {
    src: asset("/screenshots/swimlane.png"),
    alt:
      "The Swimlane view — one lane per roster slot on a shared time axis: the brain's planner lane on top, three local Qwen workers below, each with its task bar (titlecase, clampInt, meanOf) sitting side by side in wave 0, all three running at once.",
    title: "Concurrency, made legible",
    body:
      "One lane per agent, a shared left-to-right time axis, a bar per task. Three workers' bars sit side by side in the same wave — you read the parallelism straight off the page, which is exactly what a tree or a waterfall view structurally cannot show.",
    caption: "Plate 05 · swimlane · wave 0",
    tone: "codex",
  },
  {
    src: asset("/screenshots/roster-studio.png"),
    alt:
      "Roster Studio — a two-pane editor with the lineup on the left and an inspector on the right, choosing a slot's role, colour, and harness: an agentic CLI or a direct-api model endpoint.",
    title: "Roster Studio",
    body:
      "Cast the lineup yourself. Any model, any role — an agentic CLI like Claude or Codex, or a direct-api slot pointed at a local, keyless ollama model. Sixteen slots, parallel or serial, saved to one TOML.",
    caption: "Plate 06 · roster · bring your own",
    tone: "aider",
  },
];

const RAIL: Record<Tone, string> = {
  saffron: "var(--accent-warm)",
  claude: "var(--agent-claude)",
  gemini: "var(--agent-gemini)",
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
          The Interface · six plates
        </p>
        <h2 className="section-title mt-3 max-w-3xl">
          The instruments, photographed{" "}
          <span className="serif-italic text-saffron">mid-wave.</span>
        </h2>
        <p className="serif-italic mt-5 max-w-2xl text-[clamp(1.05rem,1.7vw,1.2rem)] leading-snug text-muted">
          theClub is a desktop app, not a hosted dashboard. Every plate below is
          a real screenshot of the running app on Linux &mdash; three caught
          mid-wave, three of the controls behind them. No mockups, no faked
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
                  width={1400}
                  height={900}
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
