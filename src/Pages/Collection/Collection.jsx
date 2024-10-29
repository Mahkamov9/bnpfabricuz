// import React from 'react'
// import "./Collection.css";


// export default function Collection() {
//   return (
//     <>
//       <section className='collection_page'>
//         <div className="container">
//           <div className="collection_box">
//             <sidebar className="collection_sidebar">
//               <input type="search" />
//               <p>Collection</p>
//             </sidebar>
//             <aside className='collection_aside'>
//               <div>
//               <h3>collection</h3>
//               <button>Intial sorting</button>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }





// Collection.js
import React, { useState } from 'react';
import Card from '../../Components/Cards/Card';
import cardimg from "../../assets/Images/cardimg4.jpg";


// Fake ma'lumotlar ro'yxati (odatda bu ma'lumotlar serverdan keladi)
const data = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Card ${i + 1}`,
  description: `This is the description for card ${i + 1}.`
}));

function Collection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Joriy sahifadagi elementlarni hisoblash
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Sahifalash tugmalarini yaratish
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='container'>
      <h2>Collection Page</h2>
      <div className="card-container">
        {currentItems.map((item) => (
          <Card key={item.id} data={item} card_img={cardimg}  cardLink="Article" />
        ))}
      </div>

      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Collection;
