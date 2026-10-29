import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const columns = [
  ["Explore", ["About", "Mentors", "Trainings", "Conferences", "Testimonials", "Contact"]],
  ["Programmes", ["Boys Mentoring Hub", "Girls Mentorship Hub", "Apply now"]],
  ["Get involved", ["Become a mentor", "Volunteer", "Partner with TAG", "Donate"]],
  ["Connect", ["Instagram", "YouTube", "WhatsApp Channel"]],
];

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-tag-midnight px-5 pb-8 pt-14 text-tag-cream lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="min-w-0"><BrandLogo placement="footer" /><p className="mt-4 max-w-xs text-sm leading-6 text-tag-text-on-dark-body">Helping teenagers and young adults discover who they are, realise what is possible, and gain the guidance and opportunities to become who they were created to be.</p></div>
          {columns.map(([title, links]) => <div key={title as string}><p className="text-xs font-bold uppercase tracking-[.12em] text-tag-gold">{title}</p><div className="mt-4 grid gap-3">{(links as string[]).map((label) => <Link className="text-sm text-tag-text-on-dark-body hover:text-white" href={label === "Boys Mentoring Hub" ? "/programmes/boys-mentoring-hub" : label === "Girls Mentorship Hub" ? "/programmes/girls-mentorship-hub" : label === "Apply now" ? "/apply" : "/contact"} key={label}>{label}</Link>)}</div></div>)}
        </div>
        <div className="relative z-10 mt-12 flex w-full flex-col gap-4 rounded-lg border border-white/10 bg-tag-midnight-2 px-5 py-4 text-xs text-tag-text-on-dark-body sm:flex-row sm:items-center sm:justify-between"><span className="flex items-start gap-2 sm:items-center"><ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-tag-gold sm:mt-0" /><span><strong className="text-tag-cream">Safeguarding comes first.</strong> Every mentor is vetted and trained before working with young people.</span></span><Link className="shrink-0 font-bold text-tag-gold hover:text-tag-gold-soft" href="/contact">Read our safeguarding approach <ArrowRight aria-hidden="true" className="ml-1 inline size-3.5" /></Link></div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-tag-text-on-dark-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Teens Academy Global. All rights reserved.</p><div className="flex gap-5"><Link href="#">Privacy Policy</Link><Link href="#">Terms</Link><Link href="#">Safeguarding Policy</Link></div></div>
      </div>
    </footer>
  );
}
