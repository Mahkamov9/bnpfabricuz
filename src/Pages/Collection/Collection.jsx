import React, { useState } from 'react';
import Card from '../../Components/Cards/Card';
import cardimg from "../../assets/Images/cardimg4.jpg";
import SofaImg from "../../assets/Images/sofa.png";
import SofaImg1 from "../../assets/Images/sofa1.png";
import SofaImg2 from "../../assets/Images/sofa2.png";
import Dataxon from '../../assets/data';


function Collection() {
  const [currentPage, setCurrentPage] = useState(1);



  return (
    <div className='container'>
      <h2>Collection Pag1e</h2>
      <div className="card-container">
        {Dataxon.map((item) => (
          <Card key={item.id} title={item?.title} card_img={item?.img}  cardLink="Article" />
        ))}
      </div>


    </div>
  );
}

export default Collection;
