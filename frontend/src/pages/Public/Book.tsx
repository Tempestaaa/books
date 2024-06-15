import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useGetBookQuery } from "../../redux/features/book.api";

const Book = () => {
  const { id } = useParams();
  const { userInfo } = useAppSelector((state) => state.auth);
  const { data: book } = useGetBookQuery(id!);

  console.log(book);

  return <div>Book</div>;
};

export default Book;
