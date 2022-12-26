import React, { useEffect } from "react";
import About from "../components/AboutSection/About";
import Blogs from "../components/Blogs/Blogs";
import CallToAction from "../components/CallToAction/CallToAction";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProductNavlinks from "../components/ProductNavlinks/ProductNavlinks";
import Products from "../components/Products/Products";

const Homepage = () => {
  useEffect(() => {
    document.title = "Home | Pixel-Studios";
  }, []);
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Products />
      <CallToAction />
      <Blogs />
      <Footer />
      <ProductNavlinks />
    </div>
  );
};

export default Homepage;
