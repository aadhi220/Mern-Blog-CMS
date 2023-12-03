import React, { useContext, useEffect, useState } from "react";
import { Table } from "flowbite-react";
import DeleteModal from "../Components/DeleteModal";
import {
  deleteUserApi,
  getAllUsersApi,
  getUserByIdApi,
  setAuthorApi,
} from "../../Services/AllAPI";

import { toast } from "react-toastify";
import UserView from "../Components/ViewUser";
import { SERVER_URL } from "../../Services/serverUrl";
function ManageUsers() {
  const token = sessionStorage.getItem("token");
  const [allUsers, setAllUsers] = useState({});
  const [userResponce, setUserResponce] = useState(false);
  const [loading,setLoading]=useState(false);

  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const getAllUsers = async () => {
    try {
      const temp="author"
      const result = await getAllUsersApi(temp,reqHeader);
      if (result.status === 200) {
        setAllUsers(result.data);
        console.log(result.data);
      } else {
        console.log("api error ", result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUserDelete = async (userId) => {
    try {
      const result = await deleteUserApi(userId, reqHeader);
      if (result.status === 200) {
        toast.success("User deleted successfully");
        setUserResponce(!userResponce);
      } else {
        console.log("api error ", result);
        setUserResponce(!userResponce);
      }
    } catch (error) {
      console.log(error);
      setUserResponce(!userResponce);
    }
  };

  const handleAuthorShip = async (user, roll) => {
    const reqBody = {
      id: user._id,
      email: user.email,
      username: user.username,
      isAuthor: roll,
    };
    try {
      const result = await setAuthorApi(reqBody, reqHeader);
      if (result.status === 200) {
        console.log("user AuthorShip Changed successfully");
        setLoading(false)
        toast.success("User AuthorShip Changed successfully");
        setUserResponce(!userResponce);
      } else {
        console.log("api error ", result);
        setUserResponce(!userResponce);
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [userResponce]);

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="overflow-x-auto pt-7 flex-1 max-w-7xl   ">
        <div className="w-full mb-5 flex  px-[1rem] items-center  gap-10">
          <h3 className="text-2xl font-semibold">Users</h3>
        </div>
        <Table hoverable striped>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Created_at</Table.HeadCell>
            <Table.HeadCell>Roll</Table.HeadCell>
            <Table.HeadCell>
              <span className="">Actions</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {allUsers?.length > 0 &&
              allUsers?.map((user, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-x-3">
                      <img
                        className="inline-block h-[2.375rem] w-[2.375rem] object-cover rounded-full"
                        src={
                          user.profilePic
                            ? `${SERVER_URL}/uploads/${user?.profilePic}`
                            : "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        }
                        alt="Image Description"
                      />
                      <div className="grow">
                        <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                          {user.username}
                        </span>
                        <span className="block text-sm text-gray-500">
                          {user.email}
                        </span>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      {user?.created_at}
                    </a>
                  </Table.Cell>
                  <Table.Cell>
                    {user.isAdmin
                      ? "Admin"
                      : user?.isAuthor
                      ? "Author"
                      : "User "}
                  </Table.Cell>

                  <Table.Cell className="flex gap-3 place-items-center">
                    <UserView user={user} handleAuthorShip={handleAuthorShip}  loading={loading} setLoading={setLoading} />

                    {!user.isAdmin && (
                      <DeleteModal
                        action={handleUserDelete}
                        id={user?._id}
                        product="user"
                      />
                    )}
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default ManageUsers;
