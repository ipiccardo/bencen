import classes from "./ServiceImageWithText.module.css";
import ServiceImageWithTextItem from "./ServiceImageWithTextItem";

export type infoForCardsItemProps = {
  id: number;
  alignTo: "left" | "right";
  imageSrc: string;
  imageAlt: string;
  h2Text: string;
  paragraphText: string;
  last: boolean;
};

type infoForCardsContainerProps = infoForCardsItemProps[];

const infoForCards: infoForCardsContainerProps = [
  {
    id: 1,
    alignTo: "left",
    imageSrc: "/img/civil-works.jpg",
    imageAlt: "Civil Works",
    h2Text: "Civil Works",
    paragraphText: `Dedicated to the design, planning, and execution of Civil Engineering
        projects in urban, industrial, and rural settings. Our team of
        specialized professionals is committed to enhancing the efficiency of
        our developments continually, surpassing our clients expectations. We
        craft tailored solutions, integrating various engineering specialties,
        while upholding the highest standards of quality, safety, and
        environmental consciousness. Our projects are meticulously designed
        and executed, striking a delicate balance with their surroundings, not
        only providing solutions but also harmonizing with the environment. In
        the industrial domain, we factor in all client-specific regulations,
        standards, and requirements as fundamental aspects of our planning.`,
    last: false,
  },
  {
    id: 2,
    alignTo: "right",
    imageSrc: "/img/architecture.jpg",
    imageAlt: "Architecture",
    h2Text: "Architecture",
    paragraphText: `We have a dedicated team of professionals focused on the design, planning, and execution of architectural projects, as well as the development, planning, and execution of urban projects.
        We create projects of various scales, building strong relationships with our clients and addressing each of their needs.
        In the realm of urban planning, we design public spaces, green areas, recreational zones, etc., and efficiently develop urban areas, restructure them, and ensure the provision of various services.
        We employ the latest and most efficient technologies in the market, always aiming for maximum resource utilization, streamlined timelines, and minimal environmental impact.`,
    last: false,
  },
  {
    id: 3,
    alignTo: "left",
    imageSrc: "/img/environment.jpg",
    imageAlt: "Environment",
    h2Text: "Environment",
    paragraphText: `We specialize in tailored projects dedicated to environmental care, protection, and conservation. Our services encompass environmental impact assessments, analysis of physical-chemical and biological parameters, and projects focused on renewable energy generation, utilizing solar, wind, and other sources. We advocate for systems to utilize recyclable waste like PET, recovering and reintegrating them as reusable materials.
    We collaborate with strategic partners in academia, leveraging their state-of-the-art laboratories and expertise.
    Our clients receive top-notch service facilitated by our experienced professionals.`,
    last: false,
  },
  {
    id: 4,
    alignTo: "right",
    imageSrc: "/img/special-projects.jpg",
    imageAlt: "Special Projects",
    h2Text: "Special Projects",
    paragraphText: `Often, the challenges we encounter demand interdisciplinary involvement and the collective knowledge of various disciplines. In this business unit, we delve into projects that actively involve multiple specialties. For each project, we assemble a team of professionals with specific skills and knowledge, ensuring the leader team can drive its development, supported by a strong team. This approach guarantees our clients receive the best service and tailored solutions for their needs.`,
    last: true,
  },
];

const ServiceImageWithTextContainer = () => {
  return (
    <>
      <div className={classes.serviceImageWithText__container}>
        {infoForCards.map((card, index, array) => {
          const {
            id,
            alignTo,
            imageSrc,
            imageAlt,
            h2Text,
            paragraphText,
            last,
          } = card;
          return (
            <ServiceImageWithTextItem
              key={new Date().getTime() + index}
              id={id}
              alignTo={alignTo}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              h2Text={h2Text}
              paragraphText={paragraphText}
              last={last}
            />
          );
        })}
      </div>
    </>
  );
};

export default ServiceImageWithTextContainer;
