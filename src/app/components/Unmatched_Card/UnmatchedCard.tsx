import React from "react";
import Image from "next/image";
import classes from './unmatchedCard.module.css';
import { UNMATCHED_SERVICES } from '../../utils/constants';


interface Props {
  imageName: string;
  header: string;
  content: string;
}

const UnmatchedCard = ({ imageName, header, content }: Props): JSX.Element => {
  return (
    <div className={classes.unmatchedCard}>
      <div className={classes.overlapGroup}>
        <Image
            className={classes.subtract} 
            alt="Subtract" 
            src={"/icons/Unmatched_Services/subtract.svg"}
            width={288} 
            height={208}
        />
        <Image 
          className={classes.image} 
          alt={`${header}`.toLowerCase() + " icon"} 
          src={`/icons/Unmatched_Services/${imageName}.png`} 
          width={80} 
          height={80} 
        />
        <div className={classes.text}>
          <div className={classes.header}>{header}</div>
          <div className={classes.content} dangerouslySetInnerHTML={{ __html: content.split('.').join('.<br />') }}/>
        </div>
      </div>
    </div>
  ) 
};

const UnmatchedCards = (): JSX.Element => {
    return (
        <ul className={classes.unmatchedCards}>
        {Object.keys(UNMATCHED_SERVICES).map((key) => {
          const [imageName, header, content] = UNMATCHED_SERVICES[key];
          return (
           <li key={key}>
             <UnmatchedCard imageName={imageName} header={header} content={content} />
           </li>
           );
        })}
       </ul>
    ) 
  };

export default UnmatchedCards