"use client";

import { Carousel } from "flowbite-react";
import { SERVER_URL } from "../../Services/serverUrl";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CarouselH({ topBlogs }) {
  console.log(topBlogs);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[33rem] relative">
      <Carousel leftControl="left" rightControl="right" className="">
        {topBlogs &&
          topBlogs?.map((blog, index) => (
            <Fragment key={index}>
              <div className="relative h-full">
                <img
                  className="w-full h-full object-cover"
                  src={`${SERVER_URL}/uploads/${blog?.images[0]}`}
                  alt=""
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-end justify-start p-4">
                  <div className="max-w-lg mb-4  md:mb-10 md:ms-10">
                    <Link to={`/detailPage/${blog._id}`} state={{viewUp:blog.views+1,author:blog.username,authorId:blog.userId}} className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">{blog.title}</Link>
                    <p className="text-white  xl:text-lg 2xl:text-xl">{blog.caption}</p>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
      </Carousel>
    </div>
  );
}
