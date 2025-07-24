import AccordionWrapper from "@/components/public/listing/accordion-wrapper";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";

export default function FormatFilter() {
  const formatFilter = [
    { label: "Hardcover", value: "hardcover", inStock: 100 },
    { label: "EBooks", value: "eBooks", inStock: 81 },
    { label: "Paperback", value: "paperback", inStock: 76 },
    { label: "Textbooks", value: "textbooks", inStock: 55 },
  ];

  return (
    <AccordionWrapper value="format">
      <ul>
        {formatFilter.map((item) => (
          <label
            key={item.value}
            className="py-1.5 px-2 rounded-md flex-center gap-4 has-checked:bg-foreground has-checked:text-background duration-300"
          >
            <input type="radio" name="format" hidden className="peer" />
            <div className="size-4 rounded bg-foreground peer-checked:hidden" />
            <CheckIcon className="size-4 stroke-3 hidden peer-checked:block" />
            <span>{item.label}</span>

            <Badge variant="secondary" className="ml-auto">
              {item.inStock}
            </Badge>
          </label>
        ))}
      </ul>
    </AccordionWrapper>
  );
}
