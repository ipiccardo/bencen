"use client";

import React from "react";
import ExploreOurPortfolio from "../../components/Projects_Hero/ExploreOurPortfolio";
import ProjectsSlidersContainer from "@/app/components/Projects_Sliders/ProjectsSlidersContainer";
import classes from "./page.module.css";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { store } from "@/app/context/context";

const Projects = () => {
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
    <div className={classes.projectsPageContainer}>
      <div className={classes.sectionsContainer}>
        <section>
          <div
            className={`${classes.FirstimageContainer} ${classes.widthImage}`}
          >
            <div className={classes.showHeaderParagraphContainer}>
              <ExploreOurPortfolio />
            </div>
            <div className={classes.firstImageShow}>
              <div className={classes.headerParagraphContainer}>
                <ExploreOurPortfolio />
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
      <ProjectsSlidersContainer />
    </div>
  );
};

export default Projects;
