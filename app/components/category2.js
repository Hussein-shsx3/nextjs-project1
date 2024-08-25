"use client";
import React from "react";
import Slide from "react-reveal/Slide";
const Category2 = () => {
  return (
    <div id="RightC">
      <Slide bottom>
        <div id="RightC__1">
          <h2>Category</h2>
          <p>
            Softwore<span>(05)</span>
          </p>
          <p>
            Technology<span>(02)</span>
          </p>
          <p>
            Lifestyle<span>(07)</span>
          </p>
          <p>
            Shopping<span>(01)</span>
          </p>
          <p>
            Food<span>(08)</span>
          </p>
        </div>
      </Slide>
      <div id="RightC__2">
        <Slide bottom>
          <h2>Popular Post</h2>
          <div id="RightC__2_1">
            <div id="RightC__img">
              <img src="./img/m-blog-1.jpg" alt="" />
            </div>
            <div id="RightC__img__1">
              <i className="fa-solid fa-calendar-days"></i>
              <p>January 14,2023</p>
              <p>2 commets</p>
            </div>
            <h3>New data recording system to better analyse read accidents</h3>
          </div>
          <div id="RightC__2_1">
            <div id="RightC__img">
              <img src="./img/m-blog-2.jpg" alt="" />
            </div>
            <div id="RightC__img__1">
              <i className="fa-solid fa-calendar-days"></i>
              <p>January 14,2023</p>
              <p>2 commets</p>
            </div>
            <h3>New data recording system to better analyse read accidents</h3>
          </div>
          <div id="RightC__2_1">
            <div id="RightC__img">
              <img src="./img/m-blog-3.jpg" alt="" />
            </div>
            <div id="RightC__img__1">
              <i className="fa-solid fa-calendar-days"></i>
              <p>January 14,2023</p>
              <p>2 commets</p>
            </div>
            <h3>New data recording system to better analyse read accidents</h3>
          </div>
          <div id="RightC__2_1">
            <div id="RightC__img">
              <img src="./img/m-blog-4.jpg" alt="" />
            </div>
            <div id="RightC__img__1">
              <i className="fa-solid fa-calendar-days"></i>
              <p>January 14,2023</p>
              <p>2 commets</p>
            </div>
            <h3>New data recording system to better analyse read accidents</h3>
          </div>
          <div id="RightC__2_1">
            <div id="RightC__img">
              <img src="./img/m-blog-5.jpg" alt="" />
            </div>
            <div id="RightC__img__1">
              <i className="fa-solid fa-calendar-days"></i>
              <p>January 14,2023</p>
              <p>2 commets</p>
            </div>
            <h3>New data recording system to better analyse read accidents</h3>
          </div>
        </Slide>
      </div>
      <div id="RightC__3">
        <Slide bottom>
          <h2>Newsletter</h2>
          <input type="text" placeholder="Email" />
          <button>Subscribe</button>
        </Slide>
      </div>
      <div id="RightC__4">
        <Slide bottom>
          <h2>Popular Tage</h2>
          <div id="buttons">
            <button>Software</button>
            <button>Technology</button>
            <button>Travel</button>
            <button>Illustration</button>
            <button>Desgin</button>
            <button>Lifestyle</button>
            <button>Love</button>
            <button>Project</button>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Category2;
