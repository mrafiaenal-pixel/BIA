
import type { Metadata } from "next";
import { Syne, DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/navbar-wrapper";

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-syne" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-plus-jakarta" });

export const metadata: Metadata = {
  title: "TaniSmart - IoT Agriculture",
  description: "IoT Plant Nutrition Monitoring System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmMono.variable} ${plusJakarta.variable} font-sans`}>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
