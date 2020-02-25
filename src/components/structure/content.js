import React from "react";
import Home from "../sections/home";
import Aboutme from "../sections/aboutme";
import Experience from "../sections/experience";
import Project from "../sections/project";
import Skill from "../sections/skill";
import "../stylesheets/content.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Content() {
  return (
    <div className="content">
      <div className="container">
        <Home />
      </div>
      <div className="section">
        <Aboutme className="section sec" />
        <Experience className="section sec" />
        <Skill className="section sec" />
        <Project className="section sec" />
      </div>
    </div>
  );
}

export default Content;
