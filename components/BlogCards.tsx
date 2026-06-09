import Link from "next/link";
import { posts } from "@/lib/content";

export function BlogCards({ limit }: { limit?: number }) {
  const items = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((post) => (
        <article
          className="group rounded-2xl border border-ink/8 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
          key={post.slug}
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-clay">
            {post.category}
          </p>
          <h3 className="mt-3 text-[17px] font-bold leading-snug text-ink">
            <Link
              className="focus-ring transition hover:text-clay"
              href={`/blog/${post.slug}`}
            >
              {post.title}
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-[1.85] text-ink/58">{post.excerpt}</p>
          <div className="mt-6 flex items-center justify-between text-[11px] font-medium text-ink/38">
            <time dateTime={post.date}>
              {new Intl.DateTimeFormat("he-IL", {
                day: "numeric",
                month: "long",
                year: "numeric"
              }).format(new Date(post.date))}
            </time>
            <span>{post.readingTime}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
