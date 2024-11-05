// Desc: Navbar component for the app. This component is imported in App.jsx and rendered in the main app component.
import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {

  const [Menu, setMenu] = useState('Home');

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="log" />
      <ul className='navbar-menu'>
        <li onClick={() => setMenu('Home')} className={Menu==="Home"?"active":""}>Home</li>
        <li onClick={() => setMenu('Menu')} className={Menu==="Menu"?"active":""}>Menu</li>
        <li onClick={() => setMenu('Mobile App')} className={Menu==="Mobile App"?"active":""}>Mobile App</li>
        <li onClick={() => setMenu('Contact Us')} className={Menu==="Contact Us"?"active":""}>Contact Us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className="dot">
          </div>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  )
}
export default Navbar
