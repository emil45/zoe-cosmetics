import Image from "next/image";
import Link from "next/link";
import { BlogCards } from "@/components/BlogCards";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactPanel } from "@/components/ContactPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCards } from "@/components/TestimonialCards";
import { TreatmentGrid } from "@/components/TreatmentGrid";
import { results, series, site, stats, trustItems } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="container-page grid min-h-[calc(100svh-64px)] items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
        <div className="order-2 animate-fade-up md:order-1">
          <div className="mb-6 flex items-center gap-3">
            <span aria-hidden className="block h-px w-8 shrink-0 bg-clay/60" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-clay">
              קליניקה קוסמטית מתקדמת בישראל
            </p>
          </div>

          <h1 className="max-w-[560px] text-[2.6rem] font-bold leading-[1.1] text-ink md:text-[3.4rem]">
            טיפולי עור מדויקים לנשים שרוצות תוצאה נקייה, טבעית ובטוחה.
          </h1>

          <p className="mt-6 max-w-[480px] text-[15px] leading-[1.9] text-ink/58">
            אבחון אישי, טכנולוגיות HIFU ו-RF, וטיפולי פנים שנבנים מתוך הבנה של
            העור שלך. בלי לחץ, בלי הבטחות ריקות.
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
              src="/assets/hero.png"
            />
          </div>
          <div className="absolute bottom-6 right-6 max-w-[220px] rounded-2xl bg-white/95 p-4 shadow-soft backdrop-blur">
            <p className="text-[13px] font-bold text-ink">אבחון לפני החלטה</p>
            <p className="mt-1.5 text-[12px] leading-[1.7] text-ink/55">
              כל טיפול מתחיל בהבנת מצב העור, לא בבחירת מכשיר.
            </p>
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
              text: "בשיחה ראשונה מבינים יחד מה מצב העור, מה הייסטוריה הטיפולית, מה רצית לשנות, ומה ריאלי. בלי למהר, בלי לחץ."
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
          <TreatmentGrid data={series} limit={6} />
          <div className="mt-8">
            <ButtonLink href="/treatments" variant="secondary">
              לכל הטיפולים
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ─── Results (dark) ───────────────────────────────────────── */}
      <section className="bg-ink py-14 text-porcelain md:py-24">
        <div className="container-page grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden className="block h-px w-6 shrink-0 bg-sage/40" />
              <p className="text-[11px] font-semibold uppercase tracking-widest text-sage/70">
                תוצאות
              </p>
            </div>
            <h2 className="text-[1.75rem] font-bold leading-tight md:text-[2.25rem]">
              תהליך מכבד, תוצאות שנראות כמו את ביום טוב יותר.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.9] text-porcelain/50">
              הצגת תוצאות נעשית בצניעות ובאישור הלקוחה. המטרה היא להבין מה
              אפשר להשיג בפועל, בלי דרמה ובלי עריכה שמטשטשת את המציאות.
            </p>
          </div>
          <div className="grid gap-3">
            {results.map((item, i) => (
              <div
                className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/4 p-5"
                key={item}
              >
                <span
                  aria-hidden
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-sage/25 text-[10px] font-bold text-sage/80"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-[1.9] text-porcelain/70">{item}</p>
              </div>
            ))}
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
        <TestimonialCards />
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
              alt="חדר טיפול קוסמטי אלגנטי ונקי"
              className="object-cover"
              fill
              sizes="(min-width: 768px) 44vw, 100vw"
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=82"
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
