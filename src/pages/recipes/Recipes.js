import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./Recipes.css";
const Recipes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="res-sec">
      <div className="res-con">
        <Link to="/recfafdajalebi">
          <div className="res-imgbox">
            <img src={images.rec_1} alt="recipe" className="recipe-img" />
          </div>
        </Link>

        <Link to="/recpalakpaneer">
          <div className="res-imgbox">
            <img src={images.rec_2} alt="recipe" className="recipe-img" />
          </div>
        </Link>
        <Link to="/recpavbhaji" onClick={() => console.log("clicked")}>
          <div className="res-imgbox">
            <img src={images.rec_3} alt="recipe" className="recipe-img" />
          </div>
        </Link>

        <Link to="/recdalbaatichurma">
          <div className="res-imgbox">
            <img src={images.rec_4} alt="recipe" className="recipe-img" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Recipes;
