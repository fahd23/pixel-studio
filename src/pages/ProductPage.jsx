import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProductNavlinks from "../components/ProductNavlinks/ProductNavlinks";
import ProductListing from "../components/ProductListing/ProductListing";

const ProductPage = ({ navlinkToggle, setNavlinkToggle }) => {
  return (
    <>
      <Navbar setNavlinkToggle={setNavlinkToggle} />
      <ProductListing />
      <Footer />
      <ProductNavlinks navlinkToggle={navlinkToggle} />
    </>
  );
};

export default ProductPage;
