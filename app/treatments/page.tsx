import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { PageIntro } from "@/components/PageIntro";
import { TreatmentGrid } from "@/components/TreatmentGrid";
import { treatments } from "@/lib/content";

export const metadata: Metadata = {
  title: "טיפולים",
  description:
    "טיפולי HIFU, RF, אנטי אייג'ינג, טיפול פנים מקצועי, פיגמנטציה ותוכניות טיפול אישיות לעור הפנים."
};

export default function TreatmentsPage() {
  return (
    <>
      <PageIntro
        eyebrow="טיפולים"
        title="טיפולי עור מתקדמים שנבחרים לפי אבחון, לא לפי אופנה."
        text="כל טיפול מותאם למצב העור, מטרה, רגישויות ושגרת החיים. כאן תמצאי את תחומי הטיפול המרכזיים בקליניקה."
      />
      <section className="container-page pb-16">
        <TreatmentGrid />
        <div className="mt-10 rounded-lg border border-ink/10 bg-white/80 p-5 shadow-line">
          <h2 className="text-2xl font-bold text-ink">איך בוחרים טיפול?</h2>
          <p className="mt-3 max-w-3xl text-base leading-8 text-ink/66">
            מתחילים באבחון. לעיתים טיפול אחד מספיק כדי לשפר נוחות ומרקם, ולעיתים
            נכון לבנות סדרה שמשלבת כמה כלים. ההחלטה מתקבלת אחרי שמבינים את
            איכות העור, מטרות הטיפול והיכולת לשמור על שגרה בבית.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {treatments.flatMap((item) => item.keywords).slice(0, 12).map((keyword) => (
              <span
                className="rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-ink/64"
                key={keyword}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>
      <ContactPanel />
    </>
  );
}
