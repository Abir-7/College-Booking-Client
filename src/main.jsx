import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './components/Router/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/AuthProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <div className=" mx-auto container">
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
  </QueryClientProvider>
)
