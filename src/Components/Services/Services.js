import React, { useEffect, useState } from "react";
// import HomeServiceSingle from "../HomeServicesSingle/HomeServiceSingle";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3">
      {foods.map((food) => (
        <SingleService key={food._id} food={food}></SingleService>
      ))}
    </div>
  );
};

export default Services;
