import { Link } from "react-router-dom";
import { Book } from "../types/book.type";
import { FaTrash } from "react-icons/fa";

type Props = {
  item: Book;
  setId: React.Dispatch<React.SetStateAction<string | null>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardFavourites = ({ item, setId, setIsModalOpen }: Props) => {
  return (
    <div className="relative group overflow-hidden">
      <Link to={`/book/${item._id}`}>
        <img
          src={item.coverImage}
          alt="Book cover"
          className="mx-auto w-full max-h-[400px] rounded-xl group-hover:border-2 object-fill"
        />
      </Link>

      <div className="absolute -top-full left-0 group-hover:top-0 duration-300 px-2 py-6 bg-gradient-to-b from-primary/80 from-20% to-transparent w-full rounded-t-xl capitalize font-bold line-clamp-3">
        {item.title}
      </div>

      <button
        className="absolute p-2 rounded-md bg-secondary bottom-2 right-2 hover:bg-blue-700"
        onClick={() => {
          setId(item._id);
          setIsModalOpen(true);
        }}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CardFavourites;
