import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";
import images from "../../constants/images";

const Footer = () => {
  return (
    <footer className="footer-sec">
      <img src={images.Footer_2} alt="" className="footer-bg-img" />

      {/* <div className="footer-imgbox"> */}
      <div className="con-main">
        <div className="footer-con">
          <div className="footer-part">
            <p className="footer-part-head">ABOUT US</p>
            <p className="footer-part-about">
              We are providing a complete range of highly qualitative products
              to our customers. We are providing products with the help of
              modern technology with skilled employees.
            </p>
            <p className="footer-part-about">
              <span className="footer-part-about-name">
                Vishwas Refoils LLP
              </span>
              &nbsp; fill customer satisfaction is our main reword instead of
              other. We also welcomes suggestion from customer side
            </p>
            <div className="footer-part-social-icons">
              <a href="http://facebook.com/VishwasRefoils" target="_blank">
                <FaFacebookF className="footer-social-icon" />
              </a>
              <a
                href="https://www.instagram.com/vishwas.cooking.oil/"
                target="_blank">
                <FaInstagram className="footer-social-icon" />
              </a>
              <a href="https://twitter.com/VishwasRefoil" target="_blank">
                <FaTwitter className="footer-social-icon" />
              </a>
            </div>
          </div>
          <div className="footer-part">
            <p className="footer-part-head">QUICK LINKS</p>
            <ul className="footer-links">
              <li className="nav-link-flex">
                <TfiAngleDoubleRight className="nav-link-icon" />
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-link-flex">
                <TfiAngleDoubleRight className="nav-link-icon" />
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-link-flex">
                <TfiAngleDoubleRight className="nav-link-icon" />
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-link-flex">
                <TfiAngleDoubleRight className="nav-link-icon" />
                <Link className="nav-link" to="/Recipes">
                  Recipes
                </Link>
              </li>
              <li className="nav-link-flex">
                <TfiAngleDoubleRight className="nav-link-icon" />
                <Link className="nav-link" to="/contactus">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-part">
            <p className="footer-part-head">Products</p>
            <ul className="footer-links">
              <li className="nav-link">
                <TfiAngleDoubleRight className="nav-link-icon" />
                <p className="nav-link-sub">Refined Sunflower Oil</p>
              </li>
              <li className="nav-link">
                <TfiAngleDoubleRight className="nav-link-icon" />
                <p className="nav-link-sub">Double Filtered Groundnut Oil</p>
              </li>
              <li className="nav-link">
                <TfiAngleDoubleRight className="nav-link-icon" />
                <p className="nav-link-sub">Refined Cottonseed Oil</p>
              </li>
              <li className="nav-link">
                <TfiAngleDoubleRight className="nav-link-icon" />
                <p className="nav-link-sub">Refined Corn Oil</p>
              </li>
              <li className="nav-link">
                <TfiAngleDoubleRight className="nav-link-icon" />
                <p className="nav-link-sub">Refined Palmolein Oil</p>
              </li>
              <li className="nav-link">
                <TfiAngleDoubleRight className="nav-link-icon" />
                <p className="nav-link-sub">Refined Soyabean Oil</p>
              </li>
              <li className="nav-link">
                <TfiAngleDoubleRight className="nav-link-icon" />
                <p className="nav-link-sub">Gold Palmolein Oil</p>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-last-line">
          Vishwas Refoils LLP - 2023 © All Rights Reserved
        </p>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
