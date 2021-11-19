import React from "react";

//css
import classes from "./projects.module.css";
//components
import Modal from "../../Components/modal/Modal";
import ProjectsCardContainer from "../../Components/projectsCardContainer/ProjectsCardContainer";

function Projects() {
  return (
    // <div className={classes.projectsParentDiv}>

    <div className={classes.projectsBody}>
      <div className={classes.projectsRowContainer}>
        <ProjectsCardContainer />
      </div>
    </div>

    // </div>
  );
}

export default Projects;
