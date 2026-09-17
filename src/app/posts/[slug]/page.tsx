import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { format } from 'date-fns'
import Link from 'next/link'

interface Params {
  slug: string
}

export async function generateStaticParams() {
  return getAllPosts()
    .filter((post) => post?.slug)
    .map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  let MDXContent

  try {
    const mdxModule = await import(`@/content/posts/${slug}.mdx`)
    MDXContent = mdxModule.default
  } catch {
    notFound()
  }

  return (
    <article>
      <header className="site-container pt-12 pb-16 md:pt-16 md:pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--ink-muted)] transition-colors hover:text-[var(--blue-deep)]"
        >
          <span aria-hidden="true">←</span>
          Back to writing
        </Link>

        <div className="mt-12 max-w-4xl">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[0.68rem] uppercase tracking-wider text-[var(--blue-deep)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-[var(--ink)] md:text-7xl lg:text-[5.5rem]">
            {post.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--ink-muted)] md:text-xl md:leading-9">
            {post.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--line)] pt-5 font-mono text-[0.68rem] uppercase tracking-wider text-[var(--ink-faint)]">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>

            <span className="text-[var(--blue)]">/</span>

            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>

      <div className="border-t border-[var(--line)]">
        <div className="site-container">
          <div className="mx-auto max-w-[760px] py-14 md:py-20">
            <div className="article-body">
              <MDXContent />
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-[var(--line)]">
        <div className="site-container py-14 md:py-20">
          <div className="mx-auto max-w-[760px]">
            <p className="eyebrow">Keep reading</p>

            <Link href="/" className="group mt-5 block">
              <span className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--blue-deep)] md:text-4xl">
                More engineering notes
              </span>

              <span className="mt-3 block font-mono text-xs uppercase tracking-wider text-[var(--blue-deep)]">
                Browse all writing ↗
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </article>
  )
}