import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordUpdate, passwordForm } from "../../types/user.type";
import { Button, Label, TextInput } from "flowbite-react";
import ErrorDisplay from "../../components/ErrorDisplay";
import { useUpdatePassordMutation } from "../../redux/features/user.api";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PasswordUpdate>({
    resolver: zodResolver(passwordForm),
  });
  const [updatePassword] = useUpdatePassordMutation();

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
    <div className="w-full p-4 rounded-md flex flex-col gap-4">
      <h1 className="text-4xl font-semibold text-center md:text-left uppercase">
        Change password
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Label data-form="create">
          Password:
          <TextInput
            type="password"
            autoComplete="new-password"
            {...register("password")}
          />
          {errors.password && (
            <ErrorDisplay message={errors.password.message} />
          )}
        </Label>

        <Label data-form="create">
          Confirm password:
          <TextInput
            type="password"
            autoComplete="new-password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <ErrorDisplay message={errors.confirmPassword.message} />
          )}
        </Label>

        <Button color="failure" type="submit" className="mt-4">
          Update
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
