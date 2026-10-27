"use client";

import { useState } from "react";
import { Play, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const tabs = ["Young People", "Parents", "Mentors"];

export function TestimonialWall() {
  const [activeTab, setActiveTab] = useState("Young People");

  return (
    <section className="px-5 pb-20 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div aria-label="Choose testimonial audience" className="inline-flex rounded-full border border-tag-line bg-white p-1">
          {tabs.map((tab) => <Button aria-pressed={activeTab === tab} key={tab} onClick={() => setActiveTab(tab)} size="xs" type="button" variant={activeTab === tab ? "dark" : "ghost"}>{tab}{tab === "Mentors" && <Badge className="ml-1" variant="notice">Soon</Badge>}</Button>)}
        </div>

        {activeTab === "Mentors" ? (
          <div className="mt-8 rounded-2xl border border-dashed border-tag-line-strong bg-white px-6 py-20 text-center"><h2 className="text-3xl font-bold">Mentor stories are coming soon</h2><p className="mt-3 text-tag-text-muted">We&apos;re collecting reflections from the people walking alongside our young people.</p></div>
        ) : (
          <div className="mt-8 grid items-start gap-5 md:grid-cols-3">
            <div className="grid gap-5">
              <article className="overflow-hidden rounded-2xl border border-tag-line bg-white"><div className="relative aspect-[4/3] bg-[url('/images/tag-training-student.png')] bg-cover bg-center"><div className="absolute inset-0 bg-tag-midnight/20" /><p className="absolute bottom-4 left-4 text-xs font-semibold text-white">Portrait of a TAG learner</p></div><blockquote className="p-6 text-xl font-bold leading-7">“I didn&apos;t think people like me ended up in rooms like that. My mentor showed me the path and walked part of it with me.”<footer className="mt-6 text-xs">Name, 17<span className="block font-normal text-tag-text-muted">Boys Mentoring Hub · City</span></footer></blockquote></article>
              <blockquote className="rounded-2xl bg-tag-girls p-7 text-white"><Quote aria-hidden="true" className="size-7 fill-tag-gold text-tag-gold" /><p className="mt-6 text-xl font-semibold leading-8">{activeTab === "Parents" ? "I can see the confidence growing at home. The support feels personal and safe." : "The Girls Hub gave me words for what I want, and the confidence to say them out loud."}</p><footer className="mt-7 text-xs font-bold">Name, 16<span className="block font-normal text-white/70">Girls Mentorship Hub</span></footer></blockquote>
            </div>

            <div className="grid gap-5">
              <article className="rounded-2xl bg-tag-midnight p-3 text-white"><div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[url('/images/tag-about-community.png')] bg-cover bg-center"><div className="absolute inset-0 bg-tag-royal/35" /><button aria-label="Play internship story" className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-tag-gold text-tag-midnight" type="button"><Play aria-hidden="true" className="size-5 fill-current" /></button><span className="absolute right-3 top-3 rounded bg-tag-midnight px-2 py-1 text-[10px]">2:45</span></div><h2 className="mt-4 px-2 text-lg font-bold">How I got my first internship</h2><p className="px-2 pb-2 text-xs text-tag-text-on-dark-muted">Name, 18 · Career mentoring</p></article>
              <blockquote className="rounded-2xl bg-white p-7"><Quote aria-hidden="true" className="size-7 fill-tag-gold text-tag-gold" /><p className="mt-5 text-lg leading-7">I used to hide at the back. Last month I spoke in front of two hundred people at the conference.</p><footer className="mt-6 text-xs font-bold">Name, 15<span className="block font-normal text-tag-text-muted">TAG Conference</span></footer></blockquote>
              <blockquote className="rounded-2xl bg-tag-gold-soft p-7"><Quote aria-hidden="true" className="size-7 fill-tag-girls text-tag-girls" /><p className="mt-5 text-lg leading-7">My mentor never told me what to do. She asked better questions until I knew.</p><footer className="mt-6 text-xs font-bold">Name, 18<span className="block font-normal text-tag-text-muted">Girls Mentorship Hub</span></footer></blockquote>
            </div>

            <div className="grid gap-5">
              <article className="overflow-hidden rounded-2xl border border-tag-line bg-white"><div className="relative aspect-[4/3] bg-[url('/images/tag-hero.png')] bg-cover bg-center"><div className="absolute inset-0 bg-tag-royal/30" /><p className="absolute bottom-4 left-4 text-xs font-semibold text-white">Portrait of a TAG learner</p></div><blockquote className="p-6 text-xl font-bold leading-7">“Faith used to feel like rules. At TAG it started to feel like purpose.”<footer className="mt-6 text-xs">Name, 17<span className="block font-normal text-tag-text-muted">Boys Mentoring Hub</span></footer></blockquote></article>
              <blockquote className="rounded-2xl bg-tag-royal p-7 text-white"><Quote aria-hidden="true" className="size-7 fill-tag-gold text-tag-gold" /><p className="mt-5 text-lg leading-7">I finally have a plan for university, and people checking in to make sure I stick to it.</p><footer className="mt-6 text-xs font-bold">Name, 18<span className="block font-normal text-white/70">Education mentoring</span></footer></blockquote>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
