import React from "react";
import "./navbar.css";
import applogo from "../../Assets/applogo.svg";
import callEmoji from "../../Assets/callEmoji.svg";
import mailEmoji from "../../Assets/mail.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <img src={applogo} alt="applogo" className="app-logo" />
      <div className="call-to-action-div">
        <div className="call-to-action-1">
          <div className="flex gap-1">
            <img src={callEmoji} alt="callEmoji" />
            <p>+91 98408 96388</p>
          </div>
          <div className="flex gap-1">
            <img src={mailEmoji} alt="mailEmoji" />
            <p>rajendran@heveaproducts.co.in</p>
          </div>
        </div>
        <div className="call-to-action-2">
          <li>Home</li>
          <li>
            Products <span className="down-arrow">{">"}</span>
          </li>
          <li>About Us</li>
          <li>Dealers</li>
          <li>Infrastructure</li>
          <li>Blogs</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
