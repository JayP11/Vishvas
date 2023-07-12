import React from "react";
import { Footer, Navbar } from "../../common";
import {
  Features,
  Homerecipe,
  Ourproducts,
  Targetachivement,
} from "../../component";
import Hero from "../../component/hero/Hero";
import "./Lndingpage.css";

const Landingpage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Targetachivement />
      <Homerecipe />
      <Features />
      <Ourproducts />
      {/* <Footer /> */}
    </>
  );
};

export default Landingpage;
