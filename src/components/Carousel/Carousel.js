import React from "react";
import "./carousel.css";
import Carousel1 from "../../Assets/Carousel1.png";
import Carousel2 from "../../Assets/Carousel2.png";
import Carousel3 from "../../Assets/Carousel3.png";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-div">
        <img src={Carousel3} alt="Carousel3" className="carousel-image" />
        <div className="carousel-card">
          <p className="card-title">Creative Workplace Furniture</p>
          <p className="card-sub-title">that elevates your spirit.</p>
          <button className="carousel-cta-btn">Explore the Collection</button>
        </div>
      </div>

      <div className="carousel-div">
        <img src={Carousel1} alt="Carousel1" className="carousel-image" />
        <div className="carousel-card">
          <p className="card-title"> Elegant Dining Room Furniture</p>
          <p className="card-sub-title">that inspires your senses.</p>
          <button className="carousel-cta-btn">Explore the Collection</button>
        </div>
      </div>

      <div className="carousel-div">
        <img src={Carousel2} alt="Carousel2" className="carousel-image" />
        <div className="carousel-card">
          <p className="card-title">Aesthetic Living Room Furniture</p>
          <p className="card-sub-title">that uplifts your mood.</p>
          <button className="carousel-cta-btn">Explore the Collection</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
