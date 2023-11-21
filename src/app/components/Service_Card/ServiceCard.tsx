'use client'

import React, { useState } from "react";
import Image from "next/image";
import classes from './serviceCard.module.css';
import Button from '../Ui/Button';
import { SERVICES } from '../../utils/constants';
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

  return (
    <div
      className={`${classes.serviceCard} ${hover ? classes.hover : ""}`}
    // onMouseEnter={() => setHover(true)}
    // onMouseLeave={() => setHover(false)}
    >
      <div className={classes.group}>
        <Image
          className={classes.image}
          alt={`${header}`.toLowerCase() + " icon"}
          src={`/icons/Services/${hover ? imageName + "_hover" : imageName}.png`}
          width={96}
          height={96}
        />
        <div className={classes.text}>
          <div className={classes.header}>{header}</div>
          <div className={classes.content}>{content}</div>
        </div>
        <Button href="" classNameButton={classes.button} text="FIND OUT MORE" />
      </div>
    </div>
  );
};

const ServiceCards = (): JSX.Element => {

  const isMobile = window.innerWidth < 1000;

  // Configuración del slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
  };


  return (
    <div>
      {isMobile ? (
        <div className={classes.sliderContainer}>
          <Slider {...sliderSettings}>
            {Object.keys(SERVICES).map((key) => {
              const [imageName, header, content] = SERVICES[key];
              return (
                <div key={key}>
                  <ServiceCard imageName={imageName} header={header} content={content} />
                </div>
              );
            })}
          </Slider>
        </div>
      ) : (
        <ul className={classes.serviceCards}>
          {Object.keys(SERVICES).map((key) => {
            const [imageName, header, content] = SERVICES[key];
            return (
              <li key={key}>
                <ServiceCard imageName={imageName} header={header} content={content} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  )
};

export default ServiceCards;