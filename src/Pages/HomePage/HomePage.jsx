import React from 'react'
import './HomePage.css';
import headerSofa from "../../assets/Images/headerSofa.png";
import { useTranslation } from 'react-i18next';
import Label from '../../Components/Label/Label';

import Delivery from "../../assets/Images/noun_delivery.svg";
import Delivery2 from "../../assets/Images/noun_guarantee.svg";
import Delivery3 from "../../assets/Images/Group-995.svg";
import Delivery4 from "../../assets/Images/noun_Wallet_745515.svg";
import Sofa from '../../Components/Sofa/Sofa';
import SofaImg from "../../assets/Images/sofa.png";
import SofaImg1 from "../../assets/Images/sofa1.png";
import SofaImg2 from "../../assets/Images/sofa2.png";


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
      <section>
        <div className="container">
          <div className="label_box">
            <Label img={Delivery} title={t("label1-1")} subtext={t("label1-2")} />
            <Label img={Delivery2} title={t("label2-1")} subtext={t("label2-2")} />
            <Label img={Delivery3} title={t("label2-1")} subtext={t("label2-2")} />
            <Label img={Delivery4} title={t("label2-1")} subtext={t("label2-2")} />
          </div>
        </div>
      </section>
      <section>
        <div className="sofaSection">
          <div className="container">
            <Sofa  sofa_img={SofaImg1} sofaColor="linear-gradient(90turn, #373E53, #616884)" />
            <Sofa  sofa_img={SofaImg} sofaColor="linear-gradient(90turn, #332A4F, #625686)" />
            <Sofa  sofa_img={SofaImg2} sofaColor="linear-gradient(90turn, #255957, #307E7A)" />
          </div>
        </div>
      </section>
    </>
  )
}
