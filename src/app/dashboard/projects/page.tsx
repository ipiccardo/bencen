import ProjectSliderContainer from "@/app/components/ProjectSlider/ProjectSliderContainer";
import React from "react";
import classes from "./page.module.css";
import ExploreOurPortfolio from "../../components/Projects_Hero/ExploreOurPortfolio";

const Projects = () => {
  return (
    <>
      <div className="center">PROJECTS</div>
      <ProjectSliderContainer />
      <div>
        <ExploreOurPortfolio />
      </div>
    </>
  );
};

export default Projects;
