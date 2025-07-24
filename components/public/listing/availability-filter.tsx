import AccordionWrapper from "@/components/public/listing/accordion-wrapper";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";

export default function AvailabilityFilter() {
  return (
    <AccordionWrapper value="Availability">
      <label className="py-1.5 px-2 rounded-md flex-center gap-4 has-checked:bg-foreground has-checked:text-background duration-300">
        <input type="checkbox" hidden className="peer" />
        <div className="size-4 rounded bg-foreground peer-checked:hidden" />
        <CheckIcon className="size-4 stroke-3 hidden peer-checked:block" />
        <span>Available</span>

        <Badge variant="secondary" className="ml-auto">
          999
        </Badge>
      </label>
    </AccordionWrapper>
  );
}
