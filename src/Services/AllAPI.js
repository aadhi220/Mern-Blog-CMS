import {SERVER_URL} from './serverUrl'
import {commonApi} from './commonApi'

//register 

export const registerApi =async (user)=>{
    return await commonApi('POST',`${SERVER_URL}/users/register`,user,"")
}

//login

export const loginApi =async (user)=>{
    return await commonApi('POST',`${SERVER_URL}/users/login`,user,"")
}


//Admin Side
export const addCategoryApi =async (reqBody,reqHeader)=>{
    return await commonApi('POST',`${SERVER_URL}/category/add`,reqBody,reqHeader)

}

export const getAllCategoryApi =async(reqHeader)=>{
    return await commonApi('GET',`${SERVER_URL}/category/all`,"",reqHeader)
}

export const deleteCategoryApi =async(categoryId,reqHeader)=>{
    return await commonApi('DELETE',`${SERVER_URL}/category/delete/${categoryId}`,{},reqHeader)
}

export const getAllUsersApi= async (temp,reqHeader)=>{
    return await commonApi('GET',`${SERVER_URL}/users/all/${temp}`,"",reqHeader)
}

export const deleteUserApi =async(userId,reqHeader)=>{
    return await commonApi('DELETE',`${SERVER_URL}/users/delete/${userId}`,{},reqHeader)

}

export const getUserByIdApi =async(userId,reqHeader)=>{
    return await commonApi('GET',`${SERVER_URL}/users/user/${userId}`,"",reqHeader)
}

export const setAuthorApi=async(reqBody,reqHeader)=>{
    return await commonApi('PATCH',`${SERVER_URL}/users/setAuthor`,reqBody,reqHeader)
}

//Authors Side

//AddBlog
export const addBlogApi =async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${SERVER_URL}/blogs/add`,reqBody,reqHeader)
}

//Edit Blog
export const editBlogApi =async(reqBody,reqHeader)=>{
    return await commonApi('PATCH',`${SERVER_URL}/blogs/edit`,reqBody,reqHeader)
}


// delete Blog

export const deleteBlogApi =async(blogId,reqHeader)=>{
    return await commonApi('DELETE',`${SERVER_URL}/blogs/delete/${blogId}`,{},reqHeader)
}

//common 

export const getAllBlogApi =async(searchKey,reqHeader)=>{
    return await commonApi('GET',`${SERVER_URL}/blogs/all?search=${searchKey}`,"",reqHeader)
}

export const getAuthorBlogApi =async(searchKey,reqHeader)=>{
    return await commonApi('GET',`${SERVER_URL}/blogs/getAuthorBlog?search=${searchKey}`,"",reqHeader)
}
export const getBlogByIdApi =async(blogId,reqHeader)=>{
    return await commonApi('GET',`${SERVER_URL}/blogs/get/${blogId}`,"",reqHeader)
}

export const setViewCountApi=async(reqBody)=>{
    return await commonApi('PATCH',`${SERVER_URL}/blogs/viewCount`,reqBody,"")
}


//Client side

export const UpdateProfileApi=async(reqBody,reqHeader)=>{
    return await commonApi('PATCH',`${SERVER_URL}/users/setAuthorReq`,reqBody,reqHeader)
}


export const addEmailApi=async(reqBody)=>{
    return await commonApi('POST',`${SERVER_URL}/email/add`,reqBody,"")
}

export const sendMailApi=async(reqbody)=>{
    return await commonApi('POST',`${SERVER_URL}/email/sent`,reqbody,"")
}