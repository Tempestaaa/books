import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import genres from "@/data/genres";
import { ArrowRightIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function DetailSection() {
  return (
    <section className="w-1/3 h-full rounded-md flex flex-col">
      <header className="text-3xl font-bold">Book title</header>

      <p className="text-muted-foreground">by Author name</p>

      <ul className="flex-center gap-2 mt-2">
        {genres.slice(0, 4).map((item) => (
          <Badge key={item.name}>{item.name}</Badge>
        ))}
      </ul>

      <p className="text-base line-clamp-4 my-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, sit
        fugit eos sequi nobis reprehenderit dolorem error. Nisi accusamus
        asperiores natus, et blanditiis repudiandae, molestias officia, corrupti
        quisquam placeat facere reiciendis debitis! At maiores vitae quis iure
        quas iste saepe?
      </p>

      <div className="mt-auto flex-center gap-2">
        <Button
          className="rounded-full flex-1 hover:gap-8 duration-300"
          asChild
        >
          <Link href={`/books/123`}>
            <span>Explore</span>
            <ArrowRightIcon />
          </Link>
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCartIcon />
        </Button>
      </div>
    </section>
  );
}
