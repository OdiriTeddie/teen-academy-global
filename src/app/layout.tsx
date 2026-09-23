import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teens Academy Global",
  description:
    "TAG equips teenagers and young adults with faith-rooted mentorship, resources, opportunities, and holistic support.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
