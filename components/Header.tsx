import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { navigation, site } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-porcelain/88 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link className="focus-ring flex flex-col leading-none" href="/">
          <span className="text-base font-bold tracking-normal text-ink">
            {site.cosmetician}
          </span>
          <span className="mt-1 text-[11px] font-medium text-clay">
            קוסמטיקה מתקדמת
          </span>
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-ink/78 transition hover:bg-white hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="focus-ring hidden min-h-11 items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-porcelain transition hover:bg-olive sm:inline-flex"
            href={site.whatsapp}
          >
            תיאום בוואטסאפ
            <MessageCircle aria-hidden className="h-4 w-4" />
          </a>
          <details className="group relative lg:hidden">
            <summary className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-line [&::-webkit-details-marker]:hidden">
              <Menu aria-label="פתיחת תפריט" className="h-5 w-5" />
            </summary>
            <div className="absolute left-0 mt-3 w-[min(86vw,320px)] rounded-lg border border-ink/10 bg-white p-2 shadow-soft">
              {navigation.map((item) => (
                <Link
                  className="focus-ring block rounded-md px-4 py-3 text-base font-medium text-ink hover:bg-ivory"
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
