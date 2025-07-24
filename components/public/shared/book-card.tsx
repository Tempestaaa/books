import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  showSerial?: boolean;
  serial?: number;
};

export default function BookCard({ showSerial, serial }: Props) {
  return (
    <article className="space-y-2 h-fit relative">
      <Link
        href={`/books/123`}
        tabIndex={-1}
        className="h-96 block bg-muted rounded-2xl relative"
      >
        <Badge variant="outline" className="absolute bottom-4 right-4">
          <StarIcon className="fill-star text-star" />
          <span>4.3</span>
        </Badge>
      </Link>

      <section className="flex gap-8 items-end-safe">
        {showSerial && (
          <div className="text-7xl font-bold italic">{serial}</div>
        )}

        <div className="space-y-2 flex-1">
          <Link
            href={`/books/123`}
            className="line-clamp-1 text-base font-bold"
          >
            Book title
          </Link>

          <div className="flex-center gap-4 justify-between">
            <span>$10.00</span>
            <Button variant="ghost">
              <span>Buy now</span>
              <ArrowUpRightIcon />
            </Button>
          </div>
        </div>
      </section>

      <Badge className="absolute top-4 right-4">New</Badge>
    </article>
  );
}
