import React from "react";
import classes from "./projectsSliders.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const ProjectsSliders = (): any => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    prevArrow: <CustomPrevArrow />, // Personaliza según tus necesidades
    nextArrow: <CustomNextArrow />, // Personaliza según tus necesidades
  };

  return (
    <>
      <div className={classes.cardsContainer}>
        <div className={classes.sliderContainer}>
          <Slider {...sliderSettings}>
            {Array(4)
              .fill(1)
              .map((_, index) => {
                return (
                  <div key={index + 3000} className={classes.cardContainer}>
                    <div className={classes.textContainer}>
                      <h2>PROJECT NAME</h2>
                      <p>Project Year</p>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProjectsSliders;
