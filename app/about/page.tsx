import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { ButtonLink } from "@/components/ButtonLink";
import { site, trustItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "אודות",
  description:
    "הכירי את זואי פיס, קוסמטיקאית מקצועית לטיפולי עור מתקדמים בגישה אישית, נקייה ואחראית."
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="אודות"
        title="טיפול טוב מתחיל במבט מקצועי וביכולת להקשיב לעור."
        text="הגישה בקליניקה משלבת אבחון, טכנולוגיה, ידיים מיומנות ושיחה פתוחה. המטרה היא לבנות תהליך שמתאים לך באמת."
      />
      <section className="container-page grid gap-8 pb-16 md:grid-cols-[0.95fr_1.05fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-linen shadow-soft">
          <Image
            alt="קוסמטיקאית מקצועית בסביבת טיפול נקייה"
            className="object-cover"
            fill
            sizes="(min-width: 768px) 44vw, 100vw"
            src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=1200&q=82"
          />
        </div>
        <div className="self-center">
          <h2 className="text-3xl font-bold leading-tight text-ink">
            ניסיון, טעם ואחריות מקצועית באותו חדר.
          </h2>
          <div className="mt-5 grid gap-4 text-base leading-8 text-ink/68">
            <p>
              זואי פיס בנתה את הקליניקה סביב רעיון פשוט: עור בריא נראה טוב
              יותר כשהטיפול בו מדויק, עקבי ולא תוקפני. כל לקוחה מקבלת אבחון,
              הסבר ותוכנית שמכבדת את מצב העור ואת הקצב האישי שלה.
            </p>
            <p>
              במקום לבחור טיפול לפי שם פופולרי, בוחנים מה העור צריך בפועל:
              מיצוק, חידוש, הרגעה, עבודה על גוון, או שינוי שגרת הבית.
            </p>
          </div>
          <div className="mt-7">
            <ButtonLink href={site.whatsapp} external>
              שיחת התאמה קצרה
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="bg-white/60 py-12 md:py-16">
        <div className="container-page grid gap-4 md:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <article className="rounded-lg bg-porcelain p-5 shadow-line" key={item.title}>
                <Icon aria-hidden className="h-6 w-6 text-olive" />
                <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
