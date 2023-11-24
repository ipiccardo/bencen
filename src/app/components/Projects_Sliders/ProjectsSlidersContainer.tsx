import React, { useContext } from "react";
import ProjectsSliders from "@/app/components/Projects_Sliders/ProjectsSliders";
import { CATEGORIES } from "@/app/utils/constants";
import { store } from "@/app/context/context";
import { languageRendering } from "@/app/utils";
import classes from "./projectsSliders.module.css";

const ProjectsSlidersContainer = () => {
  const context = useContext(store);

  const { language, setLanguage }: any = context;

  const categories = languageRendering(language, CATEGORIES);
  return (
    <div className={classes.projectsSlidersContainer}>
      {categories.map((category: string, index: number) => {
        return (
          <div className={classes.categoryContainer} key={2000 + index}>
            <h2 className={classes.categoryContainer__title}>{category}</h2>
            <ProjectsSliders />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsSlidersContainer;
