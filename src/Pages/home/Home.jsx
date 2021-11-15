import React from "react";
import { Link } from "react-router-dom";
//css
import classes from "./home.module.css";
//components and pages
import Sidebar from "../../Components/sidebar/Sidebar";
import HomeCards from "../../Components/homeCards/HomeCards";
//icons
import projectIcon from "../../assets/images/cardIcons/1projects.png";
import skillsIcon from "../../assets/images/cardIcons/2skills.png";
import experienceIcon from "../../assets/images/cardIcons/3experience.png";
import researchIcon from "../../assets/images/cardIcons/4research.png";

function Home() {
  return (
    <>
      {/* <div className={classes.homeParentDiv}>
       
       <div className={classes.homeBody}> */}
      {/* Cards */}
      <div className={classes.cardsContainer}>
        <div className={classes.topCardRow}>
          <Link to="/projects">
            <HomeCards icon={projectIcon} cardTitle={"Projects"} />
          </Link>
          <Link to="/skills">
            <HomeCards icon={skillsIcon} cardTitle={"Skills"} />
          </Link>
        </div>
        <div className={classes.bottomCardRow}>
          <Link to="/experience">
            <HomeCards icon={experienceIcon} cardTitle={"Experience"} />
          </Link>
          <Link to="/interests">
            <HomeCards icon={researchIcon} cardTitle={"Interests"} />
          </Link>
        </div>
        {/* </div>
      </div> */}
      </div>
    </>
  );
}

export default Home;
