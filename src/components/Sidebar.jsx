import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import {FaBars} from "react-icons/fa"
import { menuItems } from '../data'
import NavItem from './NavItem'
import {Tooltip} from 'react-tooltip'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'
import { useNavigate, useLocation } from 'react-router-dom'
function Sidebar({ setSidebarWidth }) {
    const [isOpen,setIsOpen] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (setSidebarWidth) {
        setSidebarWidth(isOpen ? 200 : 60)
      }
    }, [isOpen, setSidebarWidth])

    const handleLogout = () => {
      dispatch(logout());
      navigate('/login');
    }

  return (
    <motion.div 
      initial={{width : 60}} 
      animate={{width : isOpen ? 200 : 60}}
      transition={{duration : 0.4}}
      className='bg-red-500 h-screen min-h-screen fixed top-0 left-0 z-50 text-white p-4 flex flex-col gap-6 m-0'>
        <button className = "text-xl mb-4" onClick={() => setIsOpen((prev) => !prev)}>
            <FaBars/>
        </button>
        <nav className={`flex flex-col gap-8 h-full overflow-y-auto ${!isOpen && 'no-scrollbar'}`}>
            {menuItems.map((item,index) => (
                <NavItem key = {index} 
                icon = {item.icon}
                text = {item.text} 
                isOpen = {isOpen} 
                setIsOpen = {setIsOpen} 
                path={item.path}
                handleLogout={handleLogout}
                isActive={item.path !== 'logout' && location.pathname === item.path}
                />
            ))}
        </nav>
        {!isOpen && <Tooltip id = "sidebar-tooltip" offset={20}/>} 
    </motion.div>
  )
}

export default Sidebar