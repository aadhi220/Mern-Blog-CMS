import AuthorProfileMenu from "./AuthorProfileMenu";
export default function AuthorHeader() {
  return (
    <>
      <header className="sticky top-0 inset-x-0  flex-wrap sm:justify-start sm:flex-nowrap z-[48] shadow-xl bg-base-200 text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
        <nav
          className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
          aria-label="Global"
        >
          <div className="me-5 lg:me-0 lg:hidden">
            <div
              className="flex-none text-xl font-semibold dark:text-white"
              
              aria-label="Brand"
            >
              RateLab.com
            </div>
          </div>
          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div></div>

            <div className="flex items-center ms-auto gap-2">
              <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
                {" "}
                <i className="fa-solid fa-bars fa-lg"></i>
              </label>
              <AuthorProfileMenu />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
