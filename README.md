# theclub-landing

Public landing page for [theClub](https://github.com/Misc42/theClub) — a
local desktop multi-agent coding orchestrator that runs claude, gemini,
codex, and aider on one codebase in parallel.

`एक कोडबेस, चार दिमाग` — one codebase, four minds.

Shares its visual hand with the rest of the
[Misc42 Labs](https://misc42.github.io/misc42labs/) portfolio
([Sanketra](https://github.com/Misc42/sanketra),
[Mukut](https://github.com/Misc42/mukut),
[Tvashtra](https://github.com/Misc42/tvashtra-landing)) — same
paper-black, same type stack, same restraint.

## Stack

- Next.js 15 (App Router) with `output: "export"` — static site
- React 19
- Tailwind 4 (CSS-first config in `app/globals.css`)
- TypeScript 5
- pnpm 10
- Fonts via `next/font`: IBM Plex Sans, IBM Plex Mono, Instrument Serif, Tiro Devanagari Hindi

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
  page.tsx            single-page landing — Hero, Problem, How, Install, FAQ
  globals.css         palette tokens + noise overlay + utilities

components/
  Hero.tsx, Problem.tsx, HowItWorks.tsx,
  Install.tsx, Faq.tsx,
  Nav.tsx, Footer.tsx

public/
  favicon.svg
```

## Licence

AGPL-3.0-or-later, matching the application.

Issues + DMs to [@tanaymisra97](https://x.com/tanaymisra97).
