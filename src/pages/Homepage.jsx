import React from "react";
import About from "../components/AboutSection/About";
import Blogs from "../components/Blogs/Blogs";
import CallToAction from "../components/CallToAction/CallToAction";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
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
      <Blogs />
      <Footer />
    </div>
  );
};

export default Homepage;
