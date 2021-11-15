import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//css
import classes from "./cv.module.css";
//components
import Sidebar from "../../Components/sidebar/Sidebar";
//icons

function CV() {
  return (
    <div className={classes.aboutParentDiv}>
      <Sidebar />
      {/* About Body */}
      <div className={classes.aboutBody}>
        <h1>CV</h1>
      </div>
    </div>
  );
}

export default CV;
