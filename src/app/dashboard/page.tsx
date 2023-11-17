import React from "react";
import "../styles/globals.css";
import BuildingTomorrow from '../components/Home_Hero/BuildingTomorrow';
import ServiceCards from "../components/Service_Card/ServiceCard";
import UnmatchedCards from "../components/Unmatched_Card/UnmatchedCard";
import Hero from "../components/Hero/Hero";

const HomePage = () => {
  return (
    <>
      <Hero path='url(/images/FrameOne.png)' />
      <BuildingTomorrow/>
      {/* <ServiceCards />
      <UnmatchedCards /> */}
    </>
  );
};

export default HomePage;
