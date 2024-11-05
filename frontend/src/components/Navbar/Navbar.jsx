// Desc: Navbar component for the app. This component is imported in App.jsx and rendered in the main app component.
import './Navbar./Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="log" />
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>
      <div className='navbar*-right'>
        <img src={assets.search_icon} alt="" />
      </div>
    </div>
  )
}
export default Navbar
