"use client";

import Logo from "@/components/public/shared/logo";
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navbarMenu, navbarUser } from "@/lib/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMenuMobile() {
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;
  const menu = [...navbarMenu, ...navbarUser];

  return (
    <SheetContent side="left" className="flex flex-col">
      <SheetHeader>
        <SheetTitle>
          <Logo />
        </SheetTitle>
      </SheetHeader>

      <ul className="px-4">
        {menu.map((item) => (
          <SheetClose key={item.href} asChild>
            <Link
              href={item.href}
              className={`block p-2 text-base ${
                isActive(item.href) && "bg-muted rounded-md"
              }`}
            >
              {item.label}
            </Link>
          </SheetClose>
        ))}
      </ul>
    </SheetContent>
  );
}
