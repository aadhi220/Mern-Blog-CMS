import React, { createContext, useState } from 'react'


export const globalUseContext=createContext()

function GlobalContext({children}) {
    // const [showSidebar,setShowSidebar]=useState(true)
    const [searchKey,setSearchKey]=useState("")
    const [isdark, setIsdark] = useState(
      
    );
  return (
    <>
    <globalUseContext.Provider value={{searchKey,setSearchKey,isdark,setIsdark}}>{children}</globalUseContext.Provider>
    
    
    </>
  )
}

export default GlobalContext