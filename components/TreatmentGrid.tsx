import Link from "next/link";
import { treatments } from "@/lib/content";

export function TreatmentGrid({ limit }: { limit?: number }) {
  const items = limit ? treatments.slice(0, limit) : treatments;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((treatment) => {
        const Icon = treatment.icon;
        return (
          <article
            className="rounded-lg border border-ink/10 bg-white/82 p-5 shadow-line transition hover:-translate-y-0.5 hover:shadow-soft"
            id={treatment.slug}
            key={treatment.slug}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/30 text-olive">
              <Icon aria-hidden className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-ink">{treatment.title}</h3>
            <p className="mt-3 text-sm leading-7 text-ink/67">{treatment.short}</p>
            <p className="mt-3 text-sm leading-7 text-ink/58">{treatment.details}</p>
            <Link
              className="focus-ring mt-5 inline-flex text-sm font-bold text-olive hover:text-ink"
              href={`/treatments#${treatment.slug}`}
            >
              קראי על הטיפול
            </Link>
          </article>
        );
      })}
    </div>
  );
}
