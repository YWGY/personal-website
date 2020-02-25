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
      <div className="section">
        <Home />
      </div>
      <div className="section">
        <Aboutme />
      </div>
      <div className="section">
        <Experience />
      </div>
      <div className="section">
        <Skill />
      </div>
      <div className="section">
        <Project />
      </div>
    </div>
  );
}

export default Content;
