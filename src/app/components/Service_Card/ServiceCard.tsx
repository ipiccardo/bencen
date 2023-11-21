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
      className={`${classes.serviceCard}`}

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

  // Configuración del slider
  const sliderSettings = {
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ]
  };


  return (
    <div>
      <div className={classes.showSlider}>
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
      </div>
      <div className={classes.hideSlider}>
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
      </div>
    </div>
  )
};

export default ServiceCards;