import Image from "next/image";
import { asset } from "@/lib/asset";

type Plate = {
  src: string;
  alt: string;
  title: string;
  body: string;
  objectTop: boolean;
};

const PLATES: ReadonlyArray<Plate> = [
  {
    src: asset("/screenshots/swimlane.png"),
    alt: "Swimlane view",
    title: "Concurrency you can read",
    body: "One lane per agent, one shared time axis. Parallel work is visible, not inferred.",
    objectTop: true,
  },
  {
    src: asset("/screenshots/blackboard.png"),
    alt: "Blackboard view",
    title: "One board, every agent",
    body: "Task, elapsed time, context burn, real token spend — one keystroke away, mid-run.",
    objectTop: true,
  },
  {
    src: asset("/screenshots/roster-studio.png"),
    alt: "Roster Studio",
    title: "Cast your own lineup",
    body: "Any CLI or endpoint, up to sixteen slots — including free, keyless local models.",
    objectTop: true,
  },
  {
    src: asset("/screenshots/soulmandala.png"),
    alt: "SoulMandala view",
    title: "…and one view for the soul",
    body: "The run drawn as a mandala — the brain at the center, workers on the orbit.",
    objectTop: false,
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
            real captures, live four-worker runs
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {PLATES.map((p) => (
            <figure
              key={p.src}
              className="overflow-hidden rounded-[14px] border border-border bg-bg-alt"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={1600}
                height={960}
                className={`block aspect-[16/9.6] w-full object-cover ${
                  p.objectTop ? "object-top" : ""
                }`}
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
