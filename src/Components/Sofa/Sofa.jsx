import React from 'react'
import "./Sofa.css";

import SofaImg from "../../assets/Images/sofa.png";


export default function Sofa() {
  return (
    <>
      <div className="sofa_box">
        <div className="sofa_content">
          <h3>100%</h3>
          <h4>Materialning sifati</h4>
        </div>
        <img src={SofaImg} alt="Mahkmov"/>
        <div className="sofa_content">
          <h4>"Buxoro tabiiy mahsuloti"</h4>
          <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, ducimus?</h4>
          <button>To'plam</button>
        </div>
      </div>

    </>
  )
}
