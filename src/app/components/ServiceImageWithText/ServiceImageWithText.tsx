import styles from "./ServiceImageWithText.module.css";
import ServiceImageWithTextItem from "./ServiceImageWithTextItem";

type ServiceImageWithTextProps = {
  alignTo: string;
};

const ServiceImageWithTextContainer = ({
  alignTo,
}: ServiceImageWithTextProps) => {
  console.log("alignTo", alignTo);
  return (
    <>
      <div className={styles.serviceImageWithText__container}>
        <ServiceImageWithTextItem />
      </div>
    </>
  );
};

export default ServiceImageWithTextContainer;
