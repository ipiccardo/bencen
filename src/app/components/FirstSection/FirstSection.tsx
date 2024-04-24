import React from "react";
import classes from "./firstSection.module.css";
import Image from "next/image";

type FirstSectionProps = {
  firstChild: JSX.Element;
  folderName: string;
  secondChild?: JSX.Element;
  textToTheRight?: boolean;
  moreTranslate?: boolean;
  widthInPx?: any;




};

const FirstSection = ({
  firstChild,
  folderName,
  secondChild,
  textToTheRight = false,
  moreTranslate = false,
  widthInPx,
}: FirstSectionProps) => {




  return (
    <div className={classes.firstSectionContainer}>
      <div className={classes.firstSection}>
        <div
          className={`${classes.text} ${textToTheRight ? classes.textRight : classes.textLeft
            }`}
        >
          {firstChild}
        </div>
        <div
          className={`${classes.backgroundContainer} ${textToTheRight ? classes.backgroundImageTranslated : ""
            }`}
        >
          <Image
            src={`/images/backgrounds/${folderName}/${widthInPx > 900 ? "1" : "1-R"
              }.png`}
            alt={""}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div
            className={`${classes.cards} ${folderName === "about_us"
              ? moreTranslate
                ? classes.withMoreTranslateY
                : classes.withTranslateY
              : ""
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
