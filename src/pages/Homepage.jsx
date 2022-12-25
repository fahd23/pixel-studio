import React from "react";
import About from "../components/AboutSection/About";
import CallToAction from "../components/CallToAction/CallToAction";
import Carousel from "../components/Carousel/Carousel";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Products />
      <CallToAction />
    </div>
  );
};

export default Homepage;
