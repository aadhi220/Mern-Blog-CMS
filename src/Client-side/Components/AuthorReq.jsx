import { Button, FileInput, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { UpdateProfileApi } from "../../Services/AllAPI";
import { toast } from "react-toastify";

export default function Component({ openModal, setOpenModal }) {
  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    username: user?.username,
    email: user?.email,
    job: "",
    authorRequest: true,
    profilePic: "",
  });
  const HandleRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log("request", userData);
    const { username, email, job, authorRequest, profilePic } = userData;
    const reqBody = new FormData();
    reqBody.append("username", username);
    reqBody.append("email", email);
    reqBody.append("job", job);
    reqBody.append("authorRequest", authorRequest);
    reqBody.append("images", profilePic);
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await UpdateProfileApi(reqBody, reqHeader);
      if (result.status === 200) {
        setLoading(false);
        toast.success("request sent successfully");
        setOpenModal(false);
      } else {
        setLoading(false);
        toast.error("something went wrong");
      }
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
      console.log(error);
    }
  };

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal
        show={openModal}
        size="2xl"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={(e) => HandleRequest(e)} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Ready to join our awesome team?{" "}
            </h3>
            <p>
              {" "}
              Just update your email with your official one, upload a photo, and
              let us know your profession. We'll shoot you an email once you're
              in! 🚀
            </p>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                value={userData.email || ""}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                placeholder=""
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Full Name" />
              </div>
              <TextInput
                id="name"
                value={userData.username || ""}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
                placeholder=""
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="job" value="Your profession" />
              </div>
              <TextInput
                id="job"
                value={userData.job || ""}
                onChange={(e) =>
                  setUserData({ ...userData, job: e.target.value })
                }
                placeholder=""
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="file-upload" value="Upload file" />
              </div>
              <FileInput
                id="file-upload"
                type="file"
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    profilePic: e.target.files[0],
                  })
                }
                required
              />
            </div>

            <div className="w-full gap-2 flex justify-end">
              <button onClick={() => setOpenModal(!openModal)} className="btn">
                Cancel
              </button>
              <Button type="submit">
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Sent Request"
                )}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
