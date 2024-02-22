import Image from "next/image";
import classes from "./ServiceImageWithText.module.css";
import Button from "../Ui/Button";
import { infoForCardsItemProps } from "./ServiceImageWithText";
import { scrollToId } from "@/app/utils";
import { useScroll } from "@/app/hooks/useScroll";

const ServiceImageWithTextItem = ({
  id,
  alignTo,
  imageSrc,
  imageAlt,
  h2Text,
  paragraphText,
  last,
  buttonText,
}: infoForCardsItemProps) => {
  const scrollear = useScroll((id - 1).toString(), 80);

  return (
    <div
      className={`${classes.serviceImageWithText__item} ${classes[alignTo]} ${
        last ? classes.serviceImageWithText__item__last : ""
      }`}
    >
      <div
        className={`${classes.serviceImageWithText__item__image} ${classes.imageOutside}`}
      >
        <Image alt={imageAlt} src={imageSrc} layout="fill" objectFit="cover" />
      </div>
      <div className={classes.serviceImageWithText__item__info}>
        <h2>{h2Text}</h2>
        <div
          className={`${classes.serviceImageWithText__item__image} ${classes.imageInside}`}
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
          href={`/dashboard/projects#${id - 1}`}
          text={buttonText}
          classNameContent="padding-10 padding-l-20 padding-r-20"
          preventDefault={false}
          onClick={() => scrollear}
        />
      </div>
    </div>
  );
};

export default ServiceImageWithTextItem;
