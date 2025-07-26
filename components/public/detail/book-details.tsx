import DetailTabs from "@/components/public/detail/detail-tabs";
import EvaluationParameters from "@/components/public/detail/evaluation-parameters";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import genres from "@/data/genres";
import { slugified } from "@/lib/utils";
import Link from "next/link";

export default function BookDetails() {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-4 md:gap-8">
      <section className="flex-1 flex flex-col gap-1">
        <header className="text-2xl md:text-3xl font-bold">Book title</header>

        <p>
          <span className="text-muted-foreground">by</span> Author name
        </p>

        <EvaluationParameters />

        <div className="space-y-4">
          <p className="line-clamp-5 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            tempore eligendi natus nesciunt esse dolore recusandae possimus
            dignissimos harum consequuntur non temporibus unde nostrum nulla
            illo, porro, fuga quasi in suscipit saepe praesentium beatae
            aliquid. Laboriosam, mollitia! Cupiditate quas veritatis, vel in
            dolor provident maiores cumque. Magni ut vero delectus facere quasi
            laboriosam iusto veritatis labore quas laudantium laborum excepturi
            nisi, voluptatem possimus nostrum hic expedita totam doloremque
            officia! Voluptate, voluptas. Facere quia, quasi pariatur nesciunt
            ut autem architecto modi!
          </p>

          <Button variant="ghost">Show more</Button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 my-2">
          <span className="font-bold">Genres: </span>
          <ul className="flex-center flex-wrap gap-2">
            {genres.slice(0, 6).map((item) => (
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
        </div>

        <div className="text-muted-foreground space-y-1">
          <p>200 pages, Hardcover</p>
          <p>First published June 9, 1998</p>
        </div>

        <DetailTabs />
      </section>
    </section>
  );
}
