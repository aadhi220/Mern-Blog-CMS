import React, { useContext, useState } from "react";
import { Button, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { getTokenContext } from "../../ContextApi/TokenContext";
import { Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import AuthorReq from "./AuthorReq";
import { SERVER_URL } from "../../Services/serverUrl";
export default function ProfileMenu() {
  const [openModal, setOpenModal] = useState(false);
  const [openReqModal, setOpenReqModal] = useState(false);

  const { handleSignOut } = useContext(getTokenContext);
  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  return (
    <>
      <div>
        <Dropdown
          label={
            <img
              className="inline-block h-[2.375rem] w-[2.375rem] object-cover rounded-full"
              src={
                user.profilePic
                  ? `${SERVER_URL}/uploads/${user?.profilePic}`
                  : "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              }
              alt="Image Description"
            />
          }
          arrowIcon={false}
          inline
          style={{ zIndex: "99" }}
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.username}</span>
            <span className="block truncate text-sm font-medium">
              {user?.email}
            </span>
          </Dropdown.Header>
          {user.isAuthor ? (
            <Link to={"/AuthorDashboard"}>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>
          ) : (
            <Dropdown.Item onClick={() => setOpenReqModal(!openReqModal)}>
              Join RateLab
            </Dropdown.Item>
          )}

          <Dropdown.Divider />
          <Dropdown.Item onClick={() => setOpenModal(true)}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
      <AuthorReq openModal={openReqModal} setOpenModal={setOpenReqModal} />

      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to SignOut ?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => handleSignOut()}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
