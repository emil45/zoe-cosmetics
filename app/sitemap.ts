import type { MetadataRoute } from "next";
import { posts, treatments } from "@/lib/content";
import { getBaseUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/treatments", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const }
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority
  }));

  // Only treatments that have a standalone detail page (fullText) get their own URL.
  // Series and short treatments live as anchors on /treatments and are not duplicated here.
  const treatmentEntries: MetadataRoute.Sitemap = treatments
    .filter((item) => item.fullText)
    .map((item) => ({
      url: `${baseUrl}/treatments/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.7
  }));

  return [...staticEntries, ...treatmentEntries, ...blogEntries];
}
