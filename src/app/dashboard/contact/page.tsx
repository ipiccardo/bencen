"use client";

import React, { useEffect, useState } from "react";
import ConnectWithUs from "../../components/Contact_Hero/ConnectWithUs";
import ContactCards from "../../components/Contact_Card/ContactCard";
import TabBar from "../../components/Tab_Bar/TabBar";
import classes from "./page.module.css";
import Image from "next/image";

const Contact = () => {
  // const [Resolution, setResolution] = useState({ width: 0, height: 0 });
  const [widthPercentage, SetWidthPercentage] = useState(1);
  const [heightPercentage, SetHeightPercentage] = useState(1);

  const handleResolution = () => {
    // Set dimensions based on a percentage of the screen width and height:
    if (window.innerWidth >= 1440) {
      SetWidthPercentage(1);
    } else {
      SetHeightPercentage(1 - (1 - window.innerWidth / 1440) / 2);
    }
  };

  useEffect(() => {
    handleResolution();
    window.addEventListener("resize", handleResolution);

    return () => {
      window.removeEventListener("resize", handleResolution);
    };
  }, []);

  return (
    <>
      <div className={classes.page}>
        <div className={classes.firstSectionContainer}>
          <div className={classes.firstSection}>
            <div className={classes.text}>
              <ConnectWithUs />
            </div>
            <div className={classes.backgroundContainer}>
              <Image
                src={`/images/backgrounds/contact/${
                  window.innerWidth > 900 ? "5" : "5-R"
                }.png`}
                alt={""}
                layout="fill"
                objectFit="cover"
              />
              <div className={classes.contactCard}>
                <ContactCards />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.secondSection}>
          <section className={classes.tab}>
            <TabBar />
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
