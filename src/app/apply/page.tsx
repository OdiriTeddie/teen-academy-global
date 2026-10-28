import type { Metadata } from "next";
import { ApplicationFlow } from "@/components/application-flow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Join a Programme | Teens Academy Global",
  description: "Apply to join a Teens Academy Global mentoring programme.",
};

export default function ApplyPage() {
  return (
    <main className="bg-tag-cream text-tag-text">
      <SiteHeader />
      <section className="px-5 pb-24 pt-12 lg:px-8 lg:pb-32 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-tag-royal">Application</p>
          <h1 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-bold leading-[.92] tracking-[-.05em]">Join a TAG programme</h1>
          <div className="mt-12"><ApplicationFlow /></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
