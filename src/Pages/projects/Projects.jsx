import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//css
import classes from "./projects.module.css";
//components
import Sidebar from "../../Components/sidebar/Sidebar";
import ProjectsCardContainer from "../../Components/projectsCardContainer/ProjectsCardContainer";
//import ProjectCard from "../../Components/projectCard/ProjectCard";
//icons

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
