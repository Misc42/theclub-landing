import Link from "next/link";

const links = [
  ["Misc42 Labs", "https://misc42labs.vercel.app/"],
  ["GitHub", "https://github.com/Misc42/theClub"],
  ["X", "https://x.com/tanaymisra97"],
] as const;

export default function Footer() {
  return (
    <footer className="wrap mt-24 flex flex-col gap-5 border-t border-rule py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
      <nav className="flex flex-wrap gap-5 font-mono text-[0.72rem] uppercase tracking-[0.14em]">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="transition hover:text-saffron"
          >
            {label}
          </Link>
        ))}
      </nav>
      <p className="serif-italic text-lg text-ink">
        A{" "}
        <a
          href="https://misc42labs.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="text-ink underline decoration-rule underline-offset-4 transition hover:text-saffron"
        >
          Misc42 Labs
        </a>{" "}
        tool &middot;{" "}
        <span className="font-mono not-italic text-faint">&copy; 2026</span>
      </p>
    </footer>
  );
}
