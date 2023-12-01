"use client";

import React, { useEffect, useState } from "react";
import ConnectWithUs from "../../components/Contact_Hero/ConnectWithUs";
import ContactCards from "../../components/Contact_Card/ContactCard";
import TabBar from "../../components/Tab_Bar/TabBar";
import classes from "./page.module.css";
import Image from "next/image";

const Contact = () => {
  const [mediumScreen, setMediumScreen] = useState(false);
  const [Resolution, setResolution] = useState({ width: 0, heigth: 0,});
  const [widthPercentage, SetWidthPercentage] = useState(1);
  const [heightPercentage, SetHeightPercentage] = useState(1);
  
  const handleResize = () => {
    // Set dimensions based on a percentage of the screen width and height:
    if (window.innerWidth >= 1440){
      SetWidthPercentage(1);
      SetHeightPercentage(1);
    } else if (window.innerWidth > 1000) {
      SetWidthPercentage(1);
      SetHeightPercentage(1 - (1- window.innerWidth/1440)/2);
    }

    setResolution({ 
      width: Math.floor(window.innerWidth * widthPercentage), 
      heigth: Math.floor(window.innerHeight * heightPercentage)
    });
  };
  
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthPercentage, heightPercentage]);

  return (
    <>
      <div className={classes.page}>
        <div className={classes.firstSection}>
          <section>
            {/*<div className={classes.FirstimageContainer}>*/}
              <div className={classes.showHeaderParagraphContainer}>
                <ConnectWithUs />
              </div>
              {/* DESKTOP FOLLOWS */}
              <div className={classes.firstImageShow}>
                <div className={classes.text} style={{ maxWidth: Resolution.width * 91/360, left: 15 + "%" }} >
                  <ConnectWithUs />
                </div>
                <Image
                  width={Resolution.width}
                  height={Resolution.heigth}
                  src={"/images/backgrounds/contact/FrameOne.png"}
                  alt={""}
                />
              </div>
            {/*</div>*/}
          </section>
          <div className={classes.contactCard} style={{ width: Resolution.width * 0.9 }}>
            <ContactCards />
          </div>
          <div className={classes.preTab} style={{ width: Resolution.width * 0.9 }}></div>
        </div>
        <div className={classes.secondSection}>
          <section className={classes.tab} style={{ width: Resolution.width * 0.9 }}>
            <TabBar />
          </section>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
