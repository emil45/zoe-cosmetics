import Image from "next/image";
import Link from "next/link";
import { BlogCards } from "@/components/BlogCards";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactPanel } from "@/components/ContactPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialProofGallery } from "@/components/SocialProofGallery";
import { TreatmentGrid } from "@/components/TreatmentGrid";
import { series, site, stats, trustItems } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  description: site.description,
  path: "/",
  ogTitle: `${site.cosmetician} | קוסמטיקאית באשדוד וטיפולי עור מתקדמים`
});

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="container-page grid min-h-svh items-center gap-10 pb-12 pt-28 md:grid-cols-[1.05fr_0.95fr] md:pb-16 md:pt-32">
        <div className="order-2 animate-fade-up md:order-1">
          <div className="mb-6 flex items-center gap-3">
            <span aria-hidden className="block h-px w-8 shrink-0 bg-clay/60" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-clay">
              קליניקה קוסמטית מתקדמת באשדוד
            </p>
          </div>

          <h1 className="max-w-[560px] text-[2.6rem] font-bold leading-[1.1] text-ink md:text-[3.4rem]">
            עור בריא יותר מתחיל באבחון מדויק.
          </h1>

          <p className="mt-6 max-w-[480px] text-[15px] leading-[1.9] text-ink/58">
            אבחון באמצעות טכנולוגיה מתקדמת, ניקוי פנים א-טראומטי, טכנולוגית HIFU (SMAS lifting), RF, RFF, Ultrasound, טיפולי פנים שנבנים מתוך הבנה של העור שלך.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.whatsapp} external>
              תיאום בוואטסאפ
            </ButtonLink>
            <ButtonLink href="/treatments" variant="secondary">
              צפייה בטיפולים
            </ButtonLink>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/8 pt-8">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-[1.75rem] font-bold tracking-tight text-ink">
                  {item.value}
                </p>
                <p className="mt-1.5 text-[11px] leading-[1.6] text-ink/45">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 animate-fade-up-delay-1 md:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-linen shadow-soft">
            <Image
              alt="קליניקה קוסמטית נקייה ומקצועית לטיפולי עור"
              className="object-cover"
              fill
              priority
              sizes="(min-width: 768px) 46vw, 100vw"
              src="/assets/hero.jpg"
            />
          </div>
        </div>
      </section>

      {/* ─── Trust pillars ────────────────────────────────────────── */}
      <section className="bg-ivory/50 py-14 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="אמון ומקצועיות"
            title="את מרגישה את ההבדל כשהטיפול מתחיל באבחון, לא במכירה."
            text="החוויה בקליניקה בנויה סביב שקט, שקיפות ומקצועיות. כל המלצה צריכה להיות ברורה, רלוונטית ואחראית."
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  className="rounded-2xl border border-ink/8 bg-white p-6 shadow-card"
                  key={item.title}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linen text-clay">
                    <Icon aria-hidden className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-[15px] font-bold text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-[1.85] text-ink/55">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Process / How it works ───────────────────────────────── */}
      <section className="container-page py-14 md:py-20">
        <SectionHeading
          eyebrow="איך זה עובד"
          title="תהליך ברור שמתחיל בשיחה, לא בטיפול."
          text="כל ביקור בקליניקה בנוי להקנות ידע, ביטחון ומסלול ברור לפני כל החלטה."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "שיחה ואבחון ראשוני",
              text: "בשיחה ראשונה מבינים יחד מה מצב העור, מה הייסטוריה הטיפולית, מה רצית לשנות, ומה ריאלי."
            },
            {
              n: "02",
              title: "תוכנית טיפול מדויקת",
              text: "בהתאם לאבחון נבנית תוכנית: אילו טיפולים, באיזו תדירות, ומה תדעי לצפות בכל שלב. הכל ברור לפני שמחליטים."
            },
            {
              n: "03",
              title: "ליווי ומעקב לאורך זמן",
              text: "המסלול ממשיך עם עדכון שגרת הבית, מעקב אחרי תגובת העור, ושינוי הגישה לפי הצורך."
            }
          ].map((step) => (
            <div className="relative" key={step.n}>
              <p
                aria-hidden
                className="select-none text-[4.5rem] font-bold leading-none tracking-tighter text-ink/6"
              >
                {step.n}
              </p>
              <div className="-mt-2">
                <h3 className="text-[17px] font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-[1.9] text-ink/55">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Treatments ───────────────────────────────────────────── */}
      <section className="bg-ivory/50 py-14 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="טיפולים"
            title="פתרונות מתקדמים שמותאמים לעור, למטרה ולקצב שלך."
            text="מיצוק, חידוש, פיגמנטציה, טיפולי פנים ותוכניות אישיות בגישה שמכבדת את העור."
          />
          <TreatmentGrid data={series} limit={6} readMoreHref="/treatments" />
          <div className="mt-8">
            <ButtonLink href="/treatments" variant="secondary">
              לכל הטיפולים
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────── */}
      <section className="container-page py-14 md:py-20">
        <SectionHeading
          eyebrow="לקוחות מספרות"
          title="מילים פשוטות, אמון אמיתי."
          text="המלצות שמדברות על חוויה, הבנה ותהליך מקצועי, לא על קסמים."
        />
        <SocialProofGallery limit={4} />
        <Link
          className="focus-ring mt-8 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-clay transition hover:text-ink"
          href="/testimonials"
        >
          לכל ההמלצות
        </Link>
      </section>

      {/* ─── About teaser ─────────────────────────────────────────── */}
      <section className="bg-ivory/50 py-14 md:py-20">
        <div className="container-page grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-linen shadow-soft">
            <Image
              alt="מוצרי טיפוח מקצועיים בקליניקת זואי פייסחוב"
              className="object-cover"
              fill
              sizes="(min-width: 768px) 44vw, 100vw"
              src="/assets/beauty_products.jpg"
            />
          </div>
          <div className="self-center">
            <SectionHeading
              eyebrow="אודות"
              title="מקצועיות רגועה, עין אסתטית וגישה שלא ממהרת."
              text="זואי פיס מלווה נשים בתהליכי עור מתקדמים מתוך שילוב של ידע טכנולוגי, אבחון קפדני ותקשורת בגובה העיניים."
            />
            <ButtonLink href="/about" variant="secondary">
              להכיר את זואי
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ─── Blog ─────────────────────────────────────────────────── */}
      <section className="container-page py-14 md:py-20">
        <SectionHeading
          eyebrow="בלוג"
          title="ידע שמאפשר לבחור טיפול בשקט."
          text="מאמרים קצרים, ברורים ושימושיים על טיפולי עור, טכנולוגיות ושגרת טיפוח בישראל."
        />
        <BlogCards limit={3} />
        <div className="mt-8">
          <ButtonLink href="/blog" variant="secondary">
            לכל המאמרים
          </ButtonLink>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
