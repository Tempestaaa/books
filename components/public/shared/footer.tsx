import FooterMenu from "@/components/public/shared/footer-menu";
import FooterSignup from "@/components/public/shared/footer-signup";
import Logo from "@/components/public/shared/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t-2 border-muted px-4">
      <article className="container mx-auto flex flex-col gap-4">
        <section className="flex-center flex-col sm:flex-row justify-between gap-6">
          <div className="flex flex-col items-center-safe sm:items-start gap-4 sm:w-xs">
            <Logo />
            <p className="text-muted-foreground text-center sm:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              molestias ipsa accusamus. Quia minus doloribus totam
              necessitatibus natus, aliquam quas.
            </p>
          </div>

          <FooterMenu />
        </section>
        <FooterSignup />
        <Separator />
        <section className="flex-center flex-col-reverse sm:flex-row gap-4 justify-between">
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
