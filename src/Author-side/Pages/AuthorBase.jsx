import React, { useContext, useEffect } from 'react'
import AuthorHeader from '../Components/AuthorHeader'
import AuthorFooter from '../Components/AuthorFooter'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import AuthorSidebar from '../Components/AuthorSidebar'
import ManageUsers from './ManageUsers'
import ManageBlog from './ManageBlog'
import AddBlog from './AddBlog'
import { getTokenContext } from '../../ContextApi/TokenContext'
import ManageCategories from './ManageCategories'
function AuthorBase() {
  const navigate=useNavigate()
  const {token,setToken}=useContext(getTokenContext)

  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem("existingUser"));
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }else {
      setToken("")
      navigate("/")
    }
    if(!user?.isAuthor){
navigate('/')
    }
    
  },[token])
  
  return (

    <>
    <AuthorHeader/>


    <div className=''>
      <AuthorSidebar/>
   <div className='pl-1 lg:pl-[17rem] w-full min-h-[100vh] dark:bg-[#111827] '>
        
    <Routes>
    
        <Route path="/home" element={<Dashboard/>} />
        <Route path="/users" element={<ManageUsers/>} />
       
        <Route path="/addBlog" element={<AddBlog/>} />
        <Route path="/manageBlog" element={<ManageBlog/>} />
        <Route path="/category" element={<ManageCategories/>} />
        {/* <Route path="/blog/:id/edit" element={<AuthorBlogEdit/>} />
        <Route path="/blog/:id/delete" element={<AuthorBlogDelete/>} />
        <Route path="/blog/:id/comment" element={<AuthorBlogComment/>} />
        <Route path="/blog/:id/comment/:commentId" element={<AuthorBlogCommentDetail/>} />
        <Route path="/blog/:id/comment/:commentId/edit" element={<AuthorBlogCommentEdit/>} /> */}
    </Routes>
   </div>
    </div>


    {/* <AuthorFooter/> */}
    
    
    </>
  )
}

export default AuthorBase