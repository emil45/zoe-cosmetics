import { Post, site, testimonials } from "@/lib/content";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL",
      addressLocality: site.address
    },
    areaServed: {
      "@type": "Country",
      name: "Israel"
    },
    priceRange: "$$$",
    image: site.image,
    sameAs: [site.whatsapp],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: testimonials.length.toString()
    },
    review: testimonials.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.name
      },
      reviewBody: item.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function articleSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "he-IL",
    author: {
      "@type": "Person",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: site.name
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    keywords: post.keywords.join(", ")
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
