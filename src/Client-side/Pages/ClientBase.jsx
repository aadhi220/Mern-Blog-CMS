import React, { useContext, useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import TrendingPage from './TrendingPage'
import { getTokenContext } from '../../ContextApi/TokenContext'

function ClientBase() {
  const {token,setToken}=useContext(getTokenContext)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }else {
      setToken("")
    }
    
  },[token])
  return (
    <>
    <Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/trending' element={<TrendingPage/>}/>



</Routes>



    <Footer/>
    
    
    
    </>
  )
}

export default ClientBase