import React, { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [navlinkToggle, setNavlinkToggle] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              navlinkToggle={navlinkToggle}
              setNavlinkToggle={setNavlinkToggle}
            />
          }
        />
        <Route
          path="/Products"
          element={
            <ProductPage
              navlinkToggle={navlinkToggle}
              setNavlinkToggle={setNavlinkToggle}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
