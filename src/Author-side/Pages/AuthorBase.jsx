import React from 'react'
import AuthorHeader from '../Components/AuthorHeader'
import AuthorFooter from '../Components/AuthorFooter'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import AuthorSidebar from '../Components/AuthorSidebar'
import ManageUsers from './ManageUsers'
import ManageBlog from './ManageBlog'
import AddBlog from './AddBlog'
function AuthorBase() {
  return (

    <>
    <AuthorHeader/>


    <div className=''>
      <AuthorSidebar/>
   <div className='pl-1 lg:pl-[17rem]'>
        
    <Routes>
    
        <Route path="/home" element={<Dashboard/>} />
        <Route path="/users" element={<ManageUsers/>} />
       
        <Route path="/addBlog" element={<AddBlog/>} />
        <Route path="/manageBlog" element={<ManageBlog/>} />
        {/* <Route path="/blog/:id" element={<AuthorBlogDetail/>} />
        <Route path="/blog/:id/edit" element={<AuthorBlogEdit/>} />
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