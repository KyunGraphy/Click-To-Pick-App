import React from 'react'
import NavBar from '../components/Navbar/Navbar.jsx'

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className='h-16'></div>
      {children}
    </div>
  )
}

export default MainLayout