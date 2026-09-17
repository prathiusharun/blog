import Link from 'next/link'
import { format } from 'date-fns'
import type { Post } from '@/lib/types'

interface PostCardProps {
  post: Post
  featured?: boolean
  index?: number
}

export function PostCard({
  post,
  featured = false,
  index,
}: PostCardProps) {
  return (
    <article
      className={`group ${
        featured
          ? 'border-y border-[var(--line)] py-8 md:py-10'
          : 'border-b border-[var(--line)] py-7'
      }`}
    >
      <div className="grid gap-5 md:grid-cols-[72px_1fr] md:gap-8">
        <div className="font-mono text-xs tracking-wider text-[var(--ink-faint)]">
          {featured
            ? '★'
            : String(index ?? 1).padStart(2, '0')}
        </div>

        <div>
          {post.tags?.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.68rem] uppercase tracking-wider text-[var(--blue-deep)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h2
            className={`font-display font-semibold leading-[1.08] tracking-tight text-[var(--ink)] transition-colors duration-200 group-hover:text-[var(--blue-deep)] ${
              featured
                ? 'text-3xl md:text-5xl'
                : 'text-2xl md:text-3xl'
            }`}
          >
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--ink-muted)]">
            {post.description}
          </p>

          <div className="mt-5 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-wider text-[var(--ink-faint)]">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMM d, yyyy')}
            </time>

            <span className="text-[var(--blue)]">/</span>

            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
    </article>
  )
}