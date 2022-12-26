import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProductNavlinks from "../components/ProductNavlinks/ProductNavlinks";
import ProductListing from "../components/ProductListing/ProductListing";

const ProductPage = () => {
  useEffect(() => {
    document.title = "Products | Pixel-Studios";
  }, []);
  return (
    <>
      <Navbar />
      <ProductListing />
      <Footer />
      <ProductNavlinks />
    </>
  );
};

export default ProductPage;
