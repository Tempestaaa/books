import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useLogoutMutation } from "../redux/features/user.api";
import AreYouSure from "./AreYouSure";
import { logOut } from "../redux/auth.slice";

type Props = {
  tabs: {
    name: string;
    link: string;
  }[];
};

const CustomSide = ({ tabs }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    if (pathname.split("/")[2]) setActive(pathname.split("/")[2]);
    else setActive("");
  }, [pathname]);

  const [logoutApi] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logOut());
      toast.success("User logged out") && navigate("/");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div className="flex flex-col w-full px-4 py-6 bg-sub rounded-md">
      {tabs.map((item) => (
        <Link
          key={item.link}
          to={item.link}
          className={`p-4 rounded-md transition-all whitespace-nowrap hover:bg-primary ${
            active === item.link && "active"
          }`}
        >
          {item.name}
        </Link>
      ))}

      <div className="border my-4 rounded-full"></div>

      <Button
        className="bg-red hover:!bg-red hover:opacity-80 hover:font-bold duration-300 py-2"
        onClick={() => setIsModalOpen(true)}
      >
        Logout
      </Button>

      {/* Modal */}
      <AreYouSure
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        handler={handleLogout}
      />
    </div>
  );
};

export default CustomSide;
