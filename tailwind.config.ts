import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FCD34D',
        },
        ink: {
          DEFAULT: '#0F0F0E',
          muted: '#3D3D3A',
          faint: '#8A8A85',
        },
        paper: {
          DEFAULT: '#FAF7F2',
          muted: '#F0EBE3',
          dark: '#E5DDD3',
        },
        void: {
          DEFAULT: '#0A0A0B',
          muted: '#141416',
          surface: '#1C1C1F',
          border: '#2A2A2E',
        },
      },
      typography: (theme: (arg: string) => string) => ({
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: theme('colors.ink.DEFAULT'),
            fontFamily: theme('fontFamily.body'),
            'h1,h2,h3,h4': {
              fontFamily: theme('fontFamily.display'),
              fontWeight: '700',
            },
            a: {
              color: theme('colors.accent.dark'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.accent.DEFAULT')}`,
              '&:hover': {
                color: theme('colors.accent.DEFAULT'),
              },
            },
            code: {
              fontFamily: theme('fontFamily.mono'),
              backgroundColor: theme('colors.paper.muted'),
              padding: '0.15em 0.35em',
              borderRadius: '3px',
              fontSize: '0.875em',
            },
          },
        },
        invert: {
          css: {
            color: '#D4CFC8',
            'h1,h2,h3,h4': {
              color: '#F5F0E8',
            },
            code: {
              backgroundColor: theme('colors.void.surface'),
              color: theme('colors.accent.light'),
            },
          },
        },
      }),
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
