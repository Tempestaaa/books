import { Outlet } from "react-router-dom";
import CustomSide from "../../components/CustomSide";

const ProfileLayout = () => {
  const tabs = [
    {
      name: "Profile",
      link: "",
    },
    {
      name: "Change password",
      link: "change-password",
    },
    {
      name: "Favourites",
      link: "favourites",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
      <aside className="lg:w-60 px-2">
        <CustomSide tabs={tabs} />
      </aside>

      <section className="flex min-h-[calc(100svh-64px)] rounded-md flex-1 px-2 lg:px-4 pb-4">
        <Outlet />
      </section>
    </div>
  );
};

export default ProfileLayout;
