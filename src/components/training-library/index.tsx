"use client";

import { useMemo, useState } from "react";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const sessions = [
  { category: "Career Development", title: "Building a CV that gets noticed", speaker: "Recruiter", duration: "18:42", image: "0%" },
  { category: "Technology & Digital Skills", title: "Your first steps into coding", speaker: "Software Engineer", duration: "24:10", image: "50%" },
  { category: "Leadership", title: "Leading before you have the title", speaker: "Youth Leader", duration: "15:05", image: "100%" },
  { category: "Personal Development", title: "Confidence is a skill, not a trait", speaker: "Coach", duration: "12:30", image: "0%" },
  { category: "Faith & Purpose", title: "Identity: who God says you are", speaker: "Pastor", duration: "21:16", image: "50%" },
  { category: "Education", title: "Study habits that actually work", speaker: "Teacher", duration: "16:48", image: "100%" },
  { category: "Financial Literacy", title: "Money basics: earn, save, give", speaker: "Finance Analyst", duration: "19:20", image: "0%" },
  { category: "Communication", title: "Speaking up in the room", speaker: "Public Speaker", duration: "14:02", image: "50%" },
  { category: "Entrepreneurship", title: "From idea to first customer", speaker: "Founder", duration: "27:35", image: "100%" },
];

const filters = ["All", ...sessions.map((session) => session.category)];

export function TrainingLibrary() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleSessions = useMemo(
    () => activeFilter === "All" ? sessions : sessions.filter((session) => session.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-5">
          <h2 className="text-4xl font-bold tracking-[-.035em] sm:text-5xl">Browse the library</h2>
          <p aria-live="polite" className="pb-2 text-xs font-semibold text-tag-text-muted">{visibleSessions.length} {visibleSessions.length === 1 ? "session" : "sessions"}</p>
        </div>
        <div aria-label="Filter training sessions" className="mt-8 flex gap-2 overflow-x-auto pb-3">
          {filters.map((filter) => <Button aria-pressed={activeFilter === filter} className="shrink-0" key={filter} onClick={() => setActiveFilter(filter)} size="xs" type="button" variant={activeFilter === filter ? "dark" : "outline"}>{filter}</Button>)}
        </div>
        <div className="mt-6 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSessions.map((session, index) => (
            <article key={session.title}>
              <div className={`group relative aspect-[16/9] overflow-hidden rounded-xl bg-[url('/images/tag-training-library.png')] bg-[length:300%_auto] bg-no-repeat ${index % 4 === 3 ? "sepia-[.35]" : ""}`} style={{ backgroundPosition: `${session.image} center` }}>
                <div className="absolute inset-0 bg-tag-midnight/20 transition group-hover:bg-tag-midnight/10" />
                <Badge className="absolute left-3 top-3" variant="gold">{session.category}</Badge>
                <button aria-label={`Play ${session.title}`} className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-tag-cream text-tag-midnight shadow-elev-button transition hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-tag-gold" type="button"><Play aria-hidden="true" className="ml-0.5 size-5 fill-current" /></button>
                <span className="absolute bottom-3 right-3 rounded bg-tag-midnight px-2 py-1 text-[10px] font-bold text-white">{session.duration}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold leading-tight">{session.title}</h3>
              <p className="mt-1 text-sm text-tag-text-muted">Speaker name · {session.speaker}</p>
              <Button className="mt-4" size="xs" type="button" variant="outline"><Play aria-hidden="true" />Watch</Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
