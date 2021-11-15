import React from "react";
import classes from "./homeCards.module.css";

function HomeCards(props) {
  return (
    <div className={classes.card}>
      <img className={classes.icons} src={props.icon} alt="icon" />
      <h1>{props.cardTitle}</h1>
    </div>
  );
}

export default HomeCards;
