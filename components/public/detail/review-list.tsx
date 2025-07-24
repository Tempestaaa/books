import ReviewCard from "@/components/public/detail/review-card";
import Pagination from "@/components/ui/pagination";

export default function ReviewList() {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(8)].map((_, id) => (
        <ReviewCard key={id} />
      ))}

      <div className="mt-4">
        <Pagination />
      </div>
    </div>
  );
}
