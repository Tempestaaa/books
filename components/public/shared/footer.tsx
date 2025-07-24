import FooterMenu from "@/components/public/shared/footer-menu";
import FooterSignup from "@/components/public/shared/footer-signup";
import Logo from "@/components/public/shared/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t-2 border-muted">
      <article className="container mx-auto flex flex-col gap-4">
        <section className="flex-center justify-between">
          <div className="flex flex-col gap-4 w-xs">
            <Logo />
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              molestias ipsa accusamus. Quia minus doloribus totam
              necessitatibus natus, aliquam quas.
            </p>
          </div>

          <FooterMenu />
        </section>
        <FooterSignup />
        <Separator />
        <section className="flex-center gap-4 justify-between">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Shop. All rights reserved.
          </p>
          <ul className="flex-center gap-2">
            <Button variant="ghost" size="icon">
              <FacebookIcon />
            </Button>
            <Button variant="ghost" size="icon">
              <InstagramIcon />
            </Button>
            <Button variant="ghost" size="icon">
              <TwitterIcon />
            </Button>
          </ul>
        </section>
      </article>
    </footer>
  );
}
