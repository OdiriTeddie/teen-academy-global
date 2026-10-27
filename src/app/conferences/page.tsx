import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Play } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Conferences | Teens Academy Global",
  description: "Ideas, conversations, and experiences that shape the futures of young people.",
};

const archive = [
  { year: "2025", theme: "Beyond Limits", copy: "A day of bold ideas, honest conversations, practical learning and memorable moments.", image: "stage" },
  { year: "2024", theme: "Identity & Impact", copy: "Young people, mentors and families explored purpose, confidence and pathways forward.", image: "community" },
];

export default function ConferencesPage() {
  return (
    <main className="bg-tag-cream text-tag-text">
      <SiteHeader active="conferences" />

      <section className="relative overflow-hidden bg-tag-midnight px-5 pb-20 pt-10 text-tag-cream lg:px-8 lg:pb-24">
        <div className="pointer-events-none absolute -right-40 top-36 size-[34rem] rounded-full border border-dashed border-tag-gold/35" />
        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-xs text-tag-text-on-dark-muted"><Link href="/">Home</Link><span className="mx-2">/</span><strong className="text-tag-cream">Conferences</strong></nav>
          <h1 className="mt-10 max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[.9] tracking-[-.055em]">Ideas, conversations &amp; experiences that shape futures</h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-tag-text-on-dark-body">Every year TAG brings young people face to face with leaders, ideas and each other. Here&apos;s what&apos;s next, and every year so far.</p>

          <article className="mt-14 grid overflow-hidden rounded-2xl bg-tag-gold text-tag-midnight shadow-elev-card lg:grid-cols-[1.06fr_.94fr]">
            <div className="relative min-h-72 lg:min-h-[420px]"><Image alt="TAG conference main stage" className="object-cover" fill priority sizes="(max-width:1024px) 100vw, 55vw" src="/images/tag-conference-stage.png" /><div className="absolute inset-0 bg-tag-royal/20" /><p className="absolute bottom-5 left-5 text-xs font-semibold text-white drop-shadow">Main stage, full hall, speaker silhouetted against warm lights</p></div>
            <div className="p-8 sm:p-12">
              <Badge>Upcoming · registration open</Badge>
              <h2 className="mt-6 text-5xl font-bold leading-[.92] tracking-[-.045em] sm:text-6xl">TAG Conference 2026</h2>
              <p className="mt-5 text-xl font-bold">“Conference theme”</p>
              <div className="mt-6 grid gap-3 text-sm font-semibold"><span className="flex items-center gap-2"><CalendarDays aria-hidden="true" className="size-4" />Day, Date Month 2026</span><span className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-4" />Venue, City</span></div>
              <div className="mt-8 flex flex-wrap gap-3"><Link className={buttonVariants({ size: "sm", variant: "dark" })} href="/contact">Register your place</Link><Link className={buttonVariants({ size: "sm", variant: "outline" })} href="/contact">Explore the programme</Link></div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between"><h2 className="text-4xl font-bold tracking-[-.035em] sm:text-5xl">The archive</h2><p className="text-xs text-tag-text-muted">Newest first</p></div>
          <div className="mt-10 grid gap-6">
            {archive.map((event) => <article className="grid overflow-hidden rounded-2xl border border-tag-line bg-white lg:grid-cols-[.95fr_1.05fr]" key={event.year}>
              <div className="relative min-h-64 overflow-hidden">
                <Image alt={`TAG Conference ${event.year}`} className="object-cover" fill sizes="(max-width:1024px) 100vw, 48vw" src={event.image === "stage" ? "/images/tag-conference-stage.png" : "/images/tag-about-community.png"} />
                <div className="absolute inset-0 bg-tag-midnight/30" /><strong className="absolute left-6 top-4 text-7xl font-bold text-white">{event.year}</strong><p className="absolute bottom-4 left-5 text-xs font-semibold text-white">Event photo from the TAG conference archive</p>
              </div>
              <div className="p-7 sm:p-10"><p className="text-xs font-semibold text-tag-text-muted">Date {event.year} · Venue, City</p><h3 className="mt-5 text-3xl font-bold">TAG Conference {event.year}</h3><p className="mt-3 font-semibold text-tag-royal">Theme: “{event.theme}”</p><p className="mt-5 max-w-xl text-sm leading-6 text-tag-text-body">{event.copy}</p><div className="mt-7 flex flex-wrap gap-3"><Link className={buttonVariants({ size: "sm" })} href={`/conferences/${event.year}`}>View conference</Link><Link className={buttonVariants({ size: "sm", variant: "outline" })} href={`/conferences/${event.year}`}><Play aria-hidden="true" />Watch sessions</Link></div></div>
            </article>)}
          </div>

          <aside className="mt-20 grid items-center gap-8 rounded-2xl bg-tag-royal p-8 text-white sm:p-12 lg:grid-cols-[1fr_1.1fr]">
            <div><h2 className="text-4xl font-bold leading-none">Be first to know about 2027.</h2><p className="mt-4 text-sm text-tag-text-on-royal">Speaker announcements, early registration and session replays, straight to your inbox.</p></div>
            <form className="flex flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="conference-updates">Email address</label><input className="h-[52px] flex-1 rounded-full bg-white px-5 text-sm text-tag-text outline-none focus:ring-4 focus:ring-tag-gold" id="conference-updates" placeholder="you@example.com" type="email" /><button className={buttonVariants({ variant: "accent" })} type="submit">Keep me posted <ArrowRight aria-hidden="true" /></button></form>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
