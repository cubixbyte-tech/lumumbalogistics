"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/site";
import { Logo } from "./logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white/95 shadow-[0_1px_0_rgba(0,11,30,.05)] backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>
          ))}
        </nav>
        <Link href="/#quote" className="header-cta !hidden md:!inline-flex">Ship Freight</Link>
        <button className="rounded-full p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container flex flex-col gap-2 border-t border-navy/10 bg-white py-4 md:hidden">
          {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold text-navy hover:bg-gold/10">{item.label}</Link>)}
          <Link href="/#quote" onClick={() => setOpen(false)} className="button-primary mt-2">Ship Freight</Link>
        </nav>
      )}
    </header>
  );
}
