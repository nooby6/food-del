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
        <li className={Menu==="Home"?"active":""} onClick={() => setMenu('Home')}>Home</li>
        <li className={Menu==="Menu"?"active":""} onClick={() => setMenu('Menu')}>Menu</li>
        <li className={Menu==="Mobile App"?"active":""} onClick={() => setMenu('Mobile App')}>Mobile App</li>
        <li className={Menu==="Contact Us"?"active":""} onClick={() => setMenu('Contact Us')}>Contact Us</li>
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
