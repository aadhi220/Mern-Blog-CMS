import { Table } from "flowbite-react";
import AddCategory from "../Components/AddCategory";
import { useEffect, useState } from "react";

import { deleteCategoryApi, getAllCategoryApi } from "../../Services/AllAPI";
import DeleteModal from "../Components/DeleteModal";

export default function ManageCategories() {
  // const {token}=useContext(getTokenContext)
  const [allCategories, setAllCategories] = useState([]);
  const [categoryResponce, setCategoryResponce] = useState(false);
  const token = sessionStorage.getItem("token");
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const handleCategoryDelete = async (categoryId) => {
    try {
      const result = await deleteCategoryApi(categoryId, reqHeader);
      if (result.status === 200) {
        setCategoryResponce(!categoryResponce);
      } else {
        // console.log(result.message);
        setCategoryResponce(!categoryResponce);
      }
    } catch (error) {
      // console.log(error);
      setCategoryResponce(!categoryResponce);
    }
  };
  const getAllCategories = async () => {
    // console.log(reqHeader);

    try {
      const result = await getAllCategoryApi(reqHeader);
      if (result.status === 200) {
        setAllCategories(result.data);

        // console.log(result.data);
      } else {
        // console.log("api error ",result);
      }
    } catch (error) {
      // console.log(error.message);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, [categoryResponce]);

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="overflow-x-auto pt-7 flex-1 max-w-7xl   ">
        <div className="w-full mb-5 flex  px-[1rem] items-center  gap-10">
          <h3 className="text-2xl font-semibold">Categories</h3>
          <AddCategory
            setCategoryResponce={setCategoryResponce}
            categoryResponce={categoryResponce}
          />
        </div>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>category Name</Table.HeadCell>
            <Table.HeadCell>
              <span className="">Created_at</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {allCategories.length > 0 &&
              allCategories.map((category, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {category.category}
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      {category.created_at}
                    </a>
                  </Table.Cell>
                  <Table.Cell>
                    <DeleteModal
                      action={handleCategoryDelete}
                      id={category._id}
                      product="category"
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
