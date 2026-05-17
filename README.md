# Prathiush.dev — Personal Developer Blog

A production-grade personal blog built with Next.js 14 App Router, TypeScript, Tailwind CSS, and MDX. Features dark/light mode, Google AdSense integration, Docker, and GitHub Actions CI/CD.

---

## ✨ Features

- **MDX blog posts** — write in Markdown with JSX components
- **Dark / Light mode** — system preference + manual toggle via `next-themes`
- **Google AdSense** — env-gated ad slots, dev placeholder shown when ID is missing
- **SEO** — Open Graph, Twitter cards, sitemap, robots.txt, RSS feed
- **Reading time** — calculated per post
- **Tags** — tag index and filtered tag pages
- **Docker** — multi-stage build with non-root user, health check
- **CI/CD** — GitHub Actions: lint → type-check → test → Docker push → SSH deploy

---

## 🚀 Quick Start (Local)

```bash
# 1. Clone
git clone https://github.com/YOUR_USERNAME/prathiush-blog.git
cd prathiush-blog

# 2. Install
npm install

# 3. Configure env
cp .env.example .env.local
# Edit .env.local — set NEXT_PUBLIC_SITE_URL=http://localhost:3000

# 4. Dev server
npm run dev
# → http://localhost:3000
```

### Docker (local)

```bash
docker compose up --build
```

---

## ✍️ Writing Posts

Create a `.mdx` file in `src/content/posts/`:

```mdx
---
title: "My Post Title"
description: "A short description for SEO and post cards."
date: "2024-10-01"
tags: ["Next.js", "TypeScript"]
draft: false
---

Your content here. Full **Markdown** + JSX supported.

```ts
const hello = "world"
```
```

Posts are automatically picked up, sorted by date, and statically generated at build time.

---

## 💰 Monetization (Google AdSense)

1. Get your publisher ID from [Google AdSense](https://adsense.google.com) — format: `ca-pub-XXXXXXXXXXXXXXXX`
2. Set in `.env.local`:
   ```
   NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
   ```
3. Update ad slot IDs in `src/app/page.tsx` and `src/app/posts/[slug]/page.tsx` with your real slot IDs from AdSense dashboard
4. Add `adsbygoogle.js` loads automatically via `src/app/layout.tsx`

In development (no ID set), placeholder boxes show where ads will appear.

---

## 🐳 Docker

### Build production image

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://prathiush.dev \
  -t prathiush-blog:latest .
```

### Run production image

```bash
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  prathiush-blog:latest
```

### Docker Compose (production)

```bash
IMAGE_TAG=latest \
NEXT_PUBLIC_SITE_URL=https://prathiush.dev \
docker compose -f docker-compose.prod.yml up -d
```

---

## ⚙️ CI/CD (GitHub Actions)

The pipeline in `.github/workflows/ci-cd.yml` runs on every push to `main`:

| Step | What happens |
|------|-------------|
| **Quality** | `type-check` + `lint` + `test` |
| **Build & Push** | Docker multi-platform image → GitHub Container Registry (GHCR) |
| **Deploy** | SSH into your server, pull new image, zero-downtime restart |

### Required GitHub Secrets

| Secret | Description |
|--------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Your production URL |
| `NEXT_PUBLIC_ADSENSE_ID` | AdSense publisher ID |
| `DEPLOY_HOST` | Server IP or hostname |
| `DEPLOY_USER` | SSH username |
| `DEPLOY_SSH_KEY` | Private SSH key (add public key to server `~/.ssh/authorized_keys`) |

### Server Setup (one-time)

```bash
# On your production server
mkdir -p /opt/prathiush-blog
# Copy docker-compose.prod.yml and nginx/ folder there
# Install Docker + Docker Compose
```

---

## 🗂 Project Structure

```
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx        # Root layout, theme provider
│   │   ├── page.tsx          # Home page
│   │   ├── about/            # About page
│   │   ├── posts/[slug]/     # Individual post page
│   │   ├── tags/             # Tag index + tag pages
│   │   ├── api/health/       # Health check endpoint
│   │   ├── rss.xml/          # RSS feed
│   │   ├── robots.txt/       # robots.txt
│   │   └── sitemap.ts        # XML sitemap
│   ├── components/           # Shared components
│   │   ├── Navbar.tsx        # Nav + dark mode toggle
│   │   ├── Footer.tsx
│   │   ├── PostCard.tsx
│   │   └── AdSlot.tsx        # AdSense slot wrapper
│   ├── content/
│   │   └── posts/            # ← Write your .mdx posts here
│   ├── lib/
│   │   ├── posts.ts          # File-system MDX utilities
│   │   └── types.ts          # TypeScript types
│   └── styles/
│       └── globals.css       # Tailwind + custom CSS
├── nginx/
│   ├── nginx.prod.conf       # Production Nginx (HTTPS, rate limit)
│   └── nginx.dev.conf        # Dev Nginx
├── .github/workflows/
│   └── ci-cd.yml             # GitHub Actions pipeline
├── Dockerfile                # Multi-stage production build
├── docker-compose.yml        # Local dev
├── docker-compose.prod.yml   # Production
└── .env.example
```

---


