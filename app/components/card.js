"use client";
import React from "react";
const Card = (props) => {
  return (
    <div id="Card">
      <img src={props.img} alt="" />
      <h2>London Fashion week's continued the evolution</h2>
      <button className="button">Fashion</button>
      <h4>2 minutes</h4>
    </div>
  );
};

export default Card;
