import React from 'react'
import "./Label.css";
import { FaRegStar } from "react-icons/fa";
// import Delivery from "../../assets/Images/noun_delivery.svg";

export default function Label(props) {
  return (
    <>
      <div className="homeLabel">
        <FaRegStar className='label_icon' />
        <div className="label_content">
          <h4>{props.title}</h4>
        </div>
      </div>
    </>
  )
}
