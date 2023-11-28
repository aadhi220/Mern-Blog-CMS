import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './ContextApi/AuthorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter> 

    <AuthContext>
      
       <App />
      
    </AuthContext> 

   </BrowserRouter>
  </React.StrictMode>,
)
