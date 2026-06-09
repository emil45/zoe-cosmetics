/**
 * Single source of truth for the site's canonical URL and indexability.
 *
 * The site's permanent home is the production domain below. It is used for all
 * canonical / sitemap / Open Graph / JSON-LD URLs on every deployed build, so
 * those tags are correct from day one — even while the new site is still being
 * previewed on a temporary *.vercel.app URL.
 *
 * IMPORTANT — domain migration in progress:
 * zoe-cosmetics.co.il currently still serves the OLD site. The new site is
 * built here and previewed on Vercel. Indexing is therefore decoupled from the
 * URL: nothing is indexable until the explicit go-live switch is flipped at
 * cutover (see isIndexable). This prevents the temporary deployment from being
 * crawled and prevents any clash with the old site that's still on the domain.
 */

const PRODUCTION_URL = "https://zoe-cosmetics.co.il";

function stripTrailingSlash(url: string) {
  return url.replace(/\/+$/, "");
}

export function getBaseUrl(): string {
  // Explicit override always wins.
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return stripTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL);
  }
  // Once live, canonicalize to the real production domain.
  if (isIndexable()) {
    return PRODUCTION_URL;
  }
  // Pre-launch staging on Vercel: use the actual host the site is served from
  // so canonical/OG/JSON-LD URLs (and the og:image) resolve to reachable files.
  // (The production domain still serves the OLD site, so pointing there pre-launch
  // would 404 the share-preview image.) Prefer the stable production *.vercel.app
  // domain, then the per-deployment preview URL.
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
 * Go-live switch. Stays false (noindex + Disallow) until the new site actually
 * replaces the old one on zoe-cosmetics.co.il. At cutover, set the env var
 * NEXT_PUBLIC_SITE_LIVE=true in Vercel and redeploy to turn indexing on.
 */
export function isIndexable(): boolean {
  return process.env.NEXT_PUBLIC_SITE_LIVE === "true";
}
