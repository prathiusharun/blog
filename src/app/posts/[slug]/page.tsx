import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug, getPostContent } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { format } from 'date-fns'
import Link from 'next/link'
import { AdSlot } from '@/components/AdSlot'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

interface Params { slug: string }

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
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

export default async function PostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug)
  const content = await getPostContent(params.slug)

  if (!post || !content) notFound()

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-[#6A6A65] hover:text-accent dark:hover:text-accent mb-12 transition-colors"
      >
        ← Back
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16">
        <article>
          {/* Header */}
          <header className="mb-10 animate-fade-up">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags?.map((tag) => (
                <Link key={tag} href={`/tags/${tag}`} className="tag">{tag}</Link>
              ))}
            </div>

            {/* Title */}
            <h1
              className="font-display font-black text-4xl md:text-5xl text-ink dark:text-[#F5F0E8] leading-[1.1] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-ink-muted dark:text-[#8A8A85] text-lg leading-relaxed mb-6 max-w-2xl">
              {post.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-[#6A6A65] pb-8 border-b border-paper-dark dark:border-void-border">
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
              <span>·</span>
              <span>{post.wordCount.toLocaleString()} words</span>
            </div>
          </header>

          {/* Top in-article ad */}
          <AdSlot slot="1111111111" format="horizontal" className="mb-10" />

          {/* MDX Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none animate-fade-up animate-delay-100">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeHighlight, rehypeSlug],
                },
              }}
            />
          </div>

          {/* Bottom in-article ad */}
          <AdSlot slot="2222222222" format="horizontal" className="mt-10" />
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="sticky top-24">
            <AdSlot slot="3333333333" format="rectangle" className="mb-6" />

            {/* Post info card */}
            <div className="card p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-[#6A6A65] mb-3">
                Post info
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-ink-faint dark:text-[#6A6A65] font-mono text-xs">Published</span>
                  <p className="text-ink dark:text-[#D4CFC8] mt-0.5">
                    {format(new Date(post.date), 'MMM d, yyyy')}
                  </p>
                </div>
                <div>
                  <span className="text-ink-faint dark:text-[#6A6A65] font-mono text-xs">Reading time</span>
                  <p className="text-ink dark:text-[#D4CFC8] mt-0.5">{post.readingTime}</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
