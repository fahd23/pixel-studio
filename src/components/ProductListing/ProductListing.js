import React from "react";
import "./productlisting.css";
import productPageBed from "../../Assets/productPageBed.png";

const ProductListing = () => {
  return (
    <div>
      <img
        src={productPageBed}
        alt="product-Page-Bed"
        style={{ width: "100%" }}
      />
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
    </div>
  );
};

export default ProductListing;
