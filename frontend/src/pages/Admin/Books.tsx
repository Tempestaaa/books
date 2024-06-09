import { Button, Pagination, Table, Tooltip } from "flowbite-react";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "../../redux/features/book.api";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import AreYouSure from "../../components/AreYouSure";
import { useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data: books } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async () => {
    try {
      await deleteBook(id).unwrap();
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }

    setId("");
    setIsModalOpen(false);
  };

  // Pagination
  const dataPerPage = 3;
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = books?.slice(firstDataIndex, lastDataIndex);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="w-full p-4 rounded-md flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-center md:text-left uppercase">
          Books Management
        </h1>

        {Number(books?.length) > dataPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(Number(books?.length) / dataPerPage)}
            onPageChange={onPageChange}
            showIcons
          />
        )}
      </div>

      <section className="overflow-x-auto bg-sub rounded-md">
        <Table className="table-auto">
          <Table.Head>
            <Table.HeadCell>id</Table.HeadCell>
            <Table.HeadCell>cover</Table.HeadCell>
            <Table.HeadCell>title</Table.HeadCell>
            <Table.HeadCell>author</Table.HeadCell>
            <Table.HeadCell>genres</Table.HeadCell>
            <Table.HeadCell>pages</Table.HeadCell>
            <Table.HeadCell>rating</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>

          <Table.Body>
            {currentData?.map((item) => (
              <Table.Row
                key={item._id}
                className="capitalize hover:bg-text/20 group duration-300"
              >
                <Table.Cell>
                  <Tooltip className="normal-case" content={item._id}>
                    <span className="group-hover:text-text">
                      {item._id.slice(0, 6)}...
                    </span>
                  </Tooltip>
                </Table.Cell>

                <Table.Cell>
                  <Link
                    to={`/book/${item._id}`}
                    className="aspect-square w-32 max-w-32 flex justify-center flex-shrink-0"
                  >
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="border border-transparent group-hover:border-text rounded-md"
                    />
                  </Link>
                </Table.Cell>

                <Table.Cell className="max-w-52">
                  <Link
                    to={`/book/${item._id}`}
                    className="font-semibold hover:underline cursor-pointer text-text"
                  >
                    {item.title}
                  </Link>
                </Table.Cell>

                <Table.Cell>
                  <span className="group-hover:text-text">{item.author}</span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex gap-1 flex-wrap max-w-72 group-hover:text-text">
                    {item.genres.slice(0, 2).map((item) => (
                      <span
                        key={item._id}
                        className="capitalize text-xs border border-primary rounded-md p-1 whitespace-nowrap group-hover:border-text"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <span className="group-hover:text-text">{item.pages}</span>
                </Table.Cell>
                <Table.Cell>
                  <span className="group-hover:text-text">{item.rating}</span>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex gap-2 items-center justify-center">
                    <Link to={`/dashboard/update-book/${item._id}`}>
                      <Button color="warning">
                        <FaEdit />
                      </Button>
                    </Link>
                    <Button
                      color="failure"
                      onClick={() => {
                        setId(item._id);
                        setIsModalOpen(true);
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </section>

      {/* Modal */}
      <AreYouSure
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        handler={handleDelete}
      />
    </div>
  );
};

export default Books;
