import Image from "next/image";
import styles from "./ServiceImageWithText.module.css";
import Button from "../Ui/Button";

const ServiceImageWithTextItem = () => {
  return (
    <div className={styles.serviceImageWithText__item}>
      <Image
        alt="imagenDeServicio"
        src="/img/civil-works.jpg"
        // src="/img/special-projects.jpg"
        // src="/img/architecture.jpg"
        // src="/img/environment.jpg"
        width={344}
        height={386}
      />
      <div className={styles.serviceImageWithText__item__info}>
        <h2>Civil Works</h2>
        <p>
          Dedicated to the design, planning, and execution of Civil Engineering
          projects in urban, industrial, and rural settings. Our team of
          specialized professionals is committed to enhancing the efficiency of
          our developments continually, surpassing our clients expectations. We
          craft tailored solutions, integrating various engineering specialties,
          while upholding the highest standards of quality, safety, and
          environmental consciousness. Our projects are meticulously designed
          and executed, striking a delicate balance with their surroundings, not
          only providing solutions but also harmonizing with the environment. In
          the industrial domain, we factor in all client-specific regulations,
          standards, and requirements as fundamental aspects of our planning.
        </p>
        <Button
          href={""}
          text="SEE ALL PROJECTS"
          classNameContent="padding-10 padding-l-20 padding-r-20"
        />
      </div>
    </div>
  );
};

export default ServiceImageWithTextItem;
