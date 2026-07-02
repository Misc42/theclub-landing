"use client";

import { useState } from "react";

const LINES: ReadonlyArray<string> = [
  "git clone https://github.com/Misc42/theClub",
  "cd theClub && npm install",
  "npm run tauri dev",
];

export default function Install() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(LINES.join("\n")).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section id="install" className="border-t border-border bg-bg-alt">
      <div className="wrap grid gap-14 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <h2 className="text-[38px] font-bold leading-[1.12] tracking-[-0.025em]">
            Clone. Install. Run.
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.55] text-muted">
            v0.6.0 ships from source on Linux. Bring at least one agent — a
            CLI you already pay for, or a free local Ollama model. Your keys
            never touch theClub; agents talk to their providers directly.
          </p>
          <p className="mt-3.5 text-sm text-faint">
            macOS &amp; Windows once Linux v1 hardens.
          </p>
        </div>
        <div className="overflow-hidden rounded-[14px] border border-term-border bg-term-bg">
          <div className="flex items-center justify-between border-b border-term-border px-[18px] py-3">
            <span className="font-mono text-xs text-term-faint">terminal</span>
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-md border border-term-border-2 px-3 py-1.5 font-mono text-xs text-term-muted transition-colors hover:border-term-accent hover:text-term-accent"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="overflow-x-auto px-[18px] py-[22px] font-mono text-[13.5px] leading-[1.8] text-term-ink">
            <code className="grid">
              {LINES.map((line) => (
                <span key={line}>
                  <span className="text-term-faint">$</span> {line}
                </span>
              ))}
            </code>
          </pre>
          <div className="border-t border-term-border px-[18px] py-3 font-mono text-[11.5px] text-term-faint">
            Rust + Node 20 + Tauri v2 deps · no telemetry leaves the machine
          </div>
        </div>
      </div>
    </section>
  );
}
