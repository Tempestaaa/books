import Logo from "@/components/public/shared/logo";
import NavbarMenu from "@/components/public/shared/navbar-menu";
import NavbarUser from "@/components/public/shared/navbar-user";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed h-20 w-full top-0 left-0 z-50 bg-background flex-center shadow-2xs shadow-muted">
      <article className="container mx-auto h-full flex-center gap-8">
        <section className="flex-center gap-4 w-1/4">
          <Button variant="ghost" size="icon" className="hidden">
            <MenuIcon />
          </Button>
          <Logo />
        </section>

        <NavbarMenu />

        <div className="w-1/4 flex-center justify-end-safe">
          <NavbarUser />
        </div>
      </article>
    </nav>
  );
}
