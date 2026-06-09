import { Send } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { contactCards, site } from "@/lib/content";

export function ContactPanel() {
  return (
    <section className="bg-ivory/70 py-12 md:py-20" id="contact">
      <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold text-olive">יצירת קשר</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-ink md:text-4xl">
            התחלה טובה היא שיחה קצרה ואבחון מדויק.
          </h2>
          <p className="mt-4 text-base leading-8 text-ink/66">
            אפשר לשלוח הודעה בוואטסאפ, להתקשר או להשאיר פרטים. נחזור עם שאלות
            קצרות כדי להבין מה העור צריך לפני שמציעים טיפול.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  className="focus-ring rounded-lg border border-ink/10 bg-white p-4 shadow-line transition hover:shadow-soft"
                  href={card.href}
                  key={card.label}
                >
                  <Icon aria-hidden className="h-5 w-5 text-olive" />
                  <p className="mt-3 text-sm font-bold text-ink">{card.label}</p>
                  <p className="mt-1 text-sm text-ink/58">{card.value}</p>
                </a>
              );
            })}
          </div>
        </div>

        <form
          className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft"
          action={`mailto:${site.email}`}
          encType="text/plain"
          method="post"
          name="contact"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-ink">
              שם מלא
              <input
                className="focus-ring min-h-12 rounded-md border border-ink/12 bg-porcelain px-4 text-base font-medium"
                name="name"
                required
                type="text"
                autoComplete="name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              טלפון
              <input
                className="focus-ring min-h-12 rounded-md border border-ink/12 bg-porcelain px-4 text-base font-medium"
                name="phone"
                required
                type="tel"
                autoComplete="tel"
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-ink">
            במה תרצי לטפל?
            <textarea
              className="focus-ring min-h-32 rounded-md border border-ink/12 bg-porcelain px-4 py-3 text-base font-medium leading-7"
              name="message"
              required
            />
          </label>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={site.whatsapp} external>
              שליחה בוואטסאפ
            </ButtonLink>
            <button
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-porcelain"
              type="submit"
            >
              שמירת פרטים
              <Send aria-hidden className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
