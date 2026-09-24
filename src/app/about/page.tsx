import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About TAG | Teens Academy Global",
  description: "The vision, values, and holistic development framework behind Teens Academy Global.",
};

const values = [
  ["Faith", "Anchored in Christ-centred truth, hope, courage, and spiritual resilience."],
  ["Excellence", "Striving for the highest standards in academics, professional skills, and stewardship."],
  ["Integrity", "Building dependable, transparent young leaders whose character matters."],
  ["Compassion", "Loving, serving, and advocating for others with empathy and dignity."],
  ["Purpose", "Uncovering unique calling and taking practical steps into meaningful work."],
  ["Global Ambition", "Equipping youth to lead confidently across communities and cultures."],
];

const challenges = [
  ["Access & Equity", "Removing systemic barriers to education, guidance, and opportunity."],
  ["Active Mentorship", "Connecting young people with trusted professionals and community leaders."],
  ["Global Exposure", "Broadening horizons through international learning and collaboration."],
  ["Safe & Nurturing Space", "Creating affirming communities where young people can grow."],
];

const pillars = [
  ["1", "Spiritual", "Christ-centred identity, prayerful discipline, and purposeful faith."],
  ["2", "Educational", "Academic mastery, scholarship guidance, and lifelong learning."],
  ["3", "Leadership", "Communication, service, collaboration, and courageous decisions."],
  ["4", "Personal", "Emotional intelligence, resilience, self-awareness, and confidence."],
  ["5", "Global & Career", "Professional readiness, enterprise, cultural awareness, and ambition."],
];

const card = "rounded-md border border-slate-200 bg-white p-6";

function Heading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

