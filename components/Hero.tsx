import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section className="wrap pt-[88px] text-center">
      <p className="text-[13.5px] font-semibold text-accent">
        ◇ Early access · a{" "}
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
        Run the coding agents you already pay for — Claude Code, Codex,
        Antigravity, local models — in parallel on one repo. The whole run reads
        as one document: what was planned, what merged, and which tier landed it.
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
      {/* The run sheet is the product's default view. This capture is the top
          of one, uncropped — phase spine, plan, and the worker card that
          picked the task up — not stretched or squeezed to fit the frame. */}
      <div className="mx-auto mt-14 max-w-[760px] overflow-hidden rounded-t-2xl border border-b-0 border-border shadow-[0_40px_80px_-40px_rgba(0,0,0,0.3)]">
        <Image
          src={asset("/screenshots/runsheet-complete.png")}
          alt="theClub's run sheet after a finished run — a phase spine down the left, every phase green, 01 PLAN with a single task assigned to Antigravity, and 02 EXECUTE showing the AGY worker that ran it: Gemini 3.1 Pro, CLI-native, cloud."
          width={1145}
          height={935}
          priority
          className="block h-auto w-full"
          sizes="(min-width: 1024px) 47.5rem, 100vw"
        />
      </div>
    </section>
  );
}
