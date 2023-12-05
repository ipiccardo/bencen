"use client";

import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import classes from "./serviceCard.module.css";
import Button from "../Ui/Button";
import { SERVICES, SERVICES_BUTTON } from "../../utils/constants";
import { store } from "@/app/context/context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  imageName: string;
  header: string;
  content: string;
}

const ServiceCard = ({ imageName, header, content }: Props): JSX.Element => {
  const [hover, setHover] = useState(false);
  const { language }: any = useContext(store);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1440) {
      setWidth(280);
    } else {
      setWidth(240);
    }
  }, [window.innerWidth]);

  return (
    <div
      className={classes.serviceCard} 
      style={{width: `${width}px`, height: hover && window.innerWidth > 1100 ? `${width * 399/320}px` : `${width}px`}}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={classes.group}>
        <div className={classes.imageGroup}>
          <Image
            className={classes.image}
            alt={`${header}`.toLowerCase() + " icon"}
            src={`/icons/Services/${hover ? imageName + "_hover" : imageName}.png`}
            width={96}
            height={96}
          />
        </div>
        <div className={classes.text} style={{width: `${width * 13/15}px`}}>
          <div className={classes.header}>{header}</div>
          <div className={classes.content}>{content}</div>
        </div>
        <Button
          href=""
          classNameButton={classes.button}
          text={SERVICES_BUTTON[language]}
        />
      </div>
    </div>
  );
};

const ServiceCardSlider = (): JSX.Element => {
  const { language }: any = useContext(store);
  const sliderSettings = {
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
            {Object.keys(SERVICES[language]).map((key) => {
              const [imageName, header, content] = SERVICES[language][key];
              return (
                <div key={key}>
                  <ServiceCard
                    imageName={imageName}
                    header={header}
                    content={content}
                  />
                </div>
              );
            })}
    </Slider>
  );
}

const ServiceCards = (): JSX.Element => {
  const { language }: any = useContext(store);

  const renderServiceCards = () => {
    return Object.keys(SERVICES[language]).map((key) => {
      const [imageName, header, content] = SERVICES[language][key];
      return (
        <li key={key}>
          <ServiceCard
            imageName={imageName}
            header={header}
            content={content}
          />
        </li>
      );
    })};

  return (
    <>
      {window.innerWidth > 1100 ? 
        (
          <ul className={classes.serviceCards}>
            {renderServiceCards()}
          </ul>
        ) : (
          <div className={`${classes.showSlider} serviceCardSliderContainer`}>
            <div className={classes.sliderContainer}>
              <ServiceCardSlider/>
            </div>
          </div>
        )}
    </>
  ) 
};
  
export default ServiceCards;
