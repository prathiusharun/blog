import type { Metadata } from 'next'
import { getAllTags } from '@/lib/posts'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Tags' }

export default function TagsPage() {
  const tags = getAllTags()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1
        className="font-display font-black text-4xl text-ink dark:text-[#F5F0E8] mb-2 animate-fade-up"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        All Tags
      </h1>
      <p className="text-ink-muted dark:text-[#8A8A85] mb-12 animate-fade-up animate-delay-100">
        Browse posts by topic.
      </p>

      <div className="flex flex-wrap gap-3 animate-fade-up animate-delay-200">
        {tags.map(({ tag, count }) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="tag text-sm px-3 py-1"
          >
            {tag}
            <span className="ml-2 font-mono text-xs text-ink-faint dark:text-[#6A6A65]">
              {count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
