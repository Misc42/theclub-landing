import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section className="wrap pt-[88px] text-center">
      <p className="text-[13.5px] font-semibold text-accent">
        ◇ Open source · AGPL-3.0 · a{" "}
        <Link
          href="https://misc42.github.io/misc42labs/"
          className="underline underline-offset-[3px]"
        >
          Misc42 Labs
        </Link>{" "}
        tool
      </p>
      <h1 className="mx-auto mt-4 max-w-[860px] text-[clamp(48px,5.6vw,76px)] font-bold leading-[1.02] tracking-[-0.03em]">
        One codebase.
        <br />
        <span className="text-faint">Many minds.</span>
      </h1>
      <p className="mx-auto mt-[22px] max-w-[600px] text-lg leading-[1.55] text-muted">
        Run the coding agents you already pay for — Claude Code, Codex, Gemini
        CLI, local models — in parallel on one repo. The whole run reads as one
        document: what was planned, what merged, and which tier landed it.
      </p>
      <div className="mt-[34px] flex justify-center gap-3">
        <Link href="#install" className="btn-primary">
          Get started
        </Link>
        <Link href="#how" className="btn-secondary">
          How it works
        </Link>
      </div>
      <p className="mt-3.5 text-[13px] text-faint">
        Linux · Tauri + Rust · your keys, zero telemetry
      </p>
      {/* The run sheet is the product's default view, so the hero shows a whole
          one uncropped — plan, waves, merge tiers, verdict, top to bottom. */}
      <div className="mx-auto mt-14 max-w-[960px] overflow-hidden rounded-t-2xl border border-b-0 border-border shadow-[0_40px_80px_-40px_rgba(0,0,0,0.3)]">
        <Image
          src={asset("/screenshots/runsheet-complete.png")}
          alt="theClub's run sheet after a finished run — a phase spine down the left, then 01 PLAN with six tasks across three waves, 02 EXECUTE, 03 REVIEW & MERGE with a score and merge tier per task, and a PARTIAL — 1 PRESERVED verdict."
          width={2800}
          height={2768}
          priority
          className="block h-auto w-full"
          sizes="(min-width: 1024px) 60rem, 100vw"
        />
      </div>
    </section>
  );
}
