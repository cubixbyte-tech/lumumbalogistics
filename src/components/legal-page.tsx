import Link from "next/link";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="pt-18">
      <section className="bg-navy py-24 text-white">
        <div className="container">
          <nav className="mb-4 text-sm text-white/70">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="opacity-90">{title}</span>
          </nav>
          <p className="eyebrow !text-gold">Legal Information</p>
          <h1 className="text-4xl !text-white sm:text-6xl">{title}</h1>
          <p className="mt-4 text-sm text-white/60">Effective date: June 15, 2026</p>
        </div>
      </section>
      <article className="container prose-legal py-16">{children}</article>
    </main>
  );
}
