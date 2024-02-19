"use client";

import React, { useEffect, useState } from "react";
import classes from "./firstSection.module.css";
import Image from "next/image";

type FirstSectionProps = {
  firstChild: JSX.Element;
  folderName: string;
  secondChild?: JSX.Element;
  textToTheRight?: boolean;
};

const FirstSection = ({
  firstChild,
  folderName,
  secondChild,
  textToTheRight = false,
}: FirstSectionProps) => {
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
    <div className={classes.firstSectionContainer}>
      <div className={classes.firstSection}>
        <div
          className={`${classes.text} ${
            textToTheRight ? classes.textRight : classes.textLeft
          }`}
        >
          {firstChild}
        </div>
        <div
          className={`${classes.backgroundContainer} ${
            textToTheRight ? classes.backgroundImageTranslated : ""
          }`}
        >
          <Image
            src={`/images/backgrounds/${folderName}/${
              window.innerWidth > 900 ? "1" : "1-R"
            }.png`}
            alt={""}
            layout="fill"
            objectFit="cover"
          />
          <div
            className={`${classes.cards} ${
              folderName === "about_us" ? classes.withTranslate : ""
            }`}
          >
            {secondChild}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
