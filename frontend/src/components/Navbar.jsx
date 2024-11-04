// Desc: Navbar component for the app. This component is imported in App.jsx and rendered in the main app component.
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="log" />
      <ul className='navbar-menu'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
export default Navbar
