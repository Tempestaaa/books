import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRightIcon, MailIcon } from "lucide-react";

export default function FooterSignup() {
  return (
    <section className="flex-center flex-col sm:flex-row gap-2 sm:gap-4 justify-between my-4 sm:my-0">
      <header className="text-xl font-medium text-center sm:text-left">
        Sign up for the latest news & offers!
      </header>

      <form className="flex-center sm:w-xs pl-4 p-1 border-2 rounded-full border-muted has-focus:border-foreground duration-300">
        <MailIcon className="size-4 text-muted-foreground" />
        <Input
          placeholder="Enter your email address"
          className="rounded-none focus-visible:ring-0 border-0 !bg-transparent flex-1 placeholder:text-sm"
        />
        <Button size="icon" className="hover:rotate-45 duration-300">
          <ArrowUpRightIcon />
        </Button>
      </form>
    </section>
  );
}
