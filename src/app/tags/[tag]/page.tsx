import type { Metadata } from 'next'
import { getAllTags, getPostsByTag } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Params { tag: string }

export async function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  return { title: `#${params.tag}` }
}

export default function TagPage({ params }: { params: Params }) {
  const posts = getPostsByTag(params.tag)
  if (posts.length === 0) notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/tags" className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-[#6A6A65] hover:text-accent transition-colors mb-8 inline-block">
        ← All Tags
      </Link>
      <div className="flex items-baseline gap-3 mb-12">
        <h1
          className="font-display font-black text-4xl text-ink dark:text-[#F5F0E8]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          #{params.tag}
        </h1>
        <span className="font-mono text-sm text-ink-faint dark:text-[#6A6A65]">
          {posts.length} post{posts.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="space-y-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
