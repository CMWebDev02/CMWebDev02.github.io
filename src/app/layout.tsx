import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/containers/main-layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CMWebDev Portfolio",
  description:
    "A showcase of the projects I have created or worked on along and the certifications and degrees I have acquired, along with some information about me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col w-screen h-screen bg-primary-background`}
      >
        <NavBar />
        <main className="w-full h-full flex flex-col gap-5 justify-around items-center overflow-auto p-3">
          {children}
        </main>
      </body>
    </html>
  );
}
