"use client";

import React, { useEffect, useState } from "react";
import ConnectWithUs from "../../components/Contact_Hero/ConnectWithUs";
import ContactCards from "../../components/Contact_Card/ContactCard";
import TabBar from "../../components/Tab_Bar/TabBar";
import classes from "./page.module.css";
import Image from "next/image";

const Contact = () => {
  const [Resolution, setResolution] = useState({ width: 0, height: 0 });
  const [widthPercentage, SetWidthPercentage] = useState(1);
  const [heightPercentage, SetHeightPercentage] = useState(1);

  const handleResolution = () => {
    // Set dimensions based on a percentage of the screen width and height:
    if (window.innerWidth >= 1440) {
      SetWidthPercentage(1);
    } else {
      SetHeightPercentage(1 - (1 - window.innerWidth / 1440) / 2);
    }

    setResolution({
      width: Math.floor(window.innerWidth * widthPercentage),
      height: Math.floor(window.innerHeight * heightPercentage),
    });
  };

  useEffect(() => {
    handleResolution();
    window.addEventListener("resize", handleResolution);

    return () => {
      window.removeEventListener("resize", handleResolution);
    };
  }, [widthPercentage, heightPercentage]);

  return (
    <>
      <div className={classes.page}>
        <div className={classes.firstSection}>
          <div className={classes.text}>
            <ConnectWithUs />
          </div>
          <div
            className={classes.contactCard}
            style={{ width: Resolution.width * 0.9 }}
          >
            <ContactCards />
          </div>
          <Image
            width={Resolution.width > 900 ? Resolution.width : 900}
            height={Resolution.width > 900 ? Resolution.height : 756}
            src={`/images/backgrounds/contact/${
              window.innerWidth > 900 ? "1" : "1-R"
            }.png`}
            alt={""}
          />
          <div
            className={classes.preTab}
            style={{ width: Resolution.width * 0.9 }}
          ></div>
        </div>
        <div className={classes.secondSection}>
          <section
            className={classes.tab}
            style={{ width: Resolution.width * 0.9 }}
          >
            <TabBar />
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
