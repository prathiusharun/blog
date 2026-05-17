import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center animate-fade-up">
      <p className="font-mono text-accent text-sm uppercase tracking-[0.2em] mb-4">404</p>
      <h1
        className="font-display font-black text-5xl text-ink dark:text-[#F5F0E8] mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Page not found.
      </h1>
      <p className="text-ink-muted dark:text-[#8A8A85] mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary inline-flex">
        ← Back to Home
      </Link>
    </div>
  )
}
