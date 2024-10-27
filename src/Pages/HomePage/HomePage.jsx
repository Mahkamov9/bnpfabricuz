import React from 'react'
import './HomePage.css';
import headerSofa from "../../assets/Images/headerSofa.png";
import { useTranslation } from 'react-i18next';


export default function HomePage() {

  const {t, i18n} = useTranslation()
  return (
    <>
      <section>
        <div className="header">
          <div className="container">
            <div className="header_box">
              <img className='header_box_img' src={headerSofa} alt="Mahkamov" />
              <div className='header_box_content'>
                <p>{t("buxoro")}</p>
                <p>{t("tabiy")}</p>
                <p>{t("product")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
