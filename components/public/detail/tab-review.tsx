import CommunityReview from "@/components/public/detail/community-reviews";
import RatingSummary from "@/components/public/detail/rating-summary";
import { TabsContent } from "@/components/ui/tabs";

export default function TabReview() {
  return (
    <TabsContent value="reviews" className="space-y-8">
      <RatingSummary />
      <CommunityReview />
    </TabsContent>
  );
}
