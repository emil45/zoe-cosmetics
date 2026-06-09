import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "יצירת קשר",
  description:
    "תיאום טיפול, שיחת התאמה או שליחת הודעה בוואטסאפ לקליניקה קוסמטית מקצועית בישראל."
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="יצירת קשר"
        title="תיאום טיפול מתחיל בשאלה הנכונה על העור שלך."
        text="שלחי הודעה או השאירי פרטים, ונבין יחד מה נכון לשלב הבא."
      />
      <ContactPanel />
    </>
  );
}
