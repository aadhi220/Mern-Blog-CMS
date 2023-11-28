import React, { useContext } from 'react'
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import Home from './Client-side/Pages/Home'
import Header from './Client-side/Components/Header'
import Footer from './Client-side/Components/Footer'
import TrendingPage from './Client-side/Pages/TrendingPage'
import DetailPage from './Client-side/Pages/DetailPage'
import Dashboard from './Author-side/Pages/Dashboard'
import { AuthorAuthContext } from './ContextApi/AuthorContext'
import AuthorHeader from './Author-side/Components/AuthorHeader'
import AuthorFooter from './Author-side/Components/AuthorFooter'



function App() {
const {isAuthor} = useContext(AuthorAuthContext)
 
  return (
    <>
<div className='light'>
 {isAuthor ? <AuthorHeader/>   :<Header/>}
  
  <Routes>
   {/* client side  */}
   <Route path="/" element={<Home />} />
   <Route path="/trending" element={<TrendingPage />} />
   <Route path="/detailPage" element={<DetailPage/>}/>
   



   {/* Admin routes */}
{isAuthor && 

<Route path="/dashboard" element={<Dashboard/>}/>

}
   
  
  
  </Routes>
  
  
 {isAuthor ? <AuthorFooter/>  : <Footer/>}
</div>
    </>
  )
}

export default App
