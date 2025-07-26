import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import genres from "@/data/genres";
import { slugified } from "@/lib/utils";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";

export default function CartItem() {
  return (
    <li className="py-4 flex gap-4">
      <section className="hidden min-[425px]:block h-36 w-28 bg-muted rounded-md" />

      <section className="flex-1 flex flex-col">
        <div className="flex-center gap-4 justify-between">
          <div className="flex flex-col">
            <p className="text-lg font-bold">Book title</p>
            <p className="text-muted-foreground">by Author name</p>
          </div>

          <Button variant="ghost" size="icon" className="text-destructive">
            <Trash2Icon />
          </Button>
        </div>

        <ul className="flex-center gap-2 mt-3">
          {genres.slice(0, 2).map((item) => (
            <Badge
              key={item.name}
              variant="outline"
              className="hover:!bg-foreground hover:!text-background duration-300 cursor-pointer"
              asChild
            >
              <Link href={`/books?genre=${slugified(item.name)}`}>
                {item.name}
              </Link>
            </Badge>
          ))}
        </ul>

        <div className="flex-center gap-4 justify-between mt-auto">
          <div className="font-bold text-2xl">$10.00</div>

          <div className="flex-center gap-1">
            <Button variant="ghost" className="rounded-full bg-transparent">
              <MinusIcon />
            </Button>
            <Input
              defaultValue={1}
              className="text-center w-[6ch] focus-visible:ring-0 border-0 !bg-muted rounded-full"
            />
            <Button variant="ghost" className="rounded-full bg-transparent">
              <PlusIcon />
            </Button>
          </div>
        </div>
      </section>
    </li>
  );
}
