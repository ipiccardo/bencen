import React from "react";
import Image from "next/image";
import classes from './contactCard.module.css';
import { CONTACT } from '../../utils/constants';
import Icon from "../Icon/Icon";

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
              alt={`${header}`.toLowerCase() + " icon"}
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
  return (
    <ul className={classes.contactCards}>
    {Object.keys(CONTACT).map((key) => {
      const [imageName, header, content] = CONTACT[key];
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