import Link from 'next/link'

export function Navbar() {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--paper)]">
      <nav className="site-container flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]">
            Prathiush Arun
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--blue-deep)]">
            / writing
          </span>
        </Link>

        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-[var(--ink-muted)]">
          <Link
            href="/"
            className="transition-colors hover:text-[var(--blue-deep)]"
          >
            Writing
          </Link>

          <Link
            href="/tags"
            className="hidden transition-colors hover:text-[var(--blue-deep)] sm:block"
          >
            Topics
          </Link>

          <a
            href="https://prathiusharun.vercel.app"
            className="transition-colors hover:text-[var(--blue-deep)]"
          >
            Portfolio ↗
          </a>
        </div>
      </nav>
    </header>
  )
}