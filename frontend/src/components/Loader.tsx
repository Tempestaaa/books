import { Spinner } from "flowbite-react";

const Loader = () => {
  return (
    <div className="flex gap-2 items-center">
      <Spinner color="failure" />
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
