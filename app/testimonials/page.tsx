import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { PageIntro } from "@/components/PageIntro";
import { TestimonialCards } from "@/components/TestimonialCards";

export const metadata: Metadata = {
  title: "המלצות",
  description:
    "חוות דעת והמלצות מלקוחות על טיפולי עור מתקדמים, אבחון מקצועי וחוויית טיפול רגועה ואישית."
};

export default function TestimonialsPage() {
  return (
    <>
      <PageIntro
        eyebrow="המלצות"
        title="האמון נבנה בפרטים הקטנים: הסבר, הקשבה ותוצאות טבעיות."
        text="המלצות הלקוחות מתמקדות בתחושת הביטחון, בתהליך ובשיפור הדרגתי שנראה אמיתי."
      />
      <section className="container-page pb-16">
        <TestimonialCards />
      </section>
      <ContactPanel />
    </>
  );
}
