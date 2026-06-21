/**
 * Single source of truth for the site's canonical URL and indexability.
 *
 * The site is LIVE on the production domain below, used for all canonical /
 * sitemap / Open Graph / JSON-LD URLs on every deployed build.
 *
 * Canonical host is the www subdomain: Vercel serves the site on www and
 * 308-redirects the bare apex (zoe-cosmetics.co.il) to it. A canonical URL must
 * point at the host that actually returns 200 (www), not the redirecting apex —
 * otherwise the rel=canonical / sitemap / Host signals fight the redirect.
 */

const PRODUCTION_URL = "https://www.zoe-cosmetics.co.il";

function stripTrailingSlash(url: string) {
  return url.replace(/\/+$/, "");
}

export function getBaseUrl(): string {
  // Explicit override always wins.
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return stripTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL);
  }
  // Live production: canonicalize to the real production domain.
  if (isIndexable()) {
    return PRODUCTION_URL;
  }
  // Non-production builds (preview deployments / staging): use the actual host
  // the site is served from so canonical/OG/JSON-LD URLs (and the og:image)
  // resolve to reachable files. Prefer the stable production *.vercel.app domain,
  // then the per-deployment preview URL.
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Local development.
  return "http://localhost:3000";
}

/**
 * Indexability switch. Live in production via NEXT_PUBLIC_SITE_LIVE=true (set in
 * Vercel). When unset/false the site is noindex + robots Disallow — that's the
 * desired state for preview/staging deployments so they don't get crawled.
 */
export function isIndexable(): boolean {
  return process.env.NEXT_PUBLIC_SITE_LIVE === "true";
}
