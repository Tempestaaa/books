import AccordionWrapper from "@/components/public/listing/accordion-wrapper";
import { CheckIcon } from "lucide-react";

export default function PriceFilter() {
  const priceFilter = [
    { label: "$0 - $4.99", value: "0-4.99" },
    { label: "$5 - $9.99", value: "5-9.99" },
    { label: "$10 - $14.99", value: "10-14.99" },
    { label: "$15 - $19.99", value: "15-19.99" },
    { label: "$20 - $24.99", value: "20-24.99" },
    { label: "$25 - $29.99", value: "25-29.99" },
    { label: "$30 - $34.99", value: "30-34.99" },
    { label: "Above $35", value: "35-999" },
  ];

  return (
    <AccordionWrapper value="price">
      <ul className="pr-4">
        {priceFilter.map((item) => (
          <label
            key={item.value}
            className="py-1.5 px-2 rounded-md flex-center gap-4 has-checked:bg-foreground has-checked:text-background duration-300"
          >
            <input type="radio" name="price" hidden className="peer" />
            <div className="size-4 rounded bg-foreground peer-checked:hidden" />
            <CheckIcon className="size-4 stroke-3 hidden peer-checked:block" />
            <span>{item.label}</span>
          </label>
        ))}
      </ul>
    </AccordionWrapper>
  );
}
