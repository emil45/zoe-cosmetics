import Link from "next/link";
import { navigation, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-porcelain">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-porcelain/72">
            טיפולי עור מתקדמים בגישה מדויקת, רגועה ואישית. האתר כולל מידע
            מקצועי אך אינו מחליף אבחון או ייעוץ פרטני.
          </p>
        </div>
        <nav aria-label="ניווט תחתון" className="grid gap-2">
          {navigation.map((item) => (
            <Link
              className="focus-ring w-fit text-sm text-porcelain/78 hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm leading-7 text-porcelain/78">
          <p>{site.phone}</p>
          <p>{site.email}</p>
          <p>{site.address}</p>
        </div>
      </div>
    </footer>
  );
}
