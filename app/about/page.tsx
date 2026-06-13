import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { site, trustItems } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "אודות",
  description:
    "הכירי את זואי פייסחוב, קוסמטיקאית מקצועית באשדוד לטיפולי עור מתקדמים בגישה אישית, נקייה ואחראית.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          personSchema(),
          breadcrumbSchema([
            { name: "בית", url: site.url },
            { name: "אודות", url: `${site.url}/about` }
          ])
        ]}
      />
      <section className="container-page animate-fade-up grid gap-12 py-14 md:grid-cols-[0.95fr_1.05fr] md:py-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-linen shadow-soft">
          <Image
            alt="קליניקת עור זואי פייסחוב — חדר טיפול ולוגו"
            className="object-cover object-top"
            fill
            priority
            sizes="(min-width: 768px) 44vw, 100vw"
            src="/assets/room_and_logo.png"
          />
        </div>

        <div className="self-center">
          <div className="mb-5 flex items-center gap-3">
            <span aria-hidden className="block h-px w-6 shrink-0 bg-clay/50" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-clay">
              אודות
            </p>
          </div>

          <h1 className="text-[2rem] font-bold leading-tight text-ink md:text-[2.5rem]">
            יופי אמיתי מתחיל במקצוענות
          </h1>

          <div className="mt-6 grid gap-5 text-[15px] leading-[1.9] text-ink/62">
            <p>
              בעולם האסתטיקה של היום, טיפולי פנים כבר מזמן אינם רק פינוק —
              הם שילוב מדויק בין מדע, טכנולוגיה, הבנה עמוקה של העור ואמנות של מגע נשי.
            </p>
            <p>
              כאשר אישה מביטה במראה, היא לא מחפשת רק עור יפה יותר.
              היא רוצה להרגיש רעננה, בטוחה בעצמה, זוהרת ומטופחת — בלי לאבד את הטבעיות שלה.
              זו בדיוק הסיבה שטיפול מקצועי חייב להיות מותאם אישית, מדויק ואיכותי ברמה הגבוהה ביותר.
            </p>
            <p>
              עם השנים למדתי שכל עור מספר סיפור אחר.
              יש עור שזקוק למיצוק וחידוש, יש עור שמבקש איזון והרגעה,
              ויש נשים שפשוט רוצות לעצור לרגע את סימני הזמן ולהחזיר לעצמן את הזוהר שאבד.
            </p>
            <p>
              השילוב בין ידע מקצועי מתקדם לבין טכנולוגיות חדשניות כמו HIFU ו־RF
              מאפשר להגיע לתוצאות מרשימות בצורה עדינה, אלגנטית ומדויקת.
              המטרה איננה לשנות את הפנים — אלא להדגיש את היופי הטבעי שכבר קיים.
            </p>
          </div>

          <div className="mt-8">
            <ButtonLink href={site.whatsapp} external>
              לשיחת היכרות
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-ivory/50 py-14 md:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span aria-hidden className="block h-px w-6 shrink-0 bg-clay/50" />
              <p className="text-[11px] font-semibold uppercase tracking-widest text-clay">
                הגישה שלי
              </p>
              <span aria-hidden className="block h-px w-6 shrink-0 bg-clay/50" />
            </div>
            <blockquote className="text-[1.1rem] font-medium leading-[1.9] text-ink/70">
              טיפול יוקרתי אמיתי מתחיל בפרטים הקטנים: באבחון נכון של מצב העור, בחומרים
              איכותיים, במכשור מתקדם, בהקשבה לצרכים של כל אישה וביחס אישי שמעניק תחושת
              ביטחון ורוגע מהרגע הראשון.
            </blockquote>
            <p className="mt-6 text-[15px] leading-[1.9] text-ink/55">
              עור בריא וזוהר הוא לא טרנד — הוא ביטוי לטיפוח נכון, לאיכות ולבחירה לא
              להתפשר על עצמך. כי אישה שמרגישה יפה — מקרינה את זה בכל מקום אליו היא נכנסת.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <article className="rounded-2xl border border-ink/8 bg-white p-6 shadow-card" key={item.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linen text-clay">
                  <Icon aria-hidden className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[15px] font-bold text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-[1.85] text-ink/55">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
