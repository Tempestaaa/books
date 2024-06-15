import { FaStar, FaTrash } from "react-icons/fa";
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

  console.log(id);

  const handleDelete = async () => {
    try {
      await deleteReviewAdmin({ bookId: id, reviewId: item._id }).unwrap();
      toast.success("Review deleted");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }

    setIsModalOpen(false);
  };

  return (
    <article className="flex gap-8 p-4 rounded-bl-xl rounded-tr-xl relative">
      <section className="flex flex-col gap-2 w-[8ch]">
        <img
          src={item.userImage}
          alt={`${item.userName} avatar`}
          className="w-12 aspect-square rounded-full border-2"
        />
        <h1 className="text-xs truncate">@{item.userName}</h1>
      </section>

      <div className="flex-1 flex flex-col gap-2 border-b-2 border-green">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={item.rating > i ? "text-yellow" : "text-gray"}
            />
          ))}
        </div>
        <p className="line-clamp-2 text-sm">{item.comment}</p>
      </div>

      {/* DELETE REVIEW */}
      {(userInfo?._id === item.userId || userInfo?.isAdmin) && (
        <div
          className="absolute top-0 right-0 cursor-pointer bg-red p-2 rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          <FaTrash className="text-sm" />
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
