import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Lumumba Logistics website terms and conditions.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};
export default function Terms() { return <LegalPage title="Terms & Conditions"><p>These terms govern use of the Lumumba Logistics website. This placeholder legal content should be reviewed by qualified legal counsel before launch.</p><h2>Website Use</h2><p>You may use this website for lawful informational and business-inquiry purposes. You may not disrupt the website, misuse its content, or attempt unauthorized access.</p><h2>Quote Requests</h2><p>Website quote requests are inquiries only and do not create a binding transportation agreement. Services are subject to written confirmation, capacity, pricing, and applicable agreements.</p><h2>Content and Availability</h2><p>We aim to keep website information accurate but do not guarantee that all content is complete, current, or continuously available.</p><h2>Limitation of Liability</h2><p>To the extent permitted by law, Lumumba Logistics is not liable for indirect losses arising from website use or reliance on website information.</p><h2>Contact</h2><p>Questions about these terms may be sent to dispatch@lumumbalogistics.com.</p></LegalPage> }
