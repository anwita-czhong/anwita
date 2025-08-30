import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anwita Biosciences Inc.",
  description:
    "Anwita Biosciences, Inc. is a clinical stage biopharmaceutical company headquartered in the San Francisco Bay Area. Our mission is to deliver transformative treatment options to improve the lives of patients with cancer and autoimmune diseases.",
  keywords: ["Anwita", "Bioscience", "Anwita Bioscience", "Anwita Bio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
