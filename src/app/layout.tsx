import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Lumumba Logistics | Nationwide Freight Transportation", template: "%s | Lumumba Logistics" },
  description: siteConfig.description,
  keywords: ["freight transportation", "nationwide logistics", "full truckload", "commercial freight"],
  openGraph: { title: "Lumumba Logistics", description: siteConfig.description, type: "website", images: ["/images/hero/hero-truck1.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${mono.variable}`}><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
