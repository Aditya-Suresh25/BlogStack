import React from 'react'
import logo from '../assets/logo.svg'

function Logo({width = "100px"}) {
  return (
    <img src={logo} alt="BlogStack Logo" style={{ width, height: 'auto' }} />
  )
}

export default Logo