import React from 'react'
import "./Label.css";

// import Delivery from "../../assets/Images/noun_delivery.svg";

export default function Label(props) {
  return (
    <>
      <div className="homeLabel">
        <img src={props.img} alt="MahkamovDev" />
        <div className="label_content">
          <h4>{props.title}</h4>
          <h5>{props.subtext}</h5>
        </div>
      </div>
    </>
  )
}
