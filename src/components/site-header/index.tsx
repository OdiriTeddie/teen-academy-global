"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavigationKey =
  | "home"
  | "about"
  | "mentors"
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
  { href: "/training", key: "training", label: "Trainings" },
  { href: "/conferences", key: "conferences", label: "Conferences" },
  { href: "/contact", key: "contact", label: "Contact" },
];

export function SiteHeader({ active, overlay = false }: SiteHeaderProps) {
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
          className={buttonVariants({ className: "hidden text-xs lg:inline-flex", variant: "accent" })}
          href="/#programs"
        >
          Join a Programme
        </Link>
        <Sheet>
          <SheetTrigger
            render={
              <Button
                aria-label="Open navigation menu"
                className="lg:hidden"
                size="icon-lg"
                type="button"
                variant="outline"
              />
            }
          >
            <Menu aria-hidden="true" size={21} />
          </SheetTrigger>
          <SheetContent className="w-[min(88vw,24rem)] bg-white" side="right">
            <SheetHeader className="border-b border-slate-200 pr-16">
              <SheetTitle className="font-black text-secondary">Explore TAG</SheetTitle>
              <SheetDescription>Navigate Teens Academy Global</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile navigation" className="grid gap-1 px-5 py-5">
              {navigation.map((item) => (
                <SheetClose
                  key={item.key}
                  nativeButton={false}
                  render={
                    <Link
                      aria-current={active === item.key ? "page" : undefined}
                      className={`flex min-h-11 items-center border-l-2 px-4 text-sm font-semibold transition ${
                        active === item.key
                          ? "border-primary bg-blue-50 text-primary"
                          : "border-transparent text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                      href={item.href}
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
              <SheetClose
                className="mt-3"
                nativeButton={false}
                render={
                  <Link
                    className={buttonVariants({ size: "xl", variant: "accent" })}
                    href="/#programs"
                  />
                }
              >
                Join a Programme
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
