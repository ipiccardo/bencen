'use client'


import React, { useEffect, useState, useContext } from "react";
import "../styles/globals.css";
import BuildingTomorrow from '../components/Home_Hero/BuildingTomorrow';
import ServiceCards from "../components/Service_Card/ServiceCard";
import UnmatchedCards from "../components/Unmatched_Card/UnmatchedCard";
import classes from './page.module.css'
import Header from "../components/Header/Header";
import Image from "next/image";
import AboutUsCard from '../components/aboutUs_Card/AboutUsCard'
import ClientCard from "../components/Clients_Card/ClientCard";
import NewsCard from "../components/News_Card/NewsCard";
import Button from "../components/Ui/Button";
import { ABOUT_US, ABOUT_US_BUTTON, UNMATCHED_SERVICES_TITLE, UNMATCHED_SERVICES_BUTTON, PROJECTS, PROJECTS_BUTTON, CONTACT, CONTACT_BUTTON, NEWS } from "../utils/constants"
import { store } from '@/app/context/context';


const HomePage = () => {
  const [pantallaMediana, setPantallaMediana] = useState(false);
  const [firtAndLastImage, setFirstAndLastImage] = useState({ width: 1344, heigth: 888 })
  const [otherImages, setOtherImages] = useState({ width: 1296, heigth: 960 })
  const context = useContext(store)
  const { language, setLanguage }: any = context

  const handleResize = () => {
    setPantallaMediana(window.innerWidth < 768)
    const screenWidth = window.innerWidth;

    if (screenWidth > 1200) {
      setPantallaMediana(false)
      setFirstAndLastImage({ width: 1200, heigth: 888 });
      setOtherImages({ width: 1200, heigth: 960 })
    } else {
      setPantallaMediana(true)
      setFirstAndLastImage({ width: 1200, heigth: 888 });
      setOtherImages({ width: 1200, heigth: 960 })
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
        <div className={classes.firstSectionContainer}>
          <section>
            <div className={`${classes.FirstimageContainer} ${classes.widthImage}`}>
              <div className={classes.firstImageShow}>
                <Image width={firtAndLastImage.width} height={firtAndLastImage.heigth} src={"/images/FrameOneWithoutMark.png"} alt={""} />
              </div>
            </div>
          </section>
          <div className={classes.serviceCardContainer}>
            <ServiceCards />
          </div>
          <section className={classes.secondSectionContainer}>
            <div className={`${classes.imageContainer} ${classes.secondImage}`}>
              <div className={classes.containerAbsolute}>
                <div className={classes.aboutCardContainer}>
                  <AboutUsCard />
                  <div className={classes.aboutUsParagraphContainer}>
                    <h1>{ABOUT_US[language][0]}</h1>
                    <p>{ABOUT_US[language][1]}</p>
                    <p>{ABOUT_US[language][2]}</p>
                    <Button
                      href={""}
                      text={ABOUT_US_BUTTON[language]}
                      classNameContent="padding-20"
                    />
                  </div>
                </div>
              </div>
              <div className={classes.show}>
                <Image width={otherImages.width} height={otherImages.heigth} src={"/images/FrameTwoInside.png"} alt={""} />
              </div>
            </div>
          </section>
          <section className={classes.threeSectionContainer}>
            <div className={`${classes.imageContainer} ${classes.otherImage} ${classes.paddingBottom} ${pantallaMediana && classes.widthOutMarginTop} ${pantallaMediana && classes.widthOutMarginTop}`}>
              <div className={classes.containerAbsolute}>
                <div className={classes.unmatchedServicesContainer}>
                  <div className={classes.unmatchedServicesParagraphContainer}>
                    <h1>{UNMATCHED_SERVICES_TITLE[language]}</h1>
                    <Button
                      href={""}
                      text={UNMATCHED_SERVICES_BUTTON[language]}
                      classNameContent="padding-10"
                    />

                  </div>
                  <UnmatchedCards />
                </div>
              </div>
              <div className={classes.show}>
                <Image width={1200} height={960} src={"/images/FrameThree.png"} alt={""} />
              </div>
            </div>
          </section>
          <section className={classes.fourSectionContainer}>
            <div className={`${classes.imageContainer} ${classes.otherImage}`}>
              <div className={classes.containerAbsolute}>
                <div className={classes.clientCardContainer}>
                  <ClientCard />
                  <div className={classes.clientParagraphContainer}>
                    <h1>{PROJECTS[language][0]}</h1>
                    <p>{PROJECTS[language][1]}</p>
                    <p>{PROJECTS[language][2]}</p>
                    <Button
                      href={""}
                      text={PROJECTS_BUTTON[language]}
                      classNameContent="padding-20"
                    />
                  </div>
                </div>
              </div>
              <div className={classes.show}>
                <Image width={otherImages.width} height={720} src={"/images/FrameFour.png"} alt={""} />
              </div>
            </div>
          </section>
          <section className={classes.fiveSectionContainer}>
            <div className={`${classes.imageContainer} ${classes.otherImage}`}>
              <div className={classes.containerAbsolute}>
                <div className={classes.contactContainer}>
                  <h1>{CONTACT[language][0]}</h1>
                  <p>{CONTACT[language][1]}</p>
                  <p>{CONTACT[language][2]}</p>
                  <div className={classes.buttonContainer}>
                    <Button
                      href={""}
                      text={CONTACT_BUTTON[language][0]}
                      classNameContent="padding-10"
                    />
                    <Button
                      href={""}
                      text={CONTACT_BUTTON[language][1]}
                      classNameContent="padding-10"
                    />
                  </div>
                </div>
              </div>
              <div className={classes.show} >
                <Image width={otherImages.width + 2} height={720} src={"/images/FrameFive.png"} alt={""} />
              </div>
            </div>
          </section>
          <section className={classes.sixSectionContainer}>
            <div className={`${classes.imageContainer} ${classes.otherImage}`}>
              <div className={classes.containerAbsolute}>
                <div className={classes.newsContainer}>
                  <h1>{NEWS[language][0]}</h1>
                  <NewsCard />
                </div>
              </div>
              <div className={classes.show}>
                <Image width={otherImages.width} height={720} src={"/images/FrameSix.png"} alt={""} />
              </div>
            </div>
          </section>
        </div>
      </div >
    </>
  );
};

export default HomePage;
