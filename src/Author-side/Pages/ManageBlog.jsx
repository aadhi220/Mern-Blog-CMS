import React, { useEffect, useState } from "react";
import { deleteBlogApi, getAllBlogApi } from "../../Services/AllAPI";
import { Table } from "flowbite-react";
import DeleteModal from "../Components/DeleteModal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ManageBlog() {
  const [blogResponse, setBlogResponse] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true)
  const token = sessionStorage.getItem("token");
  const searchKey = "";
  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const handleDeleteBlogPost = async (blogId) => {
    try {
      const result = await deleteBlogApi(blogId, reqHeader);
      if (result.status === 200) {
        setBlogResponse(!blogResponse);
        toast.success("Blog Post Deleted Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAllBlogs = async () => {
    try {
      const result = await getAllBlogApi(searchKey, reqHeader);
      if (result.status === 200) {
       
 if (user.isAdmin){
  const temp = (result.data).sort((a,b)=>{
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB - dateA;
  })
  setAllBlogs(temp)
  
 }else {
  const temp = (result.data).filter(
    (blog) =>
      blog.username.toLowerCase().includes((user.username).toLowerCase())
  ).sort((blogA, blogB) => {
    const dateA = new Date(blogA.created_at);
    const dateB = new Date(blogB.created_at);
    return dateB - dateA;
    
  });
  setAllBlogs(temp)
 }
    setLoading(false)
     
      } else {
        console.log("api error", result.message);
        setLoading(false)
      }
    } catch (error) {
      console.log("catch", error.message);
      setLoading(false)
    }
  };

  useEffect(() => {
    // console.log("render");
    getAllBlogs();
  }, [blogResponse]);


  return (
    <>
      <div className="flex w-full  justify-center items-center dark:bg-gray-800 dark:border-gray-700">
       {loading ?<div className="h-[80vh] flex justify-center items-center"> <span className="loading loading-spinner loading-lg"></span></div> : <div className="overflow-x-auto pt-7 flex-1 max-w-7xl pb-5 dark:bg-gray-800 dark:border-gray-700  ">
          <div className="w-full mb-5 flex  px-[1rem] items-center  gap-10">
            <h3 className="text-2xl font-semibold dark:text-white">Blogs</h3>
          </div>
          <Table hoverable striped>
            <Table.Head>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
            {user.isAdmin && <Table.HeadCell>Author</Table.HeadCell>}
              <Table.HeadCell>Views</Table.HeadCell>
              <Table.HeadCell>Created_at</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              {/* <Table.HeadCell>Roll</Table.HeadCell> */}
              <Table.HeadCell>
                <span className="">Actions</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {allBlogs?.length > 0 &&
                allBlogs?.map((blog, index) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {blog?.title}
                    </Table.Cell>
                    <Table.Cell>{blog?.category}</Table.Cell>

                  {user.isAdmin &&  <Table.Cell>{blog.username}</Table.Cell>}
                    <Table.Cell className="text-start ps-10">
                      {blog.views}
                    </Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        {blog.created_at}
                      </a>
                    </Table.Cell>
<Table.Cell className="">{blog.approved ? <div className="badge badge-accent">live</div> :
<div className="badge badge-ghost">Pending</div>}</Table.Cell>
                    <Table.Cell className="flex gap-3 place-items-center">
                      <Link
                        to={`/dashboard/editBlog/${blog?._id}`}
                        state={{ blog: blog }}
                        className="bg-green-500  p-1 rounded-md"
                      >
                        <i className="fa-regular fa-eye fa-lg text-white"></i>
                      </Link>
                      <DeleteModal
                        action={handleDeleteBlogPost}
                        id={blog?._id}
                        product={`this blog post `}
                      />
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>}
      </div>
    </>
  );
}

export default ManageBlog;
