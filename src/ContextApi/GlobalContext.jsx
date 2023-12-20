import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const globalUseContext = createContext();

function GlobalContext({ children }) {
  // const [showSidebar,setShowSidebar]=useState(true)
  const [searchKey, setSearchKey] = useState("");
  const [isdark, setIsdark] = useState();

  const PleaseLogin = () => {
    // console.log("first render");
    const navigate = useNavigate();
    useEffect(() => {
      // console.log("rendered");
      alert("Please Login to continue");
      navigate("/login");
    }, []);
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <globalUseContext.Provider
        value={{ searchKey, setSearchKey, isdark, setIsdark, PleaseLogin ,backToTop}}
      >
        {children}
      </globalUseContext.Provider>
    </>
  );
}

export default GlobalContext;
