import { MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/lib/content";

export function ContactPanel() {
  return (
    <section className="bg-ivory/60 py-14 md:py-24" id="contact">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span aria-hidden className="block h-px w-6 shrink-0 bg-clay/50" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-clay">
              יצירת קשר
            </p>
          </div>
          <h2 className="text-[1.75rem] font-bold leading-tight text-ink md:text-[2.25rem]">
            התחלה טובה היא שיחה קצרה ואבחון מדויק.
          </h2>
          <p className="mt-5 text-base leading-[1.85] text-ink/58">
            אפשר לשלוח הודעה בוואטסאפ, להתקשר, או למלא את הטופס. נחזור עם
            שאלות קצרות כדי להבין מה העור צריך לפני שמציעים טיפול.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              className="focus-ring flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-5 shadow-card transition duration-200 hover:shadow-soft"
              href={site.whatsapp}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linen text-clay">
                <MessageCircle className="h-4 w-4" aria-hidden />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-ink">וואטסאפ</p>
                <p className="mt-0.5 text-xs text-ink/50">שליחת הודעה לתיאום</p>
              </div>
            </a>
            <a
              className="focus-ring flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-5 shadow-card transition duration-200 hover:shadow-soft"
              href={site.phoneHref}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linen text-clay">
                <Phone className="h-4 w-4" aria-hidden />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-ink">טלפון</p>
                <p className="mt-0.5 text-xs text-ink/50">{site.phone}</p>
              </div>
            </a>
          </div>
        </div>

        <form
          className="rounded-2xl border border-ink/8 bg-white p-7 shadow-card"
          action={`mailto:${site.email}`}
          encType="text/plain"
          method="post"
          name="contact"
        >
          <p className="mb-6 text-[13px] font-semibold text-ink/50">
            מלאי את הפרטים ונחזור אליך
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-[13px] font-semibold text-ink">
              שם מלא
              <input
                className="focus-ring min-h-12 rounded-xl border border-ink/10 bg-porcelain px-4 text-sm font-medium text-ink transition placeholder:text-ink/28 focus:border-clay/40 focus:bg-white"
                name="name"
                placeholder="שמך המלא"
                required
                type="text"
                autoComplete="name"
              />
            </label>
            <label className="grid gap-2 text-[13px] font-semibold text-ink">
              טלפון
              <input
                className="focus-ring min-h-12 rounded-xl border border-ink/10 bg-porcelain px-4 text-sm font-medium text-ink transition placeholder:text-ink/28 focus:border-clay/40 focus:bg-white"
                name="phone"
                placeholder="מספר הטלפון שלך"
                required
                type="tel"
                autoComplete="tel"
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-[13px] font-semibold text-ink">
            במה תרצי לטפל?
            <textarea
              className="focus-ring min-h-28 rounded-xl border border-ink/10 bg-porcelain px-4 py-3 text-sm font-medium text-ink leading-[1.85] transition placeholder:text-ink/28 focus:border-clay/40 focus:bg-white"
              name="message"
              placeholder="תיאור קצר של מצב העור, מה מפריע לך, מה מעניין אותך..."
              required
            />
          </label>
          <div className="mt-6">
            <ButtonLink href={site.whatsapp} external>
              שליחה בוואטסאפ
            </ButtonLink>
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-ink/35">
            לחצי על הכפתור כדי לפתוח שיחת וואטסאפ עם הפרטים, או שלחי ישירות
            הודעה חופשית.
          </p>
        </form>
      </div>
    </section>
  );
}
