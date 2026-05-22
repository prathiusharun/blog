import { getPostBySlug, getPostSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)

  if (!post) return notFound()

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <p className="text-zinc-500 text-sm mb-8">
        {post.date} · {post.readingTime}
      </p>

      <article className="prose prose-invert">
        <p>{post.description}</p>
      </article>
    </main>
  )
}