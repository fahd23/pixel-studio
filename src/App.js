import React from "react";
import "./App.css";
import About from "./components/AboutSection/About";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Products />
    </>
  );
};

export default App;
