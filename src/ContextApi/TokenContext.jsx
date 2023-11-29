import React, { createContext, useEffect, useState } from 'react'


export const getTokenContext=createContext()
function TokenContext({children}) {
const [token,setToken] =useState("")    

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
          setToken(sessionStorage.getItem("token"))
        }else {
          setToken("")
        }
      
        
      },[])
      
      
  return (
    <>
    <getTokenContext.Provider value={{token,setToken}}>
{children}
    </getTokenContext.Provider>
    
    </>
  )

}

export default TokenContext