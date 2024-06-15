import { Button } from "flowbite-react";
import CustomRating from "./CustomRating";
import Textarea from "./Textarea";
import { useCreateReviewMutation } from "../redux/features/book.api";
import { toast } from "react-toastify";
import { User } from "../types/user.type";
import { useState } from "react";

type Props = {
  id: string;
  userInfo: User;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
};

const YourReview = ({ id, userInfo, rating, setRating }: Props) => {
  const [createReview] = useCreateReviewMutation();
  const [comment, setComment] = useState("");

  const handleCreateReview = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!comment) {
      return toast.info("Comment is empty");
    }

    try {
      await createReview({
        id,
        data: {
          userId: userInfo._id,
          userImage: userInfo.image,
          userName: userInfo.username,
          comment,
          rating,
        },
      }).unwrap();
      toast.success("Review added");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }

    setComment("");
    setRating(0);
  };

  return (
    <form onSubmit={handleCreateReview} className="flex flex-col gap-2">
      <h1 className="text-3xl lg:text-4xl font-semibold mb-4">
        Rating & Review
      </h1>

      <Textarea
        rows={3}
        label=""
        placeholder="Share your thought on this book!"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="flex items-center justify-between gap-2 flex-col lg:flex-row">
        <div className="flex items-center gap-2">
          <CustomRating rating={rating} setRating={setRating} />
          <span className="text-sm text-gray">
            Rating: {rating ? `${rating} / 5` : "0 / 5"}
          </span>
        </div>

        <Button
          type="submit"
          className="bg-blue self-end lg:self-auto hover:!bg-red duration-300 hover:font-bold"
        >
          Review
        </Button>
      </div>
    </form>
  );
};

export default YourReview;
