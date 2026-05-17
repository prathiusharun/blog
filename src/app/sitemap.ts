import { MetadataRoute } from 'next'
import { getAllPosts, getAllTags } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prathiush.dev'
  const posts = getAllPosts()
  const tags = getAllTags()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/tags`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const tagRoutes: MetadataRoute.Sitemap = tags.map(({ tag }) => ({
    url: `${siteUrl}/tags/${tag}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...postRoutes, ...tagRoutes]
}
