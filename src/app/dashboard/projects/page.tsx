"use client";

import React from "react";
import ExploreOurPortfolio from "../../components/Projects_Hero/ExploreOurPortfolio";
import ProjectsSlidersContainer from "@/app/components/Projects_Sliders/ProjectsSlidersContainer";
import FirstSection from "@/app/components/FirstSection/FirstSection";

const Projects = () => {
  return (
    <>
      <FirstSection
        firstChild={<ExploreOurPortfolio />}
        folderName="projects"
      />
      <ProjectsSlidersContainer />
    </>
  );
};

export default Projects;
