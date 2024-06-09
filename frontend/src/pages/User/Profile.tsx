import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { UserUpdate, updateForm } from "../../types/user.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateUserMutation } from "../../redux/features/user.api";
import { setCredentials } from "../../redux/auth.slice";
import { toast } from "react-toastify";
import ErrorDisplay from "../../components/ErrorDisplay";

const Profile = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdate>({
    resolver: zodResolver(updateForm),
    values: {
      email: userInfo?.email!,
      username: userInfo?.username!,
    },
  });
  const [updateUser] = useUpdateUserMutation();

  const onSubmit: SubmitHandler<UserUpdate> = async (data) => {
    try {
      const res = await updateUser(data).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("User updated successfully");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }
  };
  return (
    <article className="w-full p-4 rounded-md flex flex-col gap-4">
      <h1 className="text-4xl font-semibold text-center md:text-left uppercase">
        Profile
      </h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 h-full">
        <section className="bg-sub flex-1 p-4 rounded-md flex flex-col">
          <Label className="mx-auto">
            <img
              src={userInfo?.image}
              alt="User avatar"
              className="rounded-full aspect-square w-40 border-4"
            />
            <FileInput accept="image/*" className="hidden" />
          </Label>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 w-full md:w-3/4 mx-auto mt-16"
          >
            <Label data-form="create">
              Username:
              <TextInput {...register("username")} />
              {errors.username && (
                <ErrorDisplay message={errors.username.message} />
              )}
            </Label>

            <Label data-form="create">
              Email:
              <TextInput {...register("email")} />
              {errors.email && <ErrorDisplay message={errors.email.message} />}
            </Label>

            <Button type="submit" color="failure" className="mt-4 py-1">
              Update
            </Button>
          </form>
        </section>
      </div>
    </article>
  );
};

export default Profile;
