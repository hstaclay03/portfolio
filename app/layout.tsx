import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const displayFont = Lora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "700",
  style: ["normal", "italic"],
  display: "swap",
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hanin Taclay — Quality-Assurance Tester",
  description:
    "I find the bugs others miss, track them through Jira, and make sure every release ships clean and stable. Detail-obsessed and comfortable across manual and automated testing.",
  keywords:
    "frontend developer, React, Next.js, TypeScript, portfolio, Hanin Taclay, web developer",
  authors: [{ name: "Hanin Taclay" }],
  openGraph: {
    title: "Hanin Taclay — Quality-Assurance Te",
    description:
      "Frontend developer crafting performant, accessible, and visually stunning web experiences.",
    url: siteUrl,
    siteName: "Hanin Taclay",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanin Taclay — Quality-Assurance Teste",
    description:
      "Frontend developer crafting performant, accessible, and visually stunning web experiences.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#efe5d6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
