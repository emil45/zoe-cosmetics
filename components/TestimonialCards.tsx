import { testimonials } from "@/lib/content";

export function TestimonialCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((item) => (
        <figure
          className="relative overflow-hidden rounded-2xl border border-ink/8 bg-white p-7 shadow-card"
          key={`${item.name}-${item.area}`}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-2 right-5 select-none font-serif text-[6rem] leading-none text-blush/18"
          >
            &#8220;
          </span>
          <blockquote className="relative mt-1 text-[15px] leading-[1.9] text-ink/70">
            {item.quote}
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/6 pt-5">
            <div
              aria-hidden
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linen text-sm font-bold text-clay"
            >
              {item.name[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{item.name}</p>
              <p className="text-xs text-ink/48">{item.area}</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
