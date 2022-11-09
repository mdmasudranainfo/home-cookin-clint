import React from "react";
import "./Bannar.css";

import banar1 from "../../Assets/imgage/banar1.webp";
import banar2 from "../../Assets/imgage/banar2.webp";
import banar3 from "../../Assets/imgage/banar3.webp";

const Bannar = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banar1} className="w-full" />
        <div className="absolute hidden md:flex custom-text justify-between   ">
          <div className="">
            <h1 className="text-6xl text-white font-bold ">Thanksgiving</h1>
            <p className="text-4xl text-white">
              Full packages or just what you need. Pick up or delivery.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banar2} className="w-full" />
        <div className="absolute hidden md:flex custom-text justify-between  ">
          <div className="">
            <h1 className="text-6xl text-white font-bold ">
              Mealtime Made Easy
            </h1>
            <p className="text-4xl text-white">
              Family-Friendly, Fresh & Healthy
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banar3} className="w-full" />
        <div className="absolute hidden md:flex custom-text justify-between  ">
          <div className="">
            <h1 className="text-6xl text-white font-bold ">Favrite Item</h1>
            <p className="text-4xl text-white">
              It's the food and groceries you love, delivered
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banar2} className="w-full" />
        <div className="absolute hidden md:flex custom-text justify-between  ">
          <div className="">
            <h1 className="text-6xl text-white font-bold ">Thanksgiving</h1>
            <p className="text-4xl text-white">
              Full packages or just what you need. Pick up or delivery.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
