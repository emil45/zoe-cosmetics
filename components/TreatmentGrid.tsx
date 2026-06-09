import Link from "next/link";
import type { TreatmentItem } from "@/lib/content";

type Props = {
  data: TreatmentItem[];
  limit?: number;
};

export function TreatmentGrid({ data, limit }: Props) {
  const items = limit ? data.slice(0, limit) : data;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          className="group relative overflow-hidden rounded-2xl border border-ink/8 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/14 hover:shadow-soft"
          id={item.slug}
          key={item.slug}
        >
          <div className="mb-6 h-px w-8 bg-clay/50 transition-all duration-500 group-hover:w-14 group-hover:bg-clay/70" />
          <h3 className="text-lg font-bold leading-snug text-ink">{item.title}</h3>
          <p className="mt-3 text-sm leading-[1.85] text-ink/65">{item.short}</p>
          <p className="mt-2 text-[13px] leading-[1.85] text-ink/45">{item.details}</p>
          <Link
            className="focus-ring mt-6 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-clay transition duration-200 hover:text-ink"
            href={`/treatments#${item.slug}`}
          >
            קראי עוד
          </Link>
        </article>
      ))}
    </div>
  );
}
