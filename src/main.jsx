import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router'
import { UserNameProvider } from './context/UserNameContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserNameProvider>
     <RouterProvider router={router} /> 
    </UserNameProvider>
  </React.StrictMode>,
)
