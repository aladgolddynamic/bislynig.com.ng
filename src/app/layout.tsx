import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://bislynig.com.ng'),
  title: "Bisly Nigeria Limited | Empowering Businesses Through Innovative Technology",
  description: "Bisly Nigeria Limited - A premium technology consulting firm specializing in digital transformation, software development, and ICT infrastructure.",
  keywords: ["Technology Consulting", "Software Development", "ERP Systems", "Cybersecurity", "ICT Infrastructure", "Nigeria Tech", "Digital Transformation"],
  authors: [{ name: "Bisly Nigeria Limited" }],
  openGraph: {
    title: "Bisly Nigeria Limited | Innovative Tech Solutions",
    description: "Empowering businesses through digital transformation, software development, and robust ICT infrastructure.",
    url: "https://bislynig.com.ng",
    siteName: "Bisly Nigeria Limited",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bisly Nigeria Limited | Innovative Tech Solutions",
    description: "Premium technology consulting and digital transformation services in Nigeria.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased text-[#1A1A1A] bg-gray-100`}>
        {children}
      </body>
    </html>
  );
}
