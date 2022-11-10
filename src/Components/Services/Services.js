import React, { useEffect, useState } from "react";
import useTitle from "../Hooks/UseTitle";
// import HomeServiceSingle from "../HomeServicesSingle/HomeServiceSingle";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  useTitle("Food");
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://home-cookin-server.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 gird-cols-1 gap-3">
      {foods.map((food) => (
        <SingleService key={food._id} food={food}></SingleService>
      ))}
    </div>
  );
};

export default Services;
