import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavItem({icon,text,isOpen,setIsOpen,path,handleLogout,isActive}) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (path === 'logout') {
      handleLogout && handleLogout();
    } else if (path) {
      navigate(path);
    }
  };
  return (
    <div className='flex items-center gap-4 cursor-pointer w-full hover:text-yellow-200' onClick={handleClick}>
        <span
          onClick={(e) => { e.stopPropagation(); setIsOpen((prev) => !prev); }}
          data-tooltip-id = {!isOpen ? 'sidebar-tooltip' : undefined}
          data-tooltip-content={!isOpen ? text : undefined}
          className={`text-xl ${isActive ? 'text-yellow-300' : ''}`}
          aria-current={isActive ? 'page' : undefined}
        >{icon}</span>
        {isOpen && <div>{text}</div>}
    </div>
  )
}

export default NavItem