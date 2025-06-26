import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout().then(
            () => {
                dispatch(logout())
            }
        )
    }
  return (
    <button
      className="cursor-pointer inline-block px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      onClick={logoutHandler}
    >
      Logout
    </button>
  )
}

export default LogoutBtn