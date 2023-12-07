import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import PaginationFunction from "../Components/Pagination";
import { getAllBlogApi } from "../../Services/AllAPI";
import { globalUseContext } from "../../ContextApi/GlobalContext";

const TrendingPage = () => {
  const [loading, setLoading] = useState(true);
  const [allBlogs, setAllBlogs] = useState([]);
  const { searchKey } = useContext(globalUseContext);
  const token = "";

  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const getAllBlogs = async () => {
    try {
      setLoading(true);
      const searchKe = "";
      const result = await getAllBlogApi(searchKe, reqHeader);
      if (result.status === 200) {
        const temp = result.data.filter((blog) => {
          return blog.approved === true;
        });
        setAllBlogs(temp);
      } else {
        console.log("api error", result.message);
      }
    } catch (error) {
      console.log("catch", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log("render");
    getAllBlogs();
  }, [searchKey]);

  const filteredBlog = allBlogs
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchKey.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchKey.toLowerCase())
    )
    .filter((blog) => blog.views > 10)
    .sort((blogA, blogB) => blogB.views - blogA.views)

  // console.log(filteredBlog);

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-[80vh] ">
            <span className="loading loading-bars loading-lg"></span>
          </div> // You can replace this with a loading spinner or component
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allBlogs.length > 0 ?
                filteredBlog.map((blog, index) => (
                  <ProductCard key={index} blog={blog} />
                )): <span>Nothing Here Yet!!</span>}
            </div>

            <div className="mt-5">
              {" "}
              {/* <PaginationFunction /> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TrendingPage;
