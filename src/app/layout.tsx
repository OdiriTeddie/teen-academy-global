import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Teens Academy Global",
  description:
    "TAG equips teenagers and young adults with faith-rooted mentorship, resources, opportunities, and holistic support.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", figtree.variable)}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
