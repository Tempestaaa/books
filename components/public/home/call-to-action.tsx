import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="h-80 rounded-2xl grid-center mb-16 bg-radial-[at_25%_25%] from-muted to-muted/30 p-8">
      <div className="flex-center flex-col gap-4">
        <header className="text-2xl md:text-3xl text-center font-bold uppercase">
          &#9472; Explore the world <br />
          through every page.
        </header>

        <Button className="rounded-full px-8" asChild>
          <Link href="/books">View collections</Link>
        </Button>
      </div>
    </section>
  );
}
