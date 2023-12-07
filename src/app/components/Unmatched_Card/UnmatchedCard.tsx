import React, {useState, useEffect, useContext} from "react";
import Image from "next/image";
import classes from './unmatchedCard.module.css';
import { UNMATCHED_SERVICES } from '../../utils/constants';
import { store } from '@/app/context/context';

interface Props {
  imageName: string;
  header: string;
  content: string;
}

const UnmatchedCard = ({ imageName, header, content }: Props): JSX.Element => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1440) {
      setWidth(360);
    } else {
      setWidth(288);
    }
  }, [window.innerWidth]);

  return (
    <div className={classes.unmatchedCard} style={{width: `${width}px`, height: `${width * 5/6}px`}}>
      <div className={classes.overlapGroup}>
        <Image
            className={classes.subtract} 
            alt="Subtract" 
            src={"/icons/Unmatched_Services/subtract.svg"}
            width={width} 
            height={width * 13/18}
        />
        <Image 
          className={classes.image} 
          alt={`${header}`.toLowerCase() + " icon"} 
          src={`/icons/Unmatched_Services/${imageName}.png`} 
          width={width * 5/18} 
          height={width * 5/18} 
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
  const { language }: any = useContext(store)

  return (
      <ul className={classes.unmatchedCards}>
      {Object.keys(UNMATCHED_SERVICES[language]).map((key) => {
        const [imageName, header, content] = UNMATCHED_SERVICES[language][key];
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