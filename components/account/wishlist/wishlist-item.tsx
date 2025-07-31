import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import genres from "@/data/genres";
import { HeartIcon } from "lucide-react";
import Link from "next/link";

export default function WishlistItem() {
  return (
    <li className="outline-1 outline-transparent hover:outline-muted-foreground duration-300 rounded-md p-4 flex gap-4">
      <Link href={`/books/123`} className="h-20 w-16 bg-muted rounded-md" />
      <div className="flex flex-col flex-1">
        <Link href={`/books/123`} className="font-bold">
          Book&apos;s title
        </Link>
        <p className="text-muted-foreground">by Author name</p>
        <ul className="mt-auto flex-center gap-2">
          {genres.slice(0, 3).map((item) => (
            <Badge key={item.name}>{item.name}</Badge>
          ))}
        </ul>
      </div>

      <Button variant="ghost" size="icon">
        <HeartIcon className="fill-rose-500 text-rose-500" />
      </Button>
    </li>
  );
}
