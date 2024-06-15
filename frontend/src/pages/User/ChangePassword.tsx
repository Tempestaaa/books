import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordUpdate, passwordForm } from "../../types/user.type";
import { Button, Label, TextInput } from "flowbite-react";
import { useUpdatePasswordMutation } from "../../redux/features/user.api";
import { toast } from "react-toastify";
import Input from "../../components/Input";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PasswordUpdate>({
    resolver: zodResolver(passwordForm),
  });
  const [updatePassword] = useUpdatePasswordMutation();

  const onSubmit: SubmitHandler<PasswordUpdate> = async (data) => {
    if (data.confirmPassword !== data.password) {
      return toast.error("Password not match");
    }

    try {
      await updatePassword(data).unwrap();
      toast.success("Password updated");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }

    reset();
  };

  return (
    <div className="w-full px-4 py-6 rounded-xl flex flex-col gap-4 bg-sub h-fit">
      <h1 className="text-4xl font-semibold text-center lg:text-left uppercase">
        Change password
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Input
          label="New password"
          {...register("password")}
          error={errors.password}
          type="password"
          autoComplete="new-password"
        />
        <Input
          label="Confirm password"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
          type="password"
          autoComplete="new-password"
        />

        <Button
          className="bg-blue hover:!bg-red hover:opacity-80 hover:font-bold duration-300 mt-4"
          type="submit"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
