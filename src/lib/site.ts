export const siteConfig = {
  name: "Lumumba Logistics",
  shortName: "Lumumba",
  description:
    "Reliable nationwide freight transportation built on precision, safety, and clear communication.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.lumumbalogistics.com",
  email: "dispatch@lumumbalogistics.com",
  phone: "(555) 123-4567",
  address: "United States",
};

export const navItems = [
  { label: "Transportation Services", href: "/#services" },
  { label: "Our Fleet", href: "/#fleet" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

export const benefits = [
  ["Truck", "Modern Fleet", "State-of-the-art 53-foot air ride equipment maintained to the highest industry standards for cargo protection."],
  ["ScanLine", "Precision Logistics", "Advanced coordination systems that ensure optimal routing and real-time tracking for every commercial shipment."],
  ["ShieldCheck", "Leadership Values", "Operating with integrity and accountability, we lead from the front in every aspect of our transportation operations."],
  ["Clock3", "Reliable Delivery", "On-time performance is our benchmark. We understand the critical nature of your supply chain and deliver with consistency."],
  ["Map", "National Coverage", "Extensive operational reach across the United States, providing comprehensive long-haul and regional solutions."],
  ["BadgeCheck", "Safety First", "Rigorous safety protocols and compliance measures ensure the security of your freight and the well-being of the public."],
] as const;

export const faqs = [
  {
    question: "What regions do you service?",
    answer:
      "Lumumba Logistics provides nationwide transportation services across the continental United States. We offer both regional focus in the Southeast and Midwest, as well as dedicated long-haul routes coast-to-coast.",
  },
  {
    question: "Do you handle high-value commercial freight?",
    answer:
      "Yes. Our 53-foot dry van fleet is specifically maintained for high-value cargo. We utilize air ride suspension, high-security seals, and continuous GPS monitoring.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "Transparency is key to our logistics coordination. Every client receives real-time updates on freight location and estimated time of arrival.",
  },
];
