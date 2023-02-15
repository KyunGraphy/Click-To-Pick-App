import './Navbar.css'
import React, { useState } from 'react'
import { AiOutlineMessage, AiFillMessage } from 'react-icons/ai';
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import { HiShoppingCart, HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosNotifications, IoIosNotificationsOutline } from "react-icons/io";
import { RiCompassDiscoverFill, RiCompassDiscoverLine } from "react-icons/ri";
import { SiBamboo } from "react-icons/si";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [option, setOption] = useState(0);
  const [user, setUser] = useState('');

  return (
    <div className='drop-shadow-xl px-3 h-16 flex justify-around shadow-2xl bg-lime-500'>
      <Link to='/' className='logo text-white text-5xl w-32 cursor-pointer'>
        <SiBamboo />
      </Link>
      <div className='flex'>
        {option === 0 ? (
          <span className='option-active text-lime-500'>
            <HiShoppingCart className='option-item option-item-active' />
          </span>
        ) : (
          <Link to='/'>
            <span className='option' onClick={() => setOption(0)}>
              <HiOutlineShoppingCart className='option-item' />
            </span>
          </Link>
        )}
        {option === 1 ? (
          <span className='option-active text-lime-500'>
            <BsPeopleFill className='option-item option-item-active' />
          </span>
        ) : (
          <Link to='/follow'>
            <span className='option' onClick={() => setOption(1)} >
              <BsPeople className='option-item' />
            </span>
          </Link>
        )}
        {option === 2 ? (
          <span className='option-active text-lime-500'>
            <RiCompassDiscoverFill className='option-item option-item-active' />
          </span>
        ) : (
          <Link to='/profile'>
            <span className='option' onClick={() => setOption(2)}>
              <RiCompassDiscoverLine className='option-item' />
            </span>
          </Link>
        )}
        {option === 3 ? (
          <span className='option-active text-lime-500'>
            <AiFillMessage className='option-item option-item-active' />
          </span>
        ) : (
          <Link to='/chat'>
            <span className='option' onClick={() => setOption(3)} >
              <AiOutlineMessage className='option-item' />
            </span>
          </Link>
        )}
        {option === 4 ? (
          <span className='option-active text-lime-500'>
            <IoIosNotifications className='option-item option-item-active' />
          </span>
        ) : (
          <Link to='/notification'>
            <span className='option' onClick={() => setOption(4)}>
              <IoIosNotificationsOutline className='option-item' />
            </span>
          </Link>
        )}
        
      </div>

      <div className='navbar-right'>
        {user !== '' ? (
          { user }
        ) : (
          <>
            <Link to='/login' className='navbar-button'>
              <p className='navbar-button-text text-lime-500'>Sign In</p>
            </Link>
            <span className='navbar-button'>
              <p className='navbar-button-text text-lime-500'>Sign Up</p>
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar