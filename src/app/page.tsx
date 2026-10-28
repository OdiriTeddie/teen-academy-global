import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CirclePlay,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UserRoundCheck,
  Video,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const pillars = [
  { title: "Spiritual", copy: "Helping young people discover their identity and purpose in Christ.", icon: Sparkles, tone: "bg-tag-spiritual text-tag-midnight" },
  { title: "Educational", copy: "Providing access to mentoring, resources and lifelong learning.", icon: GraduationCap, tone: "bg-tag-boys-tint text-tag-royal" },
  { title: "Social", copy: "Building communication, relationships, leadership and community.", icon: HeartHandshake, tone: "bg-tag-social text-white" },
  { title: "Personal Development", copy: "Developing confidence, resilience and emotional intelligence.", icon: Target, tone: "bg-tag-personal text-white" },
  { title: "Career & Global Opportunities", copy: "Preparing young people for education, careers and opportunities beyond borders.", icon: MapPin, tone: "bg-tag-gold text-tag-midnight" },
];

const mentors = [
  ["Dr. Eliana Boateng", "Youth Development", "Technology", "0%"],
  ["Marcus Chen", "Technology & Innovation", "Finance", "33.333%"],
  ["Dr. Sarah Jenkins", "Health & Purpose", "Medicine", "66.666%"],
  ["David Owusu", "Leadership & Enterprise", "Leadership", "100%"],
];

const stats = [
  ["500+", "Young people reached"],
  ["20+", "Professional mentors"],
  ["10+", "Communities"],
  ["4", "Countries reached"],
];

