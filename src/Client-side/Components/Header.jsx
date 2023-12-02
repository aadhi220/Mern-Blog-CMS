import React, { useContext, useState } from "react";


import NavBarSecond from "./NavBar";
import { Link } from "react-router-dom";
import { AuthorAuthContext } from "../../ContextApi/AuthorContext";
import { getTokenContext } from "../../ContextApi/TokenContext";
import ProfileMenu from "./ProfileMenu";
import { globalUseContext } from "../../ContextApi/GlobalContext";
export default function Header() {
  const {setSearchKey,searchKey}=useContext(globalUseContext)
 
const token =sessionStorage.getItem("token");

const reqHeader = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token}`,
};
 

  console.log(token);
  return (
      <>
  {/* ========== HEADER ========== */}
  <header style={{zIndex:"99"}} className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-900 border-b border-gray-700 text-sm py-2.5 sm:py-4">
    <nav
      className="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div className="me-5 md:me-8">
        <a
          className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
          aria-label="Brand"
        >
          RateLab
        </a>
      </div>
      <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
        <div className="sm:hidden">
          <button
            type="button"
            className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
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
          </button>
        </div>
        <div className="hidden mx-auto sm:block">
          <label htmlFor="icon" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
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
              onChange={(e)=>setSearchKey(e.target.value)}
              className="py-2 px-4 ps-11 pe-20 block w-92 md:w-96 bg-transparent border-gray-700 shadow-sm rounded-lg text-sm text-gray-300 focus:z-10 focus:border-gray-900 focus:ring-gray-600 placeholder:text-gray-500"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
              <span className="text-gray-500">Ctrl + /</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-2">
          <button
            type="button"
            className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
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
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>
        
          <div
        
          >
            
            {token ?<ProfileMenu/> :
            
            <Link to={'/login'} className="text-white">Sign In</Link>
            }
          </div>
        </div>
      </div>
    </nav>
  </header>
  {/* ========== END HEADER ========== */}
<NavBarSecond token={token} reqHeader={reqHeader}/>
</>



  );
}