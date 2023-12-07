import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { SERVER_URL } from "../../Services/serverUrl";

export default function UserView({
  user,
  handleAuthorShip,
  loading,
  setLoading,
}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="bg-green-500  p-1 rounded-md"
        onClick={() => setOpenModal(true)}
      >
        <i className="fa-regular fa-eye fa-lg text-white"></i>
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>User Details</Modal.Header>
        <Modal.Body>
          <div className="w-full flex justify-center">
            <img
              className="rounded-lg max-w-[10rem]"
              src={`${SERVER_URL}/uploads/${user?.profilePic}`}
              alt=""
            />{" "}
          </div>
          <hr className="my-5" />
          <div className="flex justify-center w-full">
            <table className=" w-full mt-5">
              <tbody>
                <tr>
                  <td className="text-left pr-4 pb-2 font-semibold">Name</td>
                  <td className="pb-2">:</td>
                  <td className="pb-2">{user.username}</td>
                </tr>
                <tr>
                  <td className="text-left pr-4 pb-2 font-semibold">Email</td>
                  <td className="pb-2">:</td>
                  <td className="pb-2">{user.email}</td>
                </tr>
                <tr>
                  <td className="text-left pr-4 pb-2 font-semibold">
                    Profession
                  </td>
                  <td className="pb-2">:</td>
                  <td className="pb-2">{user.job}</td>
                </tr>
                <tr>
                  <td className="text-left pr-4 pb-2 font-semibold">Roll</td>
                  <td className="pb-2">:</td>
                  <td className="pb-2">
                    {user.isAdmin
                      ? "Admin"
                      : user?.isAuthor
                      ? "Author"
                      : "User"}
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {user?.isAdmin ? null : user?.isAuthor ? (
            <Button
              onClick={() => {
                handleAuthorShip(user, false);
                setLoading(true);
              }}
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Revoke AuthorShip"
              )}
            </Button>
          ) : (
            <Button
              onClick={() => {
                handleAuthorShip(user, true);
                setLoading(true);
              }}
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Set As Author"
              )}
            </Button>
          )}
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
