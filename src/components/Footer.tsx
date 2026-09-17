import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="site-container flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--ink-faint)]">
          © {new Date().getFullYear()} Prathiush Arun
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs uppercase tracking-wider text-[var(--ink-muted)]">
          <a
            href="https://github.com/prathiusharun"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--blue-deep)]"
          >
            GitHub
          </a>

          <a
            href="https://substack.com/@prathiusharun"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--blue-deep)]"
          >
            Substack
          </a>

          <Link
            href="/rss.xml"
            className="transition-colors hover:text-[var(--blue-deep)]"
          >
            RSS
          </Link>

          <a
            href="https://prathiusharun.vercel.app"
            className="transition-colors hover:text-[var(--blue-deep)]"
          >
            Portfolio ↗
          </a>
        </div>
      </div>
    </footer>
  )
}