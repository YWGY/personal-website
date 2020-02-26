import React from "react";
import Home from "../sections/home";
import Aboutme from "../sections/aboutme";
import Experience from "../sections/experience";
import Project from "../sections/project";
import Skill from "../sections/skill";
import "../stylesheets/content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/myprofile.jpg";

function Content() {
  return (
    <div className="content">
      <div className="section_homebg">
        <Home />
      </div>
      <div className="section_aboutmebg">
        <Aboutme />
      </div>
      <div className="section_experiencebg">
        <Experience />
      </div>
      <div className="section_skillbg">
        <Skill />
      </div>
      <div className="sectionbg_projectbg">
        <Project />
      </div>
    </div>
  );
}

export default Content;
