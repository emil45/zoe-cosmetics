import { BlogCards } from "@/components/BlogCards";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "בלוג",
  description:
    "מאמרים מקצועיים בעברית על HIFU, RF, טיפולי פנים, שגרת טיפוח, פיגמנטציה ובחירת קוסמטיקאית מקצועית באשדוד.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "בית", url: site.url },
          { name: "בלוג", url: `${site.url}/blog` }
        ])}
      />
      <PageIntro
        eyebrow="בלוג"
        title="מדריכים קצרים שעוזרים לבחור טיפולי עור בצורה רגועה ומבוססת."
        text="ידע מקצועי ונגיש על טכנולוגיות, שגרת עור ותהליכים קוסמטיים מתקדמים."
      />
      <section className="container-page pb-16">
        <BlogCards />
      </section>
    </>
  );
}
