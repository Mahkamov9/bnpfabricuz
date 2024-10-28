import React from 'react'
import "./Sofa.css";
import { useTranslation } from 'react-i18next';




export default function Sofa(props) {
  const { t, i18n } = useTranslation()
  return (
    <>
      <div style={{background :`${props.sofaColor}`}} className="sofa_box">
        <div className="sofa_content">
          <h3>100%</h3>
          <h4>{t("sofatext1")}</h4>
        </div>
        <img className='sofa_img' src={props.sofa_img} alt="Mahkmov"/>
        <div className="sofa_content">
          <h4>"{t("sofatext2")}"</h4>
          <h4>{t("sofatext3")}</h4>
          <button>{t("sofabtn")}</button>
        </div>
      </div>

    </>
  )
}
