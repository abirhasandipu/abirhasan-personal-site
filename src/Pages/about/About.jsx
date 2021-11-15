import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//css
import classes from "./about.module.css";
//components
import Sidebar from "../../Components/sidebar/Sidebar";
//icons

function About() {
  return (
    <div className={classes.aboutParentDiv}>
      <Sidebar />
      {/* About Body */}
      <div className={classes.aboutBody}>
        <div className={classes.aboutIntro}>
          <h1 className={classes.name}>
            <span className={classes.nameAbir}>ABIR</span> HASAN 👨‍💻
          </h1>
          <h4 className={classes.webDev}>Frontend Web Developer</h4>
          <p className={classes.introPara}>
            Hello! 👋 My name is Md. Abir Hasan. I am a Frontend Web Developer
            from Dhaka, Bangladesh. I have studied Computer Science form
            Daffodil International University.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
