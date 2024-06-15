import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { BookCreate, createForm } from "../../types/book.type";
import { Button } from "flowbite-react";
import { useGetGenresQuery } from "../../redux/features/genre.api";
import { useState } from "react";
import Select from "react-select";
import {
  useGetBookQuery,
  useUpdateBookMutation,
  useUploadCoverMutation,
} from "../../redux/features/book.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Loader from "../../components/Loader";

const CreateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: genres } = useGetGenresQuery();
  const { data: book } = useGetBookQuery(id as string);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookCreate>({
    resolver: zodResolver(createForm),
    values: book,
  });

  const [posterPath, setPosterPath] = useState<File | undefined>();
  const [image, setImage] = useState(book?.coverImage);
  const [uploadCover, { isLoading: isUploadingCover }] =
    useUploadCoverMutation();
  const [updateBook] = useUpdateBookMutation();

  // RESET FORM
  const handleReset = () => {
    reset();
    setPosterPath(undefined);
  };

  // FILE INPUT
  const handlePoster = async (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setPosterPath(target.files[0]);
  };

  // UPDATE BOOK
  const onSubmit: SubmitHandler<BookCreate> = async (data) => {
    try {
      await updateBook({ _id: id as string, data }).unwrap();
      toast.success("Book updated");
      navigate("/dashboard/books");
    } catch (error: any) {
      return toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div className="w-full h-full lg:p-4 rounded-md flex flex-col">
      <h1 className="text-4xl font-semibold text-center lg:text-left uppercase">
        Update Book
      </h1>

      <div className="my-4 border" />

      <article className="w-full my-auto rounded-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row gap-4 w-full"
        >
          <label className="h-[420px] lg:w-[360px] p-4 rounded-xl border">
            {(image || posterPath) && (
              <img
                src={image ? image : URL.createObjectURL(posterPath as File)}
                alt="Cover"
                className="mx-auto h-full w-full rounded-xl object-fill"
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              disabled={isUploadingCover}
              onChange={handlePoster}
            />
          </label>

          <section className="flex-1">
            <Input label="Title" {...register("title")} error={errors.title} />
            <Textarea
              label="Description"
              rows={3}
              {...register("desc")}
              error={errors.desc}
            />
            <Input
              label="Author"
              {...register("author")}
              error={errors.author}
            />

            <label data-form="create">
              Genres:
              <Controller
                name="genres"
                control={control}
                render={({ field }) => (
                  <>
                    <Select
                      {...field}
                      options={genres}
                      getOptionLabel={(options) => options["name"]}
                      getOptionValue={(options) => options["_id"]}
                      isMulti
                      isClearable
                      className="text-primary capitalize"
                    />
                    {errors.genres && (
                      <p className="text-xs text-secondary">
                        {errors.genres.message}
                      </p>
                    )}
                  </>
                )}
              />
            </label>
            <div className="grid lg:grid-cols-2 lg:gap-4">
              <Input
                label="Format"
                {...register("format")}
                error={errors.format}
              />
              <Input
                label="Language"
                {...register("language")}
                error={errors.language}
              />
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-4">
              <Input
                label="Pages"
                type="number"
                {...register("pages")}
                error={errors.pages}
              />
              <Input
                label="Rating"
                type="number"
                step="any"
                {...register("rating")}
                error={errors.rating}
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <Button
                color="blue"
                className="bg-blue hover:!bg-red hover:opacity-80 hover:font-bold duration-300"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                type="submit"
                className="bg-blue hover:!bg-red hover:opacity-80 hover:font-bold duration-300"
                disabled={isUploadingCover}
              >
                {isUploadingCover ? <Loader /> : "Update"}
              </Button>
            </div>
          </section>
        </form>
      </article>
    </div>
  );
};

export default CreateBook;
