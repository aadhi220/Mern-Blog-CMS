import {
  Button,
  FileInput,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import TextEditor from "../Components/TextEditor";
import { toast } from "react-toastify";
import { addBlogApi } from "../../Services/AllAPI";
import { getTokenContext } from "../../ContextApi/TokenContext";
function AddBlog() {
  const {token} =useContext(getTokenContext)
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    caption: "",
    category: "",
    images: [],
    content: "",
  });

  console.log(blogDetails);

  const [allCategory,setCategory] = useState([])
 
const HandleSubmit =async (e)=>{
  e.preventDefault();
  const {title,caption,category,images}=blogDetails;

  if(!title || !caption || !category || !images) {
    toast.warnig("Please fill in all fields")
  }else {
    const reqBody = new FormData();
    reqBody.append("title", title);
    reqBody.append("caption", caption);
    reqBody.append("category", category);
    images.forEach((image,index)=>{
      reqBody.append(`image-${index+1}`,image)
    })
  }

  if (token) {
    const reqHeader = {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${token}`,
    };

  try {
    const result = await addBlogApi(reqBody,reqHeader)
    if(result.status === 200) {
      toast.success("successfully added")
    }else {
      toast.error("something went wrong")
      console.log(result)
    }
  } catch (error) {
    console.log(error);
    
  }
  
}


}



  return (
    <div className="p-[1rem]">
      <div className="w-full ">
        <div id="header" className="my-[1rem]">
          <div>
            <h1 className="text-2xl font-semibold">Add Blog</h1>
          </div>
        </div>

        <section id="form" className="p-[1.5rem] shadow-xl bg-slate-100">
          <form onSubmit={(e)=>HandleSubmit(e)} className="flex flex-col">
            <div className="w-full my-[1rem]">
              <h3 className="text-lg font-medium">Blog Details</h3>
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
                  <Label htmlFor="category" value="Select Category" />
                </div>
                <Select id="category" required>
                {allCategory.map((category,index) => (
                  <option key={index} value={category.name}>{category.name}</option>
                ))}
                
                </Select>
              </div>

              <div className="mb-[1rem]">
                <div className=" block">
                  <Label htmlFor="comment" value="Caption" />
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
              <h3 className="text-lg">Blog Content</h3>
            </div>

            <div>
              <TextEditor setBlogDetails={setBlogDetails} blogDetails={blogDetails}  />
            </div>
            <div className="w-full flex ">
              <Button type="submit" className=" flex-1" color="blue">
                Blue
              </Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default AddBlog;
