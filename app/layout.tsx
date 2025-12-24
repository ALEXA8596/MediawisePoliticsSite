import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Static Blog",
  description: "A blog built with Next.js and Markdown",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors uppercase tracking-wider">
              Leland PoliMediaWise
            </Link>
            <div className="space-x-6 hidden md:block">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium uppercase text-sm tracking-wide">
                Home
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-900 font-medium uppercase text-sm tracking-wide">
                Resources
              </Link>
              <Link href="/bill-analysis" className="text-gray-600 hover:text-gray-900 font-medium uppercase text-sm tracking-wide">
                Bill Analysis
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium uppercase text-sm tracking-wide">
                About
              </Link>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-zinc-900 text-white mt-20 py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Leland PoliMediaWise</h3>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Leland PoliMediaWise. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
