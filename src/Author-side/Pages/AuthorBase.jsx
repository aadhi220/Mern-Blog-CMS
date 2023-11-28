import React from 'react'
import AuthorHeader from '../Components/AuthorHeader'
import AuthorFooter from '../Components/AuthorFooter'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard'

function AuthorBase() {
  return (

    <>
    <AuthorHeader/>
    
<Routes>

    <Route path="/" element={<Dashboard/>} />
    {/* <Route path="/about" element={<AuthorAbout/>} /> */}
    {/* <Route path="/contact" element={<AuthorContact/>} />
    <Route path="/blog" element={<AuthorBlog/>} />
    <Route path="/blog/:id" element={<AuthorBlogDetail/>} />
    <Route path="/blog/:id/edit" element={<AuthorBlogEdit/>} />
    <Route path="/blog/:id/delete" element={<AuthorBlogDelete/>} />
    <Route path="/blog/:id/comment" element={<AuthorBlogComment/>} />
    <Route path="/blog/:id/comment/:commentId" element={<AuthorBlogCommentDetail/>} />
    <Route path="/blog/:id/comment/:commentId/edit" element={<AuthorBlogCommentEdit/>} /> */}
</Routes>


    <AuthorFooter/>
    
    
    </>
  )
}

export default AuthorBase