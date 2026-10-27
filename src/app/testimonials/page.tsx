import type { Metadata } from "next";
import Link from "next/link";
import { Play } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestimonialWall } from "@/components/testimonial-wall";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Testimonials | Teens Academy Global",
  description: "Real stories from young people and families growing with Teens Academy Global.",
};

export default function TestimonialsPage() {
  return (
    <main className="bg-tag-cream text-tag-text">
      <SiteHeader active="testimonials" />

      <section className="px-5 pb-16 pt-10 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-xs text-tag-text-muted"><Link href="/">Home</Link><span className="mx-2">/</span><strong className="text-tag-midnight">Testimonials</strong></nav>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <h1 className="max-w-xl text-[clamp(4rem,8vw,7.5rem)] font-bold leading-[.82] tracking-[-.06em]">Real stories. <span className="text-tag-royal">Real growth.</span></h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-tag-text-body">Hear it from the young people who&apos;ve grown with TAG, and the parents who watched it happen.</p>
              <Badge className="mt-6" variant="notice">Sample quotes, replace with real, consented testimonials</Badge>
            </div>
            <article className="relative min-h-80 overflow-hidden rounded-2xl bg-[url('/images/tag-training-library.png')] bg-cover bg-center text-white shadow-elev-card lg:min-h-[420px]">
              <div className="absolute inset-0 bg-tag-midnight/55" />
              <button aria-label="Play featured testimonial" className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-tag-gold text-tag-midnight shadow-elev-button transition hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white" type="button"><Play aria-hidden="true" className="ml-1 size-7 fill-current" /></button>
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[.13em] text-tag-gold">Video story · 3:20</p><h2 className="mt-3 text-2xl font-bold">Name&apos;s nine months in the Boys Hub</h2></div>
            </article>
          </div>
        </div>
      </section>

      <TestimonialWall />

      <section className="px-5 pb-24 lg:px-8 lg:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-2xl border border-tag-line bg-white p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div><h2 className="text-3xl font-bold tracking-[-.03em] sm:text-4xl">Has TAG made a difference for you?</h2><p className="mt-3 text-sm text-tag-text-muted">We&apos;d love to hear your story. Under-18s need a parent or guardian&apos;s consent before we share anything.</p></div>
          <div className="flex shrink-0 flex-wrap gap-3"><Link className={buttonVariants({ size: "sm" })} href="/contact">Share your story</Link><Link className={buttonVariants({ size: "sm", variant: "outline" })} href="/#programs">Join a Programme</Link></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
