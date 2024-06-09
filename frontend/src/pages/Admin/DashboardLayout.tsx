import { Outlet } from "react-router-dom";
import CustomSide from "../../components/CustomSide";

const DashboardLayout = () => {
  const tabs = [
    {
      name: "Dashboard",
      link: "",
    },
    {
      name: "Books List",
      link: "books",
    },
    {
      name: "Create book",
      link: "create-book",
    },
    {
      name: "Users",
      link: "users",
    },
    {
      name: "Genres",
      link: "genres",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <aside className="md:w-60 px-2">
        <CustomSide tabs={tabs} />
      </aside>

      <div className="flex rounded-md flex-1 px-2 md:px-4 pb-4 overflow-x-auto min-h-[calc(100svh-64px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
