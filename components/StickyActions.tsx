import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/content";

export function StickyActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/8 bg-porcelain/96 px-4 py-2.5 shadow-soft backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-sm grid-cols-3 gap-2">
        <a
          className="focus-ring flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl bg-[#b88d66] px-2 text-[11px] font-semibold tracking-wide text-porcelain transition hover:bg-[#b88d66]/90"
          href={site.whatsapp}
        >
          <MessageCircle aria-hidden className="h-[18px] w-[18px]" />
          <span>וואטסאפ</span>
        </a>
        <a
          className="focus-ring flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl border border-ink/10 bg-white px-2 text-[11px] font-semibold tracking-wide text-ink transition hover:bg-ivory"
          href={site.phoneHref}
        >
          <Phone aria-hidden className="h-[18px] w-[18px]" />
          <span>התקשרי</span>
        </a>
        <a
          className="focus-ring flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl border border-ink/10 bg-white px-2 text-[11px] font-semibold tracking-wide text-ink transition hover:bg-ivory"
          href="/contact"
        >
          <CalendarCheck aria-hidden className="h-[18px] w-[18px]" />
          <span>תיאום</span>
        </a>
      </div>
    </div>
  );
}
