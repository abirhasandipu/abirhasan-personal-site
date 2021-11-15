import React from "react";
import { Link } from "react-router-dom";
//css
import classes from "./sidebar.module.css";
//images
import profilePicture from "../../assets/images/mdabirhasandipu.jpg";
//icon
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Sidebar() {
  return (
    <div className={classes.sidebarBody}>
      {/* Image */}
      <div className={classes.imgDiv}>
        <img className={classes.proPic} src={profilePicture} alt="profile" />
      </div>
      {/* Name */}
      <h4 className={classes.name}>Md. Abir Hasan Dipu</h4>
      {/* Navigation */}

      <div className={classes.navDiv}>
        <ul className={classes.navigationUl}>
          <Link to="/">
            <li>🏠 Home</li>
          </Link>
          <Link to="/projects">
            <li>🖥️ Projects</li>
          </Link>
          <Link to="/blog">
            <li>📝 Blog</li>
          </Link>

          <Link to="/about">
            <li>🧍 About</li>
          </Link>
        </ul>
      </div>

      {/* Social links */}
      <div className={classes.socialDiv}>
        <ul className={classes.socialIconsUl}>
          <li>
            <a
              href="https://github.com/abirhasandipu/"
              target="_blank"
              className={classes.socialLink}
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/deeptoo/" target="_blank">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/MdAbirHasanDip1" target="_blank">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
      {/* Download CV button */}
      <Link className={classes.cvBtn} to="/cv">
        <li>📃 CV</li>
      </Link>
    </div>
  );
}

export default Sidebar;
