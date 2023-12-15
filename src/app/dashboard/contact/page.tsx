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
      setResolution({
        width: 1440,
        height: Math.floor(window.innerHeight * heightPercentage),
      });
    } else {
      SetHeightPercentage(1 - (1 - window.innerWidth / 1440) / 2);
      setResolution({
        width: Math.floor(window.innerWidth * widthPercentage),
        height: Math.floor(window.innerHeight * heightPercentage),
      });
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
            <div
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Image
                src={`/images/backgrounds/contact/${
                  window.innerWidth > 900 ? "1" : "1-R"
                }.png`}
                alt={""}
                width={Resolution.width > 900 ? Resolution.width : 900}
                height={Resolution.width > 900 ? Resolution.height : 756}
              />
              {/* <div
              className={classes.preTab}
              style={{
                width: Resolution.width * 0.9,
                height: (Resolution.height * 4) / 31,
                marginTop: -(Resolution.height * 4) / 31,
              }}
            ></div> */}
            </div>
            <div className={classes.contactCard}>
              <ContactCards />
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
