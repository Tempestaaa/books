import { Button, Pagination, Table, Tooltip } from "flowbite-react";
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";
import {
  useDeleteUserByIdMutation,
  useGetUsersQuery,
} from "../../redux/features/user.api";
import { toast } from "react-toastify";
import { useState } from "react";
import AreYouSure from "../../components/AreYouSure";

const Users = () => {
  const [id, setId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: users } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserByIdMutation();

  const handleDelete = async () => {
    try {
      await deleteUser(id).unwrap();
      toast.success("User deleted successfully");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="w-full p-4 rounded-md flex flex-col gap-4">
      <h1 className="text-4xl font-semibold text-center lg:text-left uppercase">
        Users Management
      </h1>

      <section className="overflow-x-auto lg:pr-2 rounded-md">
        <Table className="table-auto">
          <Table.Head className="bg-blue">
            <Table.HeadCell>id</Table.HeadCell>
            <Table.HeadCell>avatar</Table.HeadCell>
            <Table.HeadCell>username</Table.HeadCell>
            <Table.HeadCell>email</Table.HeadCell>
            <Table.HeadCell>admin</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>

          <Table.Body>
            {users?.map((item) => (
              <Table.Row
                key={item._id}
                className="capitalize group duration-300 hover:bg-blue"
              >
                <Table.Cell>
                  <Tooltip
                    className="normal-case bg-primary"
                    content={item._id}
                  >
                    <span className="group-hover:text-text">
                      {item._id.slice(0, 6)}...
                    </span>
                  </Tooltip>
                </Table.Cell>

                <Table.Cell>
                  <div className="w-14 max-h-14 flex justify-center">
                    <img
                      src={item.image}
                      alt={item.username}
                      className="rounded-full border border-transparent group-hover:border-text"
                    />
                  </div>
                </Table.Cell>

                <Table.Cell>
                  <span className="font-semibold hover:underline cursor-pointer text-text normal-case">
                    {item.username}
                  </span>
                </Table.Cell>

                <Table.Cell>
                  <span className="normal-case group-hover:text-text">
                    {item.email}
                  </span>
                </Table.Cell>

                <Table.Cell>
                  <span>
                    {item.isAdmin ? (
                      <FaCheck className="text-green" />
                    ) : (
                      <FaTimes className="text-red" />
                    )}
                  </span>
                </Table.Cell>

                <Table.Cell>
                  <Button
                    className="bg-red hover:!bg-red hover:opacity-80 hover:font-bold duration-300"
                    onClick={() => {
                      setId(item._id);
                      setIsModalOpen(true);
                    }}
                  >
                    <FaTrash />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </section>

      {/* Modal */}
      <AreYouSure
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        handler={handleDelete}
      />
    </div>
  );
};

export default Users;
