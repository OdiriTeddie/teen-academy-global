import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Video } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { SiteHeader } from "@/components/site-header";
import { TrainingLibrary } from "@/components/training-library";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Trainings | Teens Academy Global",
  description: "Practical teaching, training sessions, and career guidance for young people.",
};

const principles = [
  ["01", "Practical first", "Skills you can use this week, not theory you’ll forget."],
  ["02", "Taught by practitioners", "Mentors and speakers working in the fields they teach."],
  ["03", "Rooted in purpose", "Excellence that serves something bigger than ourselves."],
];

const footerColumns = [
  ["Explore", ["About", "Mentors", "Trainings", "Conferences", "Testimonials", "Contact"]],
  ["Programmes", ["Boys Mentoring Hub", "Girls Mentorship Hub", "Apply now"]],
  ["Get involved", ["Become a mentor", "Volunteer", "Partner with TAG", "Donate"]],
  ["Connect", ["Instagram", "YouTube", "WhatsApp Channel"]],
];

export default function TrainingPage() {
  return (
    <main className="bg-tag-cream text-tag-text">
      <SiteHeader active="training" />

      <section className="relative overflow-hidden px-5 py-12 lg:px-8 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-12 top-10 font-heading text-[13rem] font-bold leading-none text-transparent [-webkit-text-stroke:1px_var(--color-tag-line)]">GROW</div>
        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-xs text-tag-text-muted"><Link href="/">Home</Link><span className="mx-2">/</span><strong className="text-tag-midnight">Teaching &amp; Training</strong></nav>
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.4fr_.6fr]">
            <div>
              <h1 className="max-w-4xl text-[clamp(3.4rem,7vw,6.7rem)] font-bold leading-[.88] tracking-[-.055em]">Knowledge that helps young people move forward</h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-tag-text-body">Practical teaching from people who&apos;ve walked the road: careers, technology, money, leadership and faith. Free to watch, built to be used.</p>
            </div>
            <aside className="rounded-2xl bg-tag-midnight p-7 text-tag-cream shadow-elev-card">
              <div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-lg bg-red-600"><Video aria-hidden="true" className="size-6" /></span><div><p className="font-bold">TAG on YouTube</p><p className="text-xs text-tag-text-on-dark-muted">@channel handle</p></div></div>
              <p className="mt-5 text-sm leading-6 text-tag-text-on-dark-body">New sessions, conference talks and short lessons every fortnight.</p>
              <Link className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-tag-gold" href="#library">Visit Our YouTube Channel <ArrowRight aria-hidden="true" className="size-4" /></Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-tag-line bg-white px-5 py-9 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {principles.map(([number, title, copy]) => <article className="grid grid-cols-[auto_1fr] gap-4" key={number}><span className="text-3xl font-bold text-tag-gold">{number}</span><div><h2 className="font-bold">{title}</h2><p className="mt-1 text-sm leading-5 text-tag-text-muted">{copy}</p></div></article>)}
        </div>
      </section>

      <div id="library"><TrainingLibrary /></div>

      <section className="px-5 pb-5 lg:px-8 lg:pb-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-2xl bg-tag-midnight px-7 py-12 text-tag-cream shadow-elev-card sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div><h2 className="text-4xl font-bold tracking-[-.035em] sm:text-5xl">Learn with us every week.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-tag-text-on-dark-body">Subscribe on YouTube to catch every new session and conference talk as it drops.</p></div>
          <Link className={buttonVariants({ variant: "accent" })} href="#library"><Video aria-hidden="true" />Visit Our YouTube Channel</Link>
        </div>
      </section>

      <footer className="bg-tag-midnight px-5 pb-8 pt-14 text-tag-cream lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
            <div><BrandLogo placement="footer" /><p className="mt-4 max-w-xs text-sm leading-6 text-tag-text-on-dark-body">Helping teenagers and young adults discover who they are, realise what is possible, and gain the guidance and opportunities to become who they were created to be.</p></div>
            {footerColumns.map(([title, links]) => <div key={title as string}><p className="text-xs font-bold uppercase tracking-[.12em] text-tag-gold">{title}</p><div className="mt-4 grid gap-3">{(links as string[]).map((label) => <Link className="text-sm text-tag-text-on-dark-body hover:text-white" href={label === "Boys Mentoring Hub" ? "/programmes/boys-mentoring-hub" : label === "Apply now" ? "/apply" : "/contact"} key={label}>{label}</Link>)}</div></div>)}
          </div>
          <div className="mt-12 flex flex-col gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-xs text-tag-text-on-dark-body sm:flex-row sm:items-center sm:justify-between"><span className="flex items-center gap-2"><ShieldCheck aria-hidden="true" className="size-4 text-tag-gold" />Safeguarding comes first. Every mentor is vetted and trained before working with young people.</span><Link className="font-bold text-tag-gold" href="/contact">Read our safeguarding approach <ArrowRight aria-hidden="true" className="ml-1 inline size-3.5" /></Link></div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-tag-text-on-dark-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Teens Academy Global. All rights reserved.</p><div className="flex gap-5"><Link href="#">Privacy Policy</Link><Link href="#">Terms</Link><Link href="#">Safeguarding Policy</Link></div></div>
        </div>
      </footer>
    </main>
  );
}
