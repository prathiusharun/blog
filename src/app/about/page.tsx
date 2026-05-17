import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="animate-fade-up">
        <p className="font-mono text-accent text-sm uppercase tracking-[0.2em] mb-4">About me</p>
        <h1
          className="font-display font-black text-5xl text-ink dark:text-[#F5F0E8] leading-tight mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Hi, I&apos;m Prathiush.
        </h1>
      </div>

      <div className="prose prose-lg dark:prose-invert animate-fade-up animate-delay-100">
        <p>
          I&apos;m a self-taught Full Stack Engineer from Kerala, India. I build with{' '}
          <strong>React, Next.js, Node.js, PostgreSQL</strong>, and TypeScript — from database
          schema to deployed Docker containers with CI/CD pipelines.
        </p>
        <p>
          This blog is where I think out loud about software engineering, system design, and the
          meta-skills that make great engineers: systems thinking, deliberate practice, and
          building judgment through real projects.
        </p>

        <h2>Stack</h2>
        <ul>
          <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
          <li>Backend: Node.js, Express, PostgreSQL, Prisma</li>
          <li>DevOps: Docker, Nginx, GitHub Actions</li>
          <li>Tools: Cursor, Claude, Perplexity</li>
        </ul>

        <h2>What I&apos;m building</h2>
        <p>
          Currently focused on shipping production-grade projects, deepening systems design
          knowledge, and writing about what I learn. Open to collaborating on interesting problems.
        </p>
        <p>
          📬 <a href="mailto:prathiusharun2000@gmail.com">prathiusharun2000@gmail.com</a>
        </p>
      </div>
    </div>
  )
}