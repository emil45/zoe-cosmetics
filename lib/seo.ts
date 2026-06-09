import type { Metadata } from "next";
import { site } from "@/lib/content";

type BuildMetadataOptions = {
  /** Page-specific title. The layout title template appends the brand name.
   *  Omit for the homepage to use the default title. */
  title?: string;
  description: string;
  /** Canonical path, e.g. "/about" or "/". Used for canonical + og:url. */
  path: string;
  /** Full Open Graph title (no template applied). Defaults to `${title} | brand`. */
  ogTitle?: string;
  type?: "website" | "article";
  /** Custom share image (relative paths resolve against metadataBase). When
   *  omitted, the branded 1200×630 default (`/assets/og.jpg`) is used. */
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  authors?: string[];
};

/** Branded landscape share image, sized for OG/Twitter/WhatsApp (1.91:1). */
const DEFAULT_OG_IMAGE = { url: "/assets/og.jpg", width: 1200, height: 630 };

/**
 * Centralized metadata builder so every indexable page ships a unique,
 * self-referencing canonical URL plus consistent Open Graph / Twitter tags.
 * Defining `alternates.canonical` per page is required because Next.js would
 * otherwise inherit the layout's canonical and collapse pages to the homepage.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  type = "website",
  image,
  imageAlt = site.name,
  publishedTime,
  authors
}: BuildMetadataOptions): Metadata {
  const resolvedOgTitle =
    ogTitle ?? (title ? `${title} | ${site.cosmetician}` : `${site.cosmetician} | ${site.name}`);

  // Default to the branded 1200×630 image with explicit dims; for a custom
  // page image, omit dims (orientation varies) and let scrapers infer them.
  const ogImage = image
    ? { url: image, alt: imageAlt }
    : { ...DEFAULT_OG_IMAGE, alt: imageAlt };

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      type,
      locale: site.locale,
      siteName: site.name,
      title: resolvedOgTitle,
      description,
      url: `${site.url}${path === "/" ? "" : path}`,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {})
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description,
      images: [ogImage.url]
    }
  };
}
