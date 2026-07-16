import Image from "next/image";
import { asset } from "@/lib/asset";

type Plate = {
  src: string;
  alt: string;
  title: string;
  body: string;
  w: number;
  h: number;
  // Wide captures (the run sheet's own bands) run the full grid width; the
  // two panel shots sit side by side. Nothing is cropped — every figure keeps
  // its capture's native aspect, so no screenshot is ever stretched.
  wide: boolean;
};

const PLATES: ReadonlyArray<Plate> = [
  {
    src: asset("/screenshots/runsheet-merge.png"),
    alt: "The EXECUTE band of a run sheet — the AGY worker card running Gemini 3.1 Pro (High) over its own CLI, marked CLI-native and cloud, with a live terminal log underneath for the task 'Add src/subtract.js exporting a subtract(a, b) function.'",
    title: "Every worker's card, live",
    body: "Each worker gets one card — its model, its tier, cloud or local, CLI-native or API — and a live terminal streaming underneath. Here Antigravity's AGY runs Gemini 3.1 Pro at the high tier, straight over its own CLI, no key theClub ever sees.",
    w: 1540,
    h: 545,
    wide: true,
  },
  {
    src: asset("/screenshots/runsheet-clarify.png"),
    alt: "A run sheet paused at the Clarify phase — a panel titled THE BRAIN ASKS with the question 'Should the refresh token rotate on every use, or only on a detected reuse (RTR)?' and an answer box.",
    title: "The brain asks before it plans",
    body: "When the goal is ambiguous, the run stops at Clarify and puts the question back to you. Answer it and the plan is built on your answer — not on a guess it made and never mentioned.",
    w: 2800,
    h: 864,
    wide: true,
  },
  {
    src: asset("/screenshots/roster-studio.png"),
    alt: "Roster Studio — four drag-ordered slots on the left (a Claude brain plus three local Qwen editors), an inspector on the right for name, role, colour, tuning, harness, backend and model, and a roster valid state at the foot.",
    title: "Cast your own lineup",
    body: "Drag the slots into order, open one, set its role, colour, harness, backend and model. Up to sixteen — here a stateless Claude brain and three keyless local Qwen editors over Ollama.",
    w: 2800,
    h: 1800,
    wide: false,
  },
  {
    src: asset("/screenshots/settings-drawer.png"),
    alt: "The settings drawer — one card per agent showing status, tokens used, context window, a rolling quality/speed/trust score, and a manual-override toggle.",
    title: "Every agent, tuned",
    body: "Status, tokens burnt, context window, a rolling quality / speed / trust score — and a manual override that tells the orchestrator to skip that agent on the next dispatch.",
    w: 2800,
    h: 1800,
    wide: false,
  },
  {
    src: asset("/screenshots/runsheet-empty.png"),
    alt: "The empty run sheet — the prompt 'What should the club build?' above an input box, with a PREVIOUS RUNS list underneath showing merged counts and wall-clock times.",
    title: "One document per run",
    body: "Empty, it asks what to build. Underneath, every previous run keeps its own sheet — 3/6 merged · 2 failed · 8m 32s — and you can open any of them again.",
    w: 2800,
    h: 1048,
    wide: true,
  },
];

export default function Screenshots() {
  return (
    <section id="plates" className="border-t border-border">
      <div className="wrap py-20">
        <div className="mb-11 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-[38px] font-bold leading-tight tracking-[-0.025em]">
            Watch the whole run.
          </h2>
          <span className="text-sm text-faint">
            real captures · one run, end to end
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {PLATES.map((p) => (
            <figure
              key={p.src}
              className={`overflow-hidden rounded-[14px] border border-border bg-bg-alt ${
                p.wide ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                className="block h-auto w-full"
                sizes={
                  p.wide
                    ? "(min-width: 1024px) 60rem, 100vw"
                    : "(min-width: 1024px) 30rem, 100vw"
                }
              />
              <figcaption className="border-t border-border px-[22px] py-[18px]">
                <p className="text-base font-bold">{p.title}</p>
                <p className="mt-1.5 text-sm leading-[1.5] text-muted">
                  {p.body}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
