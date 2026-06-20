import localFont from "next/font/local";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acesols.com"),
  title: {
    default: "Ace Solutions",
    template: "%s | Ace Solutions",
  },
  description:
    "Ace Solutions builds enterprise software, AI systems, secure cloud platforms, and high-performance digital products.",
  keywords: [
    "Ace Solutions",
    "enterprise software",
    "AI systems",
    "cloud platforms",
    "software development",
    "cybersecurity",
  ],
  authors: [{ name: "Ace Solutions" }],
  creator: "Ace Solutions",
  publisher: "Ace Solutions",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Ace Solutions",
    description:
      "Enterprise software, AI systems, secure cloud platforms, and high-performance digital products.",
    siteName: "Ace Solutions",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ace Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ace Solutions",
    description:
      "Enterprise software, AI systems, secure cloud platforms, and high-performance digital products.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <base target="_blank" />
      </head>
      <body className={`${dmSans.variable} antialiased`}>
        <StyleGlideProvider />
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
