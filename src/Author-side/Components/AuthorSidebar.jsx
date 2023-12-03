import { Link } from "react-router-dom";
export default function AuthorSidebar() {
  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  return (
    <>
      <div className="drawer-side  z-50 ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-0 w-[15rem]  min-h-full  bg-base-200  shadow-2xl  text-base-content">
          <div className="w-full h-[4.5rem] flex items-center ps-10 bg-base-300 text-center shadow-lg ">
            {" "}
            <Link to={"/dashboard/home"} className="  font-semibold   text-2xl">
              RateLab.com
            </Link>
          </div>

          {/* Sidebar content here */}

          <div className="flex flex-col gap-3 px-5 py-5">
            <li className="">
              {" "}
              <Link className="text-lg font-medium" to={"/dashboard/home"}>
                Dashboard
              </Link>
            </li>
            <li className="">
              <Link className="text-lg font-medium" to={"/dashboard/addBlog"}>
                Add Blog
              </Link>
            </li>
            <li className="">
              <Link
                className="text-lg font-medium"
                to={"/dashboard/manageBlog"}
              >
                ManageBlog
              </Link>{" "}
            </li>
            {user.isAdmin && (
              <>
                <li className="">
                  <Link
                    className="text-lg font-medium"
                    to={"/dashboard/category"}
                  >
                    Categories
                  </Link>
                </li>
                <li className="">
                  <Link className="text-lg font-medium" to={"/dashboard/users"}>
                    Users
                  </Link>
                </li>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
