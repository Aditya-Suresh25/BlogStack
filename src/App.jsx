import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header, Sidebar } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const authStatus = useSelector((state) => state.auth.status)
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(60) // default collapsed width

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))

    // Mobile detection
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return !loading ? (
    <div className='min-h-screen bg-gray-100'>
      {authStatus && isMobile ? (
        <>
          <Sidebar setSidebarWidth={setSidebarWidth} />
          <div
            className='flex-1 flex flex-col min-h-screen bg-gray-100'
            style={{ paddingLeft: sidebarWidth }}
          >
            <main className="fade-in flex-1 flex flex-col">
              <Outlet />
            </main>
            <Footer />
          </div>
        </>
      ) : (
        <div className='min-h-screen flex flex-wrap content-between bg-gray-100'>
          <div className='w-full block'>
            <Header />
            <main className="fade-in">
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </div>
  ) : null
}

export default App