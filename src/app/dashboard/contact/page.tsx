"use client";

import React, { useContext, useEffect, useState } from "react";
import ConnectWithUs from "../../components/Contact_Hero/ConnectWithUs";
import ContactCards from "../../components/Contact_Card/ContactCard";
import TabBar from "../../components/Tab_Bar/TabBar";
import classes from "./page.module.css";
import Image from "next/image";
import { store } from "@/app/context/context";

const Contact = () => {
  const [pantallaMediana, setPantallaMediana] = useState(false);
  const [firtAndLastImage, setFirstAndLastImage] = useState({
    width: 1200,
    heigth: 888,
  });
  // const [otherImages, setOtherImages] = useState({ width: 1200, heigth: 960 });
  const context = useContext(store);
  const { language, setLanguage }: any = context;

  const handleResize = () => {
    setPantallaMediana(window.innerWidth < 768);
    const screenWidth = window.innerWidth;

    if (screenWidth > 1200) {
      setPantallaMediana(false);
      setFirstAndLastImage({ width: 1200, heigth: 888 });
      // setOtherImages({ width: 1200, heigth: 960 });
    } else {
      setPantallaMediana(true);
      setFirstAndLastImage({ width: 1200, heigth: 888 });
      // setOtherImages({ width: 1200, heigth: 960 });
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
    <>
      <div className={classes.contactPageContainer}>
        <div className={classes.sectionsContainer}>
          <section>
            <div
              className={`${classes.FirstimageContainer} ${classes.widthImage}`}
            >
              <div className={classes.showHeaderParagraphContainer}>
                <ConnectWithUs />
              </div>
              {/* ESTO QUE SIGUE EN DESKTOP */}
              <div className={classes.firstImageShow}>
                <div className={classes.headerParagraphContainer}>
                  <ConnectWithUs />
                </div>
                <Image
                  width={firtAndLastImage.width}
                  height={firtAndLastImage.heigth}
                  src={"/images/backgrounds/contact/contactBig1440x960.png"}
                  alt={""}
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <ContactCards />
      <TabBar />
    </>
  );
};

export default Contact;
