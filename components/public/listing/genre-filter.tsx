import AccordionWrapper from "@/components/public/listing/accordion-wrapper";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import genres from "@/data/genres";
import { CheckIcon } from "lucide-react";

export default function GenreFilter() {
  return (
    <AccordionWrapper value="genres">
      <ScrollArea className="h-96 pr-4">
        {genres.map((item, id) => (
          <label
            key={id}
            className="py-1.5 px-2 rounded-md flex-center gap-4 has-checked:bg-foreground has-checked:text-background duration-300"
          >
            <input type="radio" name="genre" hidden className="peer" />
            <div className="size-4 rounded bg-foreground peer-checked:hidden" />
            <CheckIcon className="size-4 stroke-3 hidden peer-checked:block" />
            <span>{item.name}</span>

            <Badge variant="secondary" className="ml-auto">
              {item.inStock}
            </Badge>
          </label>
        ))}

        <ScrollBar />
      </ScrollArea>
    </AccordionWrapper>
  );
}
