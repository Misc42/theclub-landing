// Photographic plate gallery — three screenshots of the actual desktop app,
// framed as editorial dispatches. Each plate gets a serif title + a single
// line of dry mono caption so the image is the headline, not the prose.

import Image from "next/image";

type Plate = {
  src: string;
  alt: string;
  title: string;
  body: string;
  caption: string;
  // tone tells the figure border which agent-coloured rail to wear.
  tone: "saffron" | "claude" | "gemini";
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const PLATES: ReadonlyArray<Plate> = [
  {
    src: `${BASE}/screenshots/agents-running.png`,
    alt:
      "theClub's stage layout — Claude in the lead pane on the left, Gemini, Codex and Aider stacked on the right, all four agents idle and ready.",
    title: "Stage layout",
    body:
      "One lead pane on the left, three workers stacked on the right. Each card carries its agent's identity colour and a per-CLI start button — no chrome you don't read.",
    caption: "Plate 01 · home screen · idle",
    tone: "saffron",
  },
  {
    src: `${BASE}/screenshots/blackboard.png`,
    alt:
      "The Blackboard modal — a centralised status board listing all four agents with their current task, elapsed time, context usage, token spend, and manual-override state.",
    title: "The Blackboard",
    body:
      "Ctrl+B opens the conductor's score: every agent, every task, elapsed time, context burn, token spend. Glance once, know exactly where the pipeline is.",
    caption: "Plate 02 · ctrl+b · pipeline status",
    tone: "claude",
  },
  {
    src: `${BASE}/screenshots/settings-drawer.png`,
    alt:
      "The per-agent settings drawer slides in from the right. Each agent gets its own section with status, tokens used, context window, score, a context-window bar, low/medium/high reasoning effort toggle, and a manual-override switch.",
    title: "Per-agent drawer",
    body:
      "Click any agent's header to scope the drawer to it. Status, tokens, context-window usage, score — plus reasoning effort and a manual-override toggle that tells the orchestrator to skip this worker on dispatch.",
    caption: "Plate 03 · per-agent · live numbers",
    tone: "gemini",
  },
];

const RAIL: Record<Plate["tone"], string> = {
  saffron: "var(--accent-warm)",
  claude: "var(--agent-claude)",
  gemini: "var(--agent-gemini)",
};

export default function Interface() {
  return (
    <section id="interface" className="wrap mt-28 md:mt-36">
      <header className="rule-double pb-4">
        <p className="dispatch-mark">
          <span className="dot" aria-hidden />
          The Interface · 3 plates
        </p>
        <h2 className="section-title mt-3 max-w-3xl">
          The instruments, photographed{" "}
          <span className="serif-italic text-saffron">in repose.</span>
        </h2>
        <p className="serif-italic mt-5 max-w-2xl text-[clamp(1.05rem,1.7vw,1.2rem)] leading-snug text-muted">
          theClub is a desktop app, not a hosted dashboard. The three plates
          below are real screenshots of the running app on Linux &mdash; no
          mockups, no faked numbers, no &ldquo;coming soon&rdquo; sticker.
        </p>
      </header>

      <ol className="mt-12 flex flex-col gap-16 md:gap-20">
        {PLATES.map((p, i) => (
          <li key={p.src} className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <figure
              className="relative overflow-hidden rounded-sm border border-rule"
              // @ts-expect-error CSS var for the left rail colour
              style={{ "--plate-rail": RAIL[p.tone] }}
            >
              {/* Left rail in the agent / saffron tone — anchors the plate
                  visually to its caption. Same trick the Pipeline rail uses. */}
              <span
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{
                  background: RAIL[p.tone],
                  boxShadow: `0 0 28px color-mix(in srgb, ${RAIL[p.tone]} 45%, transparent)`,
                }}
              />
              <Image
                src={p.src}
                alt={p.alt}
                width={1900}
                height={1000}
                priority={i === 0}
                className="block h-auto w-full"
                sizes="(min-width: 1024px) 64rem, 100vw"
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

            <figcaption className="lg:pl-2">
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
        ))}
      </ol>
    </section>
  );
}
