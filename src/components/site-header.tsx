"use client";

import Link from "next/link";
import { Logo } from "./logo";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white/95 shadow-[0_1px_0_rgba(0,11,30,.05)] backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        {/**
        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>
          ))}
        </nav>
        */}
        <Link href="/#quote" className="header-cta !hidden md:!inline-flex">Ship Freight</Link>
        {/* Hamburger removed for all screen sizes per request */}
      </div>
      {/** mobile nav intentionally removed */}
    </header>
  );
}
