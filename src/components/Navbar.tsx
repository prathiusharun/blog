'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        sticky top-0 z-50 w-full transition-all duration-300
        ${scrolled
          ? 'bg-paper/90 dark:bg-void/90 backdrop-blur-md border-b border-paper-dark dark:border-void-border'
          : 'bg-transparent'}
      `}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="group flex items-baseline gap-1.5">
          <span
            className="font-display font-black text-xl text-ink dark:text-paper transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Prathiush
          </span>
          <span className="font-mono text-accent text-base">.dev</span>
        </Link>

        {/* Links + Toggle */}
        <div className="flex items-center gap-6">
          <Link href="/" className="nav-link hidden sm:block">Writing</Link>
          <Link href="/tags" className="nav-link hidden sm:block">Tags</Link>
          <Link href="/about" className="nav-link hidden sm:block">About</Link>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="
                w-9 h-9 flex items-center justify-center
                border border-ink-faint/30 dark:border-void-border
                text-ink-muted dark:text-[#8A8A85]
                hover:border-accent hover:text-accent
                transition-all duration-200
              "
            >
              {theme === 'dark' ? (
                <SunIcon />
              ) : (
                <MoonIcon />
              )}
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}
