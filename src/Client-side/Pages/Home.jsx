import React, { useState, useEffect } from "react";
import { getAllBlogApi } from "../../Services/AllAPI";
import CarouselH from "../Components/CarousalH";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../Services/serverUrl";

function Home() {
  const [topBlogs, setTopBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = "qwerty";
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const getHomeBlogs = async () => {
    try {
      const searchKe = "";
      const result = await getAllBlogApi(searchKe, reqHeader);

      if (result.status === 200) {
        const blogArray = result.data;

        const latBlogs = blogArray
          .sort(
            (blogA, blogB) =>
              new Date(blogB.created_at) - new Date(blogA.created_at)
          )
          .slice(0, 4);

        const tpBlogs = blogArray
          .sort((blogA, blogB) => blogB.views - blogA.views)
          .slice(0, 3);

        setLatestBlogs(latBlogs);
        setTopBlogs(tpBlogs);
        setLoading(false);
      } else {
        console.log("api error", result.message);
      }
    } catch (error) {
      console.log("catch", error.message);
    }
  };

  useEffect(() => {
    // console.log("render");
    getHomeBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] ">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    ); // You can
  }

  // console.log("latest", latestBlogs);
  // console.log("top", topBlogs);
  return (
    <div className="px-1 sm:px-3 md:px-6 lg:px-8 xl:px-12 py-10">
      <div className="w-full flex justify-center items-center">
        <CarouselH topBlogs={topBlogs} />
      </div>
      <>
        {/* Card Blog */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <h1 className="text-2xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-10 font-semibold">
            Latest Blogs
          </h1>
          {/* Grid */}
          <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
            {/* Card */}
            {latestBlogs &&
              latestBlogs.length > 0 &&
              latestBlogs.map((latestBlog, index) => (
                <Link
                  key={index}
                  to={`/detailPage/${latestBlog._id}`}
                  state={{
                    viewUp: latestBlog.views + 1,
                    author: latestBlog.username,
                    authorId: latestBlog.userId,
                  }}
                  className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  <div className="sm:flex">
                    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                      <img
                        className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                        src={`${SERVER_URL}/uploads/${latestBlog.images[0]}`}
                        alt="Image Description"
                      />
                    </div>
                    <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                        {latestBlog.title}
                      </h3>
                      <p className="mt-3 text-gray-600 dark:text-gray-400">
                        {latestBlog.caption}
                      </p>
                      <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                        Read more
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
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

            {/* End Card */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Blog */}
      </>
    </div>
  );
}

export default Home;
