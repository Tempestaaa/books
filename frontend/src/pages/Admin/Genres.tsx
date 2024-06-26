import { Button } from "flowbite-react";
import {
  useCreateGenreMutation,
  useDeleteGenreMutation,
  useGetGenresQuery,
  useUpdateGenreMutation,
} from "../../redux/features/genre.api";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { useRef, useState } from "react";
import AreYouSure from "../../components/AreYouSure";
import Loader from "../../components/Loader";
import Input from "../../components/Input";

const Genres = () => {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [id, setId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null!);

  const [createGenre] = useCreateGenreMutation();
  const [deleteGenre] = useDeleteGenreMutation();
  const [updateGenre, { isLoading: isUpdatingGenre }] =
    useUpdateGenreMutation();
  const { data: genres } = useGetGenresQuery();

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createGenre({ name }).unwrap();
      toast.success("Genre created successfully");
    } catch (error: any) {
      nameRef.current.focus();
      return toast.error(error?.data?.message || error.error);
    }

    setId("");
    setName("");
  };

  const handleDelete = async () => {
    try {
      await deleteGenre(id).unwrap();
      toast.success("Genre deleted successfully");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }

    setId("");
    setIsModalOpen(false);
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await updateGenre({
        _id: id,
        data: {
          _id: id,
          name,
        },
      }).unwrap();
      toast.success("Genre updated successfully");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }

    setName("");
    setId("");
    setIsUpdating(false);
  };

  return (
    <div className="w-full p-4 rounded-md flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-center lg:text-left uppercase">
          Genres Management
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-2">
        <form
          onSubmit={isUpdating ? handleUpdate : handleCreate}
          className="flex-1 flex items-end gap-2"
        >
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
          />
          {isUpdating && (
            <Button
              className="bg-red hover:!bg-red hover:opacity-80 hover:font-bold duration-300"
              onClick={() => {
                setIsUpdating(false);
                setId("");
                setName("");
              }}
            >
              Cancel
            </Button>
          )}
          <Button
            disabled={isUpdatingGenre}
            type="submit"
            className="bg-blue hover:!bg-red hover:opacity-80 hover:font-bold duration-300"
          >
            {isUpdating ? isUpdatingGenre ? <Loader /> : "Update" : "Create"}
          </Button>
        </form>

        <form className="flex-1 flex items-end gap-2">
          <Input
            type="search"
            label="Search"
            disabled={isUpdatingGenre}
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 py-6 rounded-md">
        {genres
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((item) => (
            <div
              key={item._id}
              className="rounded-xl border-2 flex items-center justify-between overflow-hidden group"
            >
              <button
                className="py-2 px-4 capitalize flex-1 group-hover:font-bold text-left group-hover:bg-secondary/80 duration-300"
                onClick={() => {
                  setIsUpdating(true);
                  setId(item._id);
                  setName(item.name);
                }}
              >
                {item.name}
              </button>
              <span
                className="p-2 cursor-pointer"
                onClick={() => {
                  setId(item._id);
                  setIsModalOpen(true);
                }}
              >
                <FaTimes />
              </span>
            </div>
          ))}

        {genres?.length === 0 && <p>No genres created yet!</p>}
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

export default Genres;
