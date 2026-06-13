import { ContactPanel } from "@/components/ContactPanel";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "יצירת קשר",
  description:
    "תיאום טיפול, שיחת התאמה או שליחת הודעה בוואטסאפ לקליניקה קוסמטית מקצועית באשדוד.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "בית", url: site.url },
          { name: "יצירת קשר", url: `${site.url}/contact` }
        ])}
      />
      <PageIntro
        eyebrow="יצירת קשר"
        title="תיאום טיפול מתחיל בשאלה הנכונה על העור שלך."
        text="שלחי הודעה או השאירי פרטים, ונבין יחד מה נכון לשלב הבא."
      />
      <ContactPanel />
    </>
  );
}
