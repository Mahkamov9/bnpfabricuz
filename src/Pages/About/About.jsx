import React from 'react'
import "./About.css";

import aboutimg from "../../assets/Images/aboutimg.png"


export default function About() {
  return (
    <section>
      <div className="about_page">
        <div className="container">
          <div className="about_box">
            <div className="about_content">
              <h1>"Bukhara Natural Product"</h1>
              <p>Our factory has been a company that produces cotton fabrics for use all over the world for many years.</p>
              <p>Our factory has been a company that produces cotton fabrics for use all over the world for many years.</p>
              <p>Our factory has been a company that produces cotton fabrics for use all over the world for many years.</p>
              <p>Our factory has been a company that produces cotton fabrics for use all over the world for many years.</p>
              <p>Our factory has been a company that produces cotton fabrics for use all over the world for many years.</p>
              <p>Our factory has been a company that produces cotton fabrics for use all over the world for many years.</p>
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
