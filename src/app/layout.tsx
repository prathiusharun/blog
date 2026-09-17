import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://prathiusharun.vercel.app'
  ),
  title: {
    template: '%s | Prathiush Arun',
    default: 'Writing | Prathiush Arun',
  },
  description:
    'Engineering notes on full-stack development, performance, architecture, debugging and building web systems.',
  keywords: [
    'Next.js',
    'TypeScript',
    'React',
    'PostgreSQL',
    'full-stack engineering',
    'web development',
    'Prathiush Arun',
  ],
  authors: [{ name: 'Prathiush Arun' }],
  creator: 'Prathiush Arun',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://prathiusharun.vercel.app',
    siteName: 'Prathiush Arun',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@prathiusharun_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}