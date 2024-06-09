import { useState } from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  rating: number | null;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  size?: number;
};

const CustomRating = ({ rating, setRating, size = 32 }: Props) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-2 mx-auto">
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
              color={
                currentValue <= (hover! || rating!) ? "#e3a008" : "#d1d5db"
              }
              onMouseEnter={() => setHover(currentValue)}
              onMouseLeave={() => setHover(null)}
              className="cursor-pointer duration-300"
            />
          </label>
        );
      })}
    </div>
  );
};

export default CustomRating;
