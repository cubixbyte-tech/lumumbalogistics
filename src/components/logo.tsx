import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center" aria-label="Lumumba Logistics home">
      <Image src="/images/lumumba-logo.png" alt="Lumumba Logistics" width={230} height={74} className={`h-12 w-auto lg:h-12 ${light ? "brightness-0 invert" : ""}`} />
    </Link>
  );
}
