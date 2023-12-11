"use client";

import UnlockingPossibilities from "../../components/Services_Hero/UnlockingPossibilites";
import ServiceImageWithText from "@/app/components/ServiceImageWithText/ServiceImageWithText";
import ServiceCards from "@/app/components/Service_Card/ServiceCard";
import classes from "./page.module.css";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { store } from "@/app/context/context";

const Services = () => {
  const [pantallaMediana, setPantallaMediana] = useState(false);
  const [firtAndLastImage, setFirstAndLastImage] = useState({
    width: 1200,
    heigth: 888,
  });
  const [otherImages, setOtherImages] = useState({ width: 1200, heigth: 960 });
  const context = useContext(store);
  const { language, setLanguage }: any = context;

  const handleResize = () => {
    setPantallaMediana(window.innerWidth < 768);
    const screenWidth = window.innerWidth;

    if (screenWidth > 1200) {
      setPantallaMediana(false);
      setFirstAndLastImage({ width: 1200, heigth: 888 });
      setOtherImages({ width: 1200, heigth: 960 });
    } else {
      setPantallaMediana(true);
      setFirstAndLastImage({ width: 1200, heigth: 888 });
      setOtherImages({ width: 1200, heigth: 960 });
    }
  };
  //Hace Hook de Windows Resize
  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={classes.servicesPageContainer}>
      <div className={classes.sectionsContainer}>
        <section>
          <div
            className={`${classes.FirstimageContainer} ${classes.widthImage}`}
          >
            <div className={classes.showHeaderParagraphContainer}>
              <UnlockingPossibilities />
            </div>
            <div className={classes.firstImageShow}>
              <div className={classes.headerParagraphContainer}>
                <UnlockingPossibilities />
              </div>
              <Image
                width={firtAndLastImage.width}
                height={firtAndLastImage.heigth}
                src={"/images/FrameOneWithoutMark.png"}
                alt={""}
              />
            </div>
          </div>
        </section>
      </div>
      <ServiceCards />
      <ServiceImageWithText />
    </div>
  );
};

export default Services;
