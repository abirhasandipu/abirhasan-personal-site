import React from "react";
import { useState } from "react";
//CSS
import classes from "./projectsCardContainer.module.css";
//components
import Modal from "../../Components/modal/Modal";
//Images import
import personalsiteimg from "../../assets/images/projectimages/personalsite1.PNG";
import bookmartimg from "../../assets/images/projectimages/bookmart1.png";
import weatherappimg from "../../assets/images/projectimages/weatherapp1.png";
import ProjectCard from "../projectCard/ProjectCard";

const ProjectsCardContainer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectImage, setProjectImage] = useState();
  const [githubLink, setGithubLink] = useState("");

  return (
    <div className={classes.projectsRowBody}>
      <h2 className={classes.projectTypeHeading}>Projects</h2>
      <div className={classes.projectsRowContainer}>
        <div
          onClick={() => {
            setModalIsOpen(true);
            setTitle("Portfolio Site");
            setDescription(
              "The site you are visiting at the moment is made with ReactJs."
            );
            setProjectImage(personalsiteimg);
            setGithubLink(
              "https://github.com/abirhasandipu/abirhasan-personal-site"
            );
          }}
        >
          <ProjectCard
            title={"Portfolio Site"}
            desc={
              "The site you are visiting at the moment is made with ReactJs."
            }
            projectCardImg={personalsiteimg}
          />
        </div>

        <div
          onClick={() => {
            setModalIsOpen(true);
            setTitle("Book Mart");
            setDescription(
              "This website was developed with raw PHP and jQuery."
            );
            setProjectImage(bookmartimg);
            setGithubLink("https://github.com/abirhasandipu/PHP");
          }}
        >
          <ProjectCard
            title={"Book Mart"}
            desc={
              "The site you are visiting at the moment is made with ReactJs."
            }
            projectCardImg={bookmartimg}
          />
        </div>
        <div
          onClick={() => {
            setModalIsOpen(true);
            setTitle("Weather App (Web)");
            setDescription(
              "This is a React app using a public REST API to get weather data."
            );
            setProjectImage(weatherappimg);
            setGithubLink("https://github.com/abirhasandipu/react-weatherApp");
          }}
        >
          <ProjectCard
            title={"Weather web app"}
            desc={
              "The site you are visiting at the moment is made with ReactJs."
            }
            projectCardImg={weatherappimg}
          />
        </div>
      </div>
      {modalIsOpen && (
        <Modal
          title={title}
          description={description}
          projectImage={projectImage}
          githubLink={githubLink}
        />
      )}
    </div>
  );
};

export default ProjectsCardContainer;
