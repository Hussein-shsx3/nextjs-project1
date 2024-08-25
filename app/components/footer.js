"use client";
import React from "react";
import Slide from "react-reveal/Slide";
const Footer = () => {
  return (
    <div id="Footer">
      <Slide bottom>
        <div id="Footer__1">
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            eveniet, officia modi iusto totam optio, enim vero distinctio maxime
            aut, ex eum similique cumque ut in quia dolores iste quo!
          </p>
        </div>
        <div id="Footer__2">
          <h1>About us</h1>
          <p>Stay update with our latest</p>
          <div id="email__1">
            <input type="email" placeholder="Email Address" />
            <button id="Submit">Submit</button>
          </div>
        </div>
        <div id="Footer__3">
          <h1>About us</h1>
          <div id="F_img">
            <div id="F_img_1">
              <img src="./img/thumb-card3.png" alt="" />
            </div>
            <div id="F_img_1">
              <img src="./img/thumb-card4.png" alt="" />
            </div>
            <div id="F_img_1">
              <img src="./img/thumb-card5.png" alt="" />
            </div>
            <div id="F_img_1">
              <img src="./img/thumb-card6.png" alt="" />
            </div>
            <div id="F_img_1">
              <img src="./img/thumb-card7.png" alt="" />
            </div>
            <div id="F_img_1">
              <img src="./img/thumb-card8.png" alt="" />
            </div>
          </div>
        </div>
        <div id="Footer__4">
          <h1>About us</h1>
          <p>Let us be Social</p>
          <div id="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Footer;
