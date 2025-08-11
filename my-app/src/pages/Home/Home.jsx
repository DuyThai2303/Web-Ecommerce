import React from 'react';
import Header from '../../components/Header/Header';
import './Home.scss';

import imgSummer from '../../assets/plant-table-chair-minimalist-3d-rendering-a-single-sofa-and-green-stand-against-textured-empty-wall-with-side_9789192-Photoroom.png';

const furnitureItems = [
  {
    img: "https://www.lanha.vn/wp-content/uploads/2024/09/thiet-ke-phong-an-2.jpg.webp",
    discount: "UP TO 40% OFF",
    title: "DINING FURNITURE",
    button: "SHOP NOW"
  },
  {
    img: "https://www.lanha.vn/wp-content/uploads/2023/07/thiet-ke-noi-that-phong-ngu-bs5.jpeg.webp",
    discount: "UP TO 40% OFF",
    title: "BED FURNITURE",
    button: "SHOP NOW"

  }
];

function Home() {
  return (
    <div className="container">
      <Header/>

      <div className="banner">
        <div className="banner-content">
          <p className="subtitle">UP TO 40% OFF</p>
          <h2>Summer Collection</h2>
          <button>Shop Now</button>
        </div>

        <div className="banner-image">
          <img src={imgSummer} alt="Summer Collection" />
        </div>
      </div>

      
      <div className = "furniture">
        {furnitureItems.map((item , index) => (
          <div className = "furniture-item" key = {index}>
            <img src={item.img} alt={item.title} />
            <div className = "overlay">
              <p>{item.discount}</p>
              <h2>{item.title}</h2>
              <button>{item.button}</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
