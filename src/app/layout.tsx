import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Teens Academy Global",
  description:
    "TAG equips teenagers and young adults with faith-rooted mentorship, resources, opportunities, and holistic support.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", display.variable, body.variable)}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
