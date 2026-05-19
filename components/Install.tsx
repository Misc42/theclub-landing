// Install — three column "press card" with a prerequisites checklist on the
// left, the run incantation in the centre, and an auth-keys colophon on the
// right. Numbers set in serif italic; code blocks in mono; small saffron
// "STEP 01 / 02 / 03" tags.

const PREREQS: ReadonlyArray<string> = [
  "Rust toolchain (rustup)",
  "Node.js 20 or newer",
  "Tauri v2 system deps: libsoup-3.0-dev, libwebkit2gtk-4.1-dev, libjavascriptcoregtk-4.1-dev",
  "Any combination of: claude, gemini, codex, aider CLIs — the more authenticated, the more agents engage",
];

const KEYS: ReadonlyArray<{ path: string; what: string }> = [
  { path: "~/.claude.json",            what: "claude code OAuth" },
  { path: "~/.codex/auth.json",        what: "codex OAuth · or OPENAI_API_KEY" },
  { path: "~/.gemini/oauth_creds.json", what: "gemini OAuth · NOT GEMINI_API_KEY env" },
  { path: "~/.aider/oauth-keys.env",   what: "OPENROUTER_API_KEY for aider" },
];

export default function Install() {
  return (
    <section id="install" className="wrap mt-28 md:mt-36">
      <header className="rule-double pb-4">
        <p className="dispatch-mark">
          <span className="dot" aria-hidden />
          Install · Linux v1
        </p>
        <h2 className="section-title mt-3 max-w-3xl">
          Clone, install,{" "}
          <span className="serif-italic text-saffron">run.</span>
        </h2>
        <p className="serif-italic mt-5 max-w-2xl text-[clamp(1.05rem,1.7vw,1.2rem)] leading-snug text-muted">
          v0.6.0 ships from source. Tauri v2 desktop, Rust backend, React
          frontend. No installer yet &mdash; macOS &amp; Windows arrive
          when the Linux build hardens.
        </p>
      </header>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr_1fr]">
        {/* STEP 01 — Prereqs */}
        <article className="card-thick flex flex-col gap-4">
          <header className="flex items-baseline justify-between">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-saffron">
              Step 01
            </p>
            <p className="serif-italic text-lg text-ink">Prerequisites</p>
          </header>
          <ul className="grid gap-2 text-[0.92rem] leading-relaxed text-muted">
            {PREREQS.map((p) => (
              <li key={p} className="grid grid-cols-[1rem_1fr] gap-2">
                <span aria-hidden className="font-mono text-saffron">&#x2713;</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* STEP 02 — Run */}
        <article className="card-thick flex flex-col gap-4">
          <header className="flex items-baseline justify-between">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-saffron">
              Step 02
            </p>
            <p className="serif-italic text-lg text-ink">Run</p>
          </header>
          <pre className="command px-4 py-4 text-[0.86rem] leading-relaxed">
{`git clone https://github.com/Misc42/theClub
cd theClub
npm install
npm run tauri dev`}
          </pre>
          <p className="text-sm leading-relaxed text-muted">
            First boot warms each authenticated agent in the background, so
            the first goal you submit dispatches without a cold-start
            wait.{" "}
            <span className="text-ink">
              No telemetry leaves the machine.
            </span>
          </p>
        </article>

        {/* STEP 03 — Auth keys */}
        <article className="card-thick flex flex-col gap-4">
          <header className="flex items-baseline justify-between">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-saffron">
              Step 03
            </p>
            <p className="serif-italic text-lg text-ink">Auth keys (BYO)</p>
          </header>
          <ul className="grid gap-3 text-[0.9rem] leading-relaxed text-muted">
            {KEYS.map((k) => (
              <li key={k.path} className="border-t border-rule pt-3 first:border-t-0 first:pt-0">
                <code className="font-mono text-[0.82rem] text-ink">{k.path}</code>
                <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-faint">
                  {k.what}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs leading-relaxed text-faint">
            theClub never touches your keys &mdash; each CLI talks to its
            provider directly. Worktree-jail hooks scope each worker so it
            can only write inside its assigned branch directory.
          </p>
        </article>
      </div>
    </section>
  );
}
