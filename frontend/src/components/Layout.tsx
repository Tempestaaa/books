import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Bounce, ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div className="bg-primary h-svh text-white flex flex-col font-default">
      <div>
        <Nav />
      </div>

      <div className="flex-1 lg:max-h-svh lg:overflow-hidden">
        <Outlet />
      </div>

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

export default Layout;
