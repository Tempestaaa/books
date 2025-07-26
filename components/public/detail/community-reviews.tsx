import ReviewList from "@/components/public/detail/review-list";
import { Button } from "@/components/ui/button";
import { PencilLineIcon } from "lucide-react";

export default function CommunityReviews() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-center-safe gap-2 md:gap-4 justify-between">
        <header className="text-xl font-bold">Community Reviews</header>
        <Button>
          <span>Write a review</span>
          <PencilLineIcon />
        </Button>
      </div>

      <ReviewList />
    </div>
  );
}
