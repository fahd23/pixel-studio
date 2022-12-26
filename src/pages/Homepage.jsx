import React from "react";
import About from "../components/AboutSection/About";
import Blogs from "../components/Blogs/Blogs";
import CallToAction from "../components/CallToAction/CallToAction";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProductNavlinks from "../components/ProductNavlinks/ProductNavlinks";
import Products from "../components/Products/Products";

const Homepage = ({ navlinkToggle, setNavlinkToggle }) => {
  return (
    <div>
      <Navbar setNavlinkToggle={setNavlinkToggle} />
      <Carousel />
      <About />
      <Products />
      <CallToAction />
      <Blogs />
      <Footer />
      <ProductNavlinks navlinkToggle={navlinkToggle} />
    </div>
  );
};

export default Homepage;
