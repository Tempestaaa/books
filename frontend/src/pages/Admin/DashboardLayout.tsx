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
      link: "create",
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
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
      <aside className="lg:w-60 px-2">
        <CustomSide tabs={tabs} />
      </aside>

      <div className="flex rounded-md flex-1 px-2 lg:px-4 pb-4 overflow-x-auto min-h-[calc(100svh-64px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
