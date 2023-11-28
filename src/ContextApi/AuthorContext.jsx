import React, { createContext, useState } from 'react'
export const AuthorAuthContext=createContext()

function AuthContext({children}) {
  const [isAuthor,setisAuthor]=useState(true)
  const [isAuthorDashboardOpen,setisAuthorDashboardOpen]=useState(false)
  return (
    <>
    <AuthorAuthContext.Provider value={{isAuthor,setisAuthor,isAuthorDashboardOpen,setisAuthorDashboardOpen}} >{children}</AuthorAuthContext.Provider>
    
    </>
  )
}

export default AuthContext