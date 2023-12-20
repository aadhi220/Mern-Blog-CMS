import React, { useEffect,useState,useContext } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Routes,Route, Navigate } from 'react-router-dom'
import Home from './Home'
import TrendingPage from './TrendingPage'
import CommonPage from './CommonPage'
import DetailPage from './DetailPage'
import { globalUseContext } from '../../ContextApi/GlobalContext'
import PageNoteFound from '../../PageNoteFound'
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



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {PleaseLogin,backToTop}=useContext(globalUseContext)

  return (
    <div className=' relative'>
    <Header/>
<Routes>
<Route path='/*' element={<PageNoteFound/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/trending' element={tokenl? <TrendingPage/> :<PleaseLogin/>}/>
<Route path='/all' element={tokenl? <CommonPage/> :<PleaseLogin/>}/>
<Route path='/detailPage/:blogId' element={tokenl ? <DetailPage/> :<PleaseLogin/>}/>




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