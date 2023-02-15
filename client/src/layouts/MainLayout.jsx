import React from 'react'
import NavBar from '../components/Navbar/Navbar.jsx'

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default MainLayout