import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About TAG | Teens Academy Global",
  description: "The story, faith, values, and safeguarding commitment behind Teens Academy Global.",
};

const values = [
  ["01", "Faith", "Christ at the centre of who we are and how we serve."],
  ["02", "Excellence", "World-class standards, whatever the starting point."],
  ["03", "Integrity", "Honest, safe and accountable in everything."],
  ["04", "Compassion", "Meeting young people with care, not judgement."],
  ["05", "Purpose", "Every life created with meaning and direction."],
  ["06", "Growth", "Progress over perfection, one step at a time."],
  ["07", "Leadership", "Leading ourselves first, then serving others."],
  ["08", "Community", "No one grows alone. We rise together."],
];

const responses = [
  ["Lack of educational opportunities", "Access to learning & resources"],
  ["Lack of mentorship and positive role models", "Professionals who show up, consistently"],
  ["Poverty and disadvantaged communities", "Dreams that reach beyond circumstance"],
  ["Limited exposure to what is possible", "Rooms, conferences and global networks"],
  ["Lack of career guidance", "Clear pathways into study and work"],
  ["Lack of confidence", "A secure identity and a voice"],
];

const safety = [
  ["Vetted mentors", "Every mentor completes background checks and reference validation."],
  ["Safeguarding training", "Mentors and volunteers are trained to protect and care for young people."],
  ["Parents kept informed", "Regular consent, updates and programme activity information."],
  ["Clear reporting", "A named safeguarding lead and a clear process for raising concerns."],
];

const footerColumns = [
  ["Explore", ["About", "Mentors", "Training", "Conferences", "Testimonials", "Contact"]],
  ["Programmes", ["Boys Mentoring Hub", "Girls Mentorship Hub", "Apply now"]],
  ["Get involved", ["Become a mentor", "Volunteer", "Partner with TAG", "Donate"]],
  ["Connect", ["Instagram", "YouTube", "WhatsApp Channel"]],
];

