import { useParams } from "react-router-dom";
import {
  useCreateReviewMutation,
  useGetBookQuery,
} from "../../redux/features/book.api";
import { Button, Label, Textarea } from "flowbite-react";
import { useState } from "react";
import Review from "../../components/Review";
import { toast } from "react-toastify";
import { useAppSelector } from "../../redux/hooks";
import { useAddFavouritesMutation } from "../../redux/features/user.api";
import CustomRating from "../../components/CustomRating";
import { FaHeart, FaStar } from "react-icons/fa";

const BookDetails = () => {
  const { id } = useParams();
  const { userInfo } = useAppSelector((state) => state.auth);
  const { data: book } = useGetBookQuery(id as string);
  const [isShowMore, setIsShowMore] = useState(false);

  const [createReview] = useCreateReviewMutation();
  const [isReviewing, setIsReviewing] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [addFavourites] = useAddFavouritesMutation();

  const handleAddFavourites = async () => {
    try {
      const res = await addFavourites({ bookId: id! }).unwrap();
      console.log(res);
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createReview({
        id: id!,
        data: {
          userId: userInfo?._id!,
          userName: userInfo?.username!,
          userImage: userInfo?.image!,
          comment: review,
          rating: rating!,
        },
      }).unwrap();
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }

    setReview("");
    setRating(null);
    setIsReviewing(false);
  };

  return (
    <article className="flex flex-col md:flex-row container mx-auto md:max-h-[calc(100svh-64px)] pt-4">
      <section className="md:w-1/3 p-4 pt-0 flex flex-col gap-4 flex-shrink-0">
        <div className="w-1/2 md:w-[60%] mx-auto overflow-hidden rounded-tr-3xl rounded-br-3xl rounded-md shadow-lg flex-shrink-0">
          <img src={book?.coverImage} alt="Book cover" />
        </div>

        <Button
          color="failure"
          className="py-2 w-3/4 mx-auto"
          onClick={handleAddFavourites}
        >
          <div className="flex items-center gap-2">
            <FaHeart size={18} />
            <span>Add to favourites</span>
          </div>
        </Button>
      </section>

      <section className="overflow-y-auto flex-1 flex flex-col gap-4 divide-y scrollbar-none px-4">
        <div className="flex flex-col gap-4 pb-16">
          {/* TITLE */}
          <h1 className="capitalize text-3xl md:text-4xl font-medium">
            {book?.title}
          </h1>

          {/* AUTHOR */}
          <h2 className="capitalize text-lg md:text-2xl">{book?.author}</h2>

          {/* RATING */}
          <div className="flex items-center gap-2">
            <FaStar size={32} className="text-yellow-500" />
            <span className="text-xl">{book?.rating}</span>
            <span className="text-xs text-text/50">
              ( {book?.numberOfReviews} people had rated this book )
            </span>
          </div>

          {/* DESCRIPTION */}
          <p
            className={`w-3/4 ${
              isShowMore ? "" : "line-clamp-4 md:line-clamp-3"
            } text-sm md:text-base`}
          >
            {book?.desc}
          </p>
          <div
            onClick={() => setIsShowMore(!isShowMore)}
            className="text-xs md:text-sm border-b-2 border-green-600 w-fit pb-1 cursor-pointer font-bold"
          >
            {isShowMore ? "Show less" : "Show more"}
          </div>

          {/* GENRES */}
          <div className="flex flex-wrap gap-3 items-center">
            <span>Genres</span>
            {book?.genres.map((item) => (
              <div
                key={item._id}
                className="p-2 border-b-2 border-green-600 capitalize cursor-pointer text-xs md:text-sm"
              >
                {item.name}
              </div>
            ))}
          </div>

          {/* PAGES */}
          <p className="text-sm">{book?.pages} pages</p>
        </div>

        <div className="flex flex-col gap-8 pt-8 pb-16">
          <h1 className="capitalize text-2xl md:text-4xl font-medium italic">
            Ratings & Reviews
          </h1>

          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-3xl text-center">
              What do you think?
            </p>
            <CustomRating rating={rating} setRating={setRating} />
            {!isReviewing ? (
              <Button
                color="blue"
                className="md:w-1/3 mx-auto"
                onClick={() => setIsReviewing(true)}
              >
                Write a review
              </Button>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full md:w-3/4 px-4 mx-auto"
              >
                <Label>
                  Review:
                  <Textarea
                    rows={3}
                    placeholder="Review this book please..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                </Label>
                <div className="flex justify-between mt-4">
                  <Button
                    color="blue"
                    onClick={() => {
                      setReview("");
                      setIsReviewing(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" color="failure">
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 pb-16">
          <h1 className="capitalize text-2xl md:text-4xl font-medium italic">
            Community Reviews
          </h1>

          <div className="flex flex-col gap-4">
            {book?.reviews.map((item) => (
              <Review
                key={item._id}
                id={id as string}
                item={item}
                userInfo={userInfo}
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default BookDetails;
