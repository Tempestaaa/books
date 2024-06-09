import { Label, Pagination, TextInput } from "flowbite-react";
import { useState } from "react";
import { useGetFavouritesQuery } from "../../redux/features/user.api";
import { Link } from "react-router-dom";

const Favourites = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data: favourites } = useGetFavouritesQuery();

  // Pagination
  const dataPerPage = 24;
  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = favourites?.slice(firstDataIndex, lastDataIndex);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <article className="w-full p-4 rounded-md flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-center md:text-left uppercase">
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

      <form className="w-full md:w-1/2">
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

      <div className="border my-4 border-sub"></div>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
        {currentData &&
          currentData.length > 0 &&
          currentData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((item) => (
              <div key={item._id} className="relative group overflow-hidden">
                <Link to={`/book/${item._id}`}>
                  <img
                    src={item.coverImage}
                    alt="Book cover"
                    className="mx-auto w-full max-h-[400px] rounded-xl group-hover:border-2 border-secondary/50 object-fill"
                  />
                </Link>

                <div className="absolute -top-full left-0 group-hover:top-0 duration-300 px-2 py-6 bg-gradient-to-b from-primary/80 from-20% to-transparent w-full rounded-t-xl capitalize font-bold">
                  {item.title}
                </div>
              </div>
            ))}
      </section>
    </article>
  );
};

export default Favourites;
