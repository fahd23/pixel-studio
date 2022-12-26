import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import { ListingProvider } from "./context/listing-context";

const App = () => {
  return (
    <ListingProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Products" element={<ProductPage />} />
      </Routes>
    </ListingProvider>
  );
};

export default App;
