'use client'

import React, { useContext } from "react";
import Image from "next/image";
import classes from './contactCard.module.css';
import { CONTACT_CARD } from '../../utils/constants';
import Icon from "../Icon/Icon";
import { store } from '@/app/context/context';

interface Props {
  imageName: string;
  header: string;
  content: string;
}

const ContactCard = ({ imageName, header, content }: Props): JSX.Element => {
  return (
    <div className={classes.contactCard}>
      <div className={classes.group}>
        <div className={classes.imageGroup}>
          <Image
              className={classes.image} 
              alt={`${header}`.toLowerCase()}
              src={`/icons/Contact/${imageName}.svg`}
              width={96} 
              height={96}
          />
        </div>
        <div className={classes.text}>
          <div className={classes.header}>{header}</div>
          {content ? (
            <pre className={classes.content}>{content}</pre>
          ) : (
            <div className={classes.footer__icons}>
              <Icon name="facebook" size={20} />
              <Icon name="instagram" size={20} />
              <Icon name="linkedin" size={20} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ContactCards = (): JSX.Element => {
  const context = useContext(store)
  const { language, setLanguage }: any = context

  return (
    <ul className={classes.contactCards}>
    {Object.keys(CONTACT_CARD[language]).map((key) => {
      const [imageName, header, content] = CONTACT_CARD[language][key];
      return (
       <li key={key}>
         <ContactCard imageName={imageName} header={header} content={content} />
       </li>
       );
    })}
   </ul>
  ) 
};

export default ContactCards