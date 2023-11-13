import React from "react";
import "../styles/globals.css";
import ServiceCards from "../components/Service_Card/ServiceCard";
import UnmatchedCards from "../components/Unmatched_Card/UnmatchedCard";
import Hero from "../components/Hero/Hero";
import classes from './page.module.css'
import Header from "../components/Header/Header";
import Image from "next/image";


const HomePage = () => {
  return (
    <>
      <div className={classes.homePageContainer}>
        <div className={classes.headerContainer}>
          <Header />
        </div>
        <section className={classes.firstSectionContainer}>
          <div className={classes.imageContainer}>
            <Image width={1344} height={888} src={"/images/insideBox.png"} alt={""} />
          </div>
        </section>
        <div className={classes.serviceCardContainer}>
          <ServiceCards />
        </div>
        <section className={classes.secondSectionContainer}>
          <div className={`${classes.imageContainer} ${classes.secondImage}`}>
            <Image width={1296} height={960} src={"/images/FrameTwoInside.png"} alt={""} />
          </div>
        </section>
        {/* <ServiceCards />
      <UnmatchedCards /> */}
      </div>
    </>
  );
};

export default HomePage;
