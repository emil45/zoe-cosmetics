# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js on port 3000)
npm run build    # Production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 15 App Router** marketing site for an Israeli cosmetics clinic (Hebrew, RTL). The stack is Next.js + TypeScript + Tailwind CSS, no external state management or data fetching layer.

### Data flow

All site content lives in **`lib/content.ts`** as typed arrays and objects exported at the module level (`site`, `navigation`, `treatments`, `testimonials`, `posts`, `contactCards`, etc.). Pages import directly from there — there is no CMS, database, or API. **To add or change any content, edit `lib/content.ts`.**

JSON-LD structured data schemas (LocalBusiness, Article, FAQ, BreadcrumbList) are generated in **`lib/schema.ts`** from the same content exports and injected via `<JsonLd>` in the layout.

### Routing

- `app/page.tsx` — home page (assembles all major sections)
- `app/about/`, `app/treatments/`, `app/testimonials/`, `app/blog/`, `app/contact/` — static pages
- Blog posts are rendered at `app/blog/[slug]/` (dynamic route); slug comes from `posts` in `lib/content.ts`
- `app/sitemap.ts` and `app/robots.ts` — auto-generated SEO files

### Styling conventions

- **`container-page`** — global max-width utility (defined in `globals.css`, not Tailwind)
- **`focus-ring`** — accessible focus style utility (also in `globals.css`)
- Custom Tailwind palette: `porcelain`, `ivory`, `oat`, `linen`, `clay`, `ink`, `olive`, `sage`, `blush` — defined in `tailwind.config.ts`
- Custom shadows: `shadow-soft`, `shadow-line`
- All layouts are RTL (`<html dir="rtl" lang="he">`)

### Site configuration

The production URL is set via `NEXT_PUBLIC_SITE_URL` env var (falls back to `https://example.co.il`). Phone/WhatsApp/email are placeholders in `lib/content.ts` that need to be updated before launch.

Remote images are served from `images.unsplash.com` (configured in `next.config.ts`).
