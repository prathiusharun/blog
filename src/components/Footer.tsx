import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-paper-dark dark:border-void-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-[#8A8A85]">
          © {new Date().getFullYear()} Prathiush Arun — Full Stack Engineer
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/prathiusharun" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
          <a href="https://x.com/prathiusharun_" target="_blank" rel="noopener noreferrer" className="nav-link">Twitter</a>
          <a href="https://medium.com/@prathiusharun" target="_blank" rel="noopener noreferrer" className="nav-link">Medium</a>
          <Link href="/rss.xml" className="nav-link">RSS</Link>
        </div>
      </div>
    </footer>
  )
}