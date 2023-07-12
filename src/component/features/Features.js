import React from "react";
import images from "../../constants/images";
import "./Features.css";
const Features = () => {
  return (
    <>
      {/* <div className="feature-top-imgbox">
        <img src={images.rec_home_img} alt="recipes" className="res-img" />
      </div> */}
      <div className="features-sec">
        <div className="feature-head-part">
          <p className="feature-head">FEATURES</p>
        </div>
        <div className="features-con">
          <div className="feature-part">
            <ul className="feature-lists">
              <li className="feature-list">- Low Cost</li>
              <li className="feature-list">- Excellent Quality</li>
              <li className="feature-list">- Export Quality</li>
              <li className="feature-list">- Laboratory Tested</li>
              <li className="feature-list">- Home Deilvery</li>
            </ul>
          </div>
          <div className="feature-part">
            <ul className="feature-lists">
              <li className="feature-list txt-end">- Healthy Oil</li>
              <li className="feature-list txt-end">- Healthy Oil</li>
              <li className="feature-list txt-end">- Govt. Approved</li>
              <li className="feature-list txt-end">- Energy Efficient</li>
              <li className="feature-list txt-end">
                - Available in: Tin, Jerry Can, Pouch and Pet BOTTALES
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
