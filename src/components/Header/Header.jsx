import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
const authStatus = useSelector((state) => state.auth?.status ?? false);
  const navigate = useNavigate()
  const location = useLocation();
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
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
      <Container>
        <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-auto sm:h-16 px-2">
          <div className='mr-0 sm:mr-4 flex justify-center sm:justify-start py-2 sm:py-0'>
            <Link to= '/'>
              <Logo width='100px' />
            </Link>
          </div>
          <ul className="flex flex-row overflow-x-auto gap-x-2 w-full sm:w-auto justify-center sm:justify-end pb-2 sm:pb-0">
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name} className="shrink-0">
                  <button
                    onClick={() => navigate(item.slug)}
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