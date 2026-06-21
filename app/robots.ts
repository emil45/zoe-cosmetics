import type { MetadataRoute } from "next";
import { getBaseUrl, isIndexable } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  // Preview/staging deployments (NEXT_PUBLIC_SITE_LIVE unset) block all crawling
  // so they aren't indexed under the wrong host. Production allows all.
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
