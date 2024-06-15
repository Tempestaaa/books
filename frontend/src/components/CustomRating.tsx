import { useState } from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  size?: number;
};

const CustomRating = ({ rating, setRating, size = 28 }: Props) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-2">
      {[...Array(5)].map((_, i) => {
        const currentValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              className="hidden"
              value={currentValue}
              onClick={() => setRating(currentValue)}
            />
            <FaStar
              size={size}
              onMouseEnter={() => setHover(currentValue)}
              onMouseLeave={() => setHover(null)}
              className={`cursor-pointer duration-300 ${
                currentValue <= (hover! || rating!)
                  ? "text-yellow"
                  : "text-gray"
              }`}
            />
          </label>
        );
      })}
    </div>
  );
};

export default CustomRating;
