import React from "react";

//CSS
import classes from "./projectCard.module.css";

function ProjectCard(props) {
  return (
    <div className={classes.card}>
      <img src={props.projectCardImg} alt="" />
      <h3>{props.title}</h3>
      {/* <p>{props.desc}</p> */}
    </div>
  );
}

export default ProjectCard;
