import BookCard from "@/components/public/shared/book-card";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export default function DisplayGrid() {
  return (
    <div className="space-y-4 py-4">
      <section className="flex-center gap-4">
        <div className="text-2xl font-bold">New Arrivals</div>
        <Button variant="outline" className="rounded-full">
          <span>More</span>
          <ChevronRightIcon />
        </Button>
      </section>

      <section className="grid grid-cols-4 gap-8">
        {[...Array(8)].map((_, id) => (
          <BookCard key={id} />
        ))}
      </section>
    </div>
  );
}
