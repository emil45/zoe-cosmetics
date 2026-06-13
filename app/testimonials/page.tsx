import { ContactPanel } from "@/components/ContactPanel";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { SocialProofGallery } from "@/components/SocialProofGallery";
import { VideoReviewGallery } from "@/components/VideoReviewGallery";
import { site } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "המלצות",
  description:
    "חוות דעת והמלצות מלקוחות על טיפולי עור מתקדמים, אבחון מקצועי וחוויית טיפול רגועה ואישית בקליניקה קוסמטית באשדוד.",
  path: "/testimonials"
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "בית", url: site.url },
          { name: "המלצות", url: `${site.url}/testimonials` }
        ])}
      />
      <PageIntro
        eyebrow="המלצות"
        title="האמון נבנה בפרטים הקטנים: הסבר, הקשבה ותוצאות טבעיות."
        text="המלצות הלקוחות מתמקדות בתחושת הביטחון, בתהליך ובשיפור הדרגתי שנראה אמיתי."
      />
      <section className="container-page pb-10">
        <SocialProofGallery />
      </section>
      <section className="container-page pb-16">
        <VideoReviewGallery />
      </section>
      <ContactPanel />
    </>
  );
}
