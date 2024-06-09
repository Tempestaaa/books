import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { BookCreate, createForm } from "../../types/book.type";
import { Button, FileInput, Label, TextInput, Textarea } from "flowbite-react";
import { useGetGenresQuery } from "../../redux/features/genre.api";
import { useState } from "react";
import Select from "react-select";
import ErrorDisplay from "../../components/ErrorDisplay";
import {
  useCreateBookMutation,
  useUploadCoverMutation,
} from "../../redux/features/book.api";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookCreate>({
    resolver: zodResolver(createForm),
  });
  const { data: genres } = useGetGenresQuery();

  const [preview, setPreview] = useState<File>();
  const [uploadCover, { isLoading: isUploadingCover }] =
    useUploadCoverMutation();
  const [createBook, { isLoading: isCreatingBook }] = useCreateBookMutation();

  const handleReset = () => {
    reset();
    setPreview(undefined);
  };

  const onSubmit: SubmitHandler<BookCreate> = async (data) => {
    let uploadCoverPath = null;
    if (preview) {
      const formData = new FormData();
      formData.append("image", preview);

      const uploadCoverRespond = await uploadCover(formData);
      try {
        if (uploadCoverRespond.data) {
          uploadCoverPath = uploadCoverRespond.data;
        }
      } catch (error: any) {
        return toast.error(`Failed to upload image: ${error}`);
      }
    }

    try {
      await createBook({
        ...data,
        coverImage: uploadCoverPath as string,
      }).unwrap();
      toast.success("Book created successfully");
      navigate("/dashboard/books");
    } catch (error: any) {
      return toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div className="w-full h-full p-4 rounded-md flex flex-col gap-4">
      <h1 className="text-4xl font-semibold text-center md:text-left uppercase">
        Create Book
      </h1>

      <article className="my-auto bg-sub p-6 rounded-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:flex-row gap-4"
        >
          <section className="md:w-96 max-h-[520px] border-2 border-dashed border-blue-500 rounded-md overflow-hidden">
            <Label>
              <div className="w-full h-full">
                {preview ? (
                  <img
                    src={URL.createObjectURL(preview as File)}
                    alt="Poster"
                    className="bg-sub w-full h-full p-2"
                  />
                ) : (
                  <p className="flex items-center justify-center h-full text-text font-bold text-3xl capitalize">
                    Upload cover
                  </p>
                )}
              </div>
              <FileInput
                accept="image/*"
                className="hidden"
                disabled={isCreatingBook || isUploadingCover}
                onChange={(e) =>
                  e.target.files && setPreview(e.target.files[0])
                }
              />
            </Label>
          </section>

          <section className="flex-1">
            <Label data-form="create">
              Title:
              <TextInput
                {...register("title")}
                placeholder="Enter title"
                className={`${errors.title} && "!border-secondary"`}
              />
              {errors.title && <ErrorDisplay message={errors.title.message} />}
            </Label>

            <Label data-form="create">
              Description:
              <Textarea
                {...register("desc")}
                placeholder="Enter description"
                rows={5}
                className={`${errors.desc} && "!border-secondary"`}
              />
              {errors.desc && <ErrorDisplay message={errors.desc.message} />}
            </Label>

            <Label data-form="create">
              Author:
              <TextInput
                {...register("author")}
                placeholder="Enter author"
                className={`${errors.author} && "!border-secondary"`}
              />
              {errors.author && (
                <ErrorDisplay message={errors.author.message} />
              )}
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
                    placeholder="Enter genres"
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
                placeholder="Enter pages"
                type="number"
                className={`${errors.pages} && "!border-secondary"`}
              />
              {errors.pages && <ErrorDisplay message={errors.pages.message} />}
            </Label>

            <Label data-form="create">
              Rating:
              <TextInput
                {...register("rating")}
                placeholder="Enter rating"
                type="number"
                step="any"
                className={`${errors.rating} && "!border-secondary"`}
              />
              {errors.rating && (
                <ErrorDisplay message={errors.rating.message} />
              )}
            </Label>

            <div className="flex items-center justify-between mt-4">
              <Button color="blue" onClick={handleReset}>
                Reset
              </Button>
              <Button
                type="submit"
                color="failure"
                disabled={isCreatingBook || isUploadingCover}
              >
                {isCreatingBook || isUploadingCover ? <Loader /> : "Create"}
              </Button>
            </div>
          </section>
        </form>
      </article>
    </div>
  );
};

export default CreateBook;
