import StarRating from "@/components/public/detail/star-rating";
import { DotIcon } from "lucide-react";

export default function EvaluationParameters() {
  return (
    <div className="my-2 flex flex-col md:items-center-safe md:flex-row gap-2">
      <StarRating rating={4.2} showScore size="lg" />
      <DotIcon className="hidden md:block" />

      <div className="flex-center *:text-center">
        <span>
          86,257 <span className="text-muted-foreground">ratings</span>
        </span>
        <DotIcon />
        <span>
          40,777 <span className="text-muted-foreground">reviews</span>
        </span>
      </div>
    </div>
  );
}
