"use client";

import React from "react";
import ExploreOurPortfolio from "../../components/Projects_Hero/ExploreOurPortfolio";
import ProjectsSlidersContainer from "@/app/components/Projects_Sliders/ProjectsSlidersContainer";

const Projects = () => {
  return (
    <>
      <div>
        <ExploreOurPortfolio />
        <ProjectsSlidersContainer />
      </div>
    </>
  );
};

export default Projects;
