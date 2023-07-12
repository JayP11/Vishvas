import React from "react";
import images from "../../constants/images";
import "./Ourproducts.css";
const Ourproducts = () => {
  return (
    <div className="our-products-sec">
      <div className="feature-head-part">
        <p className="feature-head product-head">OUR PRODUCTS</p>
      </div>
      <div className="our-products-con">
        <div className="product-home-imgbox">
          <img src={images.product_1} alt="" className="product-img" />
        </div>
        <div className="product-home-imgbox">
          <img src={images.product_2} alt="" className="product-img" />
        </div>
        <div className="product-home-imgbox">
          <img src={images.product_3} alt="" className="product-img" />
        </div>
        <div className="product-home-imgbox">
          <img src={images.product_4} alt="" className="product-img" />
        </div>
        <div className="product-home-imgbox">
          <img src={images.product_5} alt="" className="product-img" />
        </div>
        <div className="product-home-imgbox">
          <img src={images.product_6} alt="" className="product-img" />
        </div>
      </div>
    </div>
  );
};

export default Ourproducts;
