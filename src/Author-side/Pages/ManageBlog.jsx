import React, { useEffect, useState } from 'react'
import { deleteBlogApi, getAllBlogApi } from '../../Services/AllAPI';
import { Table } from 'flowbite-react';
import DeleteModal from '../Components/DeleteModal';
import { toast } from 'react-toastify';

function ManageBlog() {
const [blogResponse,setBlogResponse] = useState(false)
  const [allBlogs,setAllBlogs] =useState({

  })
  const token = sessionStorage.getItem("token");
  const searchKey=""
  const reqHeader = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };

  const handleDeleteBlogPost =async(blogId)=>{
    try {
const result =await deleteBlogApi(blogId,reqHeader)
if(result.status===200) {
  setBlogResponse(!blogResponse)
  toast.success("Blog Post Deleted Successfully")
}     
    } catch (error) { 
      console.log(error)
      
    }
  }
const getAllBlogs = async()=>{
try {
  const result =await getAllBlogApi(searchKey,reqHeader)
  if(result.status===200){
    setAllBlogs(result.data)
    
  }else{
    console.log("api error",result.message)
  }
  
} catch (error) {
  console.log("catch", error.message)
  
}
}

useEffect (()=>{
  // console.log("render");
  getAllBlogs()
},[blogResponse])

  return (
    <>
  <div className="flex w-full  justify-center items-center dark:bg-gray-800 dark:border-gray-700">
      <div className="overflow-x-auto pt-7 flex-1 max-w-7xl pb-5 dark:bg-gray-800 dark:border-gray-700  ">
        <div className="w-full mb-5 flex  px-[1rem] items-center  gap-10">
          <h3 className="text-2xl font-semibold dark:text-white">Blogs</h3>
        </div>
        <Table hoverable striped>
          <Table.Head>
            <Table.HeadCell>Title</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Author</Table.HeadCell>
            <Table.HeadCell>Views</Table.HeadCell>
            <Table.HeadCell>Created_at</Table.HeadCell>
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
                    <Table.Cell>
                    
                    
                        { blog?.category}      
                    
                  </Table.Cell>
                    
                    
                  <Table.Cell>
                    
                        {blog.username}      
                     
                  </Table.Cell>
                  <Table.Cell className='text-start ps-10'>{blog.views}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      {blog.created_at}
                    </a>
                  </Table.Cell>
                

                  <Table.Cell className="flex gap-3 place-items-center">
                    {/* <UserView user={blog} handleAuthorShip={handleAuthorShip} /> */}

                    { 
                      <DeleteModal
                        action={handleDeleteBlogPost}
                        id={blog?._id}
                        product={`this blog post `}
                      />
                    }
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
</>
  )
}

export default ManageBlog