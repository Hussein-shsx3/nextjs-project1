"use client";
import Slide from "react-reveal/Slide";
import React, { useState } from "react";

const Caregory1 = (props) => {
  return (
    <>
      <Slide bottom>
        <div id="img">
          <img src={props.img} alt="" />
        </div>
        <div id="history">
          <i className="fa-solid fa-user"></i>
          <p>Admin</p>
          <i className="fa-solid fa-calendar-days"></i>
          <p>January 14,2023</p>
          <p>2 commets</p>
        </div>
        <h2>
          Why should boys have all the fun? It's the women who are making
          Ameirca an alcohol-loving contry
        </h2>
        <p id="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis amet
          odio eaque iure ex consequuntur quidem illum quisquam. Omnis
          perferendis deleniti sit quo temporibus vitae magni rerum sint
          atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          exercitationem natus sapiente alias assumenda dolorem ea eligendi eum.
          Possimus dignissimos corrupti repudiandae maiores ducimus quisquam at
          vel nisi expedita amet!
        </p>
        <button className="Learn">
          Learn More
          <span className="arrow">
            <svg
              fill="rgb(183, 128, 255)"
              viewBox="0 0 320 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
            </svg>
          </span>
        </button>
        <div id="Slider" style={{display:`${props.display}`}}>
          <i className="fa-solid fa-arrow-left"></i>
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </Slide>
      <hr />
    </>
  );
};

export default Caregory1;
