import React from 'react'
import "./Card.css";
import { Link } from 'react-router-dom';
import CardData from "../../assets/data"

export default function Card() {
  return (
    <>
      {CardData.map((item) => (
        <Link key={item.id} to={`/collection/${item.id}`} className="card">
          <img src={item.img} alt={item.title}/>
          <h2>{item.title}</h2>
        </Link>
      ))}
    </>
  )
}