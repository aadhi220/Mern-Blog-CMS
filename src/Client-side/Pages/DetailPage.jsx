import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link, useParams } from "react-router-dom";
import CarousalBlog from "../Components/CarousalBlog";
import {
  getAuthorBlogApi,
  getBlogByIdApi,
  getUserByIdApi,
  setViewCountApi,
} from "../../Services/AllAPI";
import { SERVER_URL } from "../../Services/serverUrl";
import Follow from "../Components/Follow";
function DetailPage() {
  const location = useLocation();
  const { blogId } = useParams();
  const { viewUp, author, authorId } = location.state || {};
  const token = sessionStorage.getItem("token");
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const [loading, setLoading] = useState(true);
  const [authClick, setAuthClick] = useState(true);
  const [authorBlogs, setAuthorBlogs] = useState({});

  const [error, setError] = useState(null);
  const [blogDetails, setBlogDetails] = useState({});
  const [authorDetails, setAuthorDetails] = useState({});

  const handleViewCount = async () => {
    const reqBody = {
      count: viewUp,
      id: blogId,
    };
    // console.log("viewCount", reqBody);
    try {
      const result = await setViewCountApi(reqBody);
      if (result === 200) {
        // console.log(result);
      } else {
        // console.log("log view count error api", result);
      }
    } catch (error) {
      console.log("log view count error", error);
    }
  };

  const getBlogById = async () => {
    try {
      const result = await getBlogByIdApi(blogId, reqHeader);

      if (result.status === 200) {
        setBlogDetails(result.data);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      handleViewCount();
    }
  };

  const getAuthorById = async () => {
    try {
      const result = await getUserByIdApi(authorId, reqHeader);

      if (result.status === 200) {
        setAuthorDetails(result.data);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const getAuthorBlogs = async () => {
    try {
      // setAuthLoad(true);
      const searchKey = author;
      // console.log("search key: " + searchKey);
      const result = await getAuthorBlogApi(searchKey, reqHeader);
      if (result.status === 200) {
        const temp = result.data.filter((blog) => {
          return blog.approved === true;
        });
        setAuthorBlogs(temp);
        //  console.log("success", result);
      } else {
        console.log("api error", result.message);
      }
    } catch (error) {
      console.log("catch", error.message);
    } finally {
      // setAuthLoad(false);
    }
  };
  useEffect(() => {
    // console.log("render");

    getBlogById();
    getAuthorById();
    getAuthorBlogs();
  }, [authClick]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] ">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    ); // You can
  }

  if (error) {
    return <p>Error: {error}</p>; // Display an error message
  }

  return (
    <>
      {/* Blog Article */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 md:gap-x-6 lg:gap-x-12">
          {/* Content */}
          <div className="lg:col-span-2">
            <div className="pt-3 pb-8 md:pe-4 lg:pe-8">
              <div className="space-y-5 lg:space-y-2">
                <Link
                  to={"/all"}
                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Blog
                </Link>

                <CarousalBlog images={blogDetails.images} />

                <h2 className="text-3xl  font-bold lg:text-4xl xl:text-5xl dark:text-white">
                  {blogDetails.title}
                </h2>
                <div className="flex w-full items-center py-1 px-2 rounded-full   gap-x-5">
                  <button className="btn btn-xs rounded-full btn-primary">
                    {blogDetails.category}
                  </button>

                  <div className=" badge badge-ghost text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    <>
                      {" "}
                      <span>{blogDetails.views}</span>{" "}
                      <span className="ms-2">views</span>{" "}
                    </>
                  </div>
                  {/* {likeResponse ? <button onClick={(e)=>handleLike(e)} className="btn  scale-[.7] bg-white rounded-full"><i class={`fa-regular fa-heart  fa-2xl`}></i></button> : <button onClick={(e)=>handleLike(e)} className="btn  scale-[.7] bg-white rounded-full"><i class={`fa-solid fa-heart  fa-2xl`}></i></button>} */}
                  <div className=" badge badge-ghost text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    <>
                      {" "}
                      {""} {blogDetails.created_at}{" "}
                    </>
                  </div>
                </div>
                <hr />
                <div
                  className=" overflow-hidden w-[18rem] sm:w-[35rem] md:w-fit"
                  dangerouslySetInnerHTML={{ __html: blogDetails.content }}
                />
              </div>
            </div>
            <hr />
          </div>
          {/* End Content */}
          {/* Sidebar */}
          <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
            <div className="sticky top-[5rem] start-0 py-8 lg:ps-4 xl:ps-8">
              {/* Avatar Media */}
              <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
                <div className="block flex-shrink-0">
                  <img
                    className="inline-block h-[2.375rem] w-[2.375rem] object-cover rounded-full"
                    src={
                      authorDetails?.profilePic
                        ? `${SERVER_URL}/uploads/${authorDetails?.profilePic}`
                        : "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    }
                    alt="Image Description"
                  />
                </div>
                <a className="group grow block" href="">
                  <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    {authorDetails.username}
                  </h5>
                  <p className="text-sm text-gray-500">
                    {authorDetails?.job ? authorDetails.job : "Content Creater"}
                  </p>
                </a>
                <div className="grow">
                  <div className="flex justify-end">
              <Follow author={authorDetails.username}/>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {authorBlogs?.length > 1 &&
                  authorBlogs?.map((authBlog, index) => (
                    <Link
                      onClick={() => setAuthClick(!authClick)}
                      key={index}
                      to={`/detailPage/${authBlog?._id}`}
                      state={{
                        viewUp: authBlog?.views + 1,
                        author: authBlog.username,
                        authorId: authBlog.userId,
                      }}
                      className="group flex items-center gap-x-6"
                      href="#"
                    >
                      <div className="grow">
                        <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                          {authBlog?.title}
                        </span>
                        <p className="text-sm">{authBlog?.created_at}</p>
                      </div>
                      <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                        <img
                          className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                          src={`${SERVER_URL}/uploads/${authBlog?.images[0]}`}
                          alt="Image Description"
                        />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
