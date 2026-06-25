import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Driftless | Infrastructure without drift",
  description:
    "Driftless helps organisations design, automate and operate reliable Azure, Kubernetes and GitOps platforms.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/driftless-icon.png?v=20260625-2", type: "image/png" },
    ],
    apple: [{ url: "/driftless-icon.png?v=20260625-2", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
