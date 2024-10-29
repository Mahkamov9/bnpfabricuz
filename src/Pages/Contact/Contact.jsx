import React from 'react';
import "./Contact.css";
import axios from 'axios';
import mailIcon from "../../assets/Images/mailIcon.svg"
export default function Contact() {

  const sendMassage = (event) => {
    event.preventDefault();
    const token = "6304809622:AAG2E0OCpDxx_AjE-5LeA68C_VaOxHIgRHM";
    const chat_id = -1002051945491;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = event.target.elements.name.value;
    const surname = event.target.elements.surname.value;
    const message = event.target.elements.message.value;

    axios({
      url: url,
      method: 'POST',
      data: {
        "chat_id": chat_id,
        "text": `Ism: ${name}\nFamiliya: ${surname}\nXabar: ${message}`
      }
    })
      .then((res) => {
        document.getElementById = "contactForm".reset;
        alert("Yuborildi");
      })
      .catch((error) => {
        console.log("Error message", error);
      });
  }

  return (
    <>
      <section>
        <div className="contact_page">
          <div className="container">
            <div className="contact_box">
              <div className='contact_massages'>
                <h1>Contact</h1>
                <form id='contactForm' onSubmit={sendMassage}>
                  <input id='name' name="name" type="text" placeholder="Ismingiz*" required minLength={5} />
                  <input id='surname' name="surname" type="text" placeholder="Familiyangiz*" required minLength={5} />
                  <textarea id="message" name="message" placeholder="Xabar yozing*  50/50 " required minLength={50}></textarea>
                  <button type='submit'>Submit</button>
                </form>
              </div>
              <div className='contact_map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1147.102477223896!2d69.24850250172392!3d41.31598710157858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b49ef295ea1%3A0xc70178670c5462a9!2sMuseum%20of%20Celebrities!5e0!3m2!1suz!2s!4v1730128369399!5m2!1suz!2s"></iframe>
              </div>
            </div>
            <div className='contact_content'>
                <div>
                  <img src={mailIcon} alt="Mahkamov" />
                  <div>
                    <p>example@gmal.com</p>
                    <p>example@gmal.com</p>
                  </div>
                </div>
                <div>
                  <img src={mailIcon} alt="Mahkamov" />
                  <div>
                    <p>example@gmal.com</p>
                    <p>example@gmal.com</p>
                  </div>
                </div>
                <div>
                  <img src={mailIcon} alt="Mahkamov" />
                  <div>
                    <p>example@gmal.com</p>
                    <p>example@gmal.com</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
