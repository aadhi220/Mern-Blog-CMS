import React, { createContext, useState } from 'react'


export const globalUseContext=createContext()

function GlobalContext({children}) {
    const [showSidebar,setShowSidebar]=useState(true)
  return (
    <>
    <globalUseContext.Provider value={{showSidebar,setShowSidebar}}>{children}</globalUseContext.Provider>
    
    
    </>
  )
}

export default GlobalContext