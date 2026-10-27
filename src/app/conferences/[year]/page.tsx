import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Play } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function generateStaticParams() {
  return [{ year: "2025" }, { year: "2024" }];
}

export async function generateMetadata({ params }: PageProps<"/conferences/[year]">): Promise<Metadata> {
  const { year } = await params;
  return { title: `TAG Conference ${year} | Teens Academy Global`, description: `Highlights, speakers, and recorded sessions from TAG Conference ${year}.` };
}

const speakers = [
  ["Dr. Eliana Boateng", "Keynote speaker", "0%", "old"],
  ["Marcus Chen", "Panelist", "33.333%", "old"],
  ["Dr. Sarah Jenkins", "Workshop leader", "66.666%", "old"],
  ["David Osei", "Closing speaker", "100%", "old"],
];

const sessions = [
  ["Opening keynote title", "Keynote", "48:10", "0%"],
  ["Faith, ambition and identity", "Panel", "35:32", "50%"],
  ["Breaking into tech", "Workshop", "39:04", "100%"],
  ["Money that grows", "Talk", "18:48", "0%"],
  ["Leading where you are", "Talk", "16:18", "50%"],
  ["Closing charge", "Closing", "28:05", "100%"],
];

export default async function ConferenceDetailPage({ params }: PageProps<"/conferences/[year]">) {
  const { year } = await params;
  const nextYear = Number(year) + 1;

  return (
    <main className="bg-tag-cream text-tag-text">
      <SiteHeader active="conferences" />

      <section className="relative overflow-hidden bg-tag-midnight px-5 py-10 text-tag-cream lg:px-8 lg:py-20">
        <div className="absolute inset-0 opacity-20"><Image alt="" className="object-cover" fill priority sizes="100vw" src="/images/tag-conference-stage.png" /></div><div className="absolute inset-0 bg-gradient-to-r from-tag-midnight via-tag-midnight/95 to-tag-royal/40" />
        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-xs text-tag-text-on-dark-muted"><Link href="/">Home</Link><span className="mx-2">/</span><Link href="/conferences">Conferences</Link><span className="mx-2">/</span><strong className="text-white">{year}</strong></nav>
          <Badge className="mt-12">Past event · sessions available</Badge>
          <h1 className="mt-7 max-w-3xl text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[.9] tracking-[-.055em]">TAG Conference <span className="text-tag-gold">{year}</span></h1>
          <p className="mt-6 text-xl font-bold">“{year === "2025" ? "Beyond Limits" : "Identity & Impact"}”</p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm text-tag-text-on-dark-body"><span className="flex items-center gap-2"><CalendarDays aria-hidden="true" className="size-4 text-tag-gold" />Date {year}</span><span className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-tag-gold" />Venue, City</span></div>
          <div className="mt-8 flex gap-3"><Link className={buttonVariants({ size: "sm", variant: "accent" })} href="#sessions"><Play aria-hidden="true" />Watch sessions</Link><Link className={buttonVariants({ size: "sm", variant: "outline-inverse" })} href="#gallery">View gallery</Link></div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.5fr_1fr]"><h2 className="text-4xl font-bold leading-none">About the conference</h2><div><p className="text-base leading-7 text-tag-text-body">TAG Conference {year} brought young people together for keynotes, panels, workshops, worship, networking and honest conversations about purpose and possibility.</p><p className="mt-5 text-base leading-7 text-tag-text-body">The day was designed to turn inspiration into practical next steps, supported by mentors and a community committed to young people&apos;s growth.</p><dl className="mt-8 grid grid-cols-3 border-t border-tag-line pt-6"><div><dt className="text-xs uppercase text-tag-text-muted">Attendees</dt><dd className="mt-2 text-2xl font-bold">500+</dd></div><div><dt className="text-xs uppercase text-tag-text-muted">Speakers</dt><dd className="mt-2 text-2xl font-bold">12</dd></div><div><dt className="text-xs uppercase text-tag-text-muted">Sessions</dt><dd className="mt-2 text-2xl font-bold">6</dd></div></dl></div></div></section>

      <section className="bg-white px-5 py-16 lg:px-8 lg:py-20"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-bold">Speakers</h2><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{speakers.map(([name, role, position, asset]) => <article key={name}><div className={`aspect-[4/5] rounded-xl bg-no-repeat ${asset === "old" ? "bg-[url('/images/tag-mentors.png')] bg-[length:400%_auto]" : "bg-[url('/images/tag-mentor-directory.png')] bg-[length:auto_100%]"}`} style={{ backgroundPosition: `${position} center` }} /><h3 className="mt-4 font-bold">{name}</h3><p className="mt-1 text-sm text-tag-text-muted">{role} · Organisation</p><Link className="mt-3 inline-flex text-xs font-bold text-tag-royal" href="#sessions">Session: Watch their session</Link></article>)}</div></div></section>

      <section className="px-5 py-16 lg:px-8 lg:py-20" id="sessions"><div className="mx-auto max-w-7xl"><div className="flex items-end justify-between gap-5"><h2 className="text-4xl font-bold">Sessions</h2><Link className="text-xs font-bold text-tag-royal" href="#">Full playlist on YouTube</Link></div><div className="mt-9 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{sessions.map(([title, type, duration, position]) => <article key={title}><div className="relative aspect-video overflow-hidden rounded-xl bg-[url('/images/tag-training-library.png')] bg-[length:300%_auto] bg-no-repeat" style={{ backgroundPosition: `${position} center` }}><Badge className="absolute left-3 top-3" variant="outline">{type}</Badge><span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-tag-gold text-tag-midnight"><Play aria-hidden="true" className="size-4 fill-current" /></span><span className="absolute bottom-3 right-3 rounded bg-tag-midnight px-2 py-1 text-[10px] text-white">{duration}</span></div><h3 className="mt-4 text-lg font-bold">{title}</h3><div className="mt-3 flex items-center justify-between"><p className="text-xs text-tag-text-muted">Speaker name</p><Link className={buttonVariants({ size: "xs", variant: "dark" })} href="#"><Play aria-hidden="true" />Watch session</Link></div></article>)}</div></div></section>

      <section className="bg-tag-midnight px-5 py-16 text-tag-cream lg:px-8 lg:py-20" id="gallery"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-bold">Gallery</h2><div className="mt-9 grid auto-rows-[170px] grid-cols-2 gap-3 md:grid-cols-4"><div className="relative col-span-2 row-span-2 overflow-hidden rounded-xl"><Image alt="Conference keynote moment" className="object-cover" fill sizes="(max-width:768px) 100vw, 50vw" src="/images/tag-conference-stage.png" /></div><div className="relative row-span-2 overflow-hidden rounded-xl"><Image alt="Mentoring and networking" className="object-cover" fill sizes="25vw" src="/images/tag-about-community.png" /></div><div className="relative overflow-hidden rounded-xl"><Image alt="Breakout workshop" className="object-cover" fill sizes="25vw" src="/images/tag-training-library.png" /></div><div className="relative overflow-hidden rounded-xl"><Image alt="Conference community" className="object-cover" fill sizes="25vw" src="/images/tag-hero.png" /></div></div><Link className="mt-7 inline-flex text-sm font-bold text-tag-gold" href="#">See more on Instagram</Link></div></section>

      <section className="px-5 py-16 lg:px-8 lg:py-20"><div className="mx-auto max-w-7xl"><div className="flex items-center justify-between gap-4"><h2 className="text-4xl font-bold">Key moments</h2><Badge variant="notice">Full event quotes from session recordings</Badge></div><div className="mt-9 grid gap-4 lg:grid-cols-[1.2fr_.8fr]"><blockquote className="rounded-2xl bg-tag-gold p-8 text-3xl font-bold leading-tight">“A powerful line from the keynote speaker.”<footer className="mt-6 text-xs font-semibold">Speaker name · Keynote</footer></blockquote><div className="grid gap-4"><blockquote className="rounded-xl bg-white p-6 text-lg font-semibold">“A memorable quote from a panel.”<footer className="mt-4 text-xs text-tag-text-muted">Speaker name · Panel</footer></blockquote><blockquote className="rounded-xl bg-tag-midnight p-6 text-lg font-semibold text-white">“A reflection from a young attendee.”<footer className="mt-4 text-xs text-tag-text-on-dark-muted">Name · Attendee</footer></blockquote></div></div></div></section>

      <section className="px-5 pb-5 lg:px-8 lg:pb-8"><div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-2xl bg-tag-royal p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.14em] text-tag-gold-soft">Next conference</p><h2 className="mt-3 text-4xl font-bold">TAG Conference {nextYear} · Date, City</h2></div><div className="flex gap-3"><Link className={buttonVariants({ size: "sm", variant: "accent" })} href="/contact">Register now</Link><Link className={buttonVariants({ size: "sm", variant: "outline-inverse" })} href="/conferences">Stay informed</Link></div></div></section>

      <SiteFooter />
    </main>
  );
}
