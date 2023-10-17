'use client'

import React, {useState} from "react";
import Image from "next/image";
import classes from './serviceCard.module.css';
import Button from '../Ui/Button';
import { SERVICES } from '../../utils/constants';

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
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
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
        <Button href="" classNameButton={classes.button} text="FIND OUT MORE"/>
      </div>
    </div>
  );
};

const ServiceCards = (): JSX.Element => {
  return (
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
  ) 
};

export default ServiceCards