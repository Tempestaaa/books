"use client";

import { navbarMenu } from "@/lib/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMenu() {
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <ul className="flex-center justify-center-safe h-full flex-1">
      {navbarMenu.map(({ href, label }) => (
        <li key={label} className="h-full">
          <Link
            href={href}
            className={`size-full px-6 grid-center border-b-2 border-transparent hover:border-muted duration-300 ${
              isActive(href) && "hover:border-foreground !border-foreground"
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
