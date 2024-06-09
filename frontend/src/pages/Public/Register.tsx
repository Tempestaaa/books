import { Button, FloatingLabel } from "flowbite-react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorDisplay from "../../components/ErrorDisplay";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegister, registerForm } from "../../types/user.type";
import Loader from "../../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../redux/features/user.api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCredentials } from "../../redux/auth.slice";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserRegister>({
    resolver: zodResolver(registerForm),
  });
  const [registerUser] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) navigate("/");
  }, [navigate]);

  const onSubmit: SubmitHandler<UserRegister> = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Password not match");
      return reset();
    }

    try {
      const res = await registerUser(data).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("User registered successfully");
      navigate("/");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }

    reset();
  };

  return (
    <div className="min-h-svh bg-primary text-text flex font-default">
      {/* LOGIN FORM */}
      <section className="w-full md:w-1/4 md:border-r border-sub flex items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full px-4 gap-4"
        >
          <h1 className="text-4xl font-semibold text-center md:text-left uppercase">
            register
          </h1>
          <div className="flex flex-col gap-2">
            <div>
              <FloatingLabel
                data-form="login"
                variant="outlined"
                label="Email"
                type="email"
                autoComplete="email"
                {...register("email")}
                className={`text-text ${errors.email && "border-secondary"}`}
              />
              {errors.email && <ErrorDisplay message={errors.email.message} />}
            </div>
            <div>
              <FloatingLabel
                data-form="login"
                variant="outlined"
                label="Username"
                type="text"
                autoComplete="username"
                {...register("username")}
                className={`text-text ${errors.username && "border-secondary"}`}
              />
              {errors.username && (
                <ErrorDisplay message={errors.username.message} />
              )}
            </div>
            <div>
              <FloatingLabel
                data-form="login"
                variant="outlined"
                label="Password"
                type="password"
                autoComplete="new-password"
                {...register("password")}
                className={`text-text ${errors.password && "border-secondary"}`}
              />
              {errors.password && (
                <ErrorDisplay message={errors.password.message} />
              )}
            </div>
            <div>
              <FloatingLabel
                data-form="login"
                variant="outlined"
                label="Confirm password"
                type="password"
                autoComplete="new-password"
                {...register("confirmPassword")}
                className={`text-text ${
                  errors.confirmPassword && "border-secondary"
                }`}
              />
              {errors.confirmPassword && (
                <ErrorDisplay message={errors.confirmPassword.message} />
              )}
            </div>
          </div>
          <Button disabled={isSubmitting} type="submit" color="failure">
            {isSubmitting ? <Loader /> : "Login"}
          </Button>

          <div className="text-xs">
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-secondary font-semibold cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </section>

      {/* HERO */}
      <section className="hide md:block flex-1"></section>

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default Register;
