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

All site content lives in **`lib/content.ts`** as typed arrays and objects exported at the module level (`site`, `navigation`, `treatments`, `series`, `testimonials`, `posts`, `contactCards`, etc.). Pages import directly from there — there is no CMS, database, or API. **To add or change any content, edit `lib/content.ts`.**

- `treatments` — individual treatments (ניקוי, קלסי+מכשור, סרחי עור, אנטי-אייג'ינג). Entries with a `fullText` field get a dedicated detail page at `/treatments/[slug]`.
- `series` — treatment series (HIFU, RF, פלזמה, Glow, אקנה, מיקרונידלינג). No detail pages; listed on the treatments page only.

JSON-LD structured data schemas are generated in **`lib/schema.ts`** and injected via `<JsonLd>` in the layout.

Metadata (canonical URLs, OG tags, Twitter cards) is built via **`lib/seo.ts`** `buildMetadata()` — use this on every indexable page.

### Routing

- `app/page.tsx` — home page (assembles all major sections)
- `app/about/`, `app/treatments/`, `app/testimonials/`, `app/blog/`, `app/contact/` — static pages
- Blog posts are rendered at `app/blog/[slug]/` (dynamic route); slug comes from `posts` in `lib/content.ts`
- Treatment detail pages are rendered at `app/treatments/[slug]/` — only generated for `treatments` entries that have a `fullText` field
- `app/sitemap.ts` and `app/robots.ts` — auto-generated SEO files

### Styling conventions

- **`container-page`** — global max-width utility (defined in `globals.css`, not Tailwind)
- **`focus-ring`** — accessible focus style utility (also in `globals.css`)
- Custom Tailwind palette: `porcelain`, `ivory`, `oat`, `linen`, `clay`, `ink`, `olive`, `sage`, `blush` — defined in `tailwind.config.ts`
- Custom shadows: `shadow-soft`, `shadow-line`
- All layouts are RTL (`<html dir="rtl" lang="he">`)

### Static assets

All images and videos live in `public/assets/`:
- Images: `hero.png`, `room.png`, `room_and_logo.png`, `beauty_products.png`, `facial_classic.png`, `facial_advanced.png`, `skin_tags.png`, `anti_aging.png`
- Videos: `hifu.mp4`, `face_lab.mp4`, `plasma.mp4`

Treatment detail pages map slugs to images via `treatmentImages` in `app/treatments/[slug]/page.tsx`.

Remote images are served from `images.unsplash.com` (configured in `next.config.ts`).

### Site configuration

Canonical URL + indexability are centralized in **`lib/site-url.ts`**:
- `getBaseUrl()` — deployed builds canonicalize to the hardcoded production domain `https://zoe-cosmetics.co.il` (override with `NEXT_PUBLIC_SITE_URL`); local dev uses `http://localhost:3000`. Used by every canonical/sitemap/OG/JSON-LD URL.
- `isIndexable()` — returns `true` **only** when env var `NEXT_PUBLIC_SITE_LIVE === "true"`. Otherwise the whole site is `noindex` + `robots.txt` `Disallow: /`.

GA4 (`G-6LTFW81Z90`, `site.gaId`) loads via `@next/third-parties` in the layout, gated to `NODE_ENV === "production"` (deployed builds only). Phone/WhatsApp/email in `lib/content.ts` are placeholders to confirm before launch.

### ⏳ PENDING — domain go-live (do at cutover, not before)

`zoe-cosmetics.co.il` currently serves an old placeholder site with no SEO history (the business/site is brand new — nothing to preserve, no redirects needed). This new site is on Vercel staging and is intentionally `noindex` until cutover. **When the new site replaces the old one on the domain:**
1. Add `zoe-cosmetics.co.il` to this Vercel project as the production domain.
2. Set **`NEXT_PUBLIC_SITE_LIVE=true`** in Vercel env vars and redeploy. ← this is the entire "switch".
3. Submit `https://zoe-cosmetics.co.il/sitemap.xml` in Google Search Console.

Step 2 is a manual Vercel env change you can do yourself — nothing automatic detects cutover.

The header is `fixed` (not sticky) — `<main>` should not add `pt-16` globally; each page's first section must have enough top padding to clear the 64px header.
