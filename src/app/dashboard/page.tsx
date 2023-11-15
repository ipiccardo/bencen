'use client'


import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import ServiceCards from "../components/Service_Card/ServiceCard";
import UnmatchedCards from "../components/Unmatched_Card/UnmatchedCard";
import Hero from "../components/Hero/Hero";
import classes from './page.module.css'
import Header from "../components/Header/Header";
import Image from "next/image";
import Button from "../components/Ui/Button";


const HomePage = () => {

  const [pantallaPequeña, setPantallaPequeña] = useState(window.innerWidth < 768);
  const [firtAndLastImage, setFirstAndLastImage] = useState({ width: 1344, heigth: 888 })
  const [otherImages, setOtherImages] = useState({ width: 1296, heigth: 960 })

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth)

    if (screenWidth >= 1400) {
      setPantallaPequeña(false);
      setFirstAndLastImage({ width: 1344, heigth: 888 });
      setOtherImages({ width: 1296, heigth: 960 })
    } else if (screenWidth >= 941) {
      setPantallaPequeña(false);
      setFirstAndLastImage({ width: 938, heigth: 888 });
      setOtherImages({ width: 900, heigth: 960 })
    } else {
      setPantallaPequeña(true);
    }
  };
  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  return (
    <>
      <div className={classes.homePageContainer}>
        <div className={classes.headerContainer}>
          <Header />
        </div>
        <section className={classes.firstSectionContainer}>
          <div className={`${classes.imageContainer} ${classes.widthImage}`}>
            {!pantallaPequeña &&
              <Image width={firtAndLastImage.width} height={firtAndLastImage.heigth} src={"/images/insideBox.png"} alt={""} />
            }
          </div>
        </section>
        <div className={classes.serviceCardContainer}>
          <ServiceCards />
        </div>
        <section className={classes.secondSectionContainer}>
          <div className={`${classes.imageContainer} ${classes.secondImage}`}>
            {!pantallaPequeña &&
              <Image width={otherImages.width} height={otherImages.heigth} src={"/images/FrameTwoInside.png"} alt={""} />
            }
          </div>
        </section>
        <section className={classes.threeSectionContainer}>
          <div className={`${classes.imageContainer} ${classes.otherImage}`}>
            <div className={classes.containerAbsolute}>
              <div className={classes.unmatchedServicesContainer}>
                <h1>UNMATCHED SERVICES</h1>
                <button>GET FREE QUOTATION</button>
              </div>
              <UnmatchedCards />
            </div>
            {!pantallaPequeña &&
              <Image width={otherImages.width} height={otherImages.heigth} src={"/images/FrameThree.png"} alt={""} />
            }
          </div>
        </section>
        <section className={classes.fourSectionContainer}>
          <div className={`${classes.imageContainer} ${classes.otherImage}`}>
            {!pantallaPequeña &&
              <Image width={otherImages.width} height={720} src={"/images/FrameFour.png"} alt={""} />
            }
          </div>
        </section>
        <section className={classes.fiveSectionContainer}>
          <div className={`${classes.imageContainer} ${classes.otherImage}`}>
            {!pantallaPequeña &&
              <Image width={otherImages.width + 2} height={720} src={"/images/FrameFive.png"} alt={""} />
            }
          </div>
        </section>
        <section className={classes.sixSectionContainers}>
          <div className={`${classes.imageContainer} ${classes.otherImage}`}>
            {!pantallaPequeña &&
              <Image width={otherImages.width} height={720} src={"/images/FrameSix.png"} alt={""} />
            }
          </div>
        </section>
        <section className={classes.SevenSectionContainer}>
          <div className={`${classes.imageContainer} ${classes.otherImage}`}>
            {!pantallaPequeña &&
              <Image width={firtAndLastImage.width} height={firtAndLastImage.heigth} src={"/images/FrameSevenInside.png"} alt={""} />
            }
          </div>
        </section>
        {/* <ServiceCards />
      <UnmatchedCards /> */}
      </div>
    </>
  );
};

export default HomePage;
