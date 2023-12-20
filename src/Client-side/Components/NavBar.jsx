import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllCategoryApi } from "../../Services/AllAPI";
import { globalUseContext } from "../../ContextApi/GlobalContext";
function NavBarSecond({ reqHeader }) {
  const { setSearchKey } = useContext(globalUseContext);
  const [allCategories, setAllCategories] = useState([]);
  const navigate = useNavigate();
  const handleCategory = (categoryName) => {
    setSearchKey(categoryName);
    navigate("/all");
  };
const token = sessionStorage.getItem("token")
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
  }, []);

  return (
    <nav
      style={{ zIndex: "1" }}
      className=" sticky -top-px bg-white text-sm font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-6 md:pb-6 -mt-px dark:bg-slate-900 dark:border-gray-800 dark:shadow-slate-700/[.7]"
      aria-label="Jump links"
    >
      <div className="max-w-7xl snap-x w-full flex items-center overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900">
        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
          <Link
            to={"/"}
            className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Home
          </Link>
        </div>
        {token ? <>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
            <Link
              to={"/all"}
              onClick={() => handleCategory("")}
              className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              All
            </Link>
          </div>
          <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
            <Link
              to={"/trending"}
              onClick={() => setSearchKey("")}
              className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Trending
            </Link>
          </div>
    
        {allCategories?.length > 0 &&
          allCategories.map((menu, index) => (
            <div
              key={index}
              className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0"
            >
              <button
                onClick={() => handleCategory(menu.category)}
                className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 focus:underline "
              >
                {menu.category}
              </button>
            </div>
          ))}
              </> : <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
            <Link
              to={"/trending"}
              onClick={() => setSearchKey("")}
              className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              More
            </Link>
          </div> }
      </div>
    </nav>
  );
}

export default NavBarSecond;
