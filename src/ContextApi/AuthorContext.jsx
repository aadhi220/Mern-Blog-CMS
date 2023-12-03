import React, { createContext, useEffect, useState } from 'react'
export const AuthorAuthContext=createContext()

function AuthContext({children}) {
  const [isAuthor,setIsAuthor]=useState(false)
  const [isAdmin,setIsAdmin]=useState(false)
 
 
  return (
    <>
    <AuthorAuthContext.Provider value={{}} >{children}</AuthorAuthContext.Provider>
    
    </>
  )
}

export default AuthContext