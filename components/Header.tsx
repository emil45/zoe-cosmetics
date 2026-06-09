import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { navigation, site } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-porcelain/90 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link className="focus-ring flex flex-col leading-none" href="/">
          <span className="text-[15px] font-bold tracking-wide text-ink">
            {site.cosmetician}
          </span>
          <span className="mt-0.5 text-[10px] font-medium tracking-widest uppercase text-clay/80">
            קוסמטיקה מתקדמת
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
            className="focus-ring hidden min-h-10 items-center gap-2 rounded-full bg-ink px-5 py-2 text-[13px] font-semibold tracking-wide text-porcelain transition duration-200 hover:bg-ink/85 sm:inline-flex"
            href={site.whatsapp}
          >
            תיאום בוואטסאפ
            <MessageCircle aria-hidden className="h-3.5 w-3.5 shrink-0" />
          </a>
          <details className="group relative lg:hidden">
            <summary className="focus-ring flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-ink/10 bg-white text-ink [&::-webkit-details-marker]:hidden">
              <Menu aria-label="פתיחת תפריט" className="h-4.5 h-[18px] w-[18px]" />
            </summary>
            <div className="absolute left-0 mt-2 w-[min(88vw,300px)] overflow-hidden rounded-2xl border border-ink/8 bg-white py-2 shadow-soft">
              {navigation.map((item) => (
                <Link
                  className="focus-ring block px-5 py-3 text-[15px] font-medium text-ink/80 transition hover:bg-ivory hover:text-ink"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
