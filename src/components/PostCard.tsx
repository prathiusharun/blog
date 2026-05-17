import Link from 'next/link'
import { format } from 'date-fns'
import type { Post } from '@/lib/types'

interface PostCardProps {
  post: Post
  featured?: boolean
}

export function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article
      className={`
        group relative
        ${featured
          ? 'border-l-2 border-accent pl-6 py-2'
          : 'border-b border-paper-dark dark:border-void-border pb-8'}
      `}
    >
      {/* Tags */}
      {post.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <Link key={tag} href={`/tags/${tag}`} className="tag">
              {tag}
            </Link>
          ))}
        </div>
      )}

      {/* Title */}
      <h2
        className={`
          font-display font-bold leading-tight mb-2
          text-ink dark:text-[#F5F0E8]
          group-hover:text-accent dark:group-hover:text-accent
          transition-colors duration-200
          ${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}
        `}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <Link href={`/posts/${post.slug}`} className="stretched-link">
          {post.title}
        </Link>
      </h2>

      {/* Description */}
      <p className="text-ink-muted dark:text-[#8A8A85] leading-relaxed mb-4 text-[0.95rem]">
        {post.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 font-mono text-xs text-ink-faint dark:text-[#6A6A65] uppercase tracking-wider">
        <time dateTime={post.date}>
          {format(new Date(post.date), 'MMM d, yyyy')}
        </time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
    </article>
  )
}
