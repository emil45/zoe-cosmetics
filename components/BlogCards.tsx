import Link from "next/link";
import { posts } from "@/lib/content";

export function BlogCards({ limit }: { limit?: number }) {
  const items = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((post) => (
        <article
          className="rounded-lg border border-ink/10 bg-white/82 p-5 shadow-line transition hover:-translate-y-0.5 hover:shadow-soft"
          key={post.slug}
        >
          <p className="text-sm font-bold text-olive">{post.category}</p>
          <h3 className="mt-4 text-xl font-bold leading-8 text-ink">
            <Link className="focus-ring hover:text-olive" href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-7 text-ink/64">{post.excerpt}</p>
          <div className="mt-5 flex items-center justify-between text-xs font-medium text-ink/48">
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
