import React, { useState, useEffect, useContext } from "react";
import { getAllBlogApi } from "../../Services/AllAPI";
import CarouselH from "../Components/CarousalH";
import { globalUseContext } from "../../ContextApi/GlobalContext";
import LatestBlogs from "../Components/LatestBlogs";

function Home() {
  const { backToTop } = useContext(globalUseContext);
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
        const blogArray = result.data.filter((blog) => {
          return blog.approved === true;
        });

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
    backToTop();
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
               <LatestBlogs key={index} latestBlog={latestBlog}/>
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
