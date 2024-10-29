import React from 'react'
import "./Card.css";


export default function Card(props) {
  return (
    <>
      <div className="card">
          <img src={props.card_img} alt="Mahkamov"/>
          <h2>{props.cardLink}</h2>
      </div>
    </>
  )
}
