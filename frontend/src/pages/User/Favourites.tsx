import { Button, Label, Pagination, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  useDeleteAllFavouritesMutation,
  useDeleteFavouriteMutation,
  useGetFavouritesQuery,
} from "../../redux/features/user.api";
import { FaTrash } from "react-icons/fa";
import AreYouSure from "../../components/AreYouSure";
import { toast } from "react-toastify";
import CardFavourites from "../../components/CardFavourites";

const Favourites = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [id, setId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: favourites } = useGetFavouritesQuery();
  const [deleteOne] = useDeleteFavouriteMutation();
  const [deleteAll] = useDeleteAllFavouritesMutation();

  const handleDeleteOne = async () => {
    try {
      await deleteOne({ bookId: id! }).unwrap();
      toast.success("Book removed from favourites");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }

    setId("");
    setIsModalOpen(false);
  };

  const handleDeleteAll = async () => {
    try {
      await deleteAll().unwrap();
      toast.success("All books removed from favourites");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }
  };

  // Pagination
  const dataPerPage = 24;
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = favourites?.slice(firstDataIndex, lastDataIndex);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <article className="w-full p-4 rounded-md flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-center lg:text-left uppercase">
          Favourites
        </h1>

        {Number(favourites?.length) > dataPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(Number(favourites?.length) / dataPerPage)}
            onPageChange={onPageChange}
            showIcons
          />
        )}
      </div>

      <div className="flex gap-4 items-end justify-between">
        <form className="w-full lg:w-1/2">
          <Label data-form="create" className="flex-1 relative">
            Search:
            <TextInput
              data-input="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search !== "" && (
              <div
                className="absolute top-5 right-2 text-4xl text-secondary cursor-pointer"
                onClick={() => setSearch("")}
              >
                &times;
              </div>
            )}
          </Label>
        </form>

        <Button color="failure" className="py-1" onClick={handleDeleteAll}>
          <FaTrash />
        </Button>
      </div>

      <div className="border my-4 border-sub"></div>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {currentData &&
          currentData.length > 0 &&
          currentData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => (
              <CardFavourites
                key={item._id}
                item={item}
                setId={setId}
                setIsModalOpen={setIsModalOpen}
              />
            ))}

        {currentData?.length === 0 && (
          <p className="font-bold">No favourites yet!</p>
        )}
      </section>

      {/* Modal */}
      <AreYouSure
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        handler={handleDeleteOne}
      />
    </article>
  );
};

export default Favourites;
