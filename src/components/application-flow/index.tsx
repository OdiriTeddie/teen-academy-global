"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { Alert } from "@/components/ui/alert";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ApplicationData = {
  programme: "Boys Mentoring Hub" | "Girls Mentorship Hub";
  firstName: string; lastName: string; dateOfBirth: string; country: string; goals: string;
  guardianName: string; relationship: string; guardianEmail: string; guardianPhone: string; consent: boolean;
};

const initialData: ApplicationData = {
  programme: "Boys Mentoring Hub", firstName: "", lastName: "", dateOfBirth: "", country: "United Kingdom", goals: "",
  guardianName: "", relationship: "Parent", guardianEmail: "", guardianPhone: "", consent: false,
};
const steps = ["Programme", "Young person", "Parent / guardian", "Review"];
const storageKey = "tag-programme-application";

export function ApplicationFlow() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ApplicationData>(initialData);
  const [hydrated, setHydrated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    const requestedProgramme = new URLSearchParams(window.location.search).get("programme");
    const restoreTimer = window.setTimeout(() => {
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as { step?: number; data?: Partial<ApplicationData> };
          if (parsed.data) setData({ ...initialData, ...parsed.data });
          if (parsed.step && parsed.step >= 1 && parsed.step <= 4) setStep(parsed.step);
        } catch { window.localStorage.removeItem(storageKey); }
      }
      if (requestedProgramme === "girls") setData((current) => ({ ...current, programme: "Girls Mentorship Hub" }));
      if (requestedProgramme === "boys") setData((current) => ({ ...current, programme: "Boys Mentoring Hub" }));
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(restoreTimer);
  }, []);

  useEffect(() => {
    if (hydrated && !submitted) window.localStorage.setItem(storageKey, JSON.stringify({ step, data }));
  }, [data, hydrated, step, submitted]);

  function update<K extends keyof ApplicationData>(key: K, value: ApplicationData[K]) { setData((current) => ({ ...current, [key]: value })); }
  function continueFlow(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setStep((current) => Math.min(4, current + 1)); }
  function submitApplication() { window.localStorage.removeItem(storageKey); setSubmitted(true); }

  return (
    <>
      <div aria-label="Application progress" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((label, index) => {
          const number = index + 1; const complete = submitted || number < step; const active = !submitted && number === step;
          return <div aria-current={active ? "step" : undefined} className={`flex min-h-16 items-center gap-3 rounded-xl px-4 font-bold ${active ? "bg-tag-midnight text-white" : complete ? "bg-tag-text-on-royal text-tag-midnight" : "bg-white text-tag-text-body"}`} key={label}><span className={`grid size-9 shrink-0 place-items-center rounded-full ${active ? "bg-tag-gold text-tag-midnight" : complete ? "bg-tag-royal text-white" : "bg-tag-sand text-tag-text-muted"}`}>{complete ? <Check aria-hidden="true" className="size-5" /> : number}</span>{label}</div>;
        })}
      </div>

      <div className="mt-8 grid items-start gap-7 lg:grid-cols-[1.45fr_.75fr]">
        <section className="rounded-2xl bg-white p-6 shadow-elev-panel sm:p-10">
          {submitted ? <Confirmation /> : step === 1 ? (
            <form onSubmit={continueFlow}><h2 className="text-3xl font-bold">Which programme?</h2><div className="mt-7 grid gap-4 sm:grid-cols-2">
              {(["Boys Mentoring Hub", "Girls Mentorship Hub"] as const).map((programme) => <label className={`cursor-pointer rounded-2xl border-2 p-6 transition ${data.programme === programme ? "border-tag-royal bg-tag-text-on-royal" : "border-tag-line-strong bg-white"}`} key={programme}><input checked={data.programme === programme} className="sr-only" name="programme" onChange={() => update("programme", programme)} type="radio" /><span className={`grid size-11 place-items-center rounded-lg text-lg font-bold text-white ${programme.startsWith("Boys") ? "bg-tag-royal" : "bg-tag-girls"}`}>{programme[0]}</span><strong className="mt-5 block text-xl">{programme}</strong><span className="mt-2 block text-sm text-tag-text-muted">{programme.startsWith("Boys") ? "9 months · Paid · Price confirmed after welcome call" : "Mentorship community · Fee details after welcome call"}</span></label>)}
            </div><FormActions first onBack={() => undefined} /></form>
          ) : step === 2 ? (
            <form onSubmit={continueFlow}><h2 className="text-3xl font-bold">About the young person</h2><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="First name"><Input onChange={(event) => update("firstName", event.target.value)} required value={data.firstName} /></Field><Field label="Last name"><Input onChange={(event) => update("lastName", event.target.value)} required value={data.lastName} /></Field><Field label="Date of birth"><Input max={new Date().toISOString().slice(0, 10)} onChange={(event) => update("dateOfBirth", event.target.value)} required type="date" value={data.dateOfBirth} /></Field><Field label="Country"><select className="h-[52px] w-full rounded-lg border border-tag-line-strong bg-tag-cream px-4 text-[15px] outline-none focus:border-tag-gold focus:ring-[3px] focus:ring-tag-gold/25" onChange={(event) => update("country", event.target.value)} value={data.country}><option>United Kingdom</option><option>Nigeria</option><option>Ghana</option><option>Other</option></select></Field></div><Field className="mt-5" label="What would you love to get out of the programme?"><Textarea onChange={(event) => update("goals", event.target.value)} required value={data.goals} /><span className="mt-2 block text-sm font-normal text-tag-text-muted">There are no wrong answers. A sentence or two is perfect.</span></Field><FormActions onBack={() => setStep(1)} /></form>
          ) : step === 3 ? (
            <form onSubmit={continueFlow}><h2 className="text-3xl font-bold">Parent or guardian</h2><Alert className="mt-6 flex gap-3" variant="info"><ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0" />Required for applicants under 18. We&apos;ll contact this person about consent and safeguarding.</Alert><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="Full name"><Input onChange={(event) => update("guardianName", event.target.value)} required value={data.guardianName} /></Field><Field label="Relationship"><select className="h-[52px] w-full rounded-lg border border-tag-line-strong bg-tag-cream px-4 text-[15px] outline-none focus:border-tag-gold focus:ring-[3px] focus:ring-tag-gold/25" onChange={(event) => update("relationship", event.target.value)} value={data.relationship}><option>Parent</option><option>Guardian</option><option>Carer</option></select></Field><Field label="Email"><Input onChange={(event) => update("guardianEmail", event.target.value)} required type="email" value={data.guardianEmail} /></Field><Field label="WhatsApp number"><Input onChange={(event) => update("guardianPhone", event.target.value)} required type="tel" value={data.guardianPhone} /></Field></div><label className="mt-6 flex items-start gap-3 text-sm leading-6"><input checked={data.consent} className="mt-1 size-5 accent-tag-royal" onChange={(event) => update("consent", event.target.checked)} required type="checkbox" />I consent to my child taking part and have read the <Link className="text-tag-royal underline" href="#">Safeguarding Policy</Link>.</label><FormActions onBack={() => setStep(2)} /></form>
          ) : (
            <div><h2 className="text-3xl font-bold">Review &amp; submit</h2><dl className="mt-6 divide-y divide-tag-line border-y border-tag-line"><ReviewRow label="Programme" value={data.programme} /><ReviewRow label="Young person" value={`${data.firstName} ${data.lastName} · ${data.dateOfBirth}`} /><ReviewRow label="Parent / guardian" value={`${data.guardianName} · ${data.guardianEmail}`} /><ReviewRow label="Fee" value="Confirmed after your welcome call" /></dl><p className="mt-6 text-sm leading-6 text-tag-text-muted">No payment is taken now. Once we&apos;ve had a short welcome call, we&apos;ll send payment details.</p><div className="mt-8 flex items-center justify-between border-t border-tag-line pt-6"><Button onClick={() => setStep(3)} type="button" variant="outline">Back</Button><Button onClick={submitApplication} type="button">Submit application <ArrowRight aria-hidden="true" /></Button></div></div>
          )}
        </section>
        <aside className="grid gap-4"><div className="rounded-2xl bg-tag-midnight p-7 text-tag-cream"><h2 className="text-2xl font-bold">Takes about 5 minutes</h2><p className="mt-4 leading-7 text-tag-text-on-dark-body">You can save and come back later. Young people and parents can fill this in together.</p></div><div className="rounded-2xl border border-tag-line bg-white p-7"><h2 className="font-bold">Questions?</h2><Link className="mt-5 inline-flex items-center gap-2 font-bold text-tag-royal underline" href="/contact"><MessageCircle aria-hidden="true" className="size-4" />Message us on WhatsApp</Link></div></aside>
      </div>
    </>
  );
}

