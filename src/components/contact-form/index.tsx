"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const audiences = ["Teen / Young Adult", "Parent", "Mentor", "School", "Organisation", "Potential Partner", "Other"];

export function ContactForm() {
  const [audience, setAudience] = useState("Parent");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="rounded-2xl bg-white p-6 shadow-elev-panel sm:p-10" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold tracking-[-.03em] sm:text-4xl">Send us a message</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">Name<Input className="mt-2" name="name" required /></label>
        <label className="text-sm font-semibold">Email<Input className="mt-2" name="email" required type="email" /></label>
      </div>
      <label className="mt-5 block text-sm font-semibold">Phone <span className="font-normal text-tag-text-muted">(optional)</span><Input className="mt-2" name="phone" type="tel" /></label>
      <fieldset className="mt-6">
        <legend className="text-sm font-semibold">I am a...</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {audiences.map((item) => <Button aria-pressed={audience === item} key={item} onClick={() => setAudience(item)} size="xs" type="button" variant={audience === item ? "dark" : "outline"}>{item}</Button>)}
        </div>
        <input name="audience" type="hidden" value={audience} />
      </fieldset>
      <label className="mt-6 block text-sm font-semibold">Subject<Input className="mt-2" name="subject" required /></label>
      <label className="mt-6 block text-sm font-semibold">Message<Textarea className="mt-2 min-h-44" name="message" required /></label>
      <p className="mt-5 max-w-lg text-xs leading-5 text-tag-text-muted">If you&apos;re under 13, please ask a parent or guardian to get in touch for you.</p>
      {submitted && <Alert className="mt-5 flex items-center gap-2" variant="success"><CheckCircle2 aria-hidden="true" className="size-4" />Thanks. Your message is ready for our team.</Alert>}
      <Button className="mt-6" type="submit">Send message <ArrowRight aria-hidden="true" /></Button>
    </form>
  );
}
