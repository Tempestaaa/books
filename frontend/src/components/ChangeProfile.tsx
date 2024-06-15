import { SubmitHandler, useForm } from "react-hook-form";
import { User, UserUpdate, updateForm } from "../types/user.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateUserMutation } from "../redux/features/user.api";
import { setCredentials } from "../redux/auth.slice";
import { useAppDispatch } from "../redux/hooks";
import { toast } from "react-toastify";
import Input from "./Input";
import { Button } from "flowbite-react";

type Props = {
  userInfo: User;
};

const ChangeProfile = ({ userInfo }: Props) => {
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
    <section className="px-4 py-6 rounded-xl flex flex-col bg-sub w-full gap-4 lg:gap-8 h-fit">
      <h1 className="text-4xl font-semibold text-center lg:text-left uppercase">
        Change profile
      </h1>

      <label className="mx-auto">
        <img
          src={userInfo?.image}
          alt="User avatar"
          className="rounded-full aspect-square w-40 border-4"
        />
        <input type="file" accept="image/*" className="hidden" />
      </label>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full mx-auto"
      >
        <Input
          label="Username"
          {...register("username")}
          error={errors.username}
        />
        <Input label="Email" {...register("email")} error={errors.email} />

        <Button
          type="submit"
          className="bg-blue hover:!bg-red hover:opacity-80 hover:font-bold duration-300 mt-4"
        >
          Update
        </Button>
      </form>
    </section>
  );
};

export default ChangeProfile;
