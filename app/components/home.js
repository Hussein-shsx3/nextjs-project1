"use client";
import React from "react";
import Card from "./card";
import Slide from "react-reveal/Slide";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div id="Cohome">
      <div id="Swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide left>
              <Card img="./img/post-1.jpg" />
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide bottom>
              <Card img="./img/post-2.jpg" />
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide right>
              <Card img="./img/post-3.jpg" />
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide bottom>
              <Card img="./img/post-4.png" />
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide bottom>
              <Card img="./img/post-5.png" />
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide bottom>
              <Card img="./img/post-6.png" />
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide bottom>
              <Card img="./img/post-7.jpg" />
            </Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide bottom>
              <Card img="./img/post-8.jpg" />
            </Slide>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
