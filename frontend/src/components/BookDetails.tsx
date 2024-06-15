import { FaStar } from "react-icons/fa";
import { Book } from "../types/book.type";
import { LuDot } from "react-icons/lu";

type Props = {
  book: Book | undefined;
  isShowMore: boolean;
  setIsShowMore: React.Dispatch<React.SetStateAction<boolean>>;
};

const BookDetails = ({ book, isShowMore, setIsShowMore }: Props) => {
  return (
    <div className="flex flex-col gap-4 pb-16">
      {/* TITLE */}
      <h1 className="capitalize text-3xl lg:text-4xl font-medium">
        {book?.title}
      </h1>

      {/* AUTHOR */}
      <h2 className="capitalize text-lg lg:text-2xl">{book?.author}</h2>

      {/* RATING */}
      <div className="flex items-center gap-2">
        <FaStar size={32} className="text-yellow-300" />
        <span className="text-xl">{book?.rating}</span>
        <span className="text-xs text-text/50">
          {book?.numberOfReviews} reviews
        </span>
      </div>

      {/* DESCRIPTION */}
      <p
        className={`${
          isShowMore ? "" : "line-clamp-4 lg:line-clamp-3"
        } text-sm lg:text-base`}
      >
        {book?.desc}
      </p>
      <div
        onClick={() => setIsShowMore(!isShowMore)}
        className="text-xs lg:text-sm border-b-2 border-green-600 w-fit pb-1 cursor-pointer font-bold"
      >
        {isShowMore ? "Show less" : "Show more"}
      </div>

      {/* GENRES */}
      <div className="flex flex-wrap gap-3 items-center">
        <span>Genres</span>
        {book?.genres.map((item) => (
          <div
            key={item._id}
            className="p-2 border-b-2 border-green-600 capitalize cursor-pointer text-xs lg:text-sm"
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* PAGES */}
      <div className="flex items-center gap-1 text-xs">
        <p>{book?.pages} pages</p>
        <LuDot />
        <p>{book?.format}</p>
      </div>
    </div>
  );
};

export default BookDetails;
