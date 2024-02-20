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

const ProjectsSliders = ({ categoryData }): any => {
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

  return (
    <>
      <div className={classes.cardsContainer}>
        <div className={classes.sliderContainer}>
          <Slider {...sliderSettings}>
            {categoryData.map((project: any, index: number) => {
              const { title, year, description, src } = project;
              console.log(src);
              return (
                <div key={index + 3000} className={classes.cardContainer}>
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
    </>
  );
};

export default ProjectsSliders;
