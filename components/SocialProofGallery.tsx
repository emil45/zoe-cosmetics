import Image from "next/image";
import { reviewScreenshots } from "@/lib/content";

export function SocialProofGallery({ limit }: { limit?: number } = {}) {
  const items = limit ? reviewScreenshots.slice(0, limit) : reviewScreenshots;

  if (items.length === 0) {
    return (
      <p className="py-10 text-center text-sm text-ink/40">
        תמונות ביקורות יתווספו בקרוב
      </p>
    );
  }

  return (
    <div
      className="columns-2 gap-4 md:columns-3"
      style={{ columnFill: "balance" }}
    >
      {items.map((item, i) => (
        <figure
          key={i}
          className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-soft"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={600}
            height={800}
            sizes="(max-width: 768px) 50vw, 33vw"
            className="block w-full object-cover"
          />
        </figure>
      ))}
    </div>
  );
}
