"use client";

import React from "react";
import ExploreOurPortfolio from "../../components/Projects_Hero/ExploreOurPortfolio";
import ProjectsSliders from "@/app/components/Projects_Sliders/ProjectsSliders";

const Projects = () => {
  return (
    <>
      <div style={{ marginTop: "50px" }}></div>
      <div>
        {/* <ExploreOurPortfolio /> */}
        <ProjectsSliders />
      </div>
      <div style={{ marginBottom: "100px" }}></div>
    </>
  );
};

export default Projects;
