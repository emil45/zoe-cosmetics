"use client";

import { useState } from "react";
import { reviewVideos, type ReviewVideoEmbed } from "@/lib/content";

function VideoCard({ item }: { item: ReviewVideoEmbed }) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-ink/8 shadow-soft">
      <iframe
        src={item.embedUrl}
        title={item.label}
        className="h-full w-full"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
      {!active && (
        <button
          onClick={() => setActive(true)}
          aria-label={`הפעל: ${item.label}`}
          className="absolute inset-0"
        />
      )}
    </div>
  );
}

export function VideoReviewGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {reviewVideos.map((item, i) => (
        <VideoCard key={i} item={item} />
      ))}
    </div>
  );
}
