import CallToAction from "@/components/public/home/call-to-action";
import DisplayGrid from "@/components/public/home/display-grid";
import DisplayList from "@/components/public/home/display-list";
import Hero from "@/components/public/home/hero";
import { Separator } from "@/components/ui/separator";
import genres from "@/data/genres";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <Separator className="!w-xl mx-auto" />
      <DisplayList header="Trending" showSerial />
      <DisplayGrid />

      {genres.slice(0, 3).map((item) => (
        <DisplayList key={item.name} header={item.name} />
      ))}

      <CallToAction />
    </div>
  );
}