const footerColumns = [
  ["Explore", ["About", "Mentors", "Training", "Conferences"]],
  ["Programmes", ["Boys Mentoring Hub", "Girls Mentorship Hub", "Apply now"]],
  ["Get involved", ["Become a mentor", "Volunteer", "Partner with TAG", "Donate"]],
  ["Connect", ["Instagram", "YouTube", "WhatsApp Channel"]],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-tag-cream text-tag-text">
      <SiteHeader active="home" />

      <section className="relative px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute inset-x-0 bottom-10 h-px rotate-[-7deg] bg-tag-line" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <Badge variant="notice">Mentorship · Education · Purpose · Ages 14–24</Badge>
            <h1 className="mt-7 max-w-3xl font-heading text-[clamp(3.25rem,7vw,5.4rem)] font-bold leading-[.9] tracking-[-.04em]">
              Empowering young people to <span className="text-tag-royal">dream</span>, grow &amp; lead.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-tag-text-body sm:text-lg">
              Teens Academy Global equips teenagers and young adults with mentorship, education, opportunities and Christ-centred guidance to help them discover their potential and compete on the global stage.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className={buttonVariants({ size: "lg" })} href="#programmes">
                Explore Our Programmes <ArrowRight aria-hidden="true" />
              </Link>
              <Link className={buttonVariants({ size: "lg", variant: "outline" })} href="#story">
                Discover TAG
              </Link>
            </div>
          </div>

          <div className="relative mx-auto min-h-[500px] w-full max-w-xl sm:min-h-[590px]">
            <div className="absolute right-0 top-0 h-[78%] w-[74%] overflow-hidden rounded-[2.5rem_2.5rem_2.5rem_.75rem] bg-tag-midnight shadow-elev-float">
              <Image
                alt="Young people learning together at a TAG programme"
                className="object-cover opacity-90 mix-blend-luminosity"
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 34vw"
                src="/images/tag-hero.png"
              />
              <div className="absolute inset-0 bg-tag-boys-photo/35" />
            </div>
            <div className="absolute bottom-4 left-2 h-[45%] w-[42%] overflow-hidden rounded-[2rem_2rem_.75rem_2rem] border-4 border-tag-cream bg-tag-girls-photo shadow-elev-card sm:left-8">
              <Image
                alt="TAG student ready to pursue her goals"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 42vw, 18vw"
                src="/images/tag-training-student.png"
              />
            </div>
            <div className="absolute bottom-9 right-0 w-[62%] rounded-xl border border-tag-line bg-white p-4 shadow-elev-float sm:p-5">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-tag-royal">
                <span className="size-2 rounded-full bg-tag-live" /> Applications open
              </div>
              <p className="mt-2 font-heading text-lg font-bold leading-tight">Boys Mentoring Hub</p>
              <p className="mt-1 text-xs text-tag-text-muted">Cohort starts soon · Apply today</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-tag-line bg-white px-5 py-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 text-xs font-semibold text-tag-text-body sm:grid-cols-4">
          <span className="flex items-center gap-2"><Star className="size-4 text-tag-gold" aria-hidden="true" />For ages 14–24</span>
          <span className="flex items-center gap-2"><MapPin className="size-4 text-tag-royal" aria-hidden="true" />Nigeria, UK &amp; online</span>
          <span className="flex items-center gap-2"><UserRoundCheck className="size-4 text-tag-royal" aria-hidden="true" />Vetted professional mentors</span>
          <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-tag-royal" aria-hidden="true" />Safeguarding first</span>
        </div>
      </section>

      <section id="story" className="relative bg-tag-cream px-5 py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute -left-4 top-12 font-heading text-[12rem] font-bold leading-none text-transparent opacity-50 [-webkit-text-stroke:1px_var(--tag-line)]">DREAM</div>
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.9fr] lg:items-end">
          <h2 className="max-w-2xl font-heading text-4xl font-bold leading-[.98] sm:text-5xl lg:text-6xl">
            Every young person deserves the opportunity to dream beyond their circumstances.
          </h2>
          <div className="max-w-xl">
            <p className="text-base leading-7 text-tag-text-body">
              TAG began as a vision laid on our hearts by God for teenagers and young adults, especially those from underprivileged communities. We provide the values, mentors, training and opportunities that help bright young people grow spiritually, academically, socially and professionally.
            </p>
            <Link className="mt-6 inline-flex items-center gap-2 border-b-2 border-tag-girls pb-1 text-sm font-bold text-tag-girls" href="/about">
              Our Story <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-tag-midnight px-5 py-20 text-tag-cream lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute -right-32 -top-24 size-[620px] rounded-full border border-white/5" />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="left"
            copy="We do not just tutor or pair mentors. We invest in the whole person, because opportunity grows best alongside identity, confidence and character."
            eyebrow="Our development pillars"
            inverse
            title="One young person. Every dimension of growth."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map(({ title, copy, icon: Icon, tone }, index) => (
              <article className={index === 4 ? "rounded-lg bg-tag-cream p-6 text-tag-midnight" : "rounded-lg bg-tag-midnight-2 p-6"} key={title}>
                <div className="flex items-start justify-between">
                  <span className={`grid size-10 place-items-center rounded-md ${tone}`}><Icon aria-hidden="true" className="size-5" /></span>
                  <span className={index === 4 ? "text-xs text-tag-text-muted" : "text-xs text-tag-text-on-dark-muted"}>0{index + 1}</span>
                </div>
                <h3 className="mt-14 text-lg font-bold leading-tight">{title}</h3>
                <p className={index === 4 ? "mt-3 text-sm leading-6 text-tag-text-body" : "mt-3 text-sm leading-6 text-tag-text-on-dark-body"}>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="programmes" className="bg-tag-cream px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="left" eyebrow="Programmes" title="Two hubs. One mission. Find your people." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-xl bg-tag-boys text-white shadow-elev-card">
              <div className="relative min-h-72 overflow-hidden">
                <Image alt="Young men learning and building together" className="object-cover mix-blend-luminosity" fill sizes="(max-width:1024px) 100vw, 50vw" src="/images/tag-hero.png" />
                <div className="absolute inset-0 bg-tag-boys-photo/55" />
                <p className="absolute bottom-5 left-6 text-xs font-semibold text-tag-text-on-royal">Built to cultivate character, courage and purpose.</p>
              </div>
              <div className="p-7 sm:p-9">
                <div className="flex flex-wrap gap-2"><Badge variant="gold">9 months</Badge><Badge className="bg-white/15 text-white">Ages 14–18</Badge></div>
                <h3 className="mt-5 text-3xl font-bold">Boys Mentoring Hub</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-tag-text-on-royal">A Christ-centred journey helping boys build identity, discipline, confidence and vision through mentoring and shared challenge.</p>
                <Link className={buttonVariants({ className: "mt-7", size: "sm", variant: "inverse" })} href="/programmes/boys-mentoring-hub">Explore Boys Hub <ArrowRight aria-hidden="true" /></Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-xl bg-tag-girls text-white shadow-elev-card">
              <div className="relative min-h-72 overflow-hidden">
                <Image alt="Young women collaborating in a TAG community" className="object-cover mix-blend-luminosity" fill sizes="(max-width:1024px) 100vw, 50vw" src="/images/tag-about-community.png" />
                <div className="absolute inset-0 bg-tag-girls-photo/45" />
                <p className="absolute bottom-5 left-6 text-xs font-semibold text-white/85">A space to discover voice, confidence and leadership.</p>
              </div>
              <div className="p-7 sm:p-9">
                <div className="flex flex-wrap gap-2"><Badge variant="notice">Community</Badge><Badge className="bg-white/15 text-white">Ages 14–18</Badge></div>
                <h3 className="mt-5 text-3xl font-bold">Girls Mentorship Hub</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/85">A dedicated mentoring community helping girls strengthen identity, confidence, purpose, leadership and practical life skills.</p>
                <Link className={buttonVariants({ className: "mt-7 bg-tag-cream text-tag-girls-deep hover:bg-tag-girls-tint", size: "sm", variant: "inverse" })} href="/programmes/girls-mentorship-hub">Explore Girls Hub <ArrowRight aria-hidden="true" /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-tag-line bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-xs font-bold uppercase tracking-[.14em] text-tag-royal">Impact so far</p><h2 className="mt-2 text-3xl font-bold">Growing reach. Lasting change.</h2></div>
            <Badge variant="notice">Placeholder figures · update with verified data</Badge>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map(([value, label]) => <div key={label}><p className="font-heading text-5xl font-bold tracking-[-.04em]">{value}<span className="text-tag-gold">+</span></p><p className="mt-2 text-xs text-tag-text-muted">{label}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-tag-cream px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading align="left" copy="Professionals from technology, medicine, law, finance and beyond who give their time because someone once did the same for them." eyebrow="Mentors" title="Guidance from people who care" />
            <Link className={buttonVariants({ size: "sm", variant: "outline" })} href="/mentors">Meet Our Mentors <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map(([name, role, expertise, position], index) => (
              <article className="overflow-hidden rounded-lg border border-tag-line bg-white" key={name}>
                <div className={`h-64 bg-[url('/images/tag-mentors.png')] bg-[length:400%_auto] bg-no-repeat ${index % 2 ? "bg-tag-gold-soft" : "bg-tag-boys-tint"}`} style={{ backgroundPosition: `${position} center` }} />
                <div className="p-5">
                  <h3 className="text-lg font-bold">{name}</h3>
                  <p className="mt-1 text-sm text-tag-text-body">{role}</p>
                  <Badge className="mt-4" variant={index === 1 ? "notice" : "boys"}>{expertise}</Badge>
                  <Link className="mt-5 flex items-center gap-2 border-t border-tag-line pt-4 text-xs font-bold text-tag-royal" href="/mentors">View profile <ArrowRight aria-hidden="true" className="size-3.5" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-xs font-bold uppercase tracking-[.14em] text-tag-royal">Training &amp; resources</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Learn. Grow. <span className="text-tag-royal">Become.</span></h2></div>
            <Link className={buttonVariants({ size: "sm", variant: "dark" })} href="/training"><Video aria-hidden="true" />Watch on YouTube</Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
            <article className="overflow-hidden rounded-xl border border-tag-line bg-tag-cream">
              <div className="relative aspect-video bg-[url('/images/tag-training-library.png')] bg-[length:300%_auto] bg-left bg-no-repeat">
                <div className="absolute inset-0 bg-tag-midnight/30" />
                <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-tag-gold text-tag-midnight shadow-elev-float"><Play aria-hidden="true" className="size-6 fill-current" /></span>
              </div>
              <div className="p-6"><Badge variant="boys">Masterclass</Badge><h3 className="mt-3 text-2xl font-bold">Finding your first opportunity</h3><p className="mt-2 text-sm text-tag-text-muted">Career growth · Confidence · 48 mins</p></div>
            </article>
            <div className="grid grid-cols-2 gap-3">
              {["Career Development", "Leadership", "Technology", "Education", "Faith & Purpose", "Personal Development"].map((item, index) => (
                <Link className="flex min-h-28 flex-col justify-between rounded-lg border border-tag-line bg-tag-cream p-4 text-sm font-bold transition hover:border-tag-gold" href="/training" key={item}>
                  <span className="grid size-8 place-items-center rounded-md bg-white text-tag-royal">0{index + 1}</span>{item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tag-midnight px-5 py-20 text-tag-cream lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <Badge variant="gold">Upcoming conference</Badge>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">TAG Conference <span className="text-tag-gold">2026</span></h2>
            <p className="mt-4 text-xl font-semibold">Theme: “Conference theme”</p>
            <div className="mt-5 flex flex-wrap gap-5 text-sm text-tag-text-on-dark-body"><span>28 May 2026</span><span>London, UK</span></div>
            <div className="mt-7 grid grid-cols-2 gap-3 text-xs text-tag-text-on-dark-body">
              {["Inspiring global leaders", "Leadership panels", "Career opportunities", "Purpose-driven community"].map((item) => <span className="flex items-center gap-2" key={item}><CheckCircle2 aria-hidden="true" className="size-4 text-tag-gold" />{item}</span>)}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link className={buttonVariants({ variant: "accent" })} href="/conferences">Explore Conference <ArrowRight aria-hidden="true" /></Link><Link className={buttonVariants({ variant: "outline-inverse" })} href="/conferences"><CirclePlay aria-hidden="true" />Watch 2025 Sessions</Link></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/8] overflow-hidden rounded-xl bg-tag-royal"><Image alt="TAG conference stage and audience" className="object-cover" fill sizes="(max-width:1024px) 100vw, 55vw" src="/images/tag-conference-stage.png" /></div>
            <div className="relative aspect-video overflow-hidden rounded-lg"><Image alt="Young people learning together" className="object-cover" fill sizes="25vw" src="/images/tag-about-community.png" /></div>
            <div className="relative aspect-video overflow-hidden rounded-lg bg-tag-girls"><Image alt="TAG training session" className="object-cover mix-blend-luminosity" fill sizes="25vw" src="/images/tag-training-library.png" /></div>
          </div>
        </div>
      </section>

      <section className="bg-tag-cream px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><SectionHeading align="left" eyebrow="Testimonials" title="Real stories. Real growth." /><Badge variant="notice">Sample quotes · replace with real testimonials</Badge></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[.85fr_1.15fr_1fr]">
            <figure className="overflow-hidden rounded-xl border border-tag-line bg-white"><div className="relative min-h-80"><Image alt="TAG student sharing her experience" className="object-cover" fill sizes="(max-width:1024px) 100vw, 30vw" src="/images/tag-training-student.png" /></div><figcaption className="p-5 text-xs font-semibold">Proud of the young person I&apos;ve become.</figcaption></figure>
            <blockquote className="rounded-xl border border-tag-line bg-white p-8"><span className="text-5xl font-bold text-tag-gold">“</span><p className="mt-4 text-xl font-semibold leading-8">I didn&apos;t think people like me ended up in rooms like that. My mentor showed me the path and walked part of it with me.</p><footer className="mt-10 text-sm font-bold">Daniel O.<span className="block font-normal text-tag-text-muted">Boys Mentoring Hub · 2026</span></footer></blockquote>
            <div className="grid gap-4"><blockquote className="rounded-xl bg-tag-midnight p-7 text-tag-cream"><Badge variant="gold">Parent</Badge><p className="mt-5 text-base leading-7">“I could see the change at home within months. He is calmer, more focused, and talks about his future now.”</p><footer className="mt-6 text-sm font-bold">Parent mentor<span className="block font-normal text-tag-text-on-dark-muted">Parent story</span></footer></blockquote><blockquote className="rounded-xl bg-tag-gold-soft p-7"><Badge variant="girls">Young person</Badge><p className="mt-5 text-base leading-7">“The Girls Hub gave me words for what I want, and the confidence to say them out loud.”</p></blockquote></div>
          </div>
          <Link className="mt-8 inline-flex items-center gap-2 border-b border-tag-girls pb-1 text-sm font-bold" href="/contact">Read more stories <ArrowRight aria-hidden="true" className="size-4" /></Link>
        </div>
      </section>

      <section className="bg-tag-cream px-5 pb-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-tag-royal px-6 py-16 text-center text-white sm:px-12 lg:py-20">
          <p className="pointer-events-none absolute inset-x-0 bottom-[-2.5rem] font-heading text-[8rem] font-bold leading-none text-transparent opacity-20 [-webkit-text-stroke:1px_white]">BECOME</p>
          <div className="relative">
            <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[.98] sm:text-5xl">Potential should never be limited by circumstance.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-tag-text-on-royal">Whether you are a young person ready to grow, a parent looking for guidance, or a professional with something to give, there is a place for you at TAG.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link className={buttonVariants({ variant: "accent" })} href="#programmes">Join TAG <ArrowRight aria-hidden="true" /></Link><Link className={buttonVariants({ variant: "outline-inverse" })} href="/contact">Partner With Us</Link></div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-3 text-left sm:grid-cols-3">{[["I’m a young person", "Join a programme"], ["I’m a parent", "See how we support young people"], ["I want to help", "Mentor, volunteer or partner"]].map(([label, action]) => <Link className="rounded-lg border border-white/15 bg-white/5 p-4" href="/contact" key={label}><p className="text-[10px] font-bold uppercase tracking-[.12em] text-tag-text-on-royal">{label}</p><p className="mt-2 text-sm font-bold">{action} <ArrowRight aria-hidden="true" className="ml-1 inline size-4" /></p></Link>)}</div>
          </div>
        </div>
      </section>

      <footer className="bg-tag-midnight px-5 pb-8 pt-14 text-tag-cream lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
            <div><BrandLogo placement="footer" /><p className="mt-4 max-w-xs text-sm leading-6 text-tag-text-on-dark-body">Potential should never be limited by circumstance. Mentorship, opportunity and Christ-centred guidance for the next generation.</p></div>
            {footerColumns.map(([title, links]) => <div key={title as string}><p className="text-xs font-bold uppercase tracking-[.12em] text-tag-gold">{title}</p><div className="mt-4 space-y-3">{(links as string[]).map((label) => <Link className="text-sm text-tag-text-on-dark-body hover:text-white" href={label === "Boys Mentoring Hub" ? "/programmes/boys-mentoring-hub" : label === "Girls Mentorship Hub" ? "/programmes/girls-mentorship-hub" : label === "Apply now" ? "/apply" : "/contact"} key={label}>{label}</Link>)}</div></div>)}
          </div>
          <div className="mt-12 flex flex-col gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-xs text-tag-text-on-dark-body sm:flex-row sm:items-center sm:justify-between"><span className="flex items-center gap-2"><ShieldCheck aria-hidden="true" className="size-4 text-tag-gold" />Safeguarding comes first. Every mentor is vetted and trained.</span><Link className="font-bold text-tag-gold" href="/contact">Read our safeguarding approach <ArrowRight aria-hidden="true" className="ml-1 inline size-3.5" /></Link></div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-tag-text-on-dark-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Teens Academy Global. All rights reserved.</p><div className="flex gap-5"><Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link></div></div>
        </div>
      </footer>
    </main>
  );
}
