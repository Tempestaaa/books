import { Book } from "../types/book.type";
import { User } from "../types/user.type";
import Review from "./Review";

type Props = {
  book: Book;
  userInfo: User;
  id: string;
};

const ReviewsDisplay = ({ book, userInfo, id }: Props) => {
  return (
    <div className="flex flex-col gap-4 pb-16">
      <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Reviews</h1>
      <div>
        {book?.reviews.map((item) => (
          <Review key={item._id} item={item} id={id!} userInfo={userInfo} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsDisplay;
