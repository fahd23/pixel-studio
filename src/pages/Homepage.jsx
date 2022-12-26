import React, { useEffect } from "react";
import {
  Navbar,
  About,
  Blogs,
  CallToAction,
  Carousel,
  Footer,
  Products,
  ProductNavlinks,
} from "../components";

const Homepage = () => {
  useEffect(() => {
    document.title = "Home | Pixel-Studios";
  }, []);
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Products />
      <CallToAction />
      <Blogs />
      <Footer />
      <ProductNavlinks />
    </>
  );
};

export default Homepage;
