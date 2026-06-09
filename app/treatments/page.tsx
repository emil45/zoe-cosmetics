import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";
import { TreatmentGrid } from "@/components/TreatmentGrid";
import { series, treatments } from "@/lib/content";

export const metadata: Metadata = {
  title: "טיפולים",
  description:
    "סדרות HIFU, RF, פלזמה, מיקרונידלינג, Glow ועור אקנאי — לצד טיפולי פנים קלסיים, הסרת סרחי עור וטיפול אנטי-אייג'ינג הדרגתי."
};

export default function TreatmentsPage() {
  const allKeywords = [...series, ...treatments].flatMap((item) => item.keywords);
  const uniqueKeywords = [...new Set(allKeywords)].slice(0, 14);

  return (
    <>
      <PageIntro
        eyebrow="טיפולים"
        title="טיפולי עור מתקדמים שנבחרים לפי אבחון, לא לפי אופנה."
        text="כל טיפול מותאם למצב העור, מטרה, רגישויות ושגרת החיים. כאן תמצאי את תחומי הטיפול המרכזיים בקליניקה."
      />

      <div className="container-page pb-16 grid gap-16">
        <section>
          <SectionHeading
            eyebrow="סדרות טיפולים"
            title="תוכניות טיפול מלאות לתוצאה מתמשכת."
            text="כל סדרה בנויה כתוכנית מובנית — מספר טיפולים, קצב מתאים ומעקב לאורך הדרך."
          />
          <TreatmentGrid data={series} />
        </section>

        <section>
          <SectionHeading
            eyebrow="טיפולים בודדים"
            title="טיפולים ממוקדים לצורך ספציפי."
            text="טיפול יחיד בגישה מקצועית — לניקוי, חידוש, הסרה או טיפוח נקודתי."
          />
          <TreatmentGrid data={treatments} />
        </section>

        <div className="rounded-2xl border border-ink/8 bg-white p-7 shadow-card">
          <h2 className="text-2xl font-bold text-ink">איך בוחרים טיפול?</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-[1.85] text-ink/60">
            מתחילים באבחון. לעיתים טיפול אחד מספיק כדי לשפר נוחות ומרקם, ולעיתים
            נכון לבנות סדרה שמשלבת כמה כלים. ההחלטה מתקבלת אחרי שמבינים את
            איכות העור, מטרות הטיפול והיכולת לשמור על שגרה בבית.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {uniqueKeywords.map((keyword) => (
              <span
                className="rounded-full bg-ivory px-3 py-1.5 text-[11px] font-semibold text-ink/55"
                key={keyword}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ContactPanel />
    </>
  );
}
