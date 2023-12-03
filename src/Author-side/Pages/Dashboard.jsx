import React, { useEffect, useState } from "react";
import { getAllBlogApi, getAllUsersApi } from "../../Services/AllAPI";

function Dashboard() {
  const [totalViews, setTotalViews] = useState(0);
  const [totalUsers, setTotalUsers] = useState([]);
  const [totalAuthors, setTotalAuthors] = useState([]);
  const [allBlogs, setAllBlogs] = useState({});
  const token = sessionStorage.getItem("token");
  const searchKey = "";
  const reqHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const getAllBlogs = async () => {
    try {
      const result = await getAllBlogApi(searchKey, reqHeader);
      if (result.status === 200) {
        setAllBlogs(result.data);

        // Calculate total views
        const total = result.data.reduce((acc, blog) => acc + blog.views, 0);
        setTotalViews(total);
      } else {
        console.log("API error", result.message);
      }
    } catch (error) {
      console.log("Catch", error.message);
    }
  };

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
    getAllAuthors();
    getAllUsers();
  }, []);

  return (
    <>
      <div className="w-full flex justify-center py-10">
        <div className="stats stats-vertical  sm:stats-horizontal shadow ">
          <div className="stat">
            <div className="stat-title">Total Views</div>
            <div className="stat-value">{totalViews}</div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Users</div>
            <div className="stat-value">{totalUsers?.length}</div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Authors</div>
            <div className="stat-value">{totalAuthors?.length}</div>
            <div className="stat-desc"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
