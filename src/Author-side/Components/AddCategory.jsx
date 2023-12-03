import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { addCategoryApi } from "../../Services/AllAPI";

import { toast } from "react-toastify";

export default function AddCategory({ setCategoryResponce, categoryResponce }) {
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState("");
  const handleCategory = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    // console.log(reqHeader);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      month: "short",
      day: "numeric",
    };

    const date = new Date();
    const formattedDate = date.toLocaleString("en-US", options);

    const reqBody = {
      category: category,
      created_at: formattedDate,
    };

    try {
      const result = await addCategoryApi(reqBody, reqHeader);
      if (result.status === 200) {
        setOpenModal(false);
        setCategory("");
        toast.success("Added category successfully");
        setCategoryResponce(!categoryResponce);
      } else {
        toast.error("failed to add category");
        // console.log(result);
        setCategoryResponce(!categoryResponce);
      }
    } catch (error) {
      // console.log(error);
      toast.error("failed to add category");
    }
  };
  function onCloseModal() {
    setCategory("");
    setOpenModal(false);
  }

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-blue-600  h-[2rem]"
      >
        New Category
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form
            onSubmit={(e) => {
              handleCategory(e);
            }}
            className="space-y-6"
          >
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add Category
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Category Name" />
              </div>
              <TextInput
                id="email"
                type="text"
                placeholder=""
                value={category || ""}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>

            <div className="w-full ">
              <Button className="float-right" type="submit">
                Add
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
