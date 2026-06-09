"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
type NavItem = { label: string; href: string };

type Props = {
  items: NavItem[];
};

export function MobileMenu({ items }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        aria-expanded={open}
        aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
        className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-[min(88vw,300px)] overflow-hidden rounded-2xl border border-ink/8 bg-white py-2 shadow-soft">
          {items.map((item) => (
            <Link
              className="focus-ring block px-5 py-3 text-[15px] font-medium text-ink/80 transition hover:bg-ivory hover:text-ink"
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
