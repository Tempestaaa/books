import EvaluationParameters from "@/components/public/detail/evaluation-parameters";
import { StarIcon } from "lucide-react";

const ratings = {
  1: 4313,
  2: 6901,
  3: 14664,
  4: 25877,
  5: 34502,
};

export default function RatingSummary() {
  const totalRatings = Object.values(ratings).reduce(
    (sum, count) => sum + count,
    0
  );
  const getPercentage = (count: number) =>
    totalRatings === 0 ? 0 : (count / totalRatings) * 100;
  const ratingLevels = [5, 4, 3, 2, 1];

  return (
    <div className="flex flex-col gap-1">
      <header className="text-xl font-bold">Rating Summary</header>
      <EvaluationParameters />

      <section className="mt-2">
        {totalRatings === 0 ? (
          <p className="text-center text-muted-foreground">No reviews yet.</p>
        ) : (
          <ul>
            {ratingLevels.map((star) => (
              <li
                key={star}
                className="flex items-center gap-4 border-2 border-transparent hover:border-muted-foreground duration-300 pr-6 pl-2 py-1 rounded-2xl"
              >
                <div className="flex items-center gap-1 w-10 justify-end-safe">
                  <span className="text-base">{star}</span>
                  <StarIcon className="size-4 fill-star text-star" />
                </div>

                <div className="flex-1 bg-muted rounded-md h-6">
                  <div
                    className="bg-star h-full rounded-md"
                    style={{
                      width: `${getPercentage(
                        ratings[star as keyof typeof ratings]
                      )}%`,
                    }}
                  ></div>
                </div>

                <div className="w-20 text-right flex flex-col">
                  <span className="text-foreground">
                    {ratings[star as keyof typeof ratings].toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">
                    (
                    {getPercentage(
                      ratings[star as keyof typeof ratings]
                    ).toFixed(0)}
                    %)
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
