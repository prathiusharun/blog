import { NextResponse } from 'next/server'

export function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prathiush.dev'
  return new NextResponse(
    `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml`,
    { headers: { 'Content-Type': 'text/plain' } }
  )
}
