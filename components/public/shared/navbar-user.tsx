import LogoutButton from "@/components/public/shared/logout-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navbarUser, userMenu } from "@/lib/common";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";

export default function NavbarUser() {
  return (
    <section className="flex-center gap-4">
      <section className="hidden md:flex items-center-safe gap-2">
        <TooltipProvider>
          {navbarUser.map((item) => {
            const Icon = item.icon;
            return (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={item.href} className="flex-center gap-2">
                      <Icon />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{item.label}</TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </section>

      <HoverCard>
        <HoverCardTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>

        <HoverCardContent
          side="bottom"
          align="end"
          className="w-60 flex flex-col gap-2"
        >
          <div className="flex-center gap-2 justify-between">
            <span className="font-medium">Username</span>
            <Badge>New</Badge>
          </div>
          <Separator />
          <menu>
            {userMenu.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex-center gap-4 size-full rounded-md p-2 hover:bg-accent hover:text-accent-foreground duration-300"
                >
                  <Icon className="size-3.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </menu>
          <Separator />
          <LogoutButton />
        </HoverCardContent>
      </HoverCard>
    </section>
  );
}
