import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRightIcon, MailIcon } from "lucide-react";

export default function FooterSignup() {
  return (
    <section className="flex-center gap-4 justify-between">
      <header className="text-subheading">
        Sign up for the latest news & offers!
      </header>

      <form className="flex-center w-xs pl-4 p-1 border-2 rounded-full border-muted has-focus:border-foreground duration-300">
        <MailIcon className="size-4 text-muted-foreground" />
        <Input
          placeholder="Enter your email address"
          className="rounded-none focus-visible:ring-0 border-0 !bg-transparent flex-1"
        />
        <Button size="icon" className="hover:rotate-45 duration-300">
          <ArrowUpRightIcon />
        </Button>
      </form>
    </section>
  );
}
