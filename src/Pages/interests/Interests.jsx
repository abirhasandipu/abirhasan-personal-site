import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//css
import classes from "./interests.module.css";
//components
import Sidebar from "../../Components/sidebar/Sidebar";
//icons

function About() {
  return (
    <div className={classes.aboutParentDiv}>
      {/* About Body */}
      <div className={classes.aboutBody}>
        <h1>Interests</h1>
      </div>
    </div>
  );
}

export default About;
