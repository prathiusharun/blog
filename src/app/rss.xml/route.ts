import { getAllPosts } from '@/lib/posts'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = getAllPosts()

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://prathiush-blog.vercel.app'

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Prathiush Arun | Writing</title>
    <link>${siteUrl}</link>
    <description>Engineering notes on full-stack development, performance, architecture, debugging and building web systems.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/posts/${post.slug}</link>
      <guid>${siteUrl}/posts/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${
        post.tags
          ?.map((tag) => `<category><![CDATA[${tag}]]></category>`)
          .join('\n      ') ?? ''
      }
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control':
        'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}