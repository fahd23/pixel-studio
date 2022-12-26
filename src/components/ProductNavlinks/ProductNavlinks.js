import React from "react";
import "./productnavlinks.css";
import { Link } from "react-router-dom";

const ProductNavlinks = ({ navlinkToggle }) => {
  return (
    <div
      className={` ${
        navlinkToggle ? "product-navlink-container" : "display-none"
      }`}
    >
      <div className="product-content-links">
        <h3 className="cta-color">Home Furniture</h3>
        <div className="content-link-div">
          <Link to="/Products" className="linkStyle">
            Beds
          </Link>
          <li>Sofas & Armchairs</li>
          <li>Dining Tables</li>
          <li>Dining Chairs</li>
          <li>Side Table</li>
          <li>Center Table</li>
          <li>Cupboards</li>
          <li>TV Units</li>
          <li>Shoe Racks</li>
          <li>Pooja Mandapam</li>
        </div>
        <h3 className="cta-color"> Office Furniture</h3>
        <div className="content-link-div">
          <li>Office Furniture</li>
          <li>Office Seating</li>
          <li>Office Sofa</li>
          <li>School Furniture</li>
          <li>Lab & Hospital Furniture</li>
        </div>
      </div>
      <div className="product-collections">
        <div className="nav-home-furn">
          <div className="product-content">
            <h3 className="font-weight-300">Home Furniture</h3>
            <button className="cta-btn">View Collection</button>
          </div>
        </div>
        <div className="nav-office-furn">
          <div className="product-content">
            <h3 className="font-weight-300">Office Furniture</h3>
            <button className="cta-btn">View Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNavlinks;
