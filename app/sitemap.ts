import type { MetadataRoute } from "next";
import { posts, treatments } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.co.il";
  const now = new Date();

  return [
    "",
    "/about",
    "/treatments",
    "/testimonials",
    "/blog",
    "/contact",
    ...treatments.map((item) => `/treatments#${item.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`)
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path.startsWith("/blog") ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.75
  }));
}
