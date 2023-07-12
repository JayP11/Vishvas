import React, { useEffect } from "react";
import images from "../../constants/images";
import "./Contactus.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { BsShop } from "react-icons/bs";

const Contactus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="contactus-imgbox">
        <img src={images.contactus_page_img} className="contactus-img" />
      </div>
      <div className="contactus-details-parts">
        <div className="contactus-details-card-first">
          <div className="contactctus-head-border">
            <div className="contactus-head">
              <p className="contactus-heading">FOR MORE INFORMATION</p>
            </div>
          </div>
          <div className="contactus-details-icon-flex-first">
            <div className="icon-part">
              <BsTelephone className="contactus-icon" />
            </div>
            <a href="tel:80 00 00 70 99" className="contactus-part-txt">
              80 00 00 70 99
            </a>
          </div>
          <div className="contactus-details-icon-flex">
            <div className="icon-part">
              <MdOutlineAlternateEmail className="contactus-icon" />
            </div>{" "}
            <a href="mailto:vshwstc@gmail.com" className="contactus-part-txt">
              vshwstc@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="contactus-second-line-flex">
        <div className="contactus-detaails-card">
          <div className="contactus-card-head-icon-part">
            <BiBuildings className="contactus-head-icon" />
          </div>
          <div className="contactus-card-inner-txt-part">
            <p className="contactus-inner-txt-heading">Head Office:</p>
            <p className="contactus-inner-txt">
              907, Nakshatra height's, <br />
              Nr. Raiya telephone exchange,
              <br />
              150 feet ring road,
              <br /> Rajkot-360 007-Gujarat
            </p>
          </div>
        </div>
        <div className="contactus-detaails-card">
          <div className="contactus-card-head-icon-part">
            <TbBuildingFactory2 className="contactus-head-icon" />
          </div>
          <div className="contactus-card-inner-txt-part">
            <p className="contactus-inner-txt-heading">Plant:</p>
            <p className="contactus-inner-txt">
              Plot No. 12/13, Survey No. 112/1, <br />
              Near Ruda Transport Nagar,
              <br /> Anandpar-Navagam,
              <br /> (Dist. Rajkot) <br />
              Rajkot-360 003-Gujarat
            </p>
          </div>
        </div>
      </div>

      <div className="contactus-third-line-flex">
        <div className="contactus-third-head-part">
          <div className="contactus-third-head-line">
            <div className="contactus-third-head-y-line"></div>
            <div className="contactus-third-line-card">
              <div className="contactus-card-head-icon-part">
                <BsShop className="contactus-head-icon" />
              </div>
              <div className="contactus-card-inner-txt-part-third-line">
                <p className="contactus-inner-txt-heading-third-line">
                  Maruti Trading Co. :
                </p>
                <p className="contactus-inner-txt-third-line">
                  Opp. Junagadh Utara,
                  <br /> Dana Pith,
                  <br />
                  Rajkot-360 001-Gujarat
                </p>
              </div>
            </div>
            <div className="contactus-card-line-fourth"></div>
            <div className="contactus-third-line-card">
              <div className="contactus-card-head-icon-part">
                <BsShop className="contactus-head-icon" />
              </div>
              <div className="contactus-card-inner-txt-part-third-line">
                <p className="contactus-inner-txt-heading-third-line">
                  Shubham Enterprise :
                </p>
                <p className="contactus-inner-txt-third-line">
                  Devpara Shakmarket,
                  <br /> Kothariya Main Road, Devpara
                  <br />
                  Rajkot-360 001-Gujarat
                </p>
              </div>
            </div>





            <div className="contactus-card-line-fourth"></div>
            <div className="contactus-third-line-card">
              <div className="contactus-card-head-icon-part">
                <BsShop className="contactus-head-icon" />
              </div>
              <div className="contactus-card-inner-txt-part-third-line">
                <p className="contactus-inner-txt-heading-third-line">
                Jalaram Trading
                </p>
                <p className="contactus-inner-txt-third-line">
                Randhanpuri Bazar, B/H Danapith, Bhavnagar-364001
                </p>
              </div>
            </div>
          </div>
          <div className="contactus-third-head-txt-part">
            <p className="contactus-third-heading">Retail Outlets</p>
          </div>
          <div className="contactus-third-head-line">
            <div className="contactus-third-head-y-line-right-side"></div>
            <div className="contactus-third-line-card-right">
              <div className="contactus-card-head-icon-part">
                <BsShop className="contactus-head-icon" />
              </div>
              <div className="contactus-card-inner-txt-part-third-line">
                <p className="contactus-inner-txt-heading-third-line">
                  Shubham Enterprise :
                </p>
                <p className="contactus-inner-txt-third-line">
                  Near Star Synergy Hospital,
                  <br />
                  Mavdi Main Road,
                  <br />
                  Rajkot-360 007-Gujarat
                </p>
              </div>
            </div>
            <div className="contactus-card-line-fourth-right"></div>
            <div className="contactus-third-line-card-right">
              <div className="contactus-card-head-icon-part">
                <BsShop className="contactus-head-icon" />
              </div>
              <div className="contactus-card-inner-txt-part-third-line">
                <p className="contactus-inner-txt-heading-third-line">
                  Ravi Trading :
                </p>
                <p className="contactus-inner-txt-third-line">
                  Grain Market,
                  <br />
                  Jamnagar.
                </p>
              </div>
            </div>

            <div className="contactus-card-line-fourth-right"></div>
            <div className="contactus-third-line-card-right">
              <div className="contactus-card-head-icon-part">
                <BsShop className="contactus-head-icon" />
              </div>
              <div className="contactus-card-inner-txt-part-third-line">
                <p className="contactus-inner-txt-heading-third-line">
                Shree Gajanan Enterprise
                </p>
                <p className="contactus-inner-txt-third-line">
                406/6, Chokha Bazar, Kalupur, Ahmedabad-380001 
                  
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/*  */}

      <div className="contactus-mini-window-main">
        <div className="contactus-mini-retail-heading">
          <p className="contactus-mini-retail-txt">Retail Outlets</p>
        </div>
        <div className="contactus-mini-line"></div>
        <div className="contactus-mini-card-detail">
          <div className="contactus-card-head-icon-part">
            <BsShop className="contactus-head-icon" />
          </div>
          <div className="contactus-card-inner-txt-part-third-line card-detail-margin-top">
            <p className="contactus-inner-txt-heading-third-line">
              Maruti Trading Co. :
            </p>
            <p className="contactus-inner-txt-third-line">
              Opp. Junagadh Utara,
              <br /> Dana Pith,
              <br />
              Rajkot-360 001-Gujarat
            </p>
          </div>
        </div>
        <div className="contactus-mini-line"></div>
        <div className="contactus-mini-card-detail">
          <div className="contactus-card-head-icon-part">
            <BsShop className="contactus-head-icon" />
          </div>
          <div className="contactus-card-inner-txt-part-third-line card-detail-margin-top">
            <p className="contactus-inner-txt-heading-third-line">
              Shubham Enterprise :
            </p>
            <p className="contactus-inner-txt-third-line">
              Near Star Synergy Hospital,
              <br />
              Mavdi Main Road, ,
              <br />
              Rajkot-360 007-Gujarat
            </p>
          </div>
        </div>
        <div className="contactus-mini-line"></div>
        <div className="contactus-mini-card-detail">
          <div className="contactus-card-head-icon-part">
            <BsShop className="contactus-head-icon" />
          </div>
          <div className="contactus-card-inner-txt-part-third-line card-detail-margin-top">
            <p className="contactus-inner-txt-heading-third-line">
              Shubham Enterprise :
            </p>
            <p className="contactus-inner-txt-third-line">
              Devpara Shakmarket,
              <br /> Kothariya Main Road, Devpara
              <br />
              Rajkot-360 001-Gujarat
            </p>
          </div>
        </div>
        <div className="contactus-mini-line"></div>
        <div className="contactus-mini-card-detail">
          <div className="contactus-card-head-icon-part">
            <BsShop className="contactus-head-icon" />
          </div>
          <div className="contactus-card-inner-txt-part-third-line card-detail-margin-top">
            <p className="contactus-inner-txt-heading-third-line">
              Ravi Trading :
            </p>
            <p className="contactus-inner-txt-third-line">
              Grain Market,
              <br />
              Jamnagar
            </p>
          </div>
        </div>

        <div className="contactus-mini-line"></div>
        <div className="contactus-mini-card-detail">
          <div className="contactus-card-head-icon-part">
            <BsShop className="contactus-head-icon" />
          </div>
          <div className="contactus-card-inner-txt-part-third-line card-detail-margin-top">
            <p className="contactus-inner-txt-heading-third-line">
            Jalaram Trading
            </p>
            <p className="contactus-inner-txt-third-line">
            Randhanpuri Bazar, B/H Danapith, Bhavnagar-364001
            </p>
          </div>
        </div>

        <div className="contactus-mini-line"></div>
        <div className="contactus-mini-card-detail">
          <div className="contactus-card-head-icon-part">
            <BsShop className="contactus-head-icon" />
          </div>
          <div className="contactus-card-inner-txt-part-third-line card-detail-margin-top">
            <p className="contactus-inner-txt-heading-third-line">
            Shree Gajanan Enterprise
            </p>
            <p className="contactus-inner-txt-third-line">
            406/6, Chokha Bazar, Kalupur, Ahmedabad-380001 
            </p>
          </div>
        </div>
      </div>
      <div className="contactus-last-line-part">
        <div className="contactus-last-line-imgbox">
          <img
            src={images.contact_last_line_img}
            alt=""
            className="contactus-last-line-img"
          />
        </div>
        <p className="contactus-lastline">
          UDAAN B2B PORTALS AVAILABLE IN AHMEDABAD
        </p>
      </div>
    </>
  );
};

export default Contactus;
