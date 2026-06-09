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
  // Explicit override (e.g. staging on a different host).
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return stripTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL);
  }
  // Local development.
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  // Every deployed build canonicalizes to the real production domain.
  return PRODUCTION_URL;
}

/**
 * Go-live switch. Stays false (noindex + Disallow) until the new site actually
 * replaces the old one on zoe-cosmetics.co.il. At cutover, set the env var
 * NEXT_PUBLIC_SITE_LIVE=true in Vercel and redeploy to turn indexing on.
 */
export function isIndexable(): boolean {
  return process.env.NEXT_PUBLIC_SITE_LIVE === "true";
}
