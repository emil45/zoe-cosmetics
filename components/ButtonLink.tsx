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
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-200";
  const styles = {
    primary: "bg-[#b88d66] text-porcelain hover:bg-[#b88d66]/90 shadow-sm",
    secondary:
      "border border-ink/12 bg-white text-ink hover:border-clay/40 hover:bg-ivory",
    plain: "text-clay hover:text-ink"
  };

  const isWhatsApp = href === site.whatsapp || href?.startsWith("https://wa.me");
  const content = (
    <>
      {children}
      {isWhatsApp ? (
        <MessageCircle aria-hidden className="h-4 w-4 shrink-0" />
      ) : (
        <ArrowUpLeft aria-hidden className="h-4 w-4 shrink-0" />
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
