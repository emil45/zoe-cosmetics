import { Post, TreatmentItem, site } from "@/lib/content";

/** Stable @id for the business entity so all schemas reference one node. */
const businessId = `${site.url}/#business`;

/** Resolve a possibly-relative asset path to an absolute URL for JSON-LD. */
function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${site.url}${path}`;
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": businessId,
    name: site.name,
    alternateName: site.cosmetician,
    description: site.description,
    url: site.url,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    image: absoluteUrl(site.image),
    logo: absoluteUrl(site.image),
    address: {
      "@type": "PostalAddress",
      // Matches the Google Business Profile NAP: "Shevet Yosef St 1/31, Ashdod"
      streetAddress: "שבט יוסף 1/31",
      addressLocality: "אשדוד",
      addressRegion: "מחוז הדרום",
      addressCountry: "IL"
    },
    areaServed: [
      { "@type": "City", name: "אשדוד" },
      { "@type": "Country", name: "Israel" }
    ],
    priceRange: "₪₪₪",
    currenciesAccepted: "ILS",
    knowsLanguage: ["he-IL", "ru-RU"],
    founder: {
      "@type": "Person",
      name: site.cosmetician,
      jobTitle: "קוסמטיקאית מקצועית"
    },
    sameAs: [site.whatsapp]
    // TODO: add verified geo coordinates, openingHoursSpecification, and a
    // Google Business Profile / Instagram URL in sameAs once confirmed by the
    // business. Do not fabricate hours, coordinates, ratings, or reviews.
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#cosmetician`,
    name: site.cosmetician,
    jobTitle: "קוסמטיקאית מקצועית",
    description: "קוסמטיקאית מקצועית לטיפולי עור מתקדמים בגישה אישית, נקייה ואחראית.",
    url: `${site.url}/about`,
    worksFor: { "@id": businessId },
    knowsLanguage: ["he-IL", "ru-RU"]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "he-IL",
    publisher: { "@id": businessId }
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

export function serviceSchema(treatment: TreatmentItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: treatment.title,
    name: treatment.title,
    description: treatment.short,
    url: `${site.url}/treatments/${treatment.slug}`,
    inLanguage: "he-IL",
    category: "טיפולי עור קוסמטיים",
    areaServed: [
      { "@type": "City", name: "אשדוד" },
      { "@type": "Country", name: "Israel" }
    ],
    provider: { "@id": businessId }
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
    publisher: { "@id": businessId },
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
