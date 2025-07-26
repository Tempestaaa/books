import Logo from "@/components/public/shared/logo";
import NavbarMenu from "@/components/public/shared/navbar-menu";
import NavbarMenuMobile from "@/components/public/shared/navbar-menu-mobile";
import NavbarUser from "@/components/public/shared/navbar-user";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed h-20 w-full top-0 left-0 z-50 bg-background flex-center shadow-2xs shadow-muted px-4">
      <Sheet>
        <article className="container mx-auto h-full flex items-center-safe justify-between gap-8">
          <section className="flex-center gap-4">
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <Logo />
          </section>

          <NavbarMenu />

          <div className="flex-center justify-end-safe">
            <NavbarUser />
          </div>
        </article>

        <NavbarMenuMobile />
      </Sheet>
    </nav>
  );
}
