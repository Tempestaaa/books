import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  FlagIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "lucide-react";

export default function LeftSection() {
  return (
    <section className="w-full md:w-xs border-none md:border-r-2 border-muted md:pr-4 flex flex-col gap-2">
      <div className="bg-muted rounded-2xl h-110"></div>

      <div className="mt-2 flex flex-col gap-4">
        <Button className="h-12 rounded-2xl relative overflow-y-clip group">
          <p className="absolute bottom-1/2 translate-y-1/2 group-hover:bottom-full group-hover:-translate-y-1/2 duration-300 text-xl font-bold">
            $10.00
          </p>
          <p className="absolute top-full group-hover:top-1/2 group-hover:-translate-y-1/2 duration-300 flex-center gap-4 justify-between">
            <ShoppingCartIcon />
            <span>Add to Cart</span>
            <ArrowRightIcon />
          </p>
        </Button>

        <div className="flex-center gap-4 *:h-12 *:flex-1 *:rounded-2xl">
          <Button variant="ghost">
            <FlagIcon />
            <span>Report</span>
          </Button>
          <Button variant="outline">
            <HeartIcon />
            <span>Favourite</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
