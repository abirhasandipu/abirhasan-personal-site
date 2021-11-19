import React from "react";

//css
import classes from "./modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.modalBackground}>
      <div className={classes.modalContainer}>
        <div>
          <div className={classes.title}>
            <h2>{props.title}</h2>
          </div>
          <div>
            <img className={classes.image} src={props.projectImage} alt="" />
          </div>
        </div>
        <div className={classes.body}>
          <p>{props.description}</p>
          <br />
          <a className={classes.link} href={props.githubLink} target="_blank">
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
