import Image from "next/image";
import styles from "./ServiceImageWithText.module.css";
import Button from "../Ui/Button";
import { infoForCardsItemProps } from "./ServiceImageWithText";

const ServiceImageWithTextItem = ({
  id,
  alignTo,
  imageSrc,
  imageAlt,
  h2Text,
  paragraphText,
}: infoForCardsItemProps) => {
  return (
    <div className={`${styles.serviceImageWithText__item} ${styles[alignTo]}`}>
      <div
        className={`${styles.serviceImageWithText__item__image} ${styles.imageOutside}`}
      >
        <Image alt={imageAlt} src={imageSrc} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.serviceImageWithText__item__info}>
        <h2>{h2Text}</h2>
        <div
          className={`${styles.serviceImageWithText__item__image} ${styles.imageInside}`}
        >
          <Image
            alt={imageAlt}
            src={imageSrc}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p>{paragraphText}</p>
        <Button
          href={"/dashboard/projects"}
          text="SEE ALL PROJECTS"
          classNameContent="padding-10 padding-l-20 padding-r-20"
        />
      </div>
    </div>
  );
};

export default ServiceImageWithTextItem;
