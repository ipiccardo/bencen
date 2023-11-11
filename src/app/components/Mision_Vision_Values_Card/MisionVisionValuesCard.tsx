'use client'

import React, {useState} from "react";
import Image from "next/image";
import classes from './misionVisionValuesCard.module.css';
import { MISION_VISION_VALUES } from '../../utils/constants';

interface Props {
  imageName: string;
  content: string;
}

const MisionVisionValuesCard = ({ imageName, content }: Props): JSX.Element => {
  const [hover, setHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div 
    className={`${classes.misionVisionValuesCard} ${hover ? classes.hover : ""}`}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={handleClick}
    >
      {isClicked ? (
        <div className={classes.group2}>
          <div className={classes.title}>{imageName.toUpperCase()}</div>
          {imageName === "values" ? (
            <div className={classes.content} dangerouslySetInnerHTML={{ __html: content.split('.').join('.<br />') }}/>
          ) : (
            <div className={classes.content} dangerouslySetInnerHTML={{ __html: content.split('.').join('.<br /><br />') }}/>
          )}
        </div>
      ) : (
      <div className={classes.group1}>
        <Image 
          className={classes.image} 
          alt={`${imageName}` + " icon"} 
          src={`/icons/Mision_Vision_Values/${imageName}.png`} 
          width={192} 
          height={192}
        />
        <div className={classes.title}>{imageName.toUpperCase()}</div>
      </div>
      )}
    </div>
  );
};

const MisionVisionValuesCards = (): JSX.Element => {
  return (
    <ul className={classes.misionVisionValuesCards}>
    {Object.keys(MISION_VISION_VALUES).map((key) => {
      const [imageName, content] = MISION_VISION_VALUES[key];
      return (
       <li key={key}>
         <MisionVisionValuesCard imageName={imageName} content={content} />
       </li>
       );
    })}
   </ul>
  ) 
};

export default MisionVisionValuesCards;