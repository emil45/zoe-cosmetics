import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { site, posts, series, treatments } from "@/lib/content";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Per-post lead image (slug → image). Only posts listed here get a hero image
// at the top of the article and a custom social/OG share image; every other
// post keeps the text-only layout and the default branded share card.
const postImages: Record<string, { src: string; alt: string }> = {
  "salicylic-acid-during-pregnancy": {
    src: "/assets/blog-salicylic-pregnancy.jpg",
    alt: "בקבוק סרום זכוכית מט על משטח פשתן בהיר — אווירת טיפוח עדין בהריון"
  },
  "retinol-for-face-guide": {
    src: "/assets/blog-retinol.jpg",
    alt: "בקבוק סרום ענבר עם טפטפת באור ערב רך — שגרת רטינול לפנים בלילה"
  }
};

// Renders inline markdown-style links `[label](href)` inside post body text.
// Internal hrefs (starting with "/") use next/link; external links open in a
// new tab. Plain text passes through untouched.
function renderRichText(text: string): ReactNode[] {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    const className = "focus-ring font-semibold text-olive hover:text-ink";
    nodes.push(
      href.startsWith("/") ? (
        <Link className={className} href={href} key={key++}>
          {label}
        </Link>
      ) : (
        <a className={className} href={href} key={key++} rel="noreferrer" target="_blank">
          {label}
        </a>
      )
    );
    lastIndex = linkPattern.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  const heroImage = postImages[slug];

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
    image: heroImage?.src,
    imageAlt: heroImage?.alt
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const allTreatmentItems = [...series, ...treatments];
  const relatedTreatments = allTreatmentItems.filter((item) =>
    post.relatedTreatmentSlugs.includes(item.slug)
  );
  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const heroImage = postImages[post.slug];

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post, heroImage?.src),
          faqSchema(post.faqs),
          breadcrumbSchema([
            { name: "בית", url: site.url },
            { name: "בלוג", url: `${site.url}/blog` },
            { name: post.title, url: `${site.url}/blog/${post.slug}` }
          ])
        ]}
      />
      <article className="container-page grid gap-10 py-12 lg:grid-cols-[240px_1fr] lg:py-20">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-ink/10 bg-white/80 p-5 shadow-line">
            <p className="text-sm font-bold text-olive">תוכן עניינים</p>
            <nav aria-label="תוכן עניינים" className="mt-4 grid gap-3">
              {post.sections.map((section) => (
                <a
                  className="focus-ring text-sm leading-6 text-ink/68 hover:text-olive"
                  href={`#${section.id}`}
                  key={section.heading}
                >
                  {section.heading}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="max-w-3xl">
          <p className="text-sm font-bold text-olive">{post.category}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-ink md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/66">{post.excerpt}</p>
          <p className="mt-5 rounded-lg border border-olive/20 bg-sage/15 p-4 text-sm leading-7 text-ink/66">
            {post.reviewedNote}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-ink/52">
            <time dateTime={post.date}>
              {new Intl.DateTimeFormat("he-IL", {
                day: "numeric",
                month: "long",
                year: "numeric"
              }).format(new Date(post.date))}
            </time>
            <span>{post.readingTime}</span>
            <span>מאת {post.author}</span>
          </div>

          {heroImage && (
            <div className="mt-8 overflow-hidden rounded-3xl bg-linen shadow-soft">
              <Image
                alt={heroImage.alt}
                className="w-full object-cover"
                height={630}
                priority
                sizes="(min-width: 1024px) 768px, 100vw"
                src={heroImage.src}
                width={1200}
              />
            </div>
          )}

          <div className="mt-10 grid gap-10">
            {post.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2 className="text-2xl font-bold text-ink">{section.heading}</h2>
                <p className="mt-4 text-lg leading-9 text-ink/70">{renderRichText(section.body)}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-lg border border-ink/10 bg-white/80 p-5 shadow-line">
            <h2 className="text-2xl font-bold text-ink">שאלות נפוצות</h2>
            <div className="mt-5 grid gap-4">
              {post.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-bold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-base leading-8 text-ink/66">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-lg bg-ivory p-5">
            <h2 className="text-xl font-bold text-ink">המשך קריאה באתר</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {relatedTreatments.map((item) => (
                <Link
                  className="focus-ring rounded-md bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink/68 hover:text-olive"
                  href={item.fullText ? `/treatments/${item.slug}` : `/treatments#${item.slug}`}
                  key={item.slug}
                >
                  {item.title}
                </Link>
              ))}
              {relatedPosts.map((item) => (
                <Link
                  className="focus-ring rounded-md bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink/68 hover:text-olive"
                  href={`/blog/${item.slug}`}
                  key={item.slug}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t border-ink/10 pt-8">
            <h2 className="text-2xl font-bold text-ink">מקורות לקריאה נוספת</h2>
            <p className="mt-3 text-sm leading-7 text-ink/58">
              קישורים אלה מובילים למקורות חיצוניים רשמיים או מקצועיים. הם אינם
              מהווים המלצה על טיפול מסוים, אלא בסיס לבדיקה זהירה יותר.
            </p>
            <ul className="mt-4 grid gap-2">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a
                    className="focus-ring text-sm font-semibold leading-7 text-olive hover:text-ink"
                    href={source.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t border-ink/10 pt-8">
            <h2 className="text-2xl font-bold text-ink">על הכותבת</h2>
            <p className="mt-3 text-base leading-8 text-ink/66">
              {site.cosmetician}, קוסמטיקאית מקצועית לטיפולי עור מתקדמים,
              מלווה נשים בתהליכי אבחון, מיצוק, חידוש ושגרת עור אישית.
            </p>
          </section>
        </div>
      </article>
      {relatedPosts.length > 0 ? (
        <section className="container-page pb-16">
          <h2 className="mb-6 text-2xl font-bold text-ink">מאמרים נוספים</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedPosts.map((item) => (
              <article
                className="rounded-lg border border-ink/10 bg-white/82 p-5 shadow-line transition hover:-translate-y-0.5 hover:shadow-soft"
                key={item.slug}
              >
                <p className="text-sm font-bold text-olive">{item.category}</p>
                <h3 className="mt-4 text-xl font-bold leading-8 text-ink">
                  <Link className="focus-ring hover:text-olive" href={`/blog/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink/64">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
