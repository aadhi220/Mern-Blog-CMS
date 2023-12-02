import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import PaginationFunction from '../Components/Pagination'
import { getAllBlogApi } from '../../Services/AllAPI'
import { globalUseContext } from '../../ContextApi/GlobalContext'

const TrendingPage = () => {
    const [blogResponse,setBlogResponse] = useState(false)
    const {searchKey}=useContext(globalUseContext)
    const [allBlogs,setAllBlogs] =useState({
  
    })
    const token ="";
   
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const getAllBlogs = async()=>{
        try {
            const searchKe=""
          const result =await getAllBlogApi(searchKe,reqHeader)
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
          console.log("render");
          getAllBlogs()
        },[blogResponse,searchKey])

        const blogArray = Array.from(allBlogs);

        const filteredBlog = blogArray
          .filter((blog) =>
            blog.title.toLowerCase().includes(searchKey.toLowerCase())
          )
          .sort((blogA, blogB) => {
            const dateA = new Date(blogA.created_at);
            const dateB = new Date(blogB.created_at);
        
           
            return dateB - dateA;
          });
        

        // sorted by the 'created_at' property in descending order.
        

      console.log(filteredBlog);
  return (
    <>
    {/* Card Blog */}
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}

      {/* End Title */}
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {/* Card */}
  {allBlogs.length>0 && filteredBlog.map((blog,index)=>(
    <ProductCard key={index} blog={blog} />
  ))  
}

        {/* End Card */}
        {/* Card */}
    
        {/* End Card */}
        {/* Card */}
        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
              alt="Image Description"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
              Front accounts - let's work together
            </h3>
            <p className="mt-5 text-gray-600 dark:text-gray-400">
              Are you an accountant? Are you a company formation advisor?
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Image Description"
            />
            <div>
              <h5 className="text-sm text-gray-800 dark:text-gray-200">
                By Lauren Waller
              </h5>
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Grid */}
      {/* Card */}
   <div className='mt-5'>  <PaginationFunction/></div>
      {/* End Card */}
    </div>
    {/* End Card Blog */}
  </>
  )
}

export default TrendingPage