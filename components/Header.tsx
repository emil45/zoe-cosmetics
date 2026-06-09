import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { navigation, site } from "@/lib/content";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/20 bg-white/20 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link className="focus-ring flex flex-col leading-none" href="/">
          <span className="text-[24px] font-bold tracking-wide text-ink">
            {site.cosmetician}
          </span>
          <span className="mt-0.5 text-[16px] font-medium tracking-widest uppercase text-clay/80">
            Skin Specialist
          </span>
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden items-center gap-0.5 lg:flex">
          {navigation.map((item) => (
            <Link
              className="focus-ring rounded-full px-4 py-2 text-[13px] font-medium text-ink/65 transition duration-150 hover:bg-white hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="focus-ring hidden min-h-10 items-center gap-2 rounded-full bg-[#b88d66] px-5 py-2 text-[13px] font-semibold tracking-wide text-porcelain transition duration-200 hover:bg-[#b88d66]/90 sm:inline-flex"
            href={site.whatsapp}
          >
            תיאום בוואטסאפ
            <MessageCircle aria-hidden className="h-3.5 w-3.5 shrink-0" />
          </a>
          <MobileMenu items={navigation} />
        </div>
      </div>
    </header>
  );
}
