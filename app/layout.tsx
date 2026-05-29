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
  metadataBase: new URL("https://www.nyrox.pl"),

  title: {
    default: "Nyrox — Premium Web Design Studio",
    template: "%s | Nyrox",
  },

  description:
    "Nyrox projektuje nowoczesne, szybkie i profesjonalne strony internetowe dla firm. Landing page, strony premium, portfolio i nowoczesne rozwiązania webowe.",

  keywords: [
    "Nyrox",
    "strony internetowe",
    "tworzenie stron internetowych",
    "projektowanie stron www",
    "landing page",
    "web design",
    "strony premium",
    "strony dla firm",
    "next.js",
    "frontend",
    "responsive design",
    "seo",
    "web developer",
    "portfolio",
  ],

  authors: [
    {
      name: "Nyrox",
    },
  ],

  creator: "Nyrox",
  publisher: "Nyrox",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Nyrox — Premium Web Design Studio",

    description:
      "Nowoczesne strony internetowe dla firm. Szybkie, responsywne i zaprojektowane z myślą o pozyskiwaniu klientów.",

    url: "https://www.nyrox.pl",

    siteName: "Nyrox",

    locale: "pl_PL",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nyrox",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nyrox — Premium Web Design Studio",
    description:
      "Nowoczesne strony internetowe dla firm. Landing page, portfolio i strony premium.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://www.nyrox.pl",
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
      <body className="min-h-full flex flex-col bg-[#030005] text-white">
        {children}
      </body>
    </html>
  );
}