import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Boxes,
  CheckCircle2,
  Clock3,
  Cog,
  Map,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { FAQ } from "@/components/faq";
import { QuoteForm } from "@/components/quote-form";
import { SectionHeading } from "@/components/section-heading";
import { benefits, siteConfig } from "@/lib/site";

const icons = { Truck, ScanLine, ShieldCheck, Clock3, Map, BadgeCheck };
const servicePoints = [
  "53-foot dry van specialization",
  "Real-time GPS visibility",
  "High-value cargo protection",
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="hero-section relative flex min-h-screen items-center overflow-hidden">
        <Image
          src="/images/hero/hero-truck.png"
          alt="Semi truck transporting freight on an American highway"
          fill
          priority
          className="hero-image object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
          <div className="relative py-24 px-6 lg:px-24">
          {/* <span className="hero-marker block" aria-hidden="true">
            <span />
          </span> */}
          <h1 className="hero-title text-white">
            Delivering Freight With
            <br />
            Reliability,{" "}
            <span className="text-gold">
              Leadership &amp;
              <br />
              Precision.
            </span>
          </h1>
          <p className="hero-copy">
            Lumumba Logistics provides professional 53-foot dry van
            transportation services, helping businesses move freight safely,
            efficiently, and on time across the United States.
          </p>
          <div className="hero-actions">
            <Link href="#quote" className="hero-cta hero-cta-primary">
              Request a Quote
            </Link>
            <Link href="#services" className="hero-cta hero-cta-secondary">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      <section id="why-us" className="section scroll-mt-20">
        <div className="container">
          <SectionHeading
            eyebrow="The Lumumba Standard"
            title="Why Partner With Us"
            centered
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([icon, title, text]) => {
              const Icon = icons[icon];
              return (
                <article key={title} className="card feature-card">
                  <span className="feature-icon">
                    <Icon size={23} />
                  </span>
                  <h3 className="mt-6 text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="section scroll-mt-20 bg-[#f3f4f5]">
        <div className="container">
          <SectionHeading
            eyebrow="Our Solutions"
            title="Comprehensive Transportation Services"
            text="End-to-end logistics coordination designed for high-performance commercial shipping."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-navy p-10 text-white lg:col-span-2 lg:p-12">
              <Image
                src="/images/services/freight-trailer.png"
                alt="Freight trailer at a distribution facility"
                fill
                className="object-contain opacity-45"
                sizes="(max-width:1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
              <div className="relative z-10 flex h-full max-w-lg flex-col justify-center">
                <p className="eyebrow !text-gold">Primary Service</p>
                <h3 className="text-3xl !text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                  Full Truckload Transportation
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/65">
                  We specialize in Full Truckload services across the lower 48
                  states, utilizing our premium fleet to ensure your products
                  reach their destination securely.
                </p>
                <ul className="mt-6 space-y-3">
                  {servicePoints.map((x) => (
                    <li key={x} className="flex gap-2 text-xs">
                      <CheckCircle2 size={15} className="text-gold" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            <article className="card service-small-card service-small-card-top">
              <span className="feature-icon"><Sparkles size={23} /></span>
              <h3 className="mt-6 text-xl">Regional & Long Haul</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Strategic lane management for both short-range regional loops
                and cross-country long haul routes.
              </p>
            </article>
            <article className="card service-small-card">
              <span className="feature-icon"><Boxes size={23} /></span>
              <h3 className="mt-6 text-xl">Dedicated Solutions</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Customized transportation agreements to provide guaranteed
                capacity for your recurring freight needs.
              </p>
            </article>
            <article className="rounded-[2rem] bg-gold p-10 lg:col-span-2 lg:p-16">
              <div className="flex h-full items-center justify-between gap-6">
                <div>
                  <p className="eyebrow">Operations</p>
                  <h3 className="text-3xl">Logistics Coordination</h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-navy/65">
                    Advanced fleet operations management that optimizes every
                    mile. Our centralized control center handles the complex
                    coordination of your supply chain with absolute precision.
                  </p>
                </div>
                <span className="hidden h-24 w-24 shrink-0 place-items-center rounded-full bg-navy/8 md:grid">
                  <Cog size={34} />
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="fleet" className="section scroll-mt-20">
        <div className="container grid items-center gap-20 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Assets"
              title="Modern Fleet Operations"
              text="We invest in the best because your freight deserves nothing less. Our fleet and operating standards support safe, transparent service."
            />
            <ul className="space-y-4 text-sm font-semibold text-navy">
              {[
                "New model 53-foot dry van trailers",
                "Air ride suspension for cargo protection",
                "Real-time asset tracking and geofencing",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-gold/20">
                    <CheckCircle2 size={13} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/images/fleet/fleet-yard.png"
              alt="Organized commercial truck fleet"
              width={900}
              height={620}
              className="aspect-[16/9] rounded-[2.5rem] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 left-6 rounded-xl bg-navy p-5 text-white shadow-xl">
              <strong className="block text-3xl text-gold">100%</strong>
              <span className="text-[9px] font-bold tracking-wider">
                ASSET-BASED RELIABILITY
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="safety" className="section scroll-mt-20 bg-[#f3f4f5]">
        <div className="container grid items-center gap-20 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Image
              src="/images/safety/safety-inspection.png"
              alt="Professional logistics safety inspection"
              width={900}
              height={700}
              loading="eager"
              className="aspect-[16/9] rounded-[2.5rem] object-cover shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Operational Excellence"
              title="Safety & Compliance First"
              text="Lumumba Logistics maintains a culture of safety that permeates every level of our organization. From rigorous driver training to proactive vehicle maintenance, we ensure every shipment meets the highest regulatory standards."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <h3 className="text-sm">DOT Compliant</h3>
                <p className="mt-2 text-xs leading-6 text-muted">
                  Standards aligned with federal transportation requirements.
                </p>
              </div>
              <div>
                <h3 className="text-sm">Driver Excellence</h3>
                <p className="mt-2 text-xs leading-6 text-muted">
                  Ongoing professional development and safety-first
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section scroll-mt-18">
        <div className="container grid items-center gap-20 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About Lumumba"
              title="Leadership & Resilience in Motion"
              text="Lumumba Logistics was founded on the principles of leadership, resilience, and operational excellence. We are not just a carrier; we are a modern transportation partner dedicated to bridging the gap between high-tech logistics and the personal touch our clients deserve."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <p className="text-xs leading-6 text-muted">
                <b className="block text-navy">Proven Leadership</b>Decades of
                combined industry experience guiding our fleet.
              </p>
              <p className="text-xs leading-6 text-muted">
                <b className="block text-navy">Cargo Security</b>Unwavering
                focus on protecting your commercial freight.
              </p>
            </div>
          </div>
          <Image
            src="/images/leadership/leader.png"
            alt="Leadership"
            width={900}
            height={700}
            className="aspect-[2/2] rounded-[2.5rem] object-cover shadow-2xl"
          />
        </div>
      </section>

      <section id="faq" className="faq-section scroll-mt-20 bg-white">
        <div className="container faq-layout">
          <div className="faq-heading">
            <p className="eyebrow">Information</p>
            <h2>Transportation FAQ</h2>
            <p className="mt-4 max-w-sm text-muted">Clear answers about our freight services, safety standards, and nationwide operations.</p>
          </div>
          <FAQ />
        </div>
      </section>
      <section id="quote" className="section scroll-mt-20">
        <div className="container">
          <div className="grid items-center gap-8 rounded-[1.5rem] bg-navy p-4 text-white sm:gap-12 sm:rounded-[3rem] sm:p-8 lg:grid-cols-2 lg:gap-20 lg:p-24">
            <div className="min-w-0">
              <p className="eyebrow text-gold!">Start a conversation</p>
              <h2 className="text-white!">Ready to Optimize Your Logistics?</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                Partner with a transportation team that values your freight as
                much as you do. Let&apos;s move your business forward today.
              </p>
            </div>
            <div className="w-full min-w-0">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
