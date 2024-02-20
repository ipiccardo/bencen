import React, { useEffect, useState } from "react";
import classes from "./projectsSliders.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../Modal/Modal";
import Image from "next/image";

const CustomPrevArrow = (props: any) => (
  <div
    {...props}
    style={{
      ...props.style,
      left: "10px",
      zIndex: 1,
      cursor: "pointer",
    }}
  >
    {"<"}
  </div>
);

const CustomNextArrow = (props: any) => (
  <div
    {...props}
    style={{ ...props.style, right: "30px", zIndex: 1, cursor: "pointer" }}
  >
    {">"}
  </div>
);

const ProjectsSliders = ({ categoryData }: any): any => {
  console.log("category en project sliders", categoryData);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const [activeModalId, setActiveModalId] = useState(null);
  const [projectInModal, setProjectInModal] = useState({
    id: 0,
    title: "",
    year: "",
    description: "",
    location: "",
    src: "",
  });

  const openModal = (projectId: any) => {
    setActiveModalId(projectId);
  };

  const closeModal = () => {
    setActiveModalId(null);
  };

  useEffect(() => {
    setProjectInModal(
      categoryData.find((project: any) => project.id === activeModalId)
    );
  }, [activeModalId, categoryData]);

  return (
    <>
      <div className={classes.cardsContainer}>
        <div className={classes.sliderContainer}>
          <Slider {...sliderSettings}>
            {categoryData.map((project: any, index: number) => {
              const { id, title, year, src } = project;

              return (
                <div
                  key={index + 3000}
                  className={classes.cardContainer}
                  onClick={() => openModal(id)}
                >
                  <div
                    className={classes.backgroundContainer}
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "100%",
                      borderRadius: "16px",
                    }}
                  >
                    <div className={classes.textContainer}>
                      <h2>{title}</h2>
                      <p>{year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <Modal
        isOpen={activeModalId !== null}
        onClose={closeModal}
        title={projectInModal?.title}
      >
        <div
          className={classes.backgroundImageContainer}
          style={{
            position: "relative",
          }}
        >
          <Image
            src={projectInModal?.src}
            alt={projectInModal?.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p
          style={{
            fontSize: "1.2rem",
          }}
        >
          {projectInModal?.description}
        </p>
        <p>
          <b>
            {projectInModal?.location} - {projectInModal?.year}
          </b>
        </p>
      </Modal>
    </>
  );
};

export default ProjectsSliders;
