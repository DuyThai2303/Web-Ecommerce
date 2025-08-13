import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  {useEffect, useRef} from "react";
import {useState} from "react"
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../../components/Header/Header';
import './Home.scss';
import { MdOutlineLocalShipping } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { IoLogoUsd } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import imgSummer from '../../assets/plant-table-chair-minimalist-3d-rendering-a-single-sofa-and-green-stand-against-textured-empty-wall-with-side_9789192-Photoroom.png';
import ProductHot from '../../datas/ProductHot';



const bestSellingProduct = [
  {
    img: "https://product.hstatic.net/200000295856/product/dp0macf_2__44ceddf6632e4ae29b71e7567dc1276f_large.jpg",
    name: "Plastic hairs",
    price: "35.99 $"
  },
  {
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/438/538/products/z2930659034046-f683311fd34e840a009cf533c1f796ae.jpg?v=1686799529457",
    name: "Classic wooden chair",
    price: "55.99 $"
  },
  {
    img: "https://bachma.vn/wp-content/uploads/2020/09/ban-eames-tron.jpg",
    name: "Round table dining ",
    price: "70.00 $"

  },
  {
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/429/325/products/o1cn01ikmtx81ul307i6dvj-949132500-0-cib.jpg?v=1710296273833",
    name: "Single sofa",
    price: "120.99 $"
  }

]
const furnitureItems = [
  {
    img: "https://cdn.shopify.com/s/files/1/0489/1171/2423/files/vt_interior_elements_home1_banner_1.jpg?v=1726407839",
    preface: "Quick parcel delivery, from $25",
    discount: "Up to 60% off Interior Home Decor",
    intro: "Class aptent taciti sociosqu ad litora",
    button: "Shop Now"
  },
  {
    img: "https://images.unsplash.com/photo-1511389026070-a14ae610a1be?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    preface: "Quick parcel delivery, from $25",
    discount: "Up to 60% sale off Pendent Lamp",
    intro: "Class aptent taciti sociosqu ad litora torquent",
    button: "Shop Now"
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
  img: "https://i0.wp.com/vitefama.com.ec/wp-content/uploads/2023/04/Click-Clack-6-2.jpg?fit=1200%2C1200&ssl=1",
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
];

const TypeProduct = [
  {
    img: "https://dunlopilloshop.com/upload/images/o1cn01ev7z5n29xseilm42i_-2044238135_result.jpg",
    name: "BED"
  },
  {
    img: "https://bachma.vn/wp-content/uploads/2024/01/ghe-sofa-goc-3.jpg",
    name: "SOFA"
  },
  {
    img: "https://api.togihome.vn/storage/images/originals/z5590085027941-0d2eadef89a0a77c027c614563fca7ac-wa9ngkpsuptnxfs.webp",
    name: "DESK"
  },
  {
    img: "https://hoaphatsaigon.com/upload/sanpham/large/2256-tu-ao-ta01-1.jpg",
    name: "DINING CHAIR"
  },
  {
    img: "https://product.hstatic.net/200000530891/product/7639a64f9013534d0a02_9f037e2ee3374e41a100147e4e328c0b_master.jpg",
    name: "CABINET"
  }
];


const categories = [
  { id: "PlasticChair", name: "Plastic Chair" },
  { id: "OfficeChair", name: "Office Chair" }
];






function Home() {

  useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 0,
        });
        
      }, []);

  const swiperRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("PlasticChair");

  // loc san pham theo dang muc
  const filteredProducts = ProductHot.filter(
    (item) => item.category == activeCategory
  ); 

  return (
    <div className="container">
      <Header />


      {/* Banner */}
      <div className="banner">
        <div  className="banner-content">
          <p className="subtitle">UP TO 40% OFF</p>
          <h2>Summer Collection</h2>
          <button>Shop Now</button>
        </div>
        <div className="banner-image">
          <img src={imgSummer} alt="Summer Collection" />
        </div>
      </div>

      {/*BEST-SELLING-PRODUCT*/}
      <div data-aos="zoom-out-up" className = "best-selling-product">
         <div  className="title">
            <h2>Best Seller Products</h2>
            <h1></h1>
            <p>Top selling corner this week</p>
        </div>
        <div data-aos="zoom-out-up" className = "product-list">
          {bestSellingProduct.map((item, index) => (
            <div className = "best-selling-card" key = {index}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
      


      {/* Furniture */}
      <div className="furniture">
        {furnitureItems.map((item, index) => (
          <div className="furniture-item" key={index}>
            <img data-aos="zoom-out-up" src={item.img} alt={item.title} />
            <div data-aos="zoom-out-up" className="overlay">
              <span>{item.preface}</span>
              <p>{item.discount}</p>
              <h4>{item.intro}</h4>
              <button>{item.button} </button>
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
        <div 
        className="product-sale-slider"
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              480: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}

            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {productSales.map((item, index) => (
              <SwiperSlide key={`${item.name}-${index}`}>
                <div className="product-card">
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p className="old-price">{item.oldPrice}</p>
                  <p className="new-price">{item.newPrice}</p>
                  <div className='section'>
                    <div className='section-favourite'>
                      <IoMdHeartEmpty/>
                    </div>
                    <div className='section-cart'>
                      <IoCartOutline/> 
                    </div>
                  <button>More</button>
                  </div>
                  <div className='sale'>50%</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


      {/*PRODUCT-TYPE*/}
      <div className='product-grid'>
        <div className='left-large'>
          <div className='img-wrapper'>
            <img src={TypeProduct[0].img} alt={TypeProduct.name}/>
            <span>{TypeProduct[0].name}</span>
          </div>
        </div>
        <div className='right-small'>
          {TypeProduct.slice(1).map((item, index) => (
            <div className='img-wrapper' key = {index}>
              <img src={item.img} alt={item.name}/>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>


      {/*HOT-PRODUCT*/}
      <div className='hot-products'>
        <h2 className='title'>Hot Product <h1></h1></h2>
        

        <div className='tabs'>
          {categories.map((cat) => (
            <span 
            key = {cat.id}
            className={activeCategory === cat.id ? "active" : ""}
            onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </span>
          ))}
        </div>

        <div className='product-list'>
          {filteredProducts.map((item, index) => (
            <div className='product-card' key = {index}>
                <img className = "hot-img" src={item.img} alt={item.name} />
                <p>{item.name}</p>
                <span>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
