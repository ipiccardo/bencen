import React from "react";
import Image from "next/image";
import classes from './serviceCard.module.css';

interface Props {
  imageName: string;
  header: string;
  content: string;
}

export const ServiceCard = ({ imageName, header, content }: Props): JSX.Element => {
  return (
    <div className={classes.serviceCard}>
      <div className={classes.group}>
        <Image className={classes.image} alt="Excavator" src={`/icons/${imageName}.png`} width={96} height={96} />
        <div className={classes.text}>
          <div className={classes.header}>{header}</div>
          <p className={classes.content}>{content}</p>
        </div>
      </div>
    </div>
  );
};
