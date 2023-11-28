import React, {  } from 'react'
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import Home from './Client-side/Pages/Home'
import Header from './Client-side/Components/Header'
import Footer from './Client-side/Components/Footer'
import TrendingPage from './Client-side/Pages/TrendingPage'


function App() {
 
  return (
    <>
<div className='light'>
  <Header/>
  
  <Routes>
   {/* client side  */}
   <Route path="/" element={<Home />} />
   <Route path="/trending" element={<TrendingPage />} />
  
  
  </Routes>
  
  
  <Footer/>
</div>
    </>
  )
}

export default App
