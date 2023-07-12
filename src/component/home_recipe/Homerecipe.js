import React, { useEffect, useState } from "react";
import data from "../../constants/data";
import "./Homerecipe.css";
const Homerecipe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [images, setImages] = useState(data.imageH);
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
    <>
      <>
        <div>
          {/* <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div> */}
          <div className="section-center-home-recipe">
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
                <aside className={position} key={id}>
                  <img
                    src={imageUrl}
                    alt="hotel images"
                    className="person-img-home-recipe"
                  />
                </aside>
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
    </>
  );
};

export default Homerecipe;
