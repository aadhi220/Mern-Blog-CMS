import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import TrendingPage from './TrendingPage'

function ClientBase() {
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