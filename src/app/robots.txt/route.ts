import { NextResponse } from 'next/server'

export function GET() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://prathiush-blog.vercel.app'

  return new NextResponse(
    `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
}