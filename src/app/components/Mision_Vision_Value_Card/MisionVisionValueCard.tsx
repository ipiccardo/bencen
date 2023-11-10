'use client'

import React, {useState} from "react";
import Image from "next/image";
import classes from './misionVisionValueCard.module.css';
import { MISION_VISION_VALUES } from '../../utils/constants';

interface Props {
  imageName: string;
  content: string;
}

const MisionVisionValueCard = ({ imageName, content }: Props): JSX.Element => {
  const [hover, setHover] = useState(false);

  return (
    <div 
    className={`${classes.misionVisionValueCard} ${hover ? classes.hover : ""}`}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
      <div className={classes.group}>
        <Image 
          className={classes.image} 
          alt={`${imageName}` + " icon"} 
          src={`/icons/Mision_Vision_Value/${imageName}.png`} 
          width={192} 
          height={192}
        />
        <div className={classes.text}>{imageName.toUpperCase()}</div>
      </div>
    </div>
  );
};

const MisionVisionValueCards = (): JSX.Element => {
  return (
    <ul className={classes.misionVisionValueCards}>
    {Object.keys(MISION_VISION_VALUES).map((key) => {
      const [imageName, content] = MISION_VISION_VALUES[key];
      return (
       <li key={key}>
         <MisionVisionValueCard imageName={imageName} content={content} />
       </li>
       );
    })}
   </ul>
  ) 
};

export default MisionVisionValueCards;