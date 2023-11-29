import {SERVER_URL} from './serverUrl'
import {commonApi} from './commonApi'

//register 

export const registerApi =async(user)=>{
    return await commonApi('POST',`${SERVER_URL}/users/register`,user,"")
}

//login

export const loginApi =async(user)=>{
    return await commonApi('POST',`${SERVER_URL}/users/login`,user,"")
}


//Admin Side


//Authors Side

//AddBlog
export const addBlogApi =async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${SERVER_URL}blogs/add`,reqBody,reqHeader)
}

//Edit Blog
export const editBlogApi =async(reqBody,reqHeader)=>{
    return await commonApi('PUT',`${SERVER_URL}blogs/edit`,reqBody,reqHeader)
}
// delete Blog

export const deleteBlogApi =async(blogId,reqHeader)=>{
    return await commonApi('DELETE',`${SERVER_URL}blogs/delete/${blogId}`,{},reqHeader)
}

//common 

export const getAllBlogApi =async(searchKey,reqHeader)=>{
    return await commonApi('GET',`${SERVER_URL}blogs/all?search=${searchKey}`,"",reqHeader)
}

export const getBlogByIdApi =async(blogId,reqHeader)=>{
    return await commonApi('GET',`${SERVER_URL}blogs/get/${blogId}`,"",reqHeader)
}


//Client side
