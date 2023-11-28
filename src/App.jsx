import React, { useContext } from 'react'
import './App.css'
import { Routes ,Route,Navigate} from 'react-router-dom'

import { AuthorAuthContext } from './ContextApi/AuthorContext'

import ClientBase from './Client-side/Pages/ClientBase'
import AuthorBase from './Author-side/Pages/AuthorBase'



function App() {
const {isAuthor} = useContext(AuthorAuthContext)

 
  return (
    <>
<div className='light'>

  
  <Routes>
   {/* client side  */}
   <Route path="*" element ={<ClientBase />} />

   <Route path="/dashboard/*" element={<AuthorBase/>} />

   <Route path="/AuthorDashboard" element={<Navigate to="/dashboard/home" replace /> } />




   
  
  
  </Routes>
  
  

</div>
    </>
  )
}

export default App
