
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { AuthorAuthContext } from "../../ContextApi/AuthorContext";
import { useContext } from "react";
import { globalUseContext } from "../../ContextApi/GlobalContext";

export default function AuthorSidebar() {
  const { isAdmin } = useContext(AuthorAuthContext);
  const { showSidebar, setShowSidebar } = useContext(globalUseContext);

  return (
    <>
      <div className="drawer-side  z-50 ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-0 w-[15rem]  min-h-full  bg-base-100 shadow-2xl  text-base-content">
          <div className="w-full h-[4.5rem] flex items-center ps-[rem]  text-center bg-white"><h1 className="text-xl hidden md:block ">Brand</h1></div>
          {/* Sidebar content here */}
          <li className="ps-[1rem]">
            {" "}
            <Link to={"/dashboard/home"}>Dashboard</Link>
          </li>
          <li className="ps-[1rem]">

          <Link to={"/dashboard/addBlog"}>Add Blog</Link>
          </li>
          <li className="ps-[1rem]">
          <Link to={"/dashboard/manageBlog"}>ManageBlog</Link> </li>
  { isAdmin &&  <>
            <li className="ps-[1rem]">
              <Link to={"/dashboard/category"}>Categories</Link>
            </li>
            <li className="ps-[1rem]">
              <Link to={"/dashboard/users"}>Users</Link>
            </li>
      </>}
        </ul>
      </div>












    
    </>
  );
}
