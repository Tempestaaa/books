"use client";

import LogoutButton from "@/components/public/shared/logout-button";
import { Separator } from "@/components/ui/separator";
import { userMenu } from "@/lib/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <aside className="w-xs min-h-[calc(100dvh-5rem)]">
      <ul className="pr-4">
        {userMenu.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`size-full flex-center gap-4 p-2 rounded-md hover:bg-accent hover:text-accent-foreground duration-300 relative ${
                isActive(item.href) &&
                "after:absolute after:top-0 after:left-0 after:h-full after:w-0.5 after:bg-foreground"
              }`}
            >
              <Icon className="size-3.5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
        <Separator className="my-2" />
        <LogoutButton />
      </ul>
    </aside>
  );
}
