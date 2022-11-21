import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='appName'>Notes</div>
        <Link to="/" className='btn'>All</Link>
        <Link to="/new" className='btn'>New</Link>
    </div>
  )
}

export default NavBar;