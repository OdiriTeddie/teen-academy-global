import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { ArrowRight, Mars, Quote, Star, Venus } from "lucide-react";

const impact = [
  ["500+", "Young people reached", "Transformed through cohorts and camps"],
  ["20+", "Executive mentors", "Industry leaders and professionals"],
  ["10+", "Partner communities", "Schools, churches and youth networks"],
  ["4", "Global countries", "Active international hubs and chapters"],
];

const pillars = [
  ["01", "Spiritual", "Discovering identity, purpose, and confidence rooted in Christ."],
  ["02", "Educational", "Access to academic resources, scholarships, and lifelong learning."],
  ["03", "Social & Leadership", "Building communication, healthy relationships, and civic awareness."],
  ["04", "Personal Development", "Cultivating resilience, emotional intelligence, and self-mastery."],
  ["05", "Career & Global", "Exploring work, enterprise, service, and a broader global perspective."],
];

const mentors = [
  ["Dr. Eliana Boateng", "Youth Development Educator", "0%"],
  ["Marcus Chen", "Technology & Innovation Mentor", "33.333%"],
  ["Sarah Jenkins, MD", "Health & Purpose Mentor", "66.666%"],
  ["David Owusu", "Leadership & Enterprise Coach", "100%"],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-secondary">
      <SiteHeader active="home" overlay />

      <section id="home" className="relative min-h-[680px] pt-16 text-white lg:min-h-[740px]">
        <Image alt="Young people learning together on a campus" className="object-cover" fill priority sizes="100vw" src="/images/tag-hero.png" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,.86)_0%,rgba(2,6,23,.58)_39%,rgba(2,6,23,.12)_72%,rgba(2,6,23,.04)_100%)]" />
        <div className="relative mx-auto flex min-h-[616px] max-w-7xl items-center px-5 py-20 lg:min-h-[676px] lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[.22em] text-amber-300">Faith. Purpose. Global Impact.</p>
            <h1 className="text-5xl font-black leading-[1.03] tracking-normal sm:text-6xl lg:text-7xl">Empowering Young People to Dream, Grow & Lead</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-100 sm:text-lg">Equipping teenagers and young adults with faith, opportunity, mentorship, and the confidence to take their place on the global stage.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a className="rounded-md bg-tertiary px-5 py-3.5 text-sm font-black text-slate-950 transition hover:bg-amber-400" href="#programs">Explore Our Programmes</a><a className="rounded-md border border-white/70 bg-black/15 px-5 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-secondary" href="#about">Discover TAG</a></div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-20 text-center lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl"><Quote aria-hidden="true" className="mx-auto size-7 text-primary"/><p className="mt-2 text-xl font-semibold leading-8 text-secondary sm:text-2xl">Every young person deserves the opportunity to dream beyond their circumstances.</p><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">Teens Academy Global exists to bridge the gap between potential and opportunity, creating safe spaces where young minds can thrive spiritually, academically, and socially.</p><a className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary" href="#story">Our story <ArrowRight aria-hidden="true" className="size-4"/></a></div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl text-center"><p className="eyebrow">Measurable impact</p><h2 className="section-title">Empowering Tomorrow&apos;s Trailblazers Today</h2><p className="section-copy">Bridging the gap between potential and opportunity across the UK, Africa, and beyond.</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{impact.map(([value, label, copy]) => <article className="rounded-md border border-slate-200 bg-white px-5 py-7 shadow-[0_10px_30px_rgba(15,23,42,.04)]" key={label}><p className="text-4xl font-black text-primary">{value}</p><h3 className="mt-3 text-sm font-black">{label}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{copy}</p></article>)}</div></div></section>

      <section id="programs" className="px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl text-center"><p className="eyebrow">Our development framework</p><h2 className="section-title">Holistic Pillars of Growth</h2><p className="section-copy">We nurture the complete individual, fostering spiritual integrity, intellectual vigor, and visionary leadership designed for real-world impact.</p><div className="mt-11 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-5">{pillars.map(([number, title, copy]) => <article className="group border-t-2 border-slate-200 bg-slate-50 px-5 py-7 transition hover:border-primary hover:bg-blue-50" key={title}><span className="grid size-9 place-items-center rounded-md bg-blue-100 text-xs font-black text-primary">{number}</span><h3 className="mt-6 text-base font-black">{title}</h3><p className="mt-3 min-h-24 text-xs leading-6 text-slate-500">{copy}</p><a className="mt-4 inline-flex text-xs font-black text-primary" href="#contact">Learn more →</a></article>)}</div></div></section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl text-center"><p className="eyebrow">Pathways to purpose</p><h2 className="section-title">Flagship Mentoring Hubs</h2><p className="section-copy">Dedicated, gender-tailored cohorts designed to meet the distinct developmental needs of young men and women.</p><div className="mt-11 grid gap-5 text-left lg:grid-cols-2"><article className="program-card"><span className="program-mark bg-blue-100 text-primary"><Mars aria-hidden="true" className="size-5"/></span><div><p className="text-xs font-black uppercase text-primary">Boys mentoring hub</p><h3 className="mt-2 text-2xl font-black">Built for courage, character, and purpose.</h3><p className="mt-4 text-sm leading-7 text-slate-500">A structured year-round journey developing young men into confident, responsible, and purpose-driven leaders with high social impact.</p><a className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary" href="/contact">Explore Boys Hub <ArrowRight aria-hidden="true" className="size-4"/></a></div></article><article className="program-card"><span className="program-mark bg-amber-100 text-amber-700"><Venus aria-hidden="true" className="size-5"/></span><div><p className="text-xs font-black uppercase text-amber-700">Girls mentorship hub</p><h3 className="mt-2 text-2xl font-black">Nurtured to lead with confidence.</h3><p className="mt-4 text-sm leading-7 text-slate-500">A dedicated community empowering young women with confidence, voice, purpose, and real-world life skills to lead courageously.</p><a className="mt-6 inline-flex items-center gap-2 text-sm font-black text-amber-700" href="/contact">Explore Girls Hub <ArrowRight aria-hidden="true" className="size-4"/></a></div></article></div></div></section>

      <section id="mentors" className="px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow text-left">Direct access to excellence</p><h2 className="section-title text-left">Guidance From People Who Care</h2><p className="section-copy mx-0 text-left">Industry leaders, doctors, technologists, and executives dedicated to walking alongside ambitious youth.</p></div><a className="text-sm font-black text-primary" href="#contact">Meet all mentors →</a></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{mentors.map(([name, role, position]) => <article className="overflow-hidden rounded-md border border-slate-200 bg-white" key={name}><div className="h-64 bg-[url('/images/tag-mentors.png')] bg-[length:400%_auto] bg-no-repeat" style={{ backgroundPosition: `${position} center` }} /><div className="p-5"><h3 className="font-black">{name}</h3><p className="mt-1 text-xs text-slate-500">{role}</p></div></article>)}</div></div></section>

      <section id="summit" className="bg-slate-50 px-5 py-20 lg:px-8"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-lg bg-primary px-7 py-12 text-white shadow-[0_18px_50px_rgba(37,99,235,.22)] sm:px-12 lg:px-16 lg:py-16"><div className="absolute -right-24 -top-32 size-96 rounded-full border-[70px] border-white/10" /><div className="relative max-w-3xl"><p className="text-xs font-black uppercase tracking-[.18em] text-amber-300">Upcoming flagship event</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">TAG Global Youth Summit 2025:<br />Unlocking Limitless Futures</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100">A high-energy global gathering of future shapers and mentors, featuring workshops, innovation labs, and faith-building sessions.</p><div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold"><span>August 5–8, 2025</span><span>Lagos & London</span><span>150+ youth leaders</span></div><a className="mt-8 inline-flex rounded-md bg-tertiary px-5 py-3 text-sm font-black text-slate-950" href="#contact">Explore conference & workshops →</a></div></div></section>

      <section className="px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl text-center"><p className="eyebrow">Real stories, real impact</p><h2 className="section-title">Voices from Our Community</h2><p className="section-copy">Hear firsthand from the teenagers whose lives have pivoted and the parents who support their rise.</p><div className="mt-10 grid gap-5 text-left lg:grid-cols-2">{[["TAG taught me that where I start doesn't determine where I finish. Having a dedicated mentor who believed in me, held me accountable, and prayed for my dreams completely changed my trajectory.","Daniel Okafor","TAG Alum, Software Engineering Student"],["As a parent, finding a structured, safe, Christ-centered space with real professional mentors has been an invaluable blessing. My daughter found her voice and learned a clear vision for her education.","Mrs. Adeyemi","Parent, Girls Community"]].map(([quote,name,role])=><blockquote className="testimonial" key={name}><div className="flex gap-1 text-amber-500">{Array.from({length:5}).map((_,index)=><Star aria-hidden="true" className="size-4 fill-current" key={index}/>)}</div><p className="mt-5 text-sm italic leading-7 text-slate-600">“{quote}”</p><footer className="mt-6 text-sm font-black">{name}<span className="block text-xs font-normal text-slate-400">{role}</span></footer></blockquote>)}</div></div></section>

      <section className="bg-primary px-5 py-14 text-center text-white lg:px-8"><h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-4xl">Potential Should Never Be Limited By Circumstance</h2><div className="mt-7 flex flex-wrap justify-center gap-3"><a className="rounded-md bg-tertiary px-5 py-3 text-sm font-black text-slate-950" href="#programs">Join a Programme</a><a className="rounded-md border border-white/60 px-5 py-3 text-sm font-black" href="#contact">Become a Mentor</a></div></section>

      <footer id="contact" className="bg-white px-5 py-12 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]"><div><p className="text-xl font-black text-primary">TAG</p><p className="mt-4 max-w-xs text-xs leading-6 text-slate-500">© 2025 Teens Academy Global.<br />Purposeful youth ready to lead by conviction.</p></div><div><p className="footer-title">Platform</p><a href="#home">Home</a><a href="#programs">Programmes</a><a href="#mentors">Mentors</a></div><div><p className="footer-title">Resources</p><a href="#about">Our Story</a><a href="#summit">Conferences</a><a href="#contact">Testimonials</a></div><div><p className="footer-title">Legal</p><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Safeguarding</a></div></div></footer>
    </main>
  );
}
