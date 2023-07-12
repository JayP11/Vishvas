import React, { useEffect, useState } from "react";
import { TbBottle } from "react-icons/tb";
import data from "../../constants/data";
import images from "../../constants/images";
import "./Products.css";
const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [images, setImages] = useState(data.imageHero);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    // <>
    //   <div className="product-sec">
    //     <div className="product-con">
    //       <div className="product-sec-1-flex">
    //         <p className="product-sec-1-heading">REFINED PALMOILEIN OIL</p>
    //         <div className="product-imgbox">
    //           <img
    //             src={images.product_img}
    //             alt="Product"
    //             className="product-img"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="product-sec-2">
    //     <div className="sec-2-con">
    //       <p className="sec-2-txt">
    //         preventing vitamin A deficiency, cancer, brain disease, eging; and
    //         <br />
    //         treating malaria, high blood pressure, high cholesterol, and cyanide
    //         <br />
    //         poisoning. Palm oil is used for weight loss and increasing the
    //         body's
    //         <br /> metabolism.
    //       </p>
    //       <p className="different-size-heading">AVAILABLE IN</p>
    //       <div className="different-size-flex">
    //         <div className="diff-size-box">
    //           <img src={images.diff_size_img1} />
    //           <p className="diff-size-name">
    //             500 ml
    //             <br />1 l
    //           </p>
    //         </div>
    //         <div className="diff-size-box">
    //           <img src={images.diff_size_img2} />
    //           <p className="diff-size-name">
    //             500 ml
    //             <br />1 l
    //           </p>
    //         </div>
    //         <div className="diff-size-box">
    //           <img src={images.diff_size_img3} />
    //           <p className="diff-size-name">
    //             2 l
    //             <br />5 l
    //           </p>
    //         </div>
    //         <div className="diff-size-box">
    //           <img src={images.diff_size_img4} />
    //           <p className="diff-size-name">
    //             15 l
    //             <br />
    //             15 kg
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div>
        {/* <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div> */}
        <div className="section-center">
          {images.map((image, personIndex) => {
            const { id, imageUrl } = image;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === images.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <img src={imageUrl} alt="hotel images" className="person-img" />
              </article>
            );
          })}
          {/* <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
            console.log("next", index);
          }}
        >
          <FiChevronRight></FiChevronRight>
        </button> */}

          {/* Availability */}
          {/* <div className="gift-main-container">
            <div className="gift-container">
             
              <div className="gift-part-flex">
                <div className="lbl-selector">
                 
                  <select className="gift-selector" name="budget">
                    <option className="margin-right" value="country">
                      India
                    </option>
                
                  </select>
                </div>
                <div className="lbl-selector">
                 
                  <select
                    className="gift-selector"
                    name="budget"
                    onChange={(e) => {
                      setPlace(e.target.value);
                    }}
                    value={get_place}
                  >
                    {places_list &&
                      places_list.map((item, index) => {
                        return (
                          
                          <option value={item.id} key={index}>
                            {item.title}
                          </option>
                        );
                      })}
                  
                  </select>
                </div>
                <div className="lbl-selector">
               
                  <DatePicker
                    onChange={onChange}
                    value={value}
                    className="gift-selector2"
                  />
                </div>
                <div className="lbl-selector">
                
                  <DatePicker
                    onChange={onChange2}
                    value={value2}
                    className="gift-selector2"
                  />
                </div>
              </div>

              <Link
                to="/form"
                state={{
                  value2: value2,
                  value: value,
                  get_place: get_place,
                }}
                className="gift-btn"
              >
                Search
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Products;
