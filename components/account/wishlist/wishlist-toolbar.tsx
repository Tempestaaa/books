import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDownIcon, SearchIcon } from "lucide-react";

export default function WishlistToolbar() {
  return (
    <section className="flex-center gap-4 justify-between">
      <div className="flex-center gap-4 border-b-2 has-[:focus]:border-muted-foreground duration-300">
        <SearchIcon className="size-4" />
        <Input
          placeholder="Search for order ID, book's title"
          className="no-border-input w-xs"
        />
      </div>

      <Button className="">
        <span>Sort</span>
        <ArrowDownIcon />
      </Button>
    </section>
  );
}
