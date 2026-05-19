export default function Install() {
  return (
    <section id="install" className="wrap border-b border-rule py-20">
      <p className="masthead mb-5">Install</p>
      <h2 className="section-title max-w-2xl">
        Linux first.{" "}
        <span className="serif-italic text-saffron">macOS &amp; Windows soon.</span>
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
        v0.6.0 ships from source on Linux. Tauri v2 desktop app, Rust backend,
        React frontend. No installer yet &mdash; clone, install, run.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="card">
          <p className="masthead">Prerequisites</p>
          <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-muted">
            <li>
              &mdash; Rust toolchain (<code className="font-mono text-ink">rustup</code>)
            </li>
            <li>&mdash; Node.js 20+</li>
            <li>
              &mdash; Tauri v2 system deps: <code className="font-mono text-ink">libsoup-3.0-dev</code>,{" "}
              <code className="font-mono text-ink">libwebkit2gtk-4.1-dev</code>,{" "}
              <code className="font-mono text-ink">libjavascriptcoregtk-4.1-dev</code>
            </li>
            <li>
              &mdash; Any of: claude, gemini, codex, aider CLIs (the more
              authenticated, the more agents engage)
            </li>
          </ul>
        </div>
        <div className="card">
          <p className="masthead">Run</p>
          <pre className="mt-3 overflow-x-auto rounded-sm border border-rule bg-paper p-4 font-mono text-[0.82rem] leading-relaxed text-ink">
{`git clone https://github.com/Misc42/theClub
cd theClub
npm install
npm run tauri dev`}
          </pre>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            First boot warms each authenticated agent in the background, so the
            first goal you submit dispatches without a cold-start wait.
          </p>
        </div>
      </div>

      <div className="mt-10 card">
        <p className="masthead">Auth keys (BYO)</p>
        <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-muted md:grid-cols-2">
          <li>
            &mdash; <code className="font-mono text-ink">~/.claude.json</code> &mdash; claude code OAuth
          </li>
          <li>
            &mdash; <code className="font-mono text-ink">~/.codex/auth.json</code> &mdash; codex CLI OAuth or{" "}
            <code className="font-mono text-ink">OPENAI_API_KEY</code>
          </li>
          <li>
            &mdash; <code className="font-mono text-ink">~/.gemini/oauth_creds.json</code> &mdash; gemini CLI OAuth
          </li>
          <li>
            &mdash; <code className="font-mono text-ink">~/.aider/oauth-keys.env</code> &mdash;{" "}
            <code className="font-mono text-ink">OPENROUTER_API_KEY</code> for aider
          </li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          theClub never touches your keys &mdash; each CLI talks to its
          provider directly. Worktree-jail hooks scope each worker so it can
          only write inside its assigned branch directory.
        </p>
      </div>
    </section>
  );
}
