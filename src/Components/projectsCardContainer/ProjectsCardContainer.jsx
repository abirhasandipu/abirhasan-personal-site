import React from "react";
//CSS
import classes from "./projectsCardContainer.module.css";

//Images import
import personalsiteimg from "../../assets/images/projectimages/personalsite1.PNG";
import bookmartimg from "../../assets/images/projectimages/bookmart1.png";
import weatherappimg from "../../assets/images/projectimages/weatherapp1.png";
//import ProjectData from "../../assets/projectsdata.json";
import ProjectCard from "../projectCard/ProjectCard";

const ProjectsCardContainer = () => {
  return (
    <div className={classes.projectsRowBody}>
      <h2 className={classes.projectTypeHeading}>Projects</h2>
      <div className={classes.projectsRowContainer}>
        <ProjectCard
          title={"Portfolio Site"}
          desc={"The site you are visiting at the moment is made with ReactJs."}
          projectCardImg={personalsiteimg}
        />
        <ProjectCard
          title={"Book Mart"}
          desc={"The site you are visiting at the moment is made with ReactJs."}
          projectCardImg={bookmartimg}
        />
        <ProjectCard
          title={"Weather web app"}
          desc={"The site you are visiting at the moment is made with ReactJs."}
          projectCardImg={weatherappimg}
        />
      </div>
      <div className={classes.projectsRowContainer}>
        <ProjectCard
          title={"Portfolio Site"}
          desc={"The site you are visiting at the moment is made with ReactJs."}
          projectCardImg={personalsiteimg}
        />
        <ProjectCard
          title={"Weather App"}
          desc={"The site you are visiting at the moment is made with ReactJs."}
          projectCardImg={personalsiteimg}
        />
        <ProjectCard
          title={"Image Gallary"}
          desc={"The site you are visiting at the moment is made with ReactJs."}
          projectCardImg={personalsiteimg}
        />
      </div>
    </div>
  );
};

export default ProjectsCardContainer;
