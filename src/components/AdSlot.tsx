'use client'

import { useEffect } from 'react'

interface AdSlotProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal'
  className?: string
  label?: string
}

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export function AdSlot({
  slot,
  format = 'auto',
  className = '',
  label = 'Advertisement',
}: AdSlotProps) {
  const pubId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    if (!pubId) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.warn('AdSense push failed', e)
    }
  }, [pubId])

  if (!pubId) {
    // Dev placeholder — shows what the ad zone looks like
    return (
      <div className={`ad-slot ${className}`} role="presentation">
        <span>[ Ad slot · {slot} ]</span>
      </div>
    )
  }

  return (
    <div className={`my-8 ${className}`}>
      <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint dark:text-[#6A6A65] mb-1 text-center">
        {label}
      </p>
      <ins
        className="adsbygoogle block"
        data-ad-client={pubId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        style={{ display: 'block' }}
      />
    </div>
  )
}
