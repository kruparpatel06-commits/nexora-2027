import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "NEXORA 2027 — The Future of Business Conference",
  description:
    "Think Beyond Today. Lead What’s Next. Two-day business conference on AI, entrepreneurship, leadership and innovation. 14–15 January 2027 | JNMC, Belagavi, Karnataka",
  keywords: [
    "NEXORA 2027",
    "business conference",
    "AI",
    "entrepreneurship",
    "Belagavi",
    "Karnataka",
    "students",
    "startups",
  ],
  openGraph: {
    title: "NEXORA 2027 — The Future of Business Conference",
    description: "Think Beyond Today. Lead What’s Next.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#10152B] text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
