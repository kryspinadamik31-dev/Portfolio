import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "NextByte — Tworzenie nowoczesnych stron internetowych dla firm",

  description:
    "NextByte projektuje szybkie, responsywne i nowoczesne strony internetowe dla firm, landing page, portfolio oraz strony premium.",

  keywords: [
    "NextByte",
    "strony internetowe",
    "tworzenie stron internetowych",
    "strony dla firm",
    "landing page",
    "nowoczesne strony www",
    "projektowanie stron internetowych",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextByte — Nowoczesne strony internetowe dla firm",

    description:
      "Tworzenie stron internetowych, landing page i portfolio dla firm.",

    url: "https://www.nextbyte.com.pl",

    siteName: "NextByte",

    locale: "pl_PL",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}