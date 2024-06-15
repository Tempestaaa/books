import { Button, FloatingLabel } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "../../components/Loader";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLogin, loginForm } from "../../types/user.type";
import { useLoginMutation } from "../../redux/features/user.api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCredentials } from "../../redux/auth.slice";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserLogin>({
    resolver: zodResolver(loginForm),
  });
  const [loginUser] = useLoginMutation();

  useEffect(() => {
    if (userInfo) navigate("/");
  }, [navigate]);

  const onSubmit: SubmitHandler<UserLogin> = async (data) => {
    try {
      const res = await loginUser(data).unwrap();
      console.log(res);

      dispatch(setCredentials({ ...res }));
      toast.success("User login successfully");
      navigate("/");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }
  };
  return (
    <div className="min-h-svh bg-primary text-text flex font-default">
      {/* LOGIN FORM */}
      <section className="w-full lg:w-1/4 lg:border-r border-sub flex items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full px-4 gap-4"
        >
          <h1 className="text-4xl font-semibold text-center lg:text-left uppercase">
            login
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
            </div>
            <div>
              <FloatingLabel
                data-form="login"
                variant="outlined"
                label="Password"
                type="password"
                autoComplete="current-password"
                {...register("password")}
                className={`text-text ${errors.password && "border-secondary"}`}
              />
            </div>
          </div>
          <Button disabled={isSubmitting} type="submit" color="failure">
            {isSubmitting ? <Loader /> : "Login"}
          </Button>

          <div className="text-xs">
            <p>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-secondary font-semibold cursor-pointer"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </section>

      {/* HERO */}
      <section className="hide lg:block flex-1"></section>

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
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

export default Login;