function Field({ children, className = "", label }: { children: ReactNode; className?: string; label: string }) { return <label className={`block text-sm font-semibold ${className}`}>{label}<span className="mt-2 block">{children}</span></label>; }
function FormActions({ first = false, onBack }: { first?: boolean; onBack: () => void }) { return <div className="mt-8 flex items-center justify-between border-t border-tag-line pt-6"><Button disabled={first} onClick={onBack} type="button" variant="outline">Back</Button><Button type="submit">Continue <ArrowRight aria-hidden="true" /></Button></div>; }
function ReviewRow({ label, value }: { label: string; value: string }) { return <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"><dt className="text-tag-text-muted">{label}</dt><dd className="font-bold">{value}</dd></div>; }
function Confirmation() { return <div><span className="grid size-20 place-items-center rounded-full bg-tag-gold text-tag-midnight"><Check aria-hidden="true" className="size-9" /></span><h2 className="mt-6 text-4xl font-bold">Application received!</h2><p className="mt-4 text-lg text-tag-text-body">Welcome to the journey. Here&apos;s what happens next:</p><ol className="mt-7 grid gap-3">{["Confirmation email to you and your parent or guardian", "A short welcome call within 5 working days", "Mentor match and cohort start date confirmed"].map((item, index) => <li className="flex items-center gap-4 rounded-xl bg-tag-cream p-4" key={item}><span className="grid size-9 shrink-0 place-items-center rounded-full bg-tag-midnight font-bold text-white">{index + 1}</span>{item}</li>)}</ol><div className="mt-7 flex flex-wrap gap-3"><Link className={buttonVariants({ variant: "accent" })} href="#">Join our WhatsApp Channel</Link><Link className={buttonVariants({ variant: "outline" })} href="/">Back to home</Link></div></div>; }
