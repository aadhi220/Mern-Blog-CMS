
'use client';

import { Avatar, DarkThemeToggle, Dropdown, Sidebar} from 'flowbite-react';
import AuthorProfileMenu from './AuthorProfileMenu';
import { useContext } from 'react';
import { globalUseContext } from '../../ContextApi/GlobalContext';

export default function AuthorHeader() {
  const {showSidebar,setShowSidebar} =useContext(globalUseContext);
  return (
   <>
      <header className="sticky top-0 inset-x-0  flex-wrap sm:justify-start sm:flex-nowrap z-[48] shadow-xl bg-base-200 text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="me-5 lg:me-0 lg:hidden">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
        </div>
        <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
        <div></div>
    
          <div className="flex items-center ms-auto gap-2">
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
          
           <DarkThemeToggle />
           <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden"> <i className="fa-solid fa-bars fa-lg"></i></label>
         <AuthorProfileMenu/>
         
          </div>
        </div>
      </nav>
    </header>
   </>
  );
}
