import React, { useContext } from "react";
import { Avatar, Dropdown } from 'flowbite-react';

function ProfileMenu() {
  const {isAuthor}=useContext(AuthorAuthContext);


  return (
   <div>
      <Dropdown
        label={<Avatar alt="User settings" img="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" rounded />}
        arrowIcon={false}
        inline
        style={{zIndex:"99"}} >
        <Dropdown.Header >
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">name@flowbite.com</span>
        </Dropdown.Header >
        <Dropdown.Item ><Link to={'/authorBase'}>Dashboard</Link></Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
   </div>
  );
}


import NavBarSecond from "./NavBar";
import { Link } from "react-router-dom";
import { AuthorAuthContext } from "../../ContextApi/AuthorContext";
export default function Header() {

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
            {/* <button
              id="hs-dropdown-with-header"
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
            >
              <img
                className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
            </button>
            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
              aria-labelledby="hs-dropdown-with-header"
            >
              <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Signed in as
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                  james@site.com
                </p>
              </div>
              <div className="mt-2 py-2 first:pt-0 last:pb-0">
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
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
                  Newsletter
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
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
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  Purchases
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
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
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                    <path d="M12 12v9" />
                    <path d="m8 17 4 4 4-4" />
                  </svg>
                  Downloads
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Team Account
                </a>
              </div>
            </div> */}
            <ProfileMenu/>
          </div>
        </div>
      </div>
    </nav>
  </header>
  {/* ========== END HEADER ========== */}
<NavBarSecond/>
</>



  );
}