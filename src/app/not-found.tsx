import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="site-container py-32">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow">404</p>

        <h1 className="mt-6 font-display text-5xl font-semibold leading-none tracking-tight text-[var(--ink)] md:text-7xl">
          Page not found.
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--ink-muted)]">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--blue-deep)]"
        >
          <span aria-hidden="true">←</span>
          Back to writing
        </Link>
      </div>
    </div>
  )
}