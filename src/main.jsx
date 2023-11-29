import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './ContextApi/AuthorContext.jsx'
import TokenContext from './ContextApi/TokenContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter> 

    <AuthContext>
      <TokenContext>
        
         <App />
        
      </TokenContext>
    </AuthContext> 

   </BrowserRouter>
  </React.StrictMode>,
)
