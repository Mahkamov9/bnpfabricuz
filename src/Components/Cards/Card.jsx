import React from 'react'
import "./Card.css";
import { Link } from 'react-router-dom';


export default function Card(props) {
  return (
    <>
      <Link to={`/product/${props?.id}`} className="card">
      <img src={props.card_img} alt="Mahkamov"/>
          <h2>{props.title}</h2>
      </Link>
    </>
  )
}
