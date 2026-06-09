import type { MetadataRoute } from "next";
import { getBaseUrl, isIndexable } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  // On the temporary *.vercel.app deployment (no real domain yet) block all
  // crawling so the site isn't indexed under the wrong host. Once
  // NEXT_PUBLIC_SITE_URL is set, switch to a normal allow-all policy.
  if (!isIndexable()) {
    return {
      rules: { userAgent: "*", disallow: "/" }
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
