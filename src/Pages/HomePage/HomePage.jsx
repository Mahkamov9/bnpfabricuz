import React from 'react'
import './HomePage.css';
import headerSofa from "../../assets/Images/imgtowel.png";
import { useTranslation } from 'react-i18next';
import Label from '../../Components/Label/Label';
import Card from '../../Components/Cards/Card';
// Images
import Sofa from '../../Components/Sofa/Sofa';
import SofaImg1 from "../../assets/Images/aaaa-removebg-preview.png";
import SofaImg4 from "../../assets/Images/clothimg.png";
import SofaImg2 from "../../assets/Images/images-removebg-preview.png";
import Contact from '../Contact/Contact';

export default function HomePage() {
  const { t, i18n } = useTranslation()
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
      <section className='label_section'>
        <div className="container">
          <div className="label_box">
            <Label title={t("label1-1")} />
            <Label title={t("label2-1")} />
            <Label title={t("label3-1")} />
            <Label title={t("label4-1")} />
          </div>
        </div>
      </section>
      <section>
        <div className="sofaSection">
          <div className="container">
            <Sofa sofa_img={SofaImg1} sofaColor="#ba0000" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div style={{ textAlign: "center", margin: "20px 0px", fontSize: "25px" }}>
            <h1>{t("winter")}</h1>
            <p style={{ margin: "10px 0" }}>{t("sofatext2")}</p>
          </div>
          <div className="homeCard_box">
            <Card />
          </div>
        </div>
      </section>
      <section>
        <div className="sofaSection">
          <div className="container">
            <Sofa sofa_img={SofaImg4} sofaColor="#BA0000" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div style={{ textAlign: "center", margin: "20px 0px", fontSize: "25px" }}>
            <h1>{t("autom")}</h1>
            <p style={{ margin: "10px 0" }}>{t("sofatext2")}</p>
          </div>
          <div className="homeCard_box">
            <Card />
          </div>
        </div>
      </section>
      <section>
        <div className="sofaSection">
          <div className="container">
            <Sofa sofa_img={SofaImg2} sofaColor="#ba0000" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div style={{ textAlign: "center", margin: "20px 0px", fontSize: "25px" }}>
            <h1>{t("summer")}</h1>
            <p style={{ margin: "10px 0" }}>{t("sofatext2")}</p>
          </div>
          <div className="homeCard_box">
            <Card/>
          </div>
        </div>
      </section>
      <Contact/>

    </>
  )
}
