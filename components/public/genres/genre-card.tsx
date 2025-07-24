import { Badge } from "@/components/ui/badge";
import { slugified } from "@/lib/utils";
import iGenre from "@/types/genre.type";
import Link from "next/link";

type Props = {
  genre: iGenre;
};

export default function GenreCard({ genre }: Props) {
  return (
    <Link
      href={`/books?genre=${slugified(genre.name)}`}
      className="flex-center gap-4 justify-between p-3 rounded-md border-2 border-transparent hover:border-foreground duration-300 group"
    >
      <span className="group-hover:underline underline-offset-4">
        {genre.name}
      </span>
      <Badge variant="secondary" className="text-muted-foreground">
        {genre.inStock}
      </Badge>
    </Link>
  );
}
