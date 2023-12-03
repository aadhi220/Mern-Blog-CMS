import React, { useEffect,useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Routes,Route, Navigate } from 'react-router-dom'
import Home from './Home'
import TrendingPage from './TrendingPage'
import CommonPage from './CommonPage'
import DetailPage from './DetailPage'
function ClientBase() {
  const [showButton, setShowButton] = useState(false);
const tokenl=sessionStorage.getItem('token')
  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=' relative'>
    <Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/trending' element={tokenl? <TrendingPage/> : <Navigate to="/login" replace />}/>
<Route path='/all' element={tokenl? <CommonPage/> : <Navigate to="/login" replace />}/>
<Route path='/detailPage/:blogId' element={tokenl ? <DetailPage/> : <Navigate to="/login" replace />}/>



</Routes>



    <Footer/>

    {showButton && (
  <button
    onClick={backToTop}
    className="btn rounded-full w-[50px] h-[50px] btn-primary fixed bottom-4 right-4"
  >
    <i className="fa-solid fa-arrow-up fa-lg"></i>
  </button>
)}
    
    
    
    </div>
  )
}

export default ClientBase