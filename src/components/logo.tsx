import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center" aria-label="Lumumba Logistics home">
      <Image src="/images/lumumba-logo.png" alt="Lumumba Logistics" width={200} height={60} className={`h-10 w-auto ${light ? "brightness-0 invert" : ""}`} />
    </Link>
  );
}
