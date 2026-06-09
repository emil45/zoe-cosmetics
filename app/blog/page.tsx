import type { Metadata } from "next";
import { BlogCards } from "@/components/BlogCards";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "בלוג",
  description:
    "מאמרים מקצועיים בעברית על HIFU, RF, טיפולי פנים, שגרת טיפוח, פיגמנטציה ובחירת קוסמטיקאית מקצועית."
};

export default function BlogPage() {
  return (
    <>
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
