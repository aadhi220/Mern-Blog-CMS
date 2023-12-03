import { Link } from "react-router-dom";
import { SERVER_URL } from "../../Services/serverUrl";

export default function ProductCard({ blog }) {
  return (
    <Link
      to={`/detailPage/${blog._id}`}
      state={{
        viewUp: blog.views + 1,
        author: blog.username,
        authorId: blog.userId,
      }}
      className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all rounded overflow-hidden duration-300   dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      <div className=" h-[16rem] flex justify-center  items-center  overflow-hidden">
        <img
          className=" object-cover  "
          src={`${SERVER_URL}/uploads/${blog.images[0]}`}
          alt="Image Description"
        />
      </div>
      <div className="flex flex-col px-6 ">
        <div className="my-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
            {blog?.title}
          </h3>
          <p className="mt-5 text-gray-600 dark:text-gray-400">
            {blog?.caption}
          </p>
        </div>
        <div className="mt-auto mb-6 flex items-center gap-x-3">
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Image Description"
          />
          <div>
            <h5 className="text-sm text-gray-800 dark:text-gray-200">
              By {blog.username}
            </h5>

            <span>{blog.created_at}</span>
          </div>
          <span className="h-full ms-auto flex items-center">
            {blog.views} views
          </span>
        </div>
      </div>
    </Link>
  );
}
