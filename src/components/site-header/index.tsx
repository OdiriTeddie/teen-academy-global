"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";

type NavigationKey =
  | "home"
  | "about"
  | "mentors"
  | "programs"
  | "training"
  | "conferences"
  | "contact";

type SiteHeaderProps = {
  active?: NavigationKey;
  overlay?: boolean;
};

const navigation: Array<{ href: string; key: NavigationKey; label: string }> = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about", label: "About" },
  { href: "/mentors", key: "mentors", label: "Mentors" },
  { href: "/#programs", key: "programs", label: "Programs" },
  { href: "/training", key: "training", label: "Training" },
  { href: "/conferences", key: "conferences", label: "Conferences" },
  { href: "/contact", key: "contact", label: "Contact" },
];

export function SiteHeader({ active, overlay = false }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuId = useId();

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header
      className={`${overlay ? "absolute inset-x-0 top-0 z-20 border-white/15 bg-white/95 backdrop-blur" : "relative z-20 border-slate-200 bg-white"} border-b text-secondary`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <BrandLogo />
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-xs font-semibold text-slate-600 lg:flex xl:gap-7 xl:text-sm"
        >
          {navigation.map((item) => (
            <Link
              className={active === item.key ? "text-primary" : undefined}
              href={item.href}
              key={item.key}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="hidden rounded-md bg-tertiary px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-amber-400 lg:block"
          href="/#programs"
        >
          Join a Programme
        </Link>
        <button
          aria-controls={mobileMenuId}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="grid size-10 place-items-center rounded-md border border-slate-200 bg-white text-secondary transition hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>

      <div
        className={`${isMenuOpen ? "grid" : "hidden"} absolute inset-x-0 top-full border-b border-slate-200 bg-white shadow-[0_18px_32px_rgba(15,23,42,0.12)] lg:hidden`}
        id={mobileMenuId}
      >
        <nav aria-label="Mobile navigation" className="mx-auto grid w-full max-w-7xl gap-1 px-5 py-4">
          {navigation.map((item) => (
            <Link
              aria-current={active === item.key ? "page" : undefined}
              className={`flex min-h-11 items-center border-l-2 px-4 text-sm font-semibold transition ${
                active === item.key
                  ? "border-primary bg-blue-50 text-primary"
                  : "border-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
              href={item.href}
              key={item.key}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="mt-3 flex min-h-12 items-center justify-center rounded-md bg-tertiary px-5 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
            href="/#programs"
            onClick={() => setIsMenuOpen(false)}
          >
            Join a Programme
          </Link>
        </nav>
      </div>
    </header>
  );
}
