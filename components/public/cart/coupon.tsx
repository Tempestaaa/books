import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TagIcon } from "lucide-react";

export default function Coupon() {
  return (
    <form className="flex-center gap-2 my-2">
      <div className="flex-center gap-2 rounded-full border-2 border-muted px-4 has-[:focus]:border-foreground duration-300">
        <TagIcon className="size-4" />
        <Input placeholder="Add promo code" className="no-border-input" />
      </div>

      <Button className="rounded-full">Apply</Button>
    </form>
  );
}
