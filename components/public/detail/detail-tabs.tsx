import TabContent from "@/components/public/detail/tab-content";
import TabReview from "@/components/public/detail/tab-review";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DetailTabs() {
  return (
    <Tabs defaultValue="details" className="mt-8 space-y-2">
      <TabsList className="w-full md:w-xs">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <section>
        <TabContent />
        <TabReview />
      </section>
    </Tabs>
  );
}
