import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { BookCreate, createForm } from "../../types/book.type";
import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";
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

  const [preview, setPreview] = useState<File>();
  const [uploadCover, { isLoading: isUploadingCover }] =
    useUploadCoverMutation();
  const [updateBook] = useUpdateBookMutation();

  const handleReset = () => {
    reset();
    setPreview(undefined);
  };

  const onSubmit: SubmitHandler<BookCreate> = async (data) => {
    try {
      await updateBook({ _id: id as string, data }).unwrap();
      toast.success("Book updated successfully");
      navigate("/dashboard/books");
    } catch (error: any) {
      return toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div className="bg-sub w-full h-full p-4 rounded-md flex flex-col gap-4">
      <h1 className="text-4xl font-semibold text-center lg:text-left uppercase">
        Update Book
      </h1>

      <article>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row gap-4"
        >
          <section className="lg:w-96 max-h-[520px] border-2 border-dashed border-blue-500 rounded-md overflow-hidden">
            <Label>
              <div className="w-full h-full">
                <img
                  src={book?.coverImage}
                  alt="Poster"
                  className="bg-sub w-full h-full p-2"
                />
              </div>
              <FileInput
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  e.target.files && setPreview(e.target.files[0])
                }
              />
            </Label>
          </section>

          <section className="flex-1">
            <Label data-form="create">
              Title:
              <TextInput {...register("title")} className="capitalize" />
            </Label>

            <Label data-form="create">
              Description:
              <Textarea
                {...register("desc")}
                rows={5}
                className={`${errors.desc} && "!border-secondary"`}
              />
            </Label>

            <Label data-form="create">
              Author:
              <TextInput
                {...register("author")}
                className={`${errors.author} && "!border-secondary"`}
              />
            </Label>

            <Label data-form="create">
              Genres:
              <Controller
                name="genres"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={genres}
                    getOptionLabel={(options) => options["name"]}
                    getOptionValue={(options) => options["_id"]}
                    isMulti
                    isClearable
                    className="focus:!border-primary text-primary capitalize"
                  />
                )}
              />
            </Label>

            <Label data-form="create">
              Pages:
              <TextInput
                {...register("pages")}
                type="number"
                className={`${errors.pages} && "!border-secondary"`}
              />
            </Label>

            <Label data-form="create">
              Rating:
              <TextInput
                {...register("rating")}
                type="number"
                step="any"
                className={`${errors.rating} && "!border-secondary"`}
              />
            </Label>

            <div className="flex items-center justify-between mt-4">
              <Button color="blue" onClick={handleReset}>
                Reset
              </Button>
              <Button type="submit" color="failure">
                Update
              </Button>
            </div>
          </section>
        </form>
      </article>
    </div>
  );
};

export default CreateBook;
