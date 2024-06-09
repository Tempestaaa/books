import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { User, UserUpdate, updateForm } from "../../types/user.type";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorDisplay from "../../components/ErrorDisplay";
import { useUpdateUserMutation } from "../../redux/features/user.api";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/hooks";
import { setCredentials } from "../../redux/auth.slice";

type Props = {
  userInfo: User | null;
};

const ProfileLeft = ({ userInfo }: Props) => {
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
  );
};

export default ProfileLeft;
