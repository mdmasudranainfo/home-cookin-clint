import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeServiceSingle from "../HomeServicesSingle/HomeServiceSingle";
// import HomeServiceSingle from "./HomeServicesSingle/HomeServiceSingle";

const HomeServic = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service3")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="">
      <h1 className="text-center font-bold text-5xl my-20">
        Choce Your Favrite Foods
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {foods.map((food) => (
          <HomeServiceSingle key={food._id} food={food}></HomeServiceSingle>
        ))}
      </div>
      <div className="text-center">
        <Link to="/service">
          <button className="btn btn-primary my-6 ">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServic;
