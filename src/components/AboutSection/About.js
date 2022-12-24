import React from "react";
import "./about.css";
import hill from "../../Assets/hillspic.png";
import image from "../../Assets/image1.png";
import wood from "../../Assets/wood.png";

const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="about-div">
          <h1 className="about-title">7Hill - Your Lifetime Partner</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            efficitur lacinia facilisis. Nam mauris nunc, pretium nec porttitor
            at, imperdiet non neque. Morbi sed placerat lacus, et rutrum diam.
            Praesent mollis, lectus at efficitur facilisis, dui massa vestibulum
            nibh, sit amet aliquam erat magna ut erat. Nam fermentum vitae felis
            vitae efficitur. Aenean consectetur faucibus euismod. Pellentesque
            id metus enim. Morbi convallis malesuada tristique.
          </p>
          <button className="cta-btn">Know more</button>
        </div>
        <div>
          <img src={image} alt="hill" />
        </div>
        <img src={hill} alt="hill" className="hill-image" />
        <img src={wood} alt="wood" className="wood-image" />
      </div>
    </section>
  );
};

export default About;
