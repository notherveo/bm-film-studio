import * as React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "CINEMA — A Film Production Studio",
  description:
    "CINEMA is an independent film production studio. We craft visual stories that linger.",
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased text-cream bg-black selection:bg-gold selection:text-black`}
      >
        <header className="site-header" />
        <main>{children}</main>
        <footer className="site-footer" />
      </body>
    </html>
  );
}
