import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//css
import classes from "./skills.module.css";
//components
import Sidebar from "../../Components/sidebar/Sidebar";
//icons

function Skills() {
  return (
    <div className={classes.skillsParentDiv}>
      {/* Skills Body */}
      <div className={classes.skillsBody}>
        <h3 className={classes.title}>HTML, CSS, JavaScript</h3>
        <ul className={classes.skilllist}>
          <li>👉 DOM</li>
          <li>👉 Lorem dolor sit amet.</li>
          <li>👉 Lorem ipsum amet.</li>
        </ul>
        <hr />

        <h3 className={classes.title}>ReactJs</h3>
        <ul className={classes.skilllist}>
          <li>👉 JSX</li>
          <li>👉 Functional Components</li>
          <li>👉 useState and useEffect</li>
          <li>👉 Styled Components</li>
          <li>👉 Modular CSS</li>
          <li>👉 Fetch data from REST APIs</li>
        </ul>
        <hr />

        <h3 className={classes.title}>NodeJs</h3>
        <ul className={classes.skilllist}>
          <li>👉 Build REST API</li>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Skills;
