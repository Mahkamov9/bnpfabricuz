import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

import Logo from "../../assets/Images/bnp_logo.png";


export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar_logo'>
            <Link to="/" ><img src={Logo} alt="logo"/></Link>
        </div>
        <ul className="nav_links">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/collection" >Collection</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className='nav_lng'>
          <select name="lng" id="lng">
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </nav>
    </>
  )
}
