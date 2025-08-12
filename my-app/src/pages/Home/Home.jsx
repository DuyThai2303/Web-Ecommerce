import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Header from '../../components/Header/Header';
import './Home.scss';
import { MdOutlineLocalShipping } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { IoLogoUsd } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";

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

const serviceFeatures = [
  {
    icon: <MdOutlineLocalShipping />,
    title: "Free Shipping",
    content: "We provide fast, reliable service to ensure your satisfaction every time."
  },
  {
    icon: <Ri24HoursFill />,
    title: "Support 24/7",
    content: "Experience speedy, reliable care that always puts you first."
  },
  {
    icon: <IoLogoUsd />,
    title: "Money Return",
    content: "Fast, trustworthy service designed to keep you satisfied on every visit."
  },
  {
    icon: <CiDiscount1 />,
    title: "Order Discount",
    content: "Your satisfaction is our goal, with prompt and reliable service every time."
  }
];

const productSales = [
  {
  img: "https://furnist.vn/wp-content/uploads/2021/03/ghe-don-sofa-boc-vai-furnist-davy-kem-2.jpg",
  name: "davy cream single sofa",
  oldPrice: "240.94 USD",
  newPrice: "120.47 USD"  
  },
  {
  img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/429/325/products/o1cn01ikmtx81ul307i6dvj-949132500-0-cib.jpg?v=1710296273833",
  name: "Compact single sofa FSD-01",
  oldPrice: "240.94 USD",
  newPrice: "120.47 USD"  
  },
  {
  img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/429/325/files/53.png?v=1651111707482",
  name: "cheap sofa bench GSB-01",
  oldPrice: "240.94 USD",
  newPrice: "120.47 USD"  
  },
  {
  img: "https://winchair.vn/wp-content/uploads/2024/09/ghe-barcelona-wc162-4.jpg",
  name: "Modern molded plastic chair wc098",
  oldPrice: "240.94 USD",
  newPrice: "120.47 USD"  
  },
  {
  img: "https://vseat.vn/wp-content/uploads/2023/09/ghe-luoi-xoay-van-phong-vseat-aone-white-5.jpg",
  name: "office swivel mesh chair ",
  oldPrice: "240.94 USD",
  newPrice: "120.47 USD"  
  }

]
function Home() {
  return (
    <div className="container">
      <Header />

      {/* Banner */}
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

      {/* Furniture */}
      <div className="furniture">
        {furnitureItems.map((item, index) => (
          <div className="furniture-item" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <p>{item.discount}</p>
              <h2>{item.title}</h2>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="service-container">
        {serviceFeatures.map((item, index) => (
          <div className="service" key={index}>
            <span>{item.icon}</span>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      {/* Product Sale */}
      <div className="product-sale">
        <div className="title-sale">
          <div className="title">
            <p>Mega Sale</p>
            <span>Don’t Miss Out!</span>
          </div>
          <h2>Up to 50% Off Selected Items</h2>
          <div className="line"></div>
        </div>

        <div className="product-sale-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              480: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
          >
            {productSales.map((item, index) => (
              <SwiperSlide key={`${item.name}-${index}`}>
                <div className="product-card">
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p className="old-price">{item.oldPrice}</p>
                  <p className="new-price">{item.newPrice}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home;
