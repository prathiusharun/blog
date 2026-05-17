import type { Metadata } from 'next'
import { getAllPosts, getAllTags } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import { AdSlot } from '@/components/AdSlot'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Prathiush.dev — Developer, Builder, Writer',
}

export default function HomePage() {
  const posts = getAllPosts()
  const tags = getAllTags().slice(0, 8)
  const [featured, ...rest] = posts

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="mb-20 animate-fade-up">
        <p
          className="font-mono text-accent text-sm uppercase tracking-[0.2em] mb-4"
        >
          Developer · Builder · Writer
        </p>
        <h1
          className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-ink dark:text-[#F5F0E8] leading-[1.05] mb-6 max-w-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Writing about code,<br />
          <span className="text-accent">systems</span> & the<br />
          craft of building.
        </h1>
        <p className="text-ink-muted dark:text-[#8A8A85] text-lg max-w-xl leading-relaxed">
          Self-taught developer. Full-stack with React, Node.js & PostgreSQL.
          Building production-grade systems and writing about what I learn.
        </p>
      </section>

      {/* Top Ad */}
      <AdSlot slot="1234567890" format="horizontal" className="mb-12" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">
        {/* Posts */}
        <div>
          {featured && (
            <div className="mb-12 animate-fade-up animate-delay-100">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-[#6A6A65] mb-6">
                — Featured
              </p>
              <PostCard post={featured} featured />
            </div>
          )}

          {rest.length > 0 && (
            <div className="space-y-10">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-[#6A6A65]">
                — All posts
              </p>
              {rest.map((post, i) => (
                <div
                  key={post.slug}
                  className="animate-fade-up opacity-0-start"
                  style={{ animationDelay: `${(i + 2) * 80}ms`, animationFillMode: 'forwards' }}
                >
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          )}

          {posts.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-mono text-ink-faint dark:text-[#6A6A65] text-sm">
                No posts yet. Coming soon.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8 animate-fade-up animate-delay-200">
          {/* Tags cloud */}
          <div className="card p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-[#6A6A65] mb-4">
              Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map(({ tag, count }) => (
                <Link
                  key={tag}
                  href={`/tags/${tag}`}
                  className="tag"
                >
                  {tag}
                  <span className="ml-1 text-ink-faint dark:text-[#6A6A65]">({count})</span>
                </Link>
              ))}
            </div>
            <Link
              href="/tags"
              className="block mt-4 font-mono text-xs text-accent hover:text-accent-dark uppercase tracking-wider"
            >
              All tags →
            </Link>
          </div>

          {/* Sidebar Ad */}
          <AdSlot slot="0987654321" format="rectangle" />

          {/* Connect CTA */}
<div className="card p-5 border-l-2 border-accent">
  <p
    className="font-display font-bold text-lg text-ink dark:text-[#F5F0E8] mb-2"
    style={{ fontFamily: 'var(--font-display)' }}
  >
    Let&apos;s connect
  </p>
  <p className="text-sm text-ink-muted dark:text-[#8A8A85] mb-4 leading-relaxed">
    I write about full-stack engineering, systems design, and building in public.
  </p>
  <div className="flex flex-col gap-2">
    <a href="https://medium.com/@prathiusharun" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-xs">
      Follow on Medium
    </a>
    <a href="https://substack.com/@prathiusharun" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-xs">
      Follow on Substack
    </a>
  </div>
</div>
        </aside>
      </div>
    </div>
  )
}