export default function AboutPage() {
  return (
    <main className="bg-tag-cream text-tag-text">
      <SiteHeader active="about" />

      <section className="px-5 pb-20 pt-10 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-xs text-tag-text-muted">
            <Link href="/">Home</Link> <span className="mx-2">/</span> <strong className="text-tag-midnight">About Us</strong>
          </nav>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <h1 className="max-w-4xl font-heading text-[clamp(3.4rem,7vw,6.4rem)] font-bold leading-[.88] tracking-[-.045em]">
              Building a generation of purposeful global leaders
            </h1>
            <p className="max-w-md text-base leading-7 text-tag-text-body lg:pb-3">
              A Christian youth-development movement helping teenagers and young adults grow in faith, knowledge, character and opportunity.
            </p>
          </div>
          <div className="relative mt-14 aspect-[16/7] min-h-[320px] overflow-hidden rounded-2xl bg-tag-midnight shadow-elev-card">
            <Image
              alt="TAG young people and mentors learning together"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              src="/images/tag-about-community.png"
            />
            <div className="absolute inset-0 bg-tag-midnight/25" />
            <p className="absolute bottom-5 left-5 rounded-full bg-tag-midnight/75 px-3 py-2 text-[11px] font-semibold text-tag-cream backdrop-blur">
              Wide shot · TAG young people and mentors learning together
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.14em] text-tag-royal">Our story</p>
            <h2 className="mt-4 max-w-md text-4xl font-bold leading-[.98] sm:text-5xl">It started with a God-given vision.</h2>
            <p className="mt-4 text-xs text-tag-text-muted">Founded [Year] · [City, Country]</p>
          </div>
          <div className="space-y-5 text-base leading-7 text-tag-text-body">
            <p>Teens Academy Global is a vision laid upon our hearts by God and directed toward teenagers and young adults. We kept meeting bright, gifted young people whose futures were being decided by where they were born rather than by who they could become.</p>
            <p>In communities where quality education, mentorship and exposure are hard to reach, potential too often goes unseen. TAG exists to change that: to be a beacon of hope that encourages young people to dream beyond their circumstances, and then walks with them as they do.</p>
            <blockquote className="border-y border-tag-midnight py-5 font-heading text-2xl font-bold leading-tight text-tag-midnight">
              “Your circumstances don&apos;t define your potential.”
            </blockquote>
            <p className="text-sm text-tag-text-muted">The founding story and the first young people TAG served belong here as this history is documented.</p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <article className="relative overflow-hidden rounded-2xl bg-tag-midnight p-8 text-tag-cream sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-white/10" />
            <p className="text-xs font-bold uppercase tracking-[.14em] text-tag-gold">Our vision</p>
            <h2 className="relative mt-8 max-w-2xl text-3xl font-bold leading-[1.05] sm:text-4xl">
              To see teenagers and young adults, especially from underprivileged communities, discover their identity and purpose in Christ, dream beyond their circumstances, and compete on the global stage.
            </h2>
          </article>
          <article className="rounded-2xl bg-tag-gold-soft p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[.14em] text-tag-girls-deep">Our mission</p>
            <p className="mt-8 text-base leading-7 text-tag-text-body">We turn that vision into practice through values, resources, mentorship, coaching, training and opportunities that develop young people:</p>
            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3 text-sm font-semibold">
              {["Spiritually", "Educationally", "Socially", "Emotionally", "Professionally", "As leaders"].map((item) => <span className="flex items-center gap-2" key={item}><Check aria-hidden="true" className="size-4 text-tag-royal" />{item}</span>)}
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-tag-line bg-white px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[.14em] text-tag-royal">Why TAG exists</p><h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[.98] sm:text-5xl">Talent is everywhere. Opportunity isn&apos;t, yet.</h2></div>
            <p className="max-w-md text-sm leading-6 text-tag-text-body">We name the barriers honestly so we can build the bridge across them.</p>
          </div>
          <div className="mt-12 divide-y divide-tag-line border-y border-tag-line">
            {responses.map(([problem, response]) => (
              <div className="grid gap-3 py-5 text-sm sm:grid-cols-[1fr_auto_1fr] sm:items-center" key={problem}>
                <p className="text-tag-text-muted">{problem}</p>
                <ArrowRight aria-hidden="true" className="hidden size-4 text-tag-gold sm:block" />
                <p className="font-bold text-tag-midnight">{response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/5] max-h-[600px] overflow-hidden rounded-[999px_999px_1.5rem_1.5rem] bg-tag-girls-photo">
            <Image alt="A reflective TAG mentoring moment" className="object-cover" fill sizes="(max-width:1024px) 100vw, 46vw" src="/images/tag-training-student.png" />
            <div className="absolute inset-0 bg-tag-midnight/10" />
            <p className="absolute bottom-5 left-5 right-5 text-xs font-semibold text-white drop-shadow">Quiet, reflective moment rooted in prayer, devotion and lifelong hope.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.14em] text-tag-royal">† Our Christian foundation</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-[.98] sm:text-5xl">Rooted in faith. Open-hearted to every young person.</h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-tag-text-body">
              <p>Everything we do flows from our Christian faith. We believe every young person is created with purpose, and we want to help them discover their identity and purpose in Christ Jesus.</p>
              <p>That faith shapes how we mentor: with love, patience, integrity and hope. Young people are welcomed as they are, and encouraged to grow into who they were created to be.</p>
            </div>
            <div className="mt-8 rounded-lg border border-tag-line bg-white p-4 text-sm text-tag-text-muted">Guiding scripture verse and reference</div>
          </div>
        </div>
      </section>

      <section className="bg-tag-midnight px-5 py-20 text-tag-cream lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-tag-gold">Our values</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">What we stand on.</h2>
          <div className="mt-12 grid overflow-hidden rounded-xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([number, title, copy], index) => (
              <article className={index === 4 ? "bg-tag-gold p-6 text-tag-midnight" : "border-b border-white/10 p-6 sm:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-child(n+5)]:border-b-0"} key={title}>
                <p className={index === 4 ? "text-xs font-bold text-tag-girls-deep" : "text-xs font-bold text-tag-gold"}>{number}</p>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className={index === 4 ? "mt-3 text-sm leading-6 text-tag-text-body" : "mt-3 text-sm leading-6 text-tag-text-on-dark-body"}>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl bg-white p-7 shadow-elev-card sm:p-10 lg:grid-cols-[.85fr_1.15fr] lg:p-12">
          <div>
            <span className="grid size-11 place-items-center rounded-lg bg-tag-boys-tint text-tag-royal"><ShieldCheck aria-hidden="true" /></span>
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">How we keep young people safe</h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-tag-text-body">Parents trust us with what matters most. Safeguarding is built into every programme, session and mentor relationship.</p>
            <Link className={buttonVariants({ className: "mt-7", size: "sm", variant: "dark" })} href="/contact">Read our Safeguarding Policy</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {safety.map(([title, copy], index) => <article className={index === 0 ? "rounded-lg bg-tag-gold-soft p-5" : "rounded-lg bg-tag-cream p-5"} key={title}><h3 className="text-base font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-tag-text-body">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl bg-tag-royal px-7 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <h2 className="text-3xl font-bold">Be part of the story.</h2>
          <div className="flex flex-col gap-3 sm:flex-row"><Link className={buttonVariants({ size: "sm", variant: "accent" })} href="/#programmes">Join TAG</Link><Link className={buttonVariants({ size: "sm", variant: "outline-inverse" })} href="/contact">Partner With TAG</Link></div>
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
