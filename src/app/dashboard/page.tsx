import React from "react";
import "../styles/globals.css";
import Footer from "../components/Footer/Footer";
import classes from "./page.module.css";
import { SERVICES } from "../utils/constants";
import { ServiceCard } from "../components/Service_Card/ServiceCard";

const HomePage = () => {
  return (
    <>
      <div className="center">LA HOME</div>
      <Footer />
    </>
  );
};

export default HomePage;
