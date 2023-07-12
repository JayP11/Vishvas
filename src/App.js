// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { Footer, Navbar } from "./common";
import { Landingpage } from "./pages/landingpage/Landingpage";
import About, { A } from "./pages/aboutpage/About";
import {
  LandingPage,
  Recdalbaatichurma,
  Recfafdajalebi,
  Recipes,
  Recpalakpaneer,
  Recpavbhaji,
} from "./pages";
import Contactus from "./pages/contactus/Contactus";
import Products from "./pages/products/Products";

function App() {
  return (
    <>
      {/* <Home />
      <AboutUs /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/Products" element={<Products />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/products" element={<Products />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recpavbhaji" element={<Recpavbhaji />} />
          <Route path="/recdalbaatichurma" element={<Recdalbaatichurma />} />
          <Route path="/recfafdajalebi" element={<Recfafdajalebi />} />
          <Route path="/recpalakpaneer" element={<Recpalakpaneer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
