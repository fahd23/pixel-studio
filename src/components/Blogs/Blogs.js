import React from "react";
import "./blogs.css";
import blog1 from "../../Assets/blog1.png";
import blog2 from "../../Assets/blog2.png";
import blog3 from "../../Assets/blog3.png";
import reviewbed from "../../Assets/reviewbed.png";
import customers from "../../Assets/customers.png";

const blogsData = [
  {
    topic: "INTERIOR DESIGN",
    title: "INTERIOR DESIGN TRENDS THAT WILL BE MASSIVE IN 2022",
    date: "16 DEC 2022",
    image: blog1,
  },
  {
    topic: "INTERIOR DESIGN",
    title: "HOW TO DECORATE YOUR HOME & HALLWAY for the Summer Season",
    date: "16 DEC 2022",
    image: blog2,
  },
  {
    topic: "LIVING ROOM",
    title: "MODERN WALL TV CABINETS & UNITS FOR YOUR LIVING ROOM",
    date: "16 DEC 2022",
    image: blog3,
  },
];
const Blogs = () => {
  return (
    <>
      <div className="blog-container">
        <h1>Latest Blogs from 7Hill</h1>
        <div className="blog-section">
          {blogsData.map(({ topic, title, date, image }, index) => (
            <div key={index} className="blog-card">
              <img src={image} alt="topic" className="blog-image" />
              <div className="blog-content ">
                <div className="flex justify-space-btw">
                  <p className="f-size-14px opacity-5">{topic}</p>
                  <p className="f-size-14px">{date}</p>
                </div>
                <p className="f-size-14px">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex review-container">
        <img src={reviewbed} alt="reviewbed" />
        <div className="customer-review-content">
          <h1>What our Customers are Saying</h1>
          <p className="opacity-5">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            fermentum lacus, et accumsan erat. Nam at mattis mauris, vitae
            bibendum turpis. Pellentesque id lectus quis elit malesuada
            vestibulum.”
          </p>
          <div className="flex-column-center">
            <h3>Mayura Ravishankar</h3>
            <h4>Software Engineer</h4>
          </div>
          <img src={customers} alt="customers" />
        </div>
      </div>
    </>
  );
};

export default Blogs;
