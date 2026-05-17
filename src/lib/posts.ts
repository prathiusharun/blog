import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Post, PostFrontmatter } from './types'

const POSTS_DIR = path.join(process.cwd(), 'src/content/posts')

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.(mdx|md)$/, ''))
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath =
    fs.existsSync(path.join(POSTS_DIR, `${slug}.mdx`))
      ? path.join(POSTS_DIR, `${slug}.mdx`)
      : path.join(POSTS_DIR, `${slug}.md`)

  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)

  return {
    ...(data as PostFrontmatter),
    slug,
    readingTime: rt.text,
    wordCount: rt.words,
  }
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null && !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((p) => p.tags?.includes(tag))
}

export function getAllTags(): { tag: string; count: number }[] {
  const counts: Record<string, number> = {}
  getAllPosts().forEach((post) => {
    post.tags?.forEach((tag) => {
      counts[tag] = (counts[tag] ?? 0) + 1
    })
  })
  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}

export async function getPostContent(slug: string): Promise<string | null> {
  const fullPath =
    fs.existsSync(path.join(POSTS_DIR, `${slug}.mdx`))
      ? path.join(POSTS_DIR, `${slug}.mdx`)
      : path.join(POSTS_DIR, `${slug}.md`)

  if (!fs.existsSync(fullPath)) return null
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { content } = matter(raw)
  return content
}