export default function AboutPage() {
  return <main className="bg-white text-secondary"><SiteHeader active="about" />
    <section className="relative overflow-hidden bg-slate-50 px-5 py-20 lg:px-8 lg:py-28">
      <div className="absolute inset-y-0 right-0 hidden w-[38%] bg-blue-50 lg:block" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_.82fr]">
        <div className="max-w-2xl"><p className="inline-flex rounded-full bg-blue-100 px-3 py-1.5 text-[.65rem] font-black uppercase tracking-[.14em] text-primary">Our purpose</p><h1 className="mt-7 text-5xl font-black leading-[1.03] sm:text-6xl">Building a Generation of <span className="text-primary">Purposeful</span> Global Leaders</h1><p className="mt-6 max-w-xl text-base leading-8 text-slate-600">We believe potential should never be limited by circumstance. TAG is a global academy passionately developing a values-led next generation of transformational youth leaders.</p></div>
        <div className="relative mx-auto w-full max-w-md rotate-[1.5deg]"><div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-[0_24px_70px_rgba(15,23,42,.18)]"><Image alt="TAG mentor and students learning together" className="object-cover" fill priority sizes="(max-width:1024px) 90vw, 36vw" src="/images/tag-about-community.png" /></div><div className="absolute -bottom-5 -left-3 rounded-md bg-white px-4 py-3 shadow-xl"><p className="text-[.62rem] font-black uppercase text-primary">Global network</p><p className="mt-1 text-xs font-bold">Growing across communities</p></div></div>
      </div>
    </section>

    <section className="px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
      <div><p className="eyebrow text-left">Our genesis & story</p><h2 className="section-title max-w-xl text-left">Born From a Divine Vision to Bridge Potential and Opportunity</h2><div className="mt-6 space-y-4 text-sm leading-7 text-slate-600"><p>Teens Academy Global was born from a God-given vision laid upon our hearts: to champion teenagers and young adults, especially those from underprivileged communities and overlooked backgrounds.</p><p>TAG&apos;s purpose is a Christ-led commitment to spiritual growth, educational advancement, character formation, and life-giving guidance. No young person should walk their defining years in isolation.</p></div><div className="mt-8 grid gap-3 sm:grid-cols-3">{[["Faith-led", "Rooted in prayer and service"], ["Global scope", "Connecting across cultures"], ["Real potential", "Every gift has purpose"]].map(([title, copy]) => <div className="rounded-md bg-slate-50 p-4" key={title}><p className="text-xs font-black text-primary">{title}</p><p className="mt-2 text-[.68rem] leading-5 text-slate-500">{copy}</p></div>)}</div></div>
      <blockquote className="rounded-lg bg-primary p-8 text-white shadow-[0_20px_50px_rgba(37,99,235,.18)] sm:p-10"><span className="text-5xl font-serif text-blue-200">“</span><p className="mt-3 text-xl font-black leading-8">Every young person deserves the opportunity to dream beyond their circumstances, discover their God-given gifts, and step into global influence.</p><footer className="mt-8 border-t border-white/20 pt-5 text-xs font-bold text-blue-100">TAG Founding Conviction</footer></blockquote>
    </div></section>

    <section className="bg-slate-50 px-5 py-20 lg:px-8 lg:py-24"><Heading eyebrow="Guiding north" title="Our Vision & Mission" copy="Clear, steadfast guideposts shaping our long-term commitment to youth across nations." /><div className="mx-auto mt-11 grid max-w-5xl gap-5 lg:grid-cols-2">
      <article className={card}><span className="text-xs font-black uppercase text-primary">01 · Our vision</span><h3 className="mt-5 text-xl font-black">Generational Transformation</h3><p className="mt-4 text-sm leading-7 text-slate-500">To raise purpose-driven, globally competitive leaders who discover their identity in Christ and transform communities through ethical leadership, innovation, excellence, and service.</p><strong className="mt-6 inline-block text-xs text-primary">A future built on transformed youth →</strong></article>
      <article className={card}><span className="text-xs font-black uppercase text-amber-700">02 · Our mission</span><h3 className="mt-5 text-xl font-black">Holistic Empowerment</h3><p className="mt-4 text-sm leading-7 text-slate-500">Equipping young people through values-led mentorship, education, character formation, and opportunities that break cycles of limitation and prepare them for global impact.</p><strong className="mt-6 inline-block text-xs text-amber-700">Empowering body, mind, and spirit →</strong></article>
    </div></section>

    <section className="px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="eyebrow text-left">The catalyst</p><h2 className="section-title text-left">Why TAG Exists: Addressing Real Challenges with Real Hope</h2></div><p className="text-sm leading-7 text-slate-500">Millions of teenagers encounter broken guidance systems, economic barriers, and an absence of career role models. TAG responds with strategic programmes that nurture hope and unlock lasting personal mobility.</p></div><div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{challenges.map(([title, copy], index) => <article className="rounded-md bg-slate-50 p-6" key={title}><span className="grid size-9 place-items-center rounded-md bg-blue-100 text-xs font-black text-primary">0{index + 1}</span><h3 className="mt-5 text-sm font-black">{title}</h3><p className="mt-3 text-xs leading-6 text-slate-500">{copy}</p></article>)}</div></div></section>

    <section className="bg-slate-50 px-5 py-20 text-center lg:px-8"><div className="mx-auto max-w-4xl"><p className="inline-flex rounded-full bg-blue-100 px-3 py-1.5 text-[.65rem] font-black uppercase tracking-[.14em] text-primary">Christ-led at heart</p><h2 className="section-title">Rooted in Faith, Welcoming to All</h2><p className="section-copy max-w-3xl">At the heart of TAG is a Christ-centred ethic. Every young person is made in the image of God with boundless intrinsic value, distinct gifts, and an eternal calling. Our faith inspires us to love unconditionally, serve sacrificially, and lead with compassion.</p><div className="mt-8 flex flex-wrap justify-center gap-3 text-[.65rem] font-bold text-slate-600">{["Christ-centred compassion", "Inclusive welcome & dignity", "Unwavering moral backbone"].map(item => <span className="rounded-full border border-slate-200 bg-white px-4 py-2" key={item}>{item}</span>)}</div></div></section>

    <section className="px-5 py-20 lg:px-8 lg:py-24"><Heading eyebrow="The TAG DNA" title="Our Core Values" copy="The timeless values that bind our mentorship, training sessions, and generational community." /><div className="mx-auto mt-11 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">{values.map(([title, copy], index) => <article className="rounded-md bg-slate-50 p-6" key={title}><span className="grid size-9 place-items-center rounded-md bg-primary text-xs font-black text-white">{index + 1}</span><h3 className="mt-5 text-sm font-black">{title}</h3><p className="mt-3 text-xs leading-6 text-slate-500">{copy}</p></article>)}</div></section>

    <section className="bg-slate-50 px-5 py-20 lg:px-8 lg:py-24"><Heading eyebrow="The methodology" title="The 5 Pillars of TAG Growth" copy="Our integrated curriculum advances the whole teenager: fostering mind, spirit, character, and future career." /><div className="mx-auto mt-11 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">{pillars.map(([number, title, copy]) => <article className={`${card} text-center`} key={title}><span className="mx-auto grid size-10 place-items-center rounded-full bg-blue-50 text-xs font-black text-primary">{number}</span><h3 className="mt-5 text-sm font-black">{title}</h3><p className="mt-3 text-[.68rem] leading-5 text-slate-500">{copy}</p></article>)}</div><div className="mx-auto mt-12 flex max-w-7xl flex-col items-start gap-5 rounded-lg border border-blue-100 bg-blue-50 p-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-black">Safeguarding & Trust First</p><p className="mt-2 max-w-3xl text-xs leading-6 text-slate-500">All TAG mentors undergo rigorous background vetting, identity verification, and safeguarding training.</p></div><Link className="shrink-0 rounded-md border border-blue-200 bg-white px-4 py-2.5 text-xs font-black text-primary" href="#contact">Read our safeguarding policy</Link></div></section>

    <section className="bg-primary px-5 py-16 text-center text-white lg:px-8"><div className="mx-auto max-w-3xl"><p className="text-[.65rem] font-black uppercase tracking-[.18em] text-blue-200">Join the movement</p><h2 className="mt-4 text-3xl font-black sm:text-4xl">Be Part of the TAG Story</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100">Whether you are a teenager seeking mentorship, an educator, or a professional eager to sow into the next generation, there is a seat for you at TAG.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link className="rounded-md bg-white px-5 py-3 text-sm font-black text-primary" href="/#programs">Join a Programme</Link><Link className="rounded-md border border-white/60 px-5 py-3 text-sm font-black" href="#contact">Become a Mentor / Partner</Link></div></div></section>

    <footer id="contact" className="bg-white px-5 py-12 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]"><div><Link className="text-xl font-black text-primary" href="/">TAG</Link><p className="mt-4 max-w-xs text-xs leading-6 text-slate-500">Purposeful minds ready to lead by conviction.<br />© 2026 Teens Academy Global.</p></div><div><p className="footer-title">Explore</p><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/#programs">Programs</Link></div><div><p className="footer-title">Engage</p><Link href="/#mentors">Our Mentors</Link><Link href="/#summit">Conferences</Link><Link href="#contact">Partnership</Link></div><div><p className="footer-title">Legal</p><Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link><Link href="#">Safeguarding</Link></div></div></footer>
  </main>;
}
