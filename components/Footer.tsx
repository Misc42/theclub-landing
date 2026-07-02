import Link from "next/link";

const LINKS: ReadonlyArray<readonly [string, string]> = [
  ["Misc42 Labs", "https://misc42.github.io/misc42labs/"],
  ["GitHub", "https://github.com/Misc42/theClub"],
  ["X", "https://x.com/misc42"],
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="wrap flex flex-wrap items-center justify-between gap-3 py-6 text-[13.5px] text-faint">
        <nav className="flex gap-5">
          {LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>
        <span>© 2026 Misc42 Labs · AGPL-3.0</span>
      </div>
    </footer>
  );
}
