import React, { useEffect, useState } from "react";
import AuthorHeader from "../Components/AuthorHeader";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import AuthorSidebar from "../Components/AuthorSidebar";
import ManageUsers from "./ManageUsers";
import ManageBlog from "./ManageBlog";
import AddBlog from "./AddBlog";
import ManageCategories from "./ManageCategories";
import EditBlog from "./EditBlog";
function AuthorBase() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"));
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
      navigate("/");
    }
    if (!user?.isAuthor) {
      navigate("/");
    }
  }, [token]);

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div className="w-full ">
            <div className="flex-1 w-full min-h-[100vh]  dark:bg-[#111827] ">
              <AuthorHeader />
              <Routes>
                <Route path="/home" element={<Dashboard />} />
                <Route path="/users" element={<ManageUsers />} />

                <Route path="/addBlog" element={<AddBlog />} />
                <Route path="/editBlog/:blogId" element={<EditBlog />} />
                <Route path="/manageBlog" element={<ManageBlog />} />
                <Route path="/category" element={<ManageCategories />} />
              </Routes>
            </div>
          </div>
        </div>
        <AuthorSidebar />
      </div>
    </>
  );
}

export default AuthorBase;
