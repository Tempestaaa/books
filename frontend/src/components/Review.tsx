import { FaStar, FaTimes } from "react-icons/fa";
import { ReviewType } from "../types/review.type";
import { useState } from "react";
import { User } from "../types/user.type";
import { useDeleteReviewAdminMutation } from "../redux/features/book.api";
import { toast } from "react-toastify";
import AreYouSure from "./AreYouSure";

type Props = {
  id: string;
  item: ReviewType;
  userInfo: User | null;
};

const Review = ({ id, item, userInfo }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteReviewAdmin] = useDeleteReviewAdminMutation();

  const handleDelete = async () => {
    try {
      await deleteReviewAdmin({ book_Id: id, review_Id: item._id }).unwrap();
      toast.success("Review deleted successfully");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }

    setIsModalOpen(false);
  };

  return (
    <article className="flex gap-8 border-2 border-sub p-4 rounded-bl-xl rounded-tr-xl relative">
      <div className="flex flex-col gap-2">
        <img
          src={item.userImage}
          alt={`${item.userName} avatar`}
          className="w-12 lg:w-16 aspect-square rounded-full border-2"
        />
        <h1 className="capitalize font-bold text-xs lg:text-sm text-center">
          {item.userName}
        </h1>
      </div>

      <div className="flex-1 rounded-xl px-4 flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>{item.rating}</span>
        </div>
        <p className="line-clamp-2">{item.comment}</p>
      </div>

      {(userInfo?._id === item.userId || userInfo?.isAdmin) && (
        <div
          className="absolute top-4 right-4 text-secondary cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <FaTimes />
        </div>
      )}

      {/* Modal */}
      <AreYouSure
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        handler={handleDelete}
      />
    </article>
  );
};

export default Review;
