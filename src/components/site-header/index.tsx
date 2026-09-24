import Link from "next/link";

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
  return (
    <header
      className={`${overlay ? "absolute inset-x-0 top-0 z-20 border-white/15 bg-white/95 backdrop-blur" : "border-slate-200 bg-white"} border-b text-secondary`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link className="text-xl font-black text-primary" href="/">
          TAG
        </Link>
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
          className="rounded-md bg-tertiary px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-amber-400"
          href="/#programs"
        >
          Join a Programme
        </Link>
      </div>
    </header>
  );
}
