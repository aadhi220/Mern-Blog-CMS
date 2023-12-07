import React, { useEffect, useState } from "react";
import { getAllBlogApi, getAllSubscribersApi, getAllUsersApi } from "../../Services/AllAPI";

function Dashboard() {
  const [totalViews, setTotalViews] = useState([]);
  const [myViews, setMyViews] = useState([]);
const [myBlogs, setMyBlogs] = useState([])
  const [totalUsers, setTotalUsers] = useState([]);
  const [totalAuthors, setTotalAuthors] = useState();
  const [MySub, setMySub] = useState([]);
    const [allSub, setAllSub] = useState([]);
  const token = sessionStorage.getItem("token");
  const searchKey = "";
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  const getAllBlogs = async () => {
    try {
      const result = await getAllBlogApi(searchKey, reqHeader);
  
      if (result.status === 200) {
        const myBlogsTemp = result.data.filter((blog) => {
          return blog.username === user.username;
        });
        
  
        // Calculate total views for blogs authored by the current user
        const totalViewsForUserBlogs = myBlogsTemp.reduce((acc, blog) => acc + blog.views, 0);
  
        // Calculate total views for all blogs
        const total = result.data.reduce((acc, blog) => acc + blog.views, 0);
  
        // Set state with the calculated values
        setTotalViews(total);
        setMyBlogs(myBlogsTemp);
        setMyViews(totalViewsForUserBlogs); // Corrected line
      } else {
        console.log("API error", result.message);
      }
    } catch (error) {
      console.log("Catch", error.message);
    }
  };
  


  const getSubscribers =async () => { 
    
    try {
      const result = await getAllSubscribersApi(reqHeader);
      if (result.status === 200) {
      const temp =result.data
      setAllSub(temp)
      const temp2 = result.data.filter((sub) => {
        return sub.author === user.username;
       
      });
      setMySub(temp2);
      } else {
        console.log("API error", result.message);
      }
    } catch (error) {
      
    }
  }

  const getAllAuthors = async () => {
    try {
      const temp = "author";
      const result = await getAllUsersApi(temp, reqHeader);
      if (result.status === 200) {
        setTotalAuthors(result.data);
        // console.log(result.data);
      } else {
        console.log("api error ", result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAllUsers = async () => {
    try {
      const temp = false;
      const result = await getAllUsersApi(temp, reqHeader);
      if (result.status === 200) {
        setTotalUsers(result.data);
        // console.log(result.data);
      } else {
        console.log("api error ", result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
    getSubscribers()
    getAllAuthors();
    getAllUsers();
  }, []);

  return (
    <>
      <div className="w-full flex justify-center px-10 flex-col gap-4 py-10">
      <div className="w-full "> <h1 className="text-5xl font-bold my-3 stat-value">Website Stats</h1></div>

      {user.isAdmin &&    <div className="stats stats-vertical  sm:stats-horizontal shadow ">
          <div className="stat   flex flex-col justify-center items-center">
            <div className="stat-title">Total Page views</div>
            <div className="stat-value">{totalViews}</div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat  flex flex-col justify-center items-center">
            <div className="stat-title">Total Users</div>
            <div className="stat-value">{totalUsers?.length}</div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat  flex flex-col justify-center items-center">
            <div className="stat-title">Total Authors</div>
            <div className="stat-value">{totalAuthors?.length}</div>
            <div className="stat-desc"></div>
          </div>

 
          <div className="stat  flex flex-col justify-center items-center">
            <div className="stat-title">Total Subscribers</div>
            <div className="stat-value">{allSub?.length}</div>
            <div className="stat-desc"></div>
          </div>
        
        </div>}

        <hr className="my-10" />

        <div className="w-full "> <h1 className="text-5xl font-bold my-3  stat-value">{user.username}'s Stat</h1></div>
        <div className="stats stats-vertical  sm:stats-horizontal shadow border">
          <div className="stat flex flex-col justify-center items-center">
            <div className="stat-title">Total Blog Views</div>
            <div className="stat-value">{myViews}</div>
            <div className="stat-desc"></div>
          </div>

        
          <div className="stat flex flex-col justify-center items-center">
            <div className="stat-title">Blogs Created</div>
            <div className="stat-value">{myBlogs?.length}</div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat flex flex-col justify-center items-center">
            <div className="stat-title">Subscribers</div>
            <div className="stat-value ">{MySub?.length}</div>
            <div className="stat-desc"></div>
          </div>
        
        </div>

        <hr className="my-10" />
   
      </div>
    </>
  );
}

export default Dashboard;
