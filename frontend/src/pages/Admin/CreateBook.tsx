import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { BookCreate, createForm } from "../../types/book.type";
import { Button } from "flowbite-react";
import { useGetGenresQuery } from "../../redux/features/genre.api";
import { useState } from "react";
import Select from "react-select";
import {
  useCreateBookMutation,
  useUploadCoverMutation,
} from "../../redux/features/book.api";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";

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

  const [posterPath, setPosterPath] = useState<File | undefined>();
  const [image, setImage] = useState("");
  const [uploadCover, { isLoading: isUploadingCover }] =
    useUploadCoverMutation();
  const [createBook, { isLoading: isCreatingBook }] = useCreateBookMutation();

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

  // SUBMIT FORM
  const onSubmit: SubmitHandler<BookCreate> = async (data) => {
    let uploadPath = null;

    if (posterPath) {
      const formData = new FormData();
      formData.append("cover", posterPath);

      try {
        const uploadRespond = await uploadCover(formData);
        if (uploadRespond.data) {
          uploadPath = uploadRespond.data;
          setImage(uploadPath);
        }
      } catch (error) {
        toast.error(`Failed to upload: ${error}`);
      }

      try {
        await createBook({
          ...data,
          coverImage: uploadPath as string,
        }).unwrap();
        toast.success("Book created");
        navigate("/dashboard/books");
      } catch (error: any) {
        return toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div className="w-full h-full lg:p-4 rounded-md flex flex-col">
      <h1 className="text-4xl font-semibold text-center lg:text-left uppercase">
        Create Book
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
              disabled={isCreatingBook || isUploadingCover}
              onChange={handlePoster}
            />
          </label>

          <section className="flex-1">
            <Input label="Title" {...register("title")} error={errors.title} />
            <Textarea
              label="Description"
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
