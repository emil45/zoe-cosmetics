import Link from "next/link";
import { ArrowUpLeft, MessageCircle } from "lucide-react";
import { site } from "@/lib/content";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "plain";
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false
}: ButtonLinkProps) {
  const base =
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition";
  const styles = {
    primary: "bg-ink text-porcelain shadow-soft hover:bg-olive",
    secondary:
      "border border-ink/15 bg-white/70 text-ink shadow-line hover:border-olive/40 hover:bg-white",
    plain: "text-ink hover:text-olive"
  };

  const content = (
    <>
      {children}
      {href === site.whatsapp ? (
        <MessageCircle aria-hidden className="h-4 w-4" />
      ) : (
        <ArrowUpLeft aria-hidden className="h-4 w-4" />
      )}
    </>
  );

  if (external) {
    return (
      <a className={`${base} ${styles[variant]}`} href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={`${base} ${styles[variant]}`} href={href}>
      {content}
    </Link>
  );
}
