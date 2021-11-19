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
      {/* About Body */}
      <div className={classes.aboutBody}>
        <h2>Md. Abir Hasan Dipu</h2>
        <div>
          <p>Email: mdabirhasandipu@gmail.com</p>
          <p>Phone: +8801743370662, +8801625228300</p>
        </div>
        <div>
          <a href="" target="_blank">
            GitHub |
          </a>
          <a href="" target="_blank">
            | LinkedIn |
          </a>
          <a href="" target="_blank">
            | Personal Site |
          </a>
          <a href="" target="_blank">
            | Dribbble
          </a>
        </div>
        <div>
          <p>Address: House 06, Road 11, Nikunja 2, Khilkhet, Dhaka</p>
        </div>
        <div>
          <h4>Professional Summary</h4>
          <hr />
          <p>
            I am a Frontend Web Developer working with ReactJs and other
            frameworks. I am passionate about building beautiful web
            applications. I also like to work as a designer.
          </p>
        </div>
        <hr />
        <div>
          <h4>Skills</h4>
          <ul>
            <li>
              JavaScript, CSS, BootStrap ReactJs (functional components, props,
              hooks, Rest APIs, context)
            </li>
            <li>NodeJs (Rest APIs, CRUD, MVC), PHP (OOP),</li>
            <li>UX/UI design (Photoshop, Illustrator, Figma</li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default CV;
