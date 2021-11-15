import React from "react";
//css
import classes from "./experience.module.css";
//components
import Sidebar from "../../Components/sidebar/Sidebar";

const Experience = () => {
  return (
    <div className={classes.blogParentDiv}>
      <Sidebar />
      <h1>Experience</h1>
    </div>
  );
};

export default Experience;
