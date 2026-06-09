import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/content";

export function StickyActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-porcelain/94 px-3 py-2 shadow-soft backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          className="focus-ring flex min-h-12 flex-col items-center justify-center gap-1 rounded-md bg-ink px-2 text-[12px] font-semibold text-porcelain"
          href={site.whatsapp}
        >
          <MessageCircle aria-hidden className="h-4 w-4" />
          וואטסאפ
        </a>
        <a
          className="focus-ring flex min-h-12 flex-col items-center justify-center gap-1 rounded-md border border-ink/10 bg-white px-2 text-[12px] font-semibold text-ink"
          href={site.phoneHref}
        >
          <Phone aria-hidden className="h-4 w-4" />
          התקשרי
        </a>
        <a
          className="focus-ring flex min-h-12 flex-col items-center justify-center gap-1 rounded-md border border-ink/10 bg-white px-2 text-[12px] font-semibold text-ink"
          href="/contact"
        >
          <CalendarCheck aria-hidden className="h-4 w-4" />
          תיאום
        </a>
      </div>
    </div>
  );
}
