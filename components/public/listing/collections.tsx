import AccordionWrapper from "@/components/public/listing/accordion-wrapper";
import { Button } from "@/components/ui/button";

export default function Collections() {
  const collections = [
    { label: "All", value: "all" },
    { label: "Newest arrivals", value: "newest-arrivals" },
    { label: "Oldest", value: "oldest" },
    { label: "Trending", value: "trending" },
  ];

  return (
    <AccordionWrapper value="collections">
      <ul className="flex-center gap-2 flex-wrap">
        {collections.map((item, id) => (
          <Button
            key={item.label}
            variant="outline"
            className="rounded-full has-checked:!bg-foreground has-checked:text-background"
            asChild
          >
            <label>
              <input
                type="radio"
                name="collections"
                defaultChecked={id === 0}
                hidden
                className="peer"
              />
              <span>{item.label}</span>
            </label>
          </Button>
        ))}
      </ul>
    </AccordionWrapper>
  );
}
