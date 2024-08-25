"use client";
import React from "react";
import Caregory1 from "./category1";
import Category2 from "./category2";
const Category = () => {
  return (
    <div id="Category">
      <div id="Category__1">
        <Caregory1 img="./img/blog1.png" display="none"/>
        <Caregory1 img="./img/blog2.png" display="none"/>
        <Caregory1 img="./img/blog3.png" display="none"/>
        <Caregory1 img="./img/blog4.png" display="flex"/>
      </div>
      <div id="Category__2">
        <Category2 />
      </div>
    </div>
  );
};

export default Category;
