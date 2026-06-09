import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";

export function TestimonialCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((item) => (
        <figure
          className="rounded-lg border border-ink/10 bg-white/82 p-5 shadow-line"
          key={`${item.name}-${item.area}`}
        >
          <div className="flex gap-1 text-blush" aria-label="דירוג 5 מתוך 5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star aria-hidden className="h-4 w-4 fill-current" key={index} />
            ))}
          </div>
          <blockquote className="mt-5 text-base leading-8 text-ink/74">
            &quot;{item.quote}&quot;
          </blockquote>
          <figcaption className="mt-5 text-sm font-bold text-ink">
            {item.name}
            <span className="font-medium text-ink/48">, {item.area}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
