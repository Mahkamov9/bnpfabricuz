import React from 'react'
import "./Footer.css"

import Logo from "../../assets/Images/bnp_logo.png"
import { Link } from 'react-router-dom'
import { IoMailOpen } from "react-icons/io5";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_list">
            <div className='footer_item'>
              <img className='footer_logo' src={Logo} alt="Logo" />
              <h4>“Bukhara Natural Product” koʻp yillardan buyon butun dunyoda foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya hisoblanadi.</h4>
            </div>
            <div className='footer_item'>
              <Link className='footer_link  footerHead_link'>Menyu</Link>
              <Link className='footer_link'>Commit</Link>
              <Link className='footer_link'>Commit</Link>
              <Link className='footer_link'>Commit</Link>
              <Link className='footer_link'>Commit</Link>
            </div>
            <div className='footer_item'>
              <Link className='footer_link  footerHead_link'>Menyu</Link>
              <Link className='footer_link'>Commit</Link>
              <Link className='footer_link'>Commit</Link>
              <Link className='footer_link'>Commit</Link>
              <Link className='footer_link'>Commit</Link>
            </div>
            <div className='footer_item'>
              <Link className='footer_link footerHead_link'>Menyu</Link>
              <div className="footerInput_box">
                <input className='footer_input' type="text" placeholder='examle@gmail.com' />
                <IoMailOpen className='footerInput_icon' />
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <h3>© 2024 MChJ "BUXORA NATURAL PRODUCT". Barcha huquqlar himoyalangan. | Mahkamov</h3>
          </div>
        </div>
      </footer>
    </>
  )
}
