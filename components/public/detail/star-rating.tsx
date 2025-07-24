import { cn } from "@/lib/utils";
import { StarHalfIcon, StarIcon } from "lucide-react";

type Props = {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  showScore?: boolean;
};

export default function StarRating({
  rating,
  maxStars = 5,
  size = "md",
  showScore = false,
}: Props) {
  const normalizeRating = Math.max(0, Math.min(5, rating));
  const className = `${
    size === "sm" ? "size-4" : size === "md" ? "size-6" : "size-8"
  } text-transparent`;

  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    if (i <= normalizeRating)
      stars.push(<StarIcon key={i} fill="var(--star)" className={className} />);
    else if (i - 0.5 <= normalizeRating)
      stars.push(
        <div key={i} className="relative">
          <StarHalfIcon className={cn(className, "fill-star")} />
          <StarHalfIcon
            className={cn(
              className,
              "opacity-30 scale-x-[-1] absolute top-1/2 -translate-y-1/2 fill-muted-foreground"
            )}
          />
        </div>
      );
    else
      stars.push(
        <StarIcon
          key={i}
          className={cn(className, "opacity-30 fill-muted-foreground")}
        />
      );
  }

  return (
    <div className="flex items-center-safe gap-1">
      <div className="flex items-center-safe gap-0.5">{stars}</div>

      {showScore && (
        <span
          className={`${
            size === "sm" ? "text-base" : size === "md" ? "text-xl" : "text-2xl"
          } font-bold ml-2`}
        >
          {normalizeRating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
