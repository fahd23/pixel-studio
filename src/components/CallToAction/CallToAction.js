import React from "react";
import visionMan from "../../Assets/visionMan.png";
import "./callToAction.css";

const CallToAction = () => {
  return (
    <div>
      <div className="cta-container bg-opacity">
        <div className="cta-content">
          <h1>Stay on Top of the Furniture World!</h1>
          <p>Join our Dealer network and unlock new benefits</p>
          <button className="cta-btn">Get in Touch Now</button>
        </div>
      </div>

      <div className="vision-container">
        <div className="vision-content">
          <img src={visionMan} alt="man" />
          <div className="flex-column gap-2">
            <h1>The Man. The Idea. The Vision</h1>
            <p>
              Shri. Rajendran Ezhumalai, is a pioneer in manufacturing of wooden
              furniture and other wooden products who has elevated wooden
              craftsmanship to a whole new level with his vast experience, able
              guidance and inspiring leadership. A veteran in furniture
              manufacturing, he is known for his experience and tactful
              consulting for set up of furniture manufacturing facilities and is
              an encyclopedia of everything from planning, products, technology
              and management of furniture manufacturing.
            </p>
            <button className="cta-btn">Know More</button>
          </div>
        </div>
      </div>

      <div className="product-cta-container">
        <div className="office-product">
          <div className="office-product-content">
            <h2 className="width-80">
              Are you looking to furnish your office space?
            </h2>
            <p>
              We are the one stop solution for your office furniture
              requirements, get in touch with us now for Bulk Corporate Enquires
            </p>
            <button className="cta-btn">Get In Touch Now</button>
          </div>
        </div>
        <div className="home-product">
          <div className="home-product-content">
            <h2>
              Do you wish to furnish your home to suit your bespoke needs{" "}
            </h2>
            <p>
              We are the one stop solution for your home furniture requirements,
              get in touch with us now for Bulk Enquires
            </p>
            <button className="cta-btn">Get In Touch Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
