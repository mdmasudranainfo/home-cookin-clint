import React from "react";
// import { Outlet } from "react-router-dom";
import Bannar from "../Bannar/Bannar";
import Contact from "../Contact/Contact";
import HomeServic from "../HomeService/HomeServic";
import useTitle from "../Hooks/UseTitle";
import HappyClint from "../SeticFaction/SecisFaction";

const Home = () => {
  useTitle("");
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
