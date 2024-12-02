import React from 'react'
import "./About.css";
import aboutimg from "../../assets/Images/namtextile.jpg"
import { useTranslation } from 'react-i18next';


export default function About() {
  const { t, i18n } = useTranslation()
  return (
    <section>
      <div className="about_page">
        <div className="container">
          <div className="about_box">
            <div className="about_content">
              <h1>"Namimpeks-Tekstil"</h1>
              <p>{t("aboutus_title")}</p>
              <p>{t("aboutus_text")}</p>
              <p>{t("aboutus_title")}</p>
              <p>{t("aboutus_text")}</p>
            </div>
            <div className="about_images">
              <img src={aboutimg} alt="Mahkamov" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
