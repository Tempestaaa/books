import StarRating from "@/components/public/detail/star-rating";
import { DotIcon } from "lucide-react";

export default function EvaluationParameters() {
  return (
    <div className="my-2 flex-center gap-2">
      <StarRating rating={4.2} showScore size="lg" />
      <DotIcon />
      <span>
        86,257 <span className="text-muted-foreground">ratings</span>
      </span>
      <DotIcon />
      <span>
        40,777 <span className="text-muted-foreground">reviews</span>
      </span>
    </div>
  );
}
