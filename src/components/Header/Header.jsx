import React, { useState } from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
const authStatus = useSelector((state) => state.auth?.status ?? false);
  const navigate = useNavigate()
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  {
      name: "Favourites",
      slug: "/bookmarked-posts",
      active: authStatus,
  }
  ]
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 overflow-x-hidden">
      <Container>
        <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-auto sm:h-16 px-2">
          <div className='mr-0 sm:mr-4 flex justify-between items-center py-2 sm:py-0'>
            <Link to= '/'>
              <Logo width='100px' />
            </Link>
            <button className="sm:hidden text-2xl px-2" onClick={() => setMobileNavOpen(v => !v)} aria-label="Toggle navigation">
              <span>&#9776;</span>
            </button>
          </div>
          <ul className={`flex-col gap-y-2 w-full pb-2 bg-white/90 sm:bg-transparent sm:flex-row sm:gap-x-2 sm:w-auto sm:pb-0 flex ${mobileNavOpen ? 'flex' : 'hidden'} sm:flex`}>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name} className="shrink-0">
                  <button
                    onClick={() => {navigate(item.slug); setMobileNavOpen(false);}}
                    className={`cursor-pointer inline-block px-4 py-2 text-sm font-medium transition-colors duration-200
                      ${location.pathname === item.slug ? 'text-red-600 border-b-2 border-red-600 rounded-none bg-transparent' : 'text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full'}`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null)}
            {authStatus && (
              <li className="shrink-0">
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header