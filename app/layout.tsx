import type { Metadata } from "next";
import { Archivo_Black, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeToggle } from "@/components/theme-toggle";
import { OrganizationJsonLd } from "@/components/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = "https://uyrdu.com";

export const metadata: Metadata = {
  title: "Uniquely You! Raleigh Metro",
  description:
    "Celebrating the disability community in NC's Triangle region. A free monthly magazine connecting families, advocates, and businesses across Wake, Durham, Orange, Johnston, and Chatham counties.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "disability community",
    "Raleigh",
    "Triangle NC",
    "disability magazine",
    "Uniquely You",
    "N2 Company",
    "Wake County",
    "Durham County",
    "inclusive",
    "accessibility",
  ],
  openGraph: {
    title: "Uniquely You! Raleigh Metro",
    description:
      "Celebrating the disability community in NC's Triangle region.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Uniquely You! Raleigh Metro",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Uniquely You! Raleigh Metro — Celebrating the disability community in NC's Triangle region",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uniquely You! Raleigh Metro",
    description:
      "Celebrating the disability community in NC's Triangle region.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <OrganizationJsonLd />
        <ThemeToggle />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
