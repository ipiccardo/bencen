"use client";

import { useState } from "react";
import ProjectSliderCard from "./ProjectSliderCard";
import classes from "./ProjectSliderCard.module.css";

const projects = [
  {
    id: 1,
    imageSrc: "",
    // imageSrc: "/img/project1.jpg",
    projectName: "Proyecto 1.",
    projectYear: "2022",
  },
  {
    id: 2,
    imageSrc: "",
    // imageSrc: "/img/project2.jpg",
    projectName: "Proyecto 2",
    projectYear: "2023",
  },
  {
    id: 3,
    imageSrc: "",
    // imageSrc: "/img/project3.jpg",
    projectName: "Proyecto 3",
    projectYear: "2024",
  },
  // Agrega más proyectos según sea necesario
];

const ProjectSliderContainer: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className={classes.sliderContainer}>
      <button className={classes.arrowButton} onClick={handlePrev}>
        {"<--"}
      </button>
      <div className={classes.slider}>
        {projects.map((project, index) => (
          <ProjectSliderCard
            key={project.id}
            imageSrc={project.imageSrc}
            projectName={project.projectName}
            projectYear={project.projectYear}
            className={index === currentProject ? classes.activeCard : ""}
          />
        ))}
      </div>
      <button className={classes.arrowButton} onClick={handleNext}>
        {"-->"}
      </button>
    </div>
  );
};

export default ProjectSliderContainer;
