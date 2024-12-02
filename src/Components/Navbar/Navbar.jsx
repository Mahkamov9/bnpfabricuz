import React, { useState } from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Logo from "../../assets/Images/namimpeks.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useTranslation } from 'react-i18next';




export default function Navbar() {

  const [activePage, setActivPage] = useState("home");
  const [openMenu, setOpenMenu] = useState(false)
  const languageSave = localStorage.getItem('i18nextLng')
  const {t, i18n} = useTranslation()

  const handleClick = (page) => {
    setActivPage(page);
    setOpenMenu(false);
  }
  const handleChange=(event)=>{
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    console.log(selectedLanguage);
  }

  return (
    <>
      <nav className='navbar'>
        <div className="container nav_box">
          <div className='navbar_logo'>
            <Link to="/" ><img  className='navbar_logo_img' src={Logo} alt="logo" /></Link>
          </div>
          <ul className="nav_links">
            <li><Link to="/" className={`nav_link ${activePage === "home" ? "active" : ""}`} onClick={() => handleClick("home")} >{t("home")}</Link></li>
            <li><Link to="/collection" className={`nav_link ${activePage === "collection" ? "active" : ""}`} onClick={() => handleClick("collection")}>{t("collection")}</Link></li>
            <li><Link to="/about" className={`nav_link ${activePage === "about" ? "active" : ""}`} onClick={() => handleClick("about")} >{t("about")}</Link></li>
            <li><Link to="/contact" className={`nav_link ${activePage === "contact" ? "active" : ""}`} onClick={() => handleClick("contact")} >{t("contact")}</Link></li>
          </ul>
          <div className='nav_lng'>
            <select name="Lng" id="lng" value={languageSave} onChange={handleChange}>
              <option value="uz">UZ</option>
              <option value="en">EN</option>
            </select>
          </div>
          <div className='open_menu'>
            <button className='open_menu_btn' onClick={() => setOpenMenu(true)}>
              <RiMenu3Fill />
            </button>
          </div>
        </div>
        {openMenu &&
          <div className='nav_menu_res'>
            <IoIosCloseCircleOutline onClick={() => setOpenMenu(false)} className='nav_close' />
            <ul className="nav_links_res">
            <li><Link to="/" className={`nav_link ${activePage === "home" ? "active" : ""}`} onClick={() => handleClick("home")} >{t("home")}</Link></li>
            <li><Link to="/collection" className={`nav_link ${activePage === "collection" ? "active" : ""}`} onClick={() => handleClick("collection")}>{t("collection")}</Link></li>
            <li><Link to="/about" className={`nav_link ${activePage === "about" ? "active" : ""}`} onClick={() => handleClick("about")} >{t("about")}</Link></li>
            <li><Link to="/contact" className={`nav_link ${activePage === "contact" ? "active" : ""}`} onClick={() => handleClick("contact")} >{t("contact")}</Link></li>
            </ul>
            <div className='nav_lng_res'>
            <select name="Lng" id="lng" value={languageSave} onChange={handleChange}>
              <option value="uz">UZ</option>
              <option value="en">EN</option>
            </select>
          </div>
          </div>
        }
      </nav>
    </>
  )
}
