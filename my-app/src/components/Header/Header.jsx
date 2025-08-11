import React from "react";
import "./Header.scss";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";


const navLinks = [
  { label: "Home", url: "#" },
  { label: "Shop", url: "#" },
  { label: "Pages", url: "#" },
  { label: "Blog", url: "#" },
  { label: "About", url: "#" },
  { label: "Contact Us", url: "#" },
];

function Header() {
  return (
    <header className="header-container">
        
      {/* Top Bar */}
      <div className="top-bar">
        <span>Welcome customers</span>
        <div className="language">🇬🇧 English <IoIosArrowDown /></div>
      </div>


      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>


        {/* Actions */}
        <div className="nav-actions">
          <div className="search">
            <input type="search" placeholder="Search" />
            <button aria-label="Search">
              <IoIosSearch />
            </button>
          </div>
          <button className="favourite" aria-label="Favourites">
            <IoMdHeartEmpty />
          </button>
          <button className="cart" aria-label="Cart">
            <IoCartOutline />
          </button>
          <button className="login" aria-label="Login">
            <FaRegUser />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
