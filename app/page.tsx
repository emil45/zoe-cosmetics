import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { BlogCards } from "@/components/BlogCards";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactPanel } from "@/components/ContactPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCards } from "@/components/TestimonialCards";
import { TreatmentGrid } from "@/components/TreatmentGrid";
import { results, site, stats, trustItems } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="container-page grid min-h-[calc(100vh-64px)] items-center gap-8 py-8 md:grid-cols-[1.02fr_0.98fr] md:py-14">
        <div>
          <p className="text-sm font-bold text-olive">קליניקה קוסמטית מתקדמת בישראל</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-[1.05] text-ink md:text-7xl">
            טיפולי עור מדויקים לנשים שרוצות תוצאה נקייה, טבעית ובטוחה.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">
            אבחון אישי, טכנולוגיות HIFU ו-RF, וטיפולי פנים שנבנים מתוך הבנה של
            העור שלך. בלי לחץ, בלי הבטחות ריקות, עם מקצועיות שמרגישים מהרגע
            הראשון.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.whatsapp} external>
              תיאום בוואטסאפ
            </ButtonLink>
            <ButtonLink href="/treatments" variant="secondary">
              צפייה בטיפולים
            </ButtonLink>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-y border-ink/10 py-5">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold text-ink">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-ink/54">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-linen shadow-soft">
            <Image
              alt="קליניקה קוסמטית נקייה ומקצועית לטיפולי עור"
              className="object-cover"
              fill
              priority
              sizes="(min-width: 768px) 48vw, 100vw"
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=82"
            />
          </div>
          <div className="absolute bottom-5 right-5 max-w-[240px] rounded-lg bg-white/92 p-4 shadow-soft backdrop-blur">
            <p className="text-sm font-bold text-ink">אבחון לפני החלטה</p>
            <p className="mt-2 text-xs leading-6 text-ink/62">
              כל טיפול מתחיל בהבנת מצב העור, לא בבחירת מכשיר.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white/50 py-12 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="אמון ומקצועיות"
            title="את מרגישה את ההבדל כשהטיפול מתחיל באבחון, לא במכירה."
            text="החוויה בקליניקה בנויה סביב שקט, שקיפות ומקצועיות. כל המלצה צריכה להיות ברורה, רלוונטית ואחראית."
          />
          <div className="grid gap-4 md:grid-cols-4">
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
        </div>
      </section>

      <section className="container-page py-12 md:py-20">
        <SectionHeading
          eyebrow="טיפולים"
          title="פתרונות מתקדמים שמותאמים לעור, למטרה ולקצב שלך."
          text="מיצוק, חידוש, פיגמנטציה, טיפולי פנים ותוכניות אישיות בגישה שמכבדת את העור."
        />
        <TreatmentGrid limit={6} />
      </section>

      <section className="bg-ink py-12 text-porcelain md:py-20">
        <div className="container-page grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold text-sage">תוצאות</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              תהליך מכבד, תוצאות שנראות כמו את ביום טוב יותר.
            </h2>
            <p className="mt-4 text-base leading-8 text-porcelain/68">
              הצגת תוצאות נעשית בצניעות ובאישור הלקוחה. המטרה היא להבין מה
              אפשר להשיג בפועל, בלי דרמה ובלי עריכה שמטשטשת את המציאות.
            </p>
          </div>
          <div className="grid gap-3">
            {results.map((item) => (
              <div
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/6 p-4"
                key={item}
              >
                <CheckCircle2 aria-hidden className="mt-1 h-5 w-5 shrink-0 text-sage" />
                <p className="text-sm leading-7 text-porcelain/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12 md:py-20">
        <SectionHeading
          eyebrow="לקוחות מספרות"
          title="מילים פשוטות, אמון אמיתי."
          text="המלצות שמדברות על חוויה, הבנה ותהליך מקצועי, לא על קסמים."
        />
        <TestimonialCards />
        <Link
          className="focus-ring mt-6 inline-flex text-sm font-bold text-olive hover:text-ink"
          href="/testimonials"
        >
          לכל ההמלצות
        </Link>
      </section>

      <section className="bg-white/58 py-12 md:py-20">
        <div className="container-page grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-linen shadow-soft">
            <Image
              alt="חדר טיפול קוסמטי אלגנטי ונקי"
              className="object-cover"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
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

      <section className="container-page py-12 md:py-20">
        <SectionHeading
          eyebrow="בלוג"
          title="ידע שמאפשר לבחור טיפול בשקט."
          text="מאמרים קצרים, ברורים ושימושיים על טיפולי עור, טכנולוגיות ושגרת טיפוח בישראל."
        />
        <BlogCards limit={3} />
      </section>

      <ContactPanel />
    </>
  );
}
