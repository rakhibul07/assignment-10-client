import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider/AuthProvider'
import Theme from './components/Theme/Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><Theme><RouterProvider router={router}/></Theme></AuthProvider>
  </React.StrictMode>,
)
