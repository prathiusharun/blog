import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | Prathiush Arun',
  description: 'Technical writing on Next.js, backend systems, and engineering',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="space-y-2">
            <Link
              href={`/posts/${post.slug}`}
              className="text-xl font-semibold hover:underline"
            >
              {post.title}
            </Link>

            <p className="text-zinc-500">{post.description}</p>

            <div className="text-sm text-zinc-600">
              {post.date} · {post.readingTime}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}