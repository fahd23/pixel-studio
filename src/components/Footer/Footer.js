import React from "react";
import "./footer.css";
import callEmoji from "../../Assets/callEmoji.svg";
import mailEmoji from "../../Assets/mail.svg";
import locationEmoji from "../../Assets/location.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content-container f-size-14px">
        <div className="footer-content">
          <div className="footer-content-div m-r-2">
            <h3 className="cta-color m-b-1">Reach us at</h3>

            <li className="flex gap-1">
              <img src={locationEmoji} alt="locationEmoji" />
              1/183, Sri Selvavinayagar Nagar, Behind Don Bosco School,
              Payasampakkam Village, Red Hills, Chennai – 600052.
            </li>
            <li className="flex gap-1">
              <img src={callEmoji} alt="callEmoji" />
              +91 98408 96388
            </li>
            <li className="flex gap-1">
              <img src={mailEmoji} alt="mailEmoji" />
              rajendran@heveaproducts.co.in
            </li>
          </div>
          <div className="footer-content-div ">
            <h3 className="cta-color m-b-1">Quick Links</h3>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Dealers</li>
            <li>Infrastructure</li>
            <li>Blogs</li>
            <li>Careers</li>
          </div>
          <div className="footer-content-div m-r-2 p-l-minus-5">
            <h3 className="cta-color m-b-1">Home Furniture</h3>
            <li>Beds</li>
            <li>Sofas & Armchairs</li>
            <li>Dining Tables</li>
            <li>Dining Chairs</li>
            <li>Side Table</li>
            <li>Center Table</li>
            <li>Cupboards</li>
            <li className="m-t-3">TV Units</li>
            <li>Shoe Racks</li>
            <li>Pooja Mandapam</li>
          </div>
          <div className="footer-content-div p-l-2">
            <h3 className="cta-color m-b-1"> Office Furniture</h3>
            <li>Office Furniture</li>
            <li>Office Seating</li>
            <li>Office Sofa</li>
            <li>School Furniture</li>
            <li>Lab & Hospital Furniture</li>
          </div>
        </div>
        <hr />
        <div className="flex justify-space-btw ">
          <p>
            Copyright @ 2022 7Hill Furniture | All Rights Reserved. Designed By
            Pixel Studios
          </p>
          <div className="flex gap-1">
            <p>Discrimination Policy</p>
            <p>Privacy Policy </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
