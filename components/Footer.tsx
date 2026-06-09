import Link from "next/link";
import { navigation, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-ink text-porcelain">
      <div className="container-page grid gap-10 pb-10 pt-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-[15px] font-bold tracking-wide">{site.cosmetician}</p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-porcelain/40">
            קוסמטיקה מתקדמת
          </p>
          <p className="mt-5 max-w-sm text-sm leading-[1.85] text-porcelain/55">
            טיפולי עור מתקדמים בגישה מדויקת, רגועה ואישית. האתר כולל מידע
            מקצועי אך אינו מחליף אבחון או ייעוץ פרטני.
          </p>
        </div>
        <nav aria-label="ניווט תחתון" className="grid content-start gap-2.5">
          {navigation.map((item) => (
            <Link
              className="focus-ring w-fit text-sm text-porcelain/60 transition hover:text-porcelain"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="grid content-start gap-2.5 text-sm text-porcelain/60">
          <a
            className="focus-ring w-fit transition hover:text-porcelain"
            href={site.whatsapp}
          >
            וואטסאפ
          </a>
          <a
            className="focus-ring w-fit transition hover:text-porcelain"
            href={site.phoneHref}
          >
            {site.phone}
          </a>
          <a
            className="focus-ring w-fit transition hover:text-porcelain"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          <p>{site.address}</p>
        </div>
      </div>
      <div className="container-page border-t border-white/8 py-5">
        <p className="text-[11px] text-porcelain/30">
          © {new Date().getFullYear()} {site.name}. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
