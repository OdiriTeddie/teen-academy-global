"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, MapPin, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mentors = [
  { name: "Dr. Eliana Boateng", role: "Software Engineer", field: "Technology", location: "London, UK", copy: "Builds products used by millions and loves helping first-time coders find their footing.", asset: "old", position: "0%" },
  { name: "Marcus Chen", role: "Medical Doctor", field: "Medicine", location: "Lagos, Nigeria", copy: "Guides aspiring medics through exams, applications and the realities of the job.", asset: "old", position: "33.333%" },
  { name: "Sarah Jenkins", role: "Corporate Lawyer", field: "Law", location: "Abuja, Nigeria", copy: "Helps young people think clearly, argue well and explore careers in law.", asset: "old", position: "66.666%" },
  { name: "David Owusu", role: "Finance Analyst", field: "Finance", location: "Manchester, UK", copy: "Makes money make sense through budgeting, saving and careers in finance.", asset: "old", position: "100%" },
  { name: "Amina Al-Mansoor", role: "Civil Engineer", field: "Engineering", location: "Birmingham, UK", copy: "Shows how maths and curiosity become bridges, roads and real-world impact.", asset: "new", position: "0%" },
  { name: "Samuel Adebayo", role: "Founder & CEO", field: "Business", location: "Lagos, Nigeria", copy: "Started with nothing but an idea and now coaches young entrepreneurs.", asset: "new", position: "50%" },
  { name: "Grace Mensah", role: "Secondary School Teacher", field: "Education", location: "Leeds, UK", copy: "Helps students build study habits, confidence and a plan for what comes next.", asset: "new", position: "100%" },
];

const filters = ["All", "Technology", "Finance", "Medicine", "Engineering", "Business", "Education", "Law"];

export function MentorDirectory() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");

  const visibleMentors = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return mentors.filter((mentor) => {
      const matchesFilter = activeFilter === "All" || mentor.field === activeFilter;
      const matchesQuery = !normalizedQuery || [mentor.name, mentor.role, mentor.field, mentor.location].some((value) => value.toLowerCase().includes(normalizedQuery));
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <>
      <section className="relative z-10 -mt-20 px-5 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-tag-line bg-white p-5 shadow-elev-float sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative flex-1">
              <span className="sr-only">Search mentors by role or location</span>
              <Search aria-hidden="true" className="absolute left-4 top-1/2 z-10 size-5 -translate-y-1/2 text-tag-text-muted" />
              <Input className="pl-12" onChange={(event) => setQuery(event.target.value)} placeholder="Search by role or location" type="search" value={query} />
            </label>
            <p aria-live="polite" className="shrink-0 text-sm font-semibold text-tag-text-muted">{visibleMentors.length} {visibleMentors.length === 1 ? "mentor" : "mentors"}</p>
          </div>
          <div aria-label="Filter mentors by expertise" className="mt-4 flex flex-wrap gap-2">
            {filters.map((filter) => <Button aria-pressed={activeFilter === filter} key={filter} onClick={() => setActiveFilter(filter)} size="sm" type="button" variant={activeFilter === filter ? "dark" : "outline"}>{filter}</Button>)}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 pt-8 lg:px-8 lg:pb-32">
        {visibleMentors.length > 0 ? (
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {visibleMentors.map((mentor, index) => (
              <article className="overflow-hidden rounded-xl border border-tag-line bg-white transition hover:-translate-y-1 hover:shadow-elev-card motion-reduce:hover:translate-y-0" key={mentor.name}>
                <div className={`relative aspect-[4/5] bg-no-repeat ${mentor.asset === "old" ? "bg-[url('/images/tag-mentors.png')] bg-[length:400%_auto]" : "bg-[url('/images/tag-mentor-directory.png')] bg-[length:auto_100%]"}`} style={{ backgroundPosition: `${mentor.position} center` }}>
                  <Badge className="absolute left-3 top-3 bg-tag-cream/90 text-tag-midnight backdrop-blur" variant="outline"><MapPin aria-hidden="true" className="size-3" />{mentor.location}</Badge>
                  <p className="absolute inset-x-4 bottom-4 text-[11px] font-semibold text-white drop-shadow">Portrait · {index % 2 === 0 ? "natural light, warm and approachable" : "in a mentoring setting"}</p>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold">{mentor.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-tag-text-body">{mentor.role}</p>
                  <p className="mt-4 min-h-20 text-sm leading-6 text-tag-text-muted">{mentor.copy}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-tag-line pt-4">
                    <Badge variant={mentor.field === "Business" ? "notice" : "boys"}>{mentor.field}</Badge>
                    <Link className="inline-flex items-center gap-1 text-xs font-bold text-tag-royal" href="/contact">View profile <ArrowRight aria-hidden="true" className="size-3.5" /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-tag-line-strong bg-white px-6 py-16 text-center">
            <h2 className="text-2xl font-bold">No mentors match that search yet</h2>
            <p className="mt-3 text-sm text-tag-text-muted">Try another role, location or expertise area.</p>
            <Button className="mt-6" onClick={() => { setActiveFilter("All"); setQuery(""); }} size="sm" type="button" variant="outline">Clear filters</Button>
          </div>
        )}
      </section>
    </>
  );
}
