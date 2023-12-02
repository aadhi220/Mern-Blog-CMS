import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import CarousalBlog from "../Components/CarousalBlog";
import { setViewCountApi } from "../../Services/AllAPI";

function DetailPage() {
  const location = useLocation();
const [likeResponse,setLikeResponse]=useState(false)

  const { blogDetail, viewUp } = location.state || {};

const handleViewCount =async()=>{
  const reqBody ={
    count : viewUp,
    id:blogDetail._id
  }
  try {
    const result = await setViewCountApi(reqBody)
    if(result===200){
console.log(result);
    }else {
      console.log(result);
    }
  } catch (error) {
    console.log(error);
    
  }
}

const handleLike=(e)=>{
  e.preventDefault();
  if(likeResponse){
    
  }
  setLikeResponse(!likeResponse)
  
  if(likeResponse){
    console.log("like",likeResponse);
  }
  else{
    console.log("dislike",likeResponse);
  }
}

  useEffect(()=>{
console.log("render");
handleViewCount()
  },[])
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

                <CarousalBlog images={blogDetail.images} />

                <h2 className="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white">
                  {blogDetail.title}
                </h2>
                <div className="flex w-full items-center gap-x-5">
                  <a
                    className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    {blogDetail.category}
                  </a>
                 
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                  <i class="fa-solid fa-eye opacity-80 me-1"></i> {blogDetail.views} 
                  </p>
                 {likeResponse ? <button onClick={(e)=>handleLike(e)} className="btn  scale-[.7] bg-white rounded-full"><i class={`fa-regular fa-heart  fa-2xl`}></i></button> : <button onClick={(e)=>handleLike(e)} className="btn  scale-[.7] bg-white rounded-full"><i class={`fa-solid fa-heart  fa-2xl`}></i></button>}
                  <p className="text-xs  sm:text-sm ms-auto text-gray-800 dark:text-gray-200">
                  <i class="fa-solid fa-clock-rotate-left me-1"></i> {""} {blogDetail.created_at}
                  </p>

                </div>
                <hr />
                <div  className=" overflow-hidden w-[18rem] sm:w-[35rem] md:w-fit" dangerouslySetInnerHTML={{ __html: blogDetail.content }} />
              </div>
            </div>
          </div>
          {/* End Content */}
          {/* Sidebar */}
          <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
            <div className="sticky top-[5rem] start-0 py-8 lg:ps-4 lg:ps-8">
              {/* Avatar Media */}
              <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
                <a className="block flex-shrink-0" href="#">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </a>
                <a className="group grow block" href="">
                  <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    Leyla Ludic
                  </h5>
                  <p className="text-sm text-gray-500">UI/UX enthusiast</p>
                </a>
                <div className="grow">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                        <line x1={19} x2={19} y1={8} y2={14} />
                        <line x1={22} x2={16} y1={11} y2={11} />
                      </svg>
                      Follow
                    </button>
                  </div>
                </div>
              </div>
              {/* End Avatar Media */}
              <div className="space-y-6">
                {/* Media */}
                <a className="group flex items-center gap-x-6" href="#">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      5 Reasons to Not start a UX Designer Career in 2022/2023
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Image Description"
                    />
                  </div>
                </a>
                {/* End Media */}
                {/* Media */}
                <a className="group flex items-center gap-x-6" href="#">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      If your UX Portfolio has this 20% Well Done, it Will Give
                      You an 80% Result
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Image Description"
                    />
                  </div>
                </a>
                {/* End Media */}
                {/* Media */}
                <a className="group flex items-center gap-x-6" href="#">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      7 Principles of Icon Design
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Image Description"
                    />
                  </div>
                </a>
                {/* End Media */}
              </div>
            </div>
          </div>
          {/* End Sidebar */}
        </div>
      </div>
      {/* End Blog Article */}
    </>
  );
}

export default DetailPage;
