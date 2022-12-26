import React, { useEffect } from "react";
import { Navbar, Footer, ProductNavlinks, ProductListing } from "../components";

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
