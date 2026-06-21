import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Lumumba Logistics website privacy policy.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};
export default function Privacy() { return <LegalPage title="Privacy Policy"><p>This policy explains how Lumumba Logistics collects, uses, and protects information submitted through this website. This placeholder policy should be reviewed by qualified legal counsel before launch.</p><h2>Information We Collect</h2><p>We may collect contact, company, shipment, and communication details that you voluntarily provide through our quote request form or direct communications.</p><h2>How We Use Information</h2><p>Information is used to respond to inquiries, prepare transportation quotes, provide requested services, improve our website, and meet legal obligations.</p><h2>Cookies and Analytics</h2><p>We may use essential cookies and privacy-conscious analytics to understand website performance. We do not sell personal information.</p><h2>Data Sharing and Security</h2><p>Information may be shared with service providers only as needed to operate our business. We use reasonable safeguards, but no internet transmission is completely secure.</p><h2>Your Choices</h2><p>You may request access, correction, or deletion of your information by contacting dispatch@lumumbalogistics.com.</p></LegalPage> }
