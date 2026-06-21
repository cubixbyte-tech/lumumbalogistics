import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="rounded-t-[3rem] bg-navy text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div><Logo light /><p className="mt-5 max-w-xs text-sm leading-6 text-white/60">{siteConfig.description}</p></div>
        <div><h3 className="footer-title">Company</h3><Link href="/#why-us">About our values</Link><Link href="/#safety">Safety</Link></div>
        <div><h3 className="footer-title">Transportation</h3>{navItems.slice(0, 2).map(i => <Link key={i.href} href={i.href}>{i.label}</Link>)}</div>
        <div><h3 className="footer-title">Contact</h3><a href={`tel:${siteConfig.phone}`}><Phone size={14}/>{siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`}><Mail size={14}/>{siteConfig.email}</a></div>
      </div>
      <div className="container flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-white/50 sm:flex-row sm:justify-between">
        <span>&copy; {new Date().getFullYear()} Lumumba Logistics. All rights reserved.</span>
        <span className="flex gap-5"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms & Conditions</Link></span>
      </div>
    </footer>
  );
}
