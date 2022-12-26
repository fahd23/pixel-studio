import React from "react";
import "./products.css";
import seek from "../../Assets/Seek.png";
import daco from "../../Assets/Daco.png";
import { feature, products } from "../../utilities/data";

const Products = () => {
  return (
    <section>
      <div className="service-section">
        <h1 className="f-size-2">Timeless, Trust-worthy & Top Notch Finish</h1>
        <div className="feature-div">
          {feature.map(({ name, image, description }) => (
            <div className="flex-column-center gap-1">
              <img src={image} alt={name} />
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-column-center gap-1 m-t-6">
        <div className="availability-title">
          <h1 className="f-size-2">
            Our Range of Furniture that Stands the Test of Time
          </h1>
          <div className="availability-title-2">
            <span className="cta-color">Home Furniture </span>
            <span>|</span>
            <span> Office Furniture</span>
          </div>
        </div>
        <div>
          <img src={seek} alt="seek-png" className="seek-image" />
          <img src={daco} alt="daco-png" className="daco-image" />
          <div className="avails-container">
            {products.map(({ image, name }, index) => (
              <div className={`div${index} product`}>
                <img src={image} alt={name} />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
