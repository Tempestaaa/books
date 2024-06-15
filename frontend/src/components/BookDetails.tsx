import { FaStar } from "react-icons/fa";
import { Book } from "../types/book.type";
import { LuDot } from "react-icons/lu";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

type Props = {
  book: Book | undefined;
};

const BookDetails = ({ book }: Props) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [showMoreGenres, setShowMoreGenres] = useState(false);

  const slicedGenres = book?.genres.slice(0, 5).map((item) => (
    <div
      key={item._id}
      className="px-2 py-1 border-b-2 border-green capitalize cursor-pointer text-xs lg:text-sm hover:text-gray hover:border-opacity-80 duration-300"
    >
      {item.name}
    </div>
  ));

  const fullGenres = book?.genres.map((item) => (
    <div
      key={item._id}
      className="px-2 py-1 border-b-2 border-green capitalize cursor-pointer text-xs lg:text-sm hover:text-gray hover:border-opacity-80 duration-300"
    >
      {item.name}
    </div>
  ));

  return (
    <article className="flex flex-col gap-4">
      {/* TITLE */}
      <h1 className="capitalize text-4xl lg:text-5xl font-bold line-clamp-2">
        {book?.title}
      </h1>

      {/* AUTHOR */}
      <h2 className="capitalize text-lg lg:text-xl">{book?.author}</h2>

      {/* RATING */}
      <section className="flex items-center gap-2">
        <FaStar size={28} className="text-yellow" />
        <span className="text-xl">{book?.rating}</span>
        <span className="text-xs text-gray">
          {book?.numberOfReviews} reviews
        </span>
      </section>

      {/* DESCRIPTION */}
      <section className="flex flex-col gap-1">
        <p
          className={`${
            isShowMore ? "" : "line-clamp-4 lg:line-clamp-3"
          } text-sm lg:text-base max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-track-sub scrollbar-thumb-green`}
        >
          {book?.desc}
        </p>
        <div
          onClick={() => setIsShowMore(!isShowMore)}
          className="text-xs lg:text-sm border-b-2 border-green w-fit pb-1 cursor-pointer font-bold flex items-center gap-1 hover:text-gray hover:border-opacity-80 duration-300"
        >
          <p>{isShowMore ? "Show less" : "Show more"}</p>
          <span>{isShowMore ? <LuChevronUp /> : <LuChevronDown />}</span>
        </div>
      </section>

      {/* GENRES */}
      <section className="flex flex-wrap gap-3 items-center">
        <span>Genres</span>
        {showMoreGenres
          ? fullGenres
          : book?.genres.length! > 5 && (
              <>
                {slicedGenres}
                <button
                  className="text-xs font-bold"
                  onClick={() => setShowMoreGenres(!showMoreGenres)}
                >
                  {showMoreGenres ? "Show less" : ". . ."}
                </button>
              </>
            )}
      </section>

      {/* PAGES */}
      <section className="flex items-center gap-1 text-xs text-gray">
        <p>{book?.pages} pages</p>
        <LuDot />
        <p>{book?.format}</p>
      </section>

      {/* FIRST PUBLISHED */}
      <section className="flex items-center gap-1 text-xs text-gray">
        <p>First Published</p>
        {/* WIP */}
      </section>
    </article>
  );
};

export default BookDetails;
