import type { Metadata } from 'next'
import { getAllPosts, getAllTags } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Writing | Prathiush Arun',
  description:
    'Engineering notes on full-stack development, performance, architecture, debugging and building web systems.',
}

export default function HomePage() {
  const posts = getAllPosts()
  const tags = getAllTags().slice(0, 8)
  const [featured, ...rest] = posts

  return (
    <div>
      <section className="site-container py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="eyebrow">Engineering journal</p>

          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-[var(--ink)] md:text-7xl lg:text-8xl">
            Notes on building
            <br />
            <span className="text-[var(--blue-deep)]">real systems.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--ink-muted)] md:text-xl">
            I write about full-stack engineering, performance, architecture,
            debugging and the lessons that come from actually building
            software.
          </p>
        </div>
      </section>

      <section className="site-container pb-20 md:pb-28">
        <div className="editorial-rule" />

        {featured ? (
          <div className="pt-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="eyebrow">Featured</p>
              <span className="font-mono text-xs text-[var(--ink-faint)]">
                01
              </span>
            </div>

            <PostCard post={featured} featured />
          </div>
        ) : (
          <div className="py-20">
            <p className="font-mono text-sm text-[var(--ink-muted)]">
              No posts yet.
            </p>
          </div>
        )}
      </section>

      {rest.length > 0 && (
        <section className="site-container pb-20 md:pb-28">
          <div className="mb-4 flex items-center justify-between">
            <p className="eyebrow">All writing</p>
            <span className="font-mono text-xs text-[var(--ink-faint)]">
              {String(rest.length + 1).padStart(2, '0')} posts
            </span>
          </div>

          <div>
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      <section className="border-y border-[var(--line)] bg-[var(--blue-soft)]">
        <div className="site-container py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">Topics</p>
            </div>

            <div>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {tags.map(({ tag, count }) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="font-display text-2xl font-semibold text-[var(--ink)] transition-colors hover:text-[var(--blue-deep)]"
                  >
                    {tag}
                    <span className="ml-2 font-mono text-xs font-normal text-[var(--ink-faint)]">
                      {count}
                    </span>
                  </Link>
                ))}
              </div>

              <Link
                href="/tags"
                className="mt-8 inline-block font-mono text-xs uppercase tracking-wider text-[var(--blue-deep)]"
              >
                Browse all topics ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow">About the writing</p>

          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--ink)] md:text-4xl">
              I write about the engineering decisions behind the systems I
              build.
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--ink-muted)]">
              The useful parts of software engineering are often hidden behind
              the final interface. These notes document the decisions,
              tradeoffs, bugs and experiments that happen along the way.
            </p>

            <Link
              href="https://prathiusharun.vercel.app"
              className="mt-7 inline-block font-mono text-xs uppercase tracking-wider text-[var(--blue-deep)]"
            >
              About Prathiush Arun ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}