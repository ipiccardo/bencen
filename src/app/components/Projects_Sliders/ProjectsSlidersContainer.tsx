import React, { useContext } from "react";
import ProjectsSliders from "@/app/components/Projects_Sliders/ProjectsSliders";
import { CATEGORIES_WITH_DATA } from "@/app/utils/constants";
import { store } from "@/app/context/context";
import { languageRendering } from "@/app/utils";
import classes from "./projectsSliders.module.css";

const ProjectsSlidersContainer = () => {
  const context = useContext(store);

  const { language, setLanguage }: any = context;

  // const categories = languageRendering(language, CATEGORIES);

  console.log("CATEGORIES_WITH_DATA", CATEGORIES_WITH_DATA);

  return (
    <div className={classes.projectsSlidersContainer}>
      {CATEGORIES_WITH_DATA.map((category: any, index: number) => {
        return (
          <div className={classes.categoryContainer} key={2000 + index}>
            <h2 className={classes.categoryContainer__title}>
              {category[language].category}
            </h2>
            <ProjectsSliders category={category[language].data} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsSlidersContainer;
