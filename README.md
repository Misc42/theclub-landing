# theclub-landing

**Live · https://misc42.github.io/theclub-landing/**

Public landing page for [theClub](https://github.com/Misc42/theClub) — a
local desktop orchestrator for the coding CLIs you already pay for (Claude
Code, Codex, Gemini CLI), local models, or any mix. Run them in parallel on
one repo — planned, reviewed, and merged autonomously, on your machine. No
cloud sandbox, no forced PR.

One codebase, many minds.

Shares its design system with the rest of the
[Misc42 Labs](https://misc42.github.io/misc42labs/) portfolio
([Sanketra](https://github.com/Misc42/sanketra),
[Mukut](https://github.com/Misc42/mukut),
[Tvashtra](https://github.com/Misc42/tvashtra-landing)) — same type stack,
dark theme with a violet accent like Tvashtra.

## Stack

- Next.js 15 (App Router) with `output: "export"` — static site
- React 19
- Tailwind 4 (CSS-first config in `app/globals.css`)
- TypeScript 5
- pnpm 10
- Fonts via `next/font`: Schibsted Grotesk, Anek Devanagari, Geist Mono

No runtime backend. No forms. Read-only marketing site that links out to
the GitHub repo for installation.

## Develop

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>. For local dev the basePath defaults to
`/theclub-landing`; set `BASE_PATH=""` if you want the page served from `/`.

## Build

```bash
pnpm typecheck    # tsc --noEmit
pnpm lint
pnpm build        # writes out/ — static HTML/CSS/JS
```

The build artefact is `out/`. Drop that anywhere that serves static files.

## Deploy (GitHub Pages)

`.github/workflows/pages.yml` builds on push to `main` and deploys the `out/`
directory to GitHub Pages. To activate:

1. Push this repo to `Misc42/theclub-landing`.
2. In **Settings → Pages**, set source to **GitHub Actions**.

The site lands at `https://misc42.github.io/theclub-landing/`.

## Layout

```
app/
  layout.tsx          font loading + html shell
  page.tsx            single-page landing — Hero, HowItWorks, Screenshots, Install
  globals.css         dark palette tokens + utilities

components/
  Hero.tsx, HowItWorks.tsx, Screenshots.tsx,
  Install.tsx, Nav.tsx, Footer.tsx

public/
  favicon.svg
```

## Licence

Proprietary — © 2026 Misc42 Labs, all rights reserved. theClub is a paid product in early access; this landing site is not open source.

Issues + DMs to [Misc42 Labs](https://x.com/misc42).
