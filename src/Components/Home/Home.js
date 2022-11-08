import React from "react";
// import { Outlet } from "react-router-dom";
import Bannar from "../Bannar/Bannar";
import Contact from "../Contact/Contact";
import HomeServic from "../HomeService/HomeServic";
import HappyClint from "../SeticFaction/SecisFaction";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <HomeServic></HomeServic>
      <HappyClint></HappyClint>
      <Contact></Contact>
    </div>
  );
};

export default Home;
