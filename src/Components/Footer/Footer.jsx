import React from 'react'
import "./Footer.css"

import Logo from "../../assets/Images/namimpeks.png"
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
              <h4>“Nam Impeks” ishlab chiqarish kompaniyasi koʻp yillardan buyonn faoliyat yuritib keladi va xalqimiz sevimli brendiga aylanib ulgurgan.</h4>
            </div>
            <div className='footer_item'>
              <Link className='footer_link  footerHead_link'>Sayt xaritasi</Link>
              <Link className='footer_link'>Uy</Link>
              <Link className='footer_link'>Biz haqimizda</Link>
              <Link className='footer_link'>To'plam</Link>
              <Link className='footer_link'>Kontaktlar</Link>
            </div>
            <div className='footer_item'>
              <Link className='footer_link  footerHead_link'>Aloqa</Link>
              <Link className='footer_link'>S. Raximov koʻchasi, 18, Namangan</Link>
              <Link className='footer_link'>namimpeks.uz</Link>
              <Link className='footer_link'>infonamimpeks@gmail.com</Link>
              <Link className='footer_link'>+998 94 171 61 70</Link>
            </div>
            <div className='footer_item'>
              <Link className='footer_link footerHead_link'>Murojat uchun:</Link>
              <div className="footerInput_box">
                <input className='footer_input' type="text" placeholder='infonamimpeks@gmail.com' />
                <IoMailOpen className='footerInput_icon' />
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <h3>© 2024 MChJ "NamImpeks" Barcha huquqlar himoyalangan.   <a href="mahkamov.uz">Mahkamov|Dev</a> </h3>
          </div>
        </div>
      </footer>
    </>
  )
}
