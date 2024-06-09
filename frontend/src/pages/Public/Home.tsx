import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!userInfo) navigate("/login");
  }, [navigate]);

  return <div>Home</div>;
};

export default Home;
