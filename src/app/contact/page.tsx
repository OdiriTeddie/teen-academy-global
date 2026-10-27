import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact | Teens Academy Global",
  description: "Contact Teens Academy Global about programmes, mentorship, partnerships, and support.",
};

const footerColumns = [
  ["Explore", ["About", "Mentors", "Trainings", "Conferences", "Testimonials", "Contact"]],
  ["Programmes", ["Boys Mentoring Hub", "Girls Mentorship Hub", "Apply now"]],
  ["Get involved", ["Become a mentor", "Volunteer", "Partner with TAG", "Donate"]],
  ["Connect", ["Instagram", "YouTube", "WhatsApp Channel"]],
];

export default function ContactPage() {
  return (
    <main className="bg-tag-cream text-tag-text">
      <SiteHeader active="contact" />

      <section className="px-5 pb-12 pt-10 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-xs text-tag-text-muted"><Link href="/">Home</Link><span className="mx-2">/</span><strong className="text-tag-midnight">Contact</strong></nav>
          <h1 className="mt-12 max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[.88] tracking-[-.055em]">We&apos;d love to hear from you</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-tag-text-body">Whether you&apos;re a young person, a parent, a school or a potential partner, reach out. We usually reply within 2 working days.</p>
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-4">
            <article className="flex items-center gap-4 rounded-xl border border-tag-line bg-white p-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-tag-text-on-royal text-tag-royal"><Mail aria-hidden="true" className="size-5" /></span>
              <div><h2 className="font-bold">General enquiries</h2><a className="text-sm font-semibold text-tag-royal underline" href="mailto:hello@teensacademyglobal.org">hello@teensacademyglobal.org</a></div>
            </article>

            <article className="rounded-xl border border-tag-line bg-white p-6">
              <div className="flex flex-wrap items-center justify-between gap-3"><h2 className="font-bold">WhatsApp</h2><Badge variant="success"><MessageCircle aria-hidden="true" className="size-3" />WhatsApp messages only, no calls</Badge></div>
              <div className="mt-5 grid gap-3">
                <div className="flex items-center justify-between gap-4 rounded-lg bg-tag-cream p-4"><div><p className="text-[11px] font-bold uppercase tracking-[.12em] text-tag-text-muted">Nigeria</p><p className="font-bold">+234 WhatsApp number</p></div><a className="shrink-0 text-sm font-bold text-tag-success" href="https://wa.me/2340000000000">Message <ArrowRight aria-hidden="true" className="inline size-3.5" /></a></div>
                <div className="flex items-center justify-between gap-4 rounded-lg bg-tag-cream p-4"><div><p className="text-[11px] font-bold uppercase tracking-[.12em] text-tag-text-muted">United Kingdom</p><p className="font-bold">+44 WhatsApp number</p></div><a className="shrink-0 text-sm font-bold text-tag-success" href="https://wa.me/440000000000">Message <ArrowRight aria-hidden="true" className="inline size-3.5" /></a></div>
              </div>
            </article>

            <article className="rounded-xl bg-tag-midnight p-7 text-tag-cream">
              <h2 className="text-2xl font-bold">Join our WhatsApp community</h2>
              <p className="mt-3 text-sm leading-6 text-tag-text-on-dark-body">Updates on programmes, events and opportunities, straight to your phone.</p>
              <a className={buttonVariants({ className: "mt-6", size: "sm", variant: "accent" })} href="#"><MessageCircle aria-hidden="true" />Join Our WhatsApp Channel</a>
            </article>

            <article className="flex items-center gap-4 rounded-xl border border-tag-line bg-white p-6">
              <Camera aria-hidden="true" className="size-6 text-tag-girls" /><div><h2 className="font-bold">Instagram</h2><a className="text-sm text-tag-text-muted" href="#">@teensacademyglobal</a></div>
            </article>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="bg-tag-midnight px-5 pb-8 pt-14 text-tag-cream lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
            <div><BrandLogo placement="footer" /><p className="mt-4 max-w-xs text-sm leading-6 text-tag-text-on-dark-body">Helping teenagers and young adults discover who they are, realise what is possible, and gain the guidance and opportunities to become who they were created to be.</p></div>
            {footerColumns.map(([title, links]) => <div key={title as string}><p className="text-xs font-bold uppercase tracking-[.12em] text-tag-gold">{title}</p><div className="mt-4 grid gap-3">{(links as string[]).map((label) => <Link className="text-sm text-tag-text-on-dark-body hover:text-white" href="/contact" key={label}>{label}</Link>)}</div></div>)}
          </div>
          <div className="mt-12 flex flex-col gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-xs text-tag-text-on-dark-body sm:flex-row sm:items-center sm:justify-between"><span className="flex items-center gap-2"><ShieldCheck aria-hidden="true" className="size-4 text-tag-gold" />Safeguarding comes first. Every mentor is vetted and trained before working with young people.</span><Link className="font-bold text-tag-gold" href="#">Read our safeguarding approach <ArrowRight aria-hidden="true" className="ml-1 inline size-3.5" /></Link></div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-tag-text-on-dark-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Teens Academy Global. All rights reserved.</p><div className="flex gap-5"><Link href="#">Privacy Policy</Link><Link href="#">Terms</Link><Link href="#">Safeguarding Policy</Link></div></div>
        </div>
      </footer>
    </main>
  );
}
