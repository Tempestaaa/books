import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function Pagination() {
  return (
    <div className="border-t-2 border-muted py-8 flex-center gap-4 justify-between">
      <Button variant="outline" size="lg" className="rounded-full">
        <ArrowLeftIcon />
        <span className="hidden md:block">Previous</span>
      </Button>

      <ul className="hidden md:flex items-center-safe gap-2">
        {[...Array(5)].map((_, id) => (
          <Button
            key={id}
            variant="ghost"
            size="icon"
            className={`hover:!bg-muted duration-300 border-2 border-muted ${
              id === 0 &&
              "bg-foreground text-background hover:!bg-foreground hover:text-background"
            }`}
          >
            {id + 1}
          </Button>
        ))}
      </ul>

      <Button variant="outline" size="lg" className="rounded-full">
        <span className="hidden md:block">Next</span>
        <ArrowRightIcon />
      </Button>
    </div>
  );
}
