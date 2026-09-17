import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Prathiush Arun',
  description:
    'About Prathiush Arun, a self-taught full-stack engineer from Kerala, India.',
}

export default function AboutPage() {
  return (
    <article>
      <header className="site-container py-20 md:py-28">
        <p className="eyebrow">About me</p>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-[var(--ink)] md:text-7xl">
          I build software,
          <br />
          <span className="text-[var(--blue-deep)]">
            and write about it.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--ink-muted)] md:text-xl">
          I&apos;m a self-taught full-stack engineer from Kerala, India. I
          build with React, Next.js, Node.js, PostgreSQL and TypeScript, from
          database schema to deployed applications.
        </p>
      </header>

      <div className="border-t border-[var(--line)]">
        <div className="site-container py-16 md:py-20">
          <div className="mx-auto max-w-[760px]">
            <div className="article-body">
              <p>
                This blog is where I think through software engineering,
                system design and the lessons that come from building real
                projects.
              </p>

              <p>
                I care about understanding how systems work underneath the
                interface, making deliberate engineering decisions and
                learning from the problems that show up in production.
              </p>

              <h2>Stack</h2>

              <ul>
                <li>
                  <strong>Frontend:</strong> React, Next.js, TypeScript,
                  Tailwind CSS
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, Express, PostgreSQL,
                  Prisma
                </li>
                <li>
                  <strong>DevOps:</strong> Docker, Nginx, GitHub Actions
                </li>
                <li>
                  <strong>Tools:</strong> Cursor, Claude, Perplexity
                </li>
              </ul>

              <h2>What I&apos;m building</h2>

              <p>
                I&apos;m focused on shipping production-grade projects,
                deepening my systems design knowledge and documenting what I
                learn along the way.
              </p>

              <p>
                If you want to talk about a project or collaborate on an
                interesting problem, you can reach me at{' '}
                <a href="mailto:prathiusharun2000@gmail.com">
                  prathiusharun2000@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}