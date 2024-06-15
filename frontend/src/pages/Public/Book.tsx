import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useGetBookQuery } from "../../redux/features/book.api";
import BookDetails from "../../components/BookDetails";
import { LuChevronRight } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import Divider from "../../components/Divider";
import { useState } from "react";
import YourReview from "../../components/YourReview";
import ReviewsDisplay from "../../components/ReviewsDisplay";
import BookCover from "../../components/BookCover";

const Book = () => {
  const { id } = useParams();
  const { userInfo } = useAppSelector((state) => state.auth);
  const { data: book } = useGetBookQuery(id!);
  const [rating, setRating] = useState(0);

  return (
    <article className="flex flex-col gap-4 container mx-auto">
      {/* BREADCRUMB */}
      <div className="flex gap-2 items-center text-sm px-4 lg:px-0">
        <Link to="/" className="hover:underline flex items-center gap-1">
          <AiFillHome />
          <span>Home</span>
        </Link>
        <span>
          <LuChevronRight />
        </span>
        <Link to="" className="capitalize hover:underline">
          {book?.title}
        </Link>
      </div>

      {/* LEFT PART = BOOK COVER */}
      <div className="flex flex-col lg:flex-row gap-4">
        <BookCover book={book!} id={id!} />

        {/* RIGHT PART = BOOK DETAILS */}
        <section className="w-full lg:w-3/5 mx-auto px-4 lg:max-h-[calc(100svh-64px)] overflow-y-auto scrollbar-thin scrollbar-track-sub scrollbar-thumb-green scroll-smooth">
          {/* DETAILS */}
          <BookDetails book={book} />
          <Divider />

          {/* WRITE REVIEW */}
          <YourReview
            rating={rating}
            setRating={setRating}
            id={id!}
            userInfo={userInfo!}
          />
          <Divider />

          {/* REVIEWS */}
          <ReviewsDisplay book={book!} id={id!} userInfo={userInfo!} />
        </section>
      </div>
    </article>
  );
};

export default Book;
