import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://prathiush.dev'),
  title: {
    template: '%s | Prathiush.dev',
    default: 'Prathiush.dev — Full Stack Engineer',
  },
  description: 'Thoughts on full-stack engineering, systems design, and building in public — by Prathiush Arun.',
  keywords: ['developer blog', 'Next.js', 'TypeScript', 'React', 'systems design', 'web development', 'Prathiush Arun'],
  authors: [{ name: 'Prathiush Arun' }],
  creator: 'Prathiush Arun',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prathiush.dev',
    siteName: 'Prathiush.dev',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@prathiusharun_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </ThemeProvider>
      </body>
    </html>
  )
}
