import React, { useContext } from 'react'
import './App.css'
import { Routes ,Route,Navigate} from 'react-router-dom'

import { AuthorAuthContext } from './ContextApi/AuthorContext'

import ClientBase from './Client-side/Pages/ClientBase'
import AuthorBase from './Author-side/Pages/AuthorBase'
import Login from './Auth/Login'
import Register from './Auth/Register'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ForgotPass from './Auth/ForgotPass'




function App() {
const {isAuthor} = useContext(AuthorAuthContext)

 
  return (
    <>
<div className=''>

  
  <Routes>
   {/* client side  */}
   <Route path="*" element ={<ClientBase />} />

   <Route path="/dashboard/*" element={<AuthorBase/>} />

   <Route path="/AuthorDashboard" element={<Navigate to="/dashboard/home" replace /> } />
   <Route path='/login' element={<Login/>} />
   <Route path='/register' element={<Register/>} />
   <Route path='/forgotPassword' element={<ForgotPass/>} />




   
  
  
  </Routes>
  
  
  <ToastContainer
position="top-right"
autoClose={500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}

</div>

    </>
  )
}

export default App
