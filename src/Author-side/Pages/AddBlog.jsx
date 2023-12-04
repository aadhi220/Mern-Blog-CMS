import {
  Button,
  FileInput,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, {  useEffect, useState } from "react";
import TextEditor from "../Components/TextEditor";
import { toast } from "react-toastify";
import { addBlogApi, getAllCategoryApi, sendMailApi} from "../../Services/AllAPI";
import { useNavigate } from "react-router";
function AddBlog() {

  const user = JSON.parse(sessionStorage.getItem("existingUser"));
const [loading ,setLoading]=useState(false)
  const navigate= useNavigate()

  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    month: "short",
    day: "numeric",
  };

  const date = new Date();
  const formattedDate = date.toLocaleString("en-US", options);
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    caption: "",
    category: "",
    images: [],
    content: "",
    userId:user._id,
    username:user.username,
    views:0,
    likes:0,
    approved:user.isAdmin ? true : false,

  });

  // console.log(blogDetails);
  const [allCategory,setCategory] = useState([])
  const token =sessionStorage.getItem("token");
  const reqHeader = {
    "Content-Type": "multipart/form-data",
    "Authorization": `Bearer ${token}`,
  };
  const getAllCategories=async()=>{
    try {
      const result = await getAllCategoryApi(reqHeader)
      if (result.status === 200) {
        setCategory(result.data)

        
        // console.log("category",result.data)
      }
    } catch (error) {
      
    }
  }
 
  // console.log(typeof(blogDetails.images));
const HandleSubmit =async (e)=>{
  e.preventDefault();
  setLoading(true);
  


  const {title,caption,category,images,username,userId,views,likes,content,approved}=blogDetails;

  if(!title || !caption || !category || !images || !username || !userId  ||!content) {
    toast.warning("Please fill in all fields")
  }else {
    const reqBody = new FormData();
    reqBody.append("title", title);
    reqBody.append("caption", caption);
    reqBody.append("category", category);
    
    // Convert FileList to an array
    const imagesArray = Array.from(images);
    
    imagesArray.forEach((image) => {
      reqBody.append(`images`, image);
    });
    
    reqBody.append('username', username);
    reqBody.append('userId', userId);
    reqBody.append('views', views);
    reqBody.append('likes', likes);
    reqBody.append('created_at', formattedDate);
    reqBody.append('content', content);
    reqBody.append('approved',approved);
    

  
 

  try {
    const result = await addBlogApi(reqBody,reqHeader)
    if(result.status === 200) {
      toast.success("successfully added")

      try {
        const reqbody ={
          username:username,
          title:title
        }
        const sentmail = await sendMailApi(reqbody)
        if(sentmail.status === 200) {
          console.log("email sent");
        }else {
          console.log("email not sent");
        }
       
      } catch (error) {
        console.log(error);
       
      }



      setBlogDetails({
        title: "",
        caption: "",
        category: "",
        images: [],
        content: "",
        userId:user._id,
        username:user.username,
        views:0,
        likes:0,
        approved:false
      })
      setLoading(false);
      navigate("/dashboard/manageBlog")
      
    }else {
      toast.error("something went wrong")
      setLoading(false);
      // console.log(result)
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
    
  }
}



}

useEffect(()=>{
  
  getAllCategories()
},[])


  return (
    <div className="p-[1rem] dark:bg-[#111827]">
      <div className="w-full ">
        <div id="header" className="my-[1rem]">
          <div>
            <h1 className="text-2xl font-semibold dark:text-white">Add Blog</h1>
          </div>
        </div>

        <section id="form" className="p-[1.5rem] shadow-xl bg-slate-100  dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={(e)=>HandleSubmit(e)} className="flex flex-col" >
            <div className="w-full my-[1rem]">
              <h3 className="text-lg font-medium dark:text-white">Blog Details</h3>
            </div>
            <div id="form-section" className="flex flex-col">
              <div className="mb-[1rem]">
                <div className=" block">
                  <Label
                    htmlFor="base"
                    value="Title"
                    className="text-lg font-normal"
                  />
                </div>
                <TextInput
                  id="base"
                  value={blogDetails.title || ""}
                  onChange={(e) =>
                    setBlogDetails({ ...blogDetails, title: e.target.value })
                  }
                  type="text"
                  sizing="md"
                />
              </div>
              <div className="mb-[1rem]">
                <div>
                  <Label
                    htmlFor="default-file-upload"
                    value="Images"
                  
                    className="text-lg font-normal"
                  />
                </div>
                <FileInput id="default-file-upload"
                
                onChange={(e)=>setBlogDetails({...blogDetails,images:e.target.files})}
                multiple />
              </div>

              <div className="mb-[1rem]">
                <div className=" block">
                  <Label htmlFor="category" value="Select Category" className="text-lg font-normal" />
                </div>
                <Select onChange={(e)=>setBlogDetails({...blogDetails,category:e.target.value})} id="category"  required>
  <option value="">All</option>
  {allCategory.map((category, index) => (
    <option key={index} value={category.category}>
      {category.category}
    </option>
  ))}
</Select>

              </div>

              <div className="mb-[1rem]">
                <div className=" block">
                  <Label htmlFor="comment" value="Caption" className="text-lg font-normal" />
                </div>
                <Textarea
                  id="comment"
                  placeholder="Caption..."
                  value={blogDetails.caption ||""}
                  onChange={(e) =>
                    setBlogDetails({...blogDetails, caption: e.target.value })
                  }
                  required
                  rows={3}
                />
              </div>
            </div>

            <div className="w-full my-[1rem]">
              <h3 className="text-lg font-normal dark:text-white">Blog Content</h3>
            </div>

            <div>
              <TextEditor setBlogDetails={setBlogDetails} blogDetails={blogDetails}  />
            </div>
            <div className="w-full flex justify-center mt-3">
              <Button type="submit" className="flex-1 max-w-xs" color="blue">
                {loading ? <span className="loading loading-spinner loading-md"></span> : "Add"}
              </Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default AddBlog;
