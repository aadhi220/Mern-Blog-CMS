import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import TokenContext from './ContextApi/TokenContext.jsx'
import GlobalContext from './ContextApi/GlobalContext.jsx'
import {  Flowbite } from 'flowbite-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter> 

<Flowbite>
    
        <TokenContext>
        <GlobalContext>
            
             <App />
            
          
        </GlobalContext>  
        </TokenContext>
    
</Flowbite>

   </BrowserRouter>
  </React.StrictMode>,
)
