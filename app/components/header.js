'use client'
import React from "react";
const Header = () => {
  function m() {
    const nav = document.getElementById("res");
    nav.classList.add("act");
    document.getElementById("bar").style.display = "none";
  }
  function c() {
    const nav = document.getElementById("res");
    nav.classList.remove("act");
    document.getElementById("bar").style.display = "flex";
  }
  return (
    <header>
      <h1>Blooger</h1>
      <div id="res">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Category">Category</a>
          </li>
          <li>
            <a href="#Archive">Archive</a>
          </li>
          <li>
            <a href="#Pages">Pages</a>
          </li>
          <li>
            <a href="#Conact Us">Conact Us</a>
          </li>
          <li>
            <a href="#Order">Order</a>
          </li>
        </ul>
        <div id="icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <i className="fa-solid fa-xmark" onClick={c}></i>
      </div>
      <i id="bar" className="fas fa-outdent" onClick={m}></i>
    </header>
  );
};

export default Header;
