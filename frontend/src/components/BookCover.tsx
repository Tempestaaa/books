import { Button } from "flowbite-react";
import { Book } from "../types/book.type";
import { FaHeart } from "react-icons/fa";
import {
  useAddFavouritesMutation,
  useGetUserQuery,
} from "../redux/features/user.api";
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { setCredentials } from "../redux/auth.slice";

type Props = {
  book: Book;
  id: string;
};

const BookCover = ({ book, id }: Props) => {
  const dispatch = useAppDispatch();
  const [addFavourites] = useAddFavouritesMutation();
  const { data: user } = useGetUserQuery();

  useEffect(() => {
    dispatch(setCredentials({ ...user }));
  }, [user]);

  const handleAddFavourites = async () => {
    try {
      await addFavourites({ bookId: id }).unwrap();
      toast.success("Book added");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <section className="flex flex-col gap-4 mx-auto">
      <div className="w-[260px] aspect-square mx-auto">
        <img src={book?.coverImage} alt="Cover Image" className=" rounded-xl" />
      </div>

      <Button
        className="bg-blue py-1 w-3/4 lg:w-full mx-auto group hover:!bg-red duration-300"
        onClick={handleAddFavourites}
      >
        <div className="flex items-center gap-2 group-hover:font-bold duration-300">
          <FaHeart />
          <span>Add to Favourites</span>
        </div>
      </Button>
    </section>
  );
};

export default BookCover;
