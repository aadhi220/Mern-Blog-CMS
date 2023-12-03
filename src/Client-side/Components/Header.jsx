import React, { useContext, useState } from "react";
import NavBarSecond from "./NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { globalUseContext } from "../../ContextApi/GlobalContext";
export default function Header() {
  const { setSearchKey, searchKey } = useContext(globalUseContext);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return (
    <>
      {/* ========== HEADER ========== */}
      <header
        style={{ zIndex: "99" }}
        className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-900 border-b border-gray-700 text-sm py-2.5 sm:py-4"
      >
        <nav
          className="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="me-5 md:me-8">
            <Link
              to={"/"}
              className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-label="Brand"
            >
              RateLab
            </Link>
          </div>
          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className={`   mx-auto flex gap-2`}>
              <div className="relative">
                <div
                  onClick={() => setOpen(!open)}
                  className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4"
                >
                  <svg
                    className="flex-shrink-0 h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={11} cy={11} r={8} />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  value={searchKey || ""}
                  onChange={(e) => setSearchKey(e.target.value)}
                  className="py-2 px-1 ps-1 sm:ps-11 pe-20 block w-[2rem]  focus:w-[10rem] sm:focus:w-96  md:w-96 bg-transparent border-gray-700 shadow-sm rounded-lg text-sm text-gray-300 focus:z-10 focus:bg-gray-800 focus:border-gray-900 focus:ring-gray-600 placeholder:text-gray-500"
                  placeholder="Search"
                />
              </div>
              {
                <button
                  onClick={() => {
                    navigate("/all");
                  }}
                  className=" btn hidden btn-sm mt-1 sm:flex items-center  z-20 pe-4"
                >
                  <span className="text-gray-500  sm:block">Search</span>
                </button>
              }
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              {/* <DarkModeToggle/> */}

              <div>
                {token ? (
                  <ProfileMenu />
                ) : (
                  <Link to={"/login"} className="text-white">
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
      <NavBarSecond token={token} reqHeader={reqHeader} />
    </>
  );
}
