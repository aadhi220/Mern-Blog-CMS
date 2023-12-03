import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const getTokenContext=createContext()
function TokenContext({children}) {
  const navigate =useNavigate()
const [token,setToken] =useState("")
    



      
    const  handleSignOut=()=>{
      setToken("")
      
      sessionStorage.clear()
    
      navigate("/")
    }  

  return (
    <>
    <getTokenContext.Provider value={{token,handleSignOut,setToken}}>
{children}
    </getTokenContext.Provider>
    
    </>
  )

}

export default TokenContext