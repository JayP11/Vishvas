import React from "react";
import "./Targetachivement.css";

const Targetachivement = () => {
  return (
    <>
      <div className="Targetachive-sec">
        <div className="Targetachive-con-main">
          <div class="flex-container-cards">
            <div class="card">
              {/* <div class="card-img-shadow">
              <img
                src="https://variety.com/wp-content/uploads/2022/05/SRV-12030_R.jpg"
                alt="wanda"
              />
            </div> */}
              <div class="card-content">
                <h2 className="card-title"> 1. Innovation</h2>
                <p className="card-txt">
                  The process of translating an idea or invention into a good or
                  service that creates value or for which customers will pay.We
                  are manu-facturing industry standard Pumps Sets to full-fill
                  every customer’s requirements with new technology n
                  inovatvative inventions
                </p>
                {/* <div class="button-shadow">
                <div class="card-button">View More </div>
              </div> */}
              </div>
            </div>

            <div class="card">
              {/* <div class="card-img-shadow">
              <img
                src="https://variety.com/wp-content/uploads/2022/05/SRV-12030_R.jpg"
                alt="wanda"
              />
            </div> */}
              <div class="card-content">
                <h2 className="card-title"> 2. Quality</h2>
                <p className="card-txt">
                  We strongly believe in periodical maintenance of International
                  Quality Systems & Implementation of latest Technologies. We
                  have established Quality Management System in accordance with
                  ISO 9001:2008
                </p>
                {/* <div class="button-shadow">
                <div class="card-button">View More </div>
              </div> */}
              </div>
            </div>

            <div class="card">
              {/* <div class="card-img-shadow">
              <img
                src="https://variety.com/wp-content/uploads/2022/05/SRV-12030_R.jpg"
                alt="wanda"
              />
            </div> */}
              <div class="card-content">
                <h2 className="card-title"> 3. Trust</h2>
                <p className="card-txt">
                  We are providing a complete range of highly qualitative and
                  Trastable products to our customers. We are providing products
                  with the help of modern technology with skilled employees. We
                  also welcomes suggestion from customer side. We fill customer
                  satisfaction is our main reword instead of other
                </p>
                {/* <div class="button-shadow">
                <div class="card-button">View More </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="card-bottom-sec">
          <div className="card-bottom-inner">
            <p className="card-bottom-txt">
              INNOVATION, QUALITY & TRUST{" "}
              <span className="card-botom-txt-sub">
                {" "}
                ARE OUR TARGETED ACHIVEMENTS
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Targetachivement;
