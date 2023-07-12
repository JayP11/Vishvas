import React, { useEffect } from "react";
import images from "../../constants/images";
import "./About.css";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="About-sec">
        <div className="about-con-first">
          <div className="about-sec-head">
            <div className="about-sec-head-inner">
              <p className="about-sec-heading">WHO WE ARE</p>
            </div>
          </div>
        </div>
        <div className="about-flex">
          <div className="about-flex-part">
            <p className="about-txt">
              Vishwas Refoils LLP, An ISO 22000:2018 & 9001:2015 certified
              company, established in 1994 are recognized as one of the leading
              manufacturers & suppliers of a wide array of Edible Oils. Our
              qualitative range of edible oils includes Refined Sunflower Oil,
              Refined Cottonseed Oil, Refined Corn Oil, Refined Soybean oil,
              Active Frying Oil and Refined Palmolein Oil. Apart from suppling
              in domestic markets. It is our earnest belief that nothing of
              permanent and perennial value is created overnight. With our
              persistent efforts to upgrade our manufacturing and packing
              facilities, and continuous research in the field of oils, for
              betterment of existing quality standards we have earned a good
              repute amongst our clients and for our Branded products
            </p>
          </div>
          <div className="about-flex-part">
            <p className="about-txt">
              Vishwas Refoils LLP is fully geared to meet the challenges of the
              international market by providing technologically harnessed
              natural products with enhanced product quality, economical prices
              and better services. Everyone dreams of ‘Perfection’ but ‘Quest
              for Excellence’ is the way of life, for our company. Under the
              leadership of our founder Mr. Daulatram Sadarangmal Mandhiyani and
              MD Mr. Deepak Daulatram Mandhiyani, we are accomplishing our
              objectives and visions swiftly. We are a professional group with a
              technical outlook. Also we have a team of well experienced and
              skilled professionals. These professionals have expertise in the
              processing of Edible Oils.
            </p>
          </div>
        </div>
      </div>

      <div className="about-welcome-img-box">
        <img
          src={images.about_welcome}
          alt="Welcome image"
          className="about-welcome-img"
        />
        <p className="about-welcome-txt">
          A family owned and vertically integrated edible oil manufacturers
          headquartered here in Rajkot City of Gujarat, Western India. Fueled by
          progressive thought and recognizing the value of innovation, Vishwas
          Refoils swiftly adapt operations and practices to meet the market’s
          ever changing demands.
        </p>
        <p className="about-welcome-txt">
          A proud tradition of innovation and success spanning over generations
          and almost 20 years has seen the business grow to include Vishwas
          Refined Sunflower Oil, Corn Oil, Cotton Seed Oil, Corn Oil, Soybean
          Oil, Palmolein Oil and Active Frying Oil...
        </p>
        <p className="about-welcome-txt">
          Certified by the FSSAI (Food Safety and Standards Authority of India).
          AIAB (Accreditation Institute for Assessment Body) (Europe).
        </p>
      </div>
      <div className="About-sec">
        <div className="about-con-first">
          <div className="about-sec-head">
            <div className="about-sec-head-inner">
              <p className="about-sec-heading">CERTIFIED BY</p>
            </div>
          </div>
        </div>
        <div className="about-certificate-flex">
          <div className="about-certificate-imgbox">
            <img
              src={images.about_certificate_1}
              alt="Certificate"
              className="about-certificate-img"
            />
          </div>
          <div className="about-certificate-imgbox">
            <img
              src={images.about_certificate_2}
              alt="Certificate"
              className="about-certificate-img"
            />
          </div>
        </div>
      </div>
      <div className="about-video-sec">
        <div className="about-video-con">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/Cuo-_62j0N8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/z5mH-puLhBw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/1tW-tpssFvQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/xdjWxv0NGqY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default About;
