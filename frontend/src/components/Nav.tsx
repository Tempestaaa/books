import { Button, Dropdown, Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useLogoutMutation } from "../redux/features/user.api";
import { toast } from "react-toastify";
import { logOut } from "../redux/auth.slice";

const Nav = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state) => state.auth);
  const [logoutUser] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logOut());
      toast.success("User logged out successfully");
      navigate("/login");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <Navbar fluid className="bg-inherit py-3">
      {/* Logo */}
      <div className="flex gap-2">
        <Navbar.Toggle />
        <Link to="/">
          <Navbar.Brand as="div" className="text-2xl font-medium">
            <span className="py-1 px-2 bg-secondary mr-1 rounded-lg font-extrabold">
              MERN
            </span>
            Books
          </Navbar.Brand>
        </Link>
      </div>

      {userInfo ? (
        <Dropdown
          label=""
          dismissOnClick
          className="w-60 max-w-60"
          renderTrigger={() => (
            <img
              src={userInfo.image}
              alt={userInfo.username}
              className="w-10 aspect-square rounded-full border-2 absolute lg:static top-2 right-2"
            />
          )}
        >
          <Dropdown.Header className="text-primary">
            <span className="font-bold">@{userInfo.username}</span>
          </Dropdown.Header>
          <Link to="/profile" className="text-primary">
            <Dropdown.Item>Profile</Dropdown.Item>
          </Link>
          {userInfo.isAdmin && (
            <Link to="/dashboard" className="text-primary">
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>
          )}
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>
            <span className="font-semibold bg-secondary">Logout</span>
          </Dropdown.Item>
        </Dropdown>
      ) : (
        <Link to="/login">
          <Button color="failure">Login</Button>
        </Link>
      )}
    </Navbar>
  );
};

export default Nav;
