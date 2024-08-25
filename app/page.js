import React from "react";
import Homecomp from "./components/homecomp";
import Home from "./components/home";
import Category from "./components/category";
import Footer from "./components/footer";
const Page = () => {
  return (
    <div id="Home">
      <Homecomp />
      <Home />
      <Category />
      <Footer />
    </div>
  );
};

export default Page;
