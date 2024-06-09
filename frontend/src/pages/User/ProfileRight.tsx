import { User } from "../../types/user.type";

type Props = {
  userInfo: User | null;
};

const ProfileRight = ({ userInfo }: Props) => {
  return <section className="bg-sub flex-1 p-4 rounded-md">2</section>;
};

export default ProfileRight;
