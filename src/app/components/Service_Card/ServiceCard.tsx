'use client'

import React, {useState} from "react";
import Image from "next/image";
import classes from './serviceCard.module.css';
import Button from '../Ui/Button';

interface Props {
  imageName: string;
  header: string;
  content: string;
}

export const ServiceCard = ({ imageName, header, content }: Props): JSX.Element => {
  const [hover, setHover] = useState(false);

  return (
    <div 
    className={`${classes.serviceCard} ${hover ? classes.hover : ""}`}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
      <div className={classes.group}>
        <Image className={classes.image} alt='hi' src={`/icons/${imageName}.png`} width={96} height={96} />
        <div className={classes.text}>
          <div className={classes.header}>{header}</div>
          <p className={classes.content}>{content}</p>
          {hover && <Button />}
        </div>
      </div>
    </div>
  );
};
