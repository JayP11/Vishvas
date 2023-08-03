import React, { useState } from "react";
import images from "../../constants/images";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="nav-sec">
        <img src={images.yellow_head} className="nav-head-img" />
        <div className="nav-main-nav">
          <nav className="nav-con">
            <div className="nav-logobox">
              <img src={images.logo} className="nav-logo" />
            </div>
            <ul className="nav-linkks">
              <li>
                <Link to="/" className="nav-linkk">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-linkk">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav-linkk">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="nav-linkk">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="nav-linkk">
                  Contact
                </Link>
              </li>
              {/* <div className="Shop_Now_Button_Prods_div"> */}
              <a href="https://deodap.in/search?q=Vishwas">
                <button className="Shop_Now_Button_Prods">Shop Now</button>
              </a>
              {/* </div> */}
            </ul>
            <div className="nav-btn-icon-part">
              {toggleMenu === false ? (
                <button className="nav-btn" onClick={() => setToggleMenu(true)}>
                  <AiOutlineMenu className="nav-btn-icon" />
                </button>
              ) : (
                <button
                  className="nav-btn"
                  onClick={() => setToggleMenu(false)}>
                  <AiOutlineClose className="nav-btn-icon" />
                </button>
              )}
            </div>
          </nav>
        </div>
      </div>
      <>
        {toggleMenu && (
          <div className="mobile-nav-main">
            <ul className="mobile-nav-links">
              <li>
                <Link
                  to={"/"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to={"/recipes"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  Recipes
                </Link>
              </li>{" "}
              <li>
                <Link
                  to={"/contactus"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={"/contactus"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                  <a href="https://deodap.in/search?q=Vishwas">
                    <button className="Shop_Now_Button_Prods">Shop Now</button>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </>
    </>
  );
};

export default Navbar;
