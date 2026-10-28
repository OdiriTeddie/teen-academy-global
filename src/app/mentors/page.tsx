import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MentorDirectory } from "@/components/mentor-directory";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Mentors | Teens Academy Global",
  description: "Meet TAG's vetted global network of mentors and industry leaders.",
};

const footerColumns = [
  ["Explore", ["About", "Mentors", "Training", "Conferences", "Testimonials", "Contact"]],
  ["Programmes", ["Boys Mentoring Hub", "Girls Mentorship Hub", "Apply now"]],
  ["Get involved", ["Become a mentor", "Volunteer", "Partner with TAG", "Donate"]],
  ["Connect", ["Instagram", "YouTube", "WhatsApp Channel"]],
];

export default function MentorsPage() {
  return (
    <main className="bg-tag-cream text-tag-text">
      <SiteHeader active="mentors" />

      <section className="relative overflow-hidden bg-tag-midnight px-5 pb-32 pt-10 text-tag-cream lg:px-8 lg:pb-40">
        <div className="pointer-events-none absolute right-[6%] top-16 hidden h-64 w-[34%] lg:block">
          <span className="absolute left-0 top-8 size-2 rounded-full bg-tag-gold" />
          <span className="absolute left-[44%] top-32 size-2 rounded-full bg-tag-gold" />
          <span className="absolute right-[20%] top-2 size-2 rounded-full bg-tag-gold" />
          <span className="absolute bottom-3 right-0 size-2 rounded-full bg-tag-gold" />
          <i className="absolute left-1 top-10 h-px w-[47%] origin-left rotate-[34deg] bg-tag-gold/50" />
          <i className="absolute left-[44%] top-32 h-px w-[48%] origin-left -rotate-[38deg] bg-tag-gold/50" />
          <i className="absolute right-[19%] top-4 h-px w-[68%] origin-right rotate-[58deg] bg-tag-gold/50" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-xs text-tag-text-on-dark-muted"><Link href="/">Home</Link><span className="mx-2">/</span><strong className="text-tag-cream">Mentors</strong></nav>
          <h1 className="mt-10 max-w-5xl font-heading text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[.94] tracking-[-.04em]">Meet the people helping shape the next generation</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-tag-text-on-dark-body">Doctors, engineers, lawyers, founders, creatives and educators: vetted, trained and here because they believe in you.</p>
        </div>
      </section>

      <MentorDirectory />

      <section className="px-5 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-tag-gold shadow-elev-card lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[.14em] text-tag-girls-deep">Become a mentor</p>
            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[.98] sm:text-5xl">Be the person you needed at sixteen.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-tag-text-body">Give a few hours a month. We&apos;ll vet, train and support you, then match you with young people who will benefit from your story.</p>
            <Link className={buttonVariants({ className: "mt-8", variant: "dark" })} href="/contact">Apply to Mentor <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="relative min-h-80 bg-tag-girls-photo">
            <Image alt="Mentor coaching a young person" className="object-cover" fill sizes="(max-width:1024px) 100vw, 50vw" src="/images/tag-about-community.png" />
            <div className="absolute inset-0 bg-tag-girls-photo/20" />
            <p className="absolute bottom-5 left-5 text-xs font-semibold text-white drop-shadow">Mentor leaning in, coaching a teenager over a laptop.</p>
          </div>
        </div>
      </section>

      <footer className="bg-tag-midnight px-5 pb-8 pt-14 text-tag-cream lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
            <div><BrandLogo placement="footer" /><p className="mt-4 max-w-xs text-sm leading-6 text-tag-text-on-dark-body">Helping teenagers and young adults discover who they are, realise what is possible, and gain the guidance and opportunities to become who they were created to be.</p></div>
            {footerColumns.map(([title, links]) => <div key={title as string}><p className="text-xs font-bold uppercase tracking-[.12em] text-tag-gold">{title}</p><div className="mt-4 space-y-3">{(links as string[]).map((label) => <Link className="text-sm text-tag-text-on-dark-body hover:text-white" href={label === "Boys Mentoring Hub" ? "/programmes/boys-mentoring-hub" : label === "Apply now" ? "/apply" : "/contact"} key={label}>{label}</Link>)}</div></div>)}
          </div>
          <div className="mt-12 flex flex-col gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-xs text-tag-text-on-dark-body sm:flex-row sm:items-center sm:justify-between"><span className="flex items-center gap-2"><ShieldCheck aria-hidden="true" className="size-4 text-tag-gold" />Safeguarding comes first. Every mentor is vetted and trained before working with young people.</span><Link className="font-bold text-tag-gold" href="/contact">Read our safeguarding approach <ArrowRight aria-hidden="true" className="ml-1 inline size-3.5" /></Link></div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-tag-text-on-dark-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Teens Academy Global. All rights reserved.</p><div className="flex gap-5"><Link href="#">Privacy Policy</Link><Link href="#">Terms</Link><Link href="#">Safeguarding Policy</Link></div></div>
        </div>
      </footer>
    </main>
  );
}
