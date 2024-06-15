import { useAppSelector } from "../../redux/hooks";

import ChangeProfile from "../../components/ChangeProfile";
import ChangePassword from "./ChangePassword";

const Profile = () => {
  const { userInfo } = useAppSelector((state) => state.auth);

  return (
    <article className="w-full p-4 rounded-md flex flex-col gap-4">
      <h1 className="text-4xl font-semibold text-center lg:text-left uppercase">
        Profile
      </h1>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 h-full">
        <ChangeProfile userInfo={userInfo!} />
        <ChangePassword />
      </div>
    </article>
  );
};

export default Profile;
