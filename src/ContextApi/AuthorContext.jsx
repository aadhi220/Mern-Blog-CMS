import React, { createContext, useEffect, useState } from 'react'
export const AuthorAuthContext=createContext()

function AuthContext({children}) {
  const [isAuthor,setIsAuthor]=useState(false)
  const [isAdmin,setIsAdmin]=useState(false)
  const [userProfile,setUserProfile]=useState({
    username:"",
    email:"",
    password:"",
    profilePic:"",
    isAuthor:"",
    isAdmin:"",
  })

  useEffect(()=>{
    if(userProfile.isAdmin){
      setIsAdmin(true)
    }
  },[userProfile])
  return (
    <>
    <AuthorAuthContext.Provider value={{isAuthor,setIsAuthor,isAdmin,setIsAdmin,userProfile,setUserProfile}} >{children}</AuthorAuthContext.Provider>
    
    </>
  )
}

export default AuthContext