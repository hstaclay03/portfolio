import type { Metadata } from "next";
import { Libre_Franklin, Montserrat, Inter } from "next/font/google";
import "./globals.css";

/* Display font for the name — closest Google Fonts match to Franklin Gothic */
const libreFranklin = Libre_Franklin({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hanin Taclay — Full-Stack Developer",
  description:
    "Frontend developer crafting performant, accessible, and visually stunning web experiences with React, Next.js, and modern web technologies.",
  keywords:
    "frontend developer, React, Next.js, TypeScript, portfolio, Hanin Taclay, web developer",
  authors: [{ name: "Hanin Taclay" }],
  openGraph: {
    title: "Hanin Taclay — Full-Stack Developer",
    description:
      "Frontend developer crafting performant, accessible, and visually stunning web experiences.",
    url: siteUrl,
    siteName: "Hanin Taclay",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanin Taclay — Full-Stack Developer",
    description:
      "Frontend developer crafting performant, accessible, and visually stunning web experiences.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F0F1A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${libreFranklin.variable} ${montserrat.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
