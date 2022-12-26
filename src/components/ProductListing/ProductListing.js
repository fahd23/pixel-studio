import React from "react";
import "./productlisting.css";
import productPageBed from "../../Assets/productPageBed.png";
import { filterData, listingProducts } from "../../utilities/data";

const ProductListing = () => {
  return (
    <div className="flex-column-center ">
      <img src={productPageBed} alt="product-Page-Bed" className="width-100" />
      <div className="flex-column-center width-60 m-auto text-center gap-1 m-t-2 m-b-2">
        <h1>Beds</h1>
        <p>{`Products > Beds`}</p>
        <p>
          A single bed for the stag or a double bed for the couple - you’ll find
          the one you need right here. Our king-size beds ample room for you to
          stretch Many of our beds also have smart storage options so you can
          tuck away bed linen, extra pillows and quilts. Our cots and children’s
          beds will keep your little one safe and comfortable through the night.{" "}
        </p>
      </div>
      <div className="filter-and-product-div">
        <div className="category-filters m-t-3">
          <div className="flex-column gap-1">
            <h3 className="cta-color">Bed Size</h3>
            {filterData["Bed Size"].map((item) => (
              <div>
                <input type="checkbox" id={item} name={item} value={item} />
                <label for={item}> {item}</label>
              </div>
            ))}
            <br />
          </div>
          <div className="flex-column gap-1">
            <h3 className="cta-color">Storage Type</h3>
            {filterData["Storage Type"].map((item) => (
              <div>
                <div>
                  <input type="checkbox" id={item} name={item} value={item} />
                  <label for={item}> {item}</label>
                </div>
              </div>
            ))}
            <br />
          </div>
          <div className="flex-column gap-1">
            <h3 className="cta-color">Finishes</h3>
            {filterData.Finishes.map((item) => (
              <div>
                <div>
                  <input type="checkbox" id={item} name={item} value={item} />
                  <label for={item}> {item}</label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="m-b-2">Showing 1 - 6 Results out of 142 Results</p>
          <div className="listing-card-container">
            {listingProducts.map(({ image, desc }) => (
              <div className="listing-card">
                <img src={image} alt={desc} />
                <p>{desc}</p>
                <div className="flex gap-1">
                  <button className="cta-btn">View Details</button>
                  <button className="cta-btn-outlined">Enquire Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="cta-btn-outlined m-auto m-b-2">Load More</button>
      <div className="other-products">
        <h1>Browse our Other Products</h1>
        <div className="flex gap-2 m-t-2">
          <div className="oproduct-img-div-1">
            <p className="oproduct-img-p">Sofas & Armchairs</p>
          </div>
          <div className="oproduct-img-div-2">
            <p className="oproduct-img-p">Dining Tables</p>
          </div>
          <div className="oproduct-img-div-3">
            <p className="oproduct-img-p">Dining Chairs</p>
          </div>
          <div className="oproduct-img-div-4">
            <p className="oproduct-img-p">Side Table</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
