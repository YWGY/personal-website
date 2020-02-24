import React from "react";
import { Button } from "react-bootstrap";
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
        <h1>Hello, my name is Julie Yang</h1>
        {/* div字体这里搞成动态的 */}
        <h2>A Web Developer</h2>
        <div className="container buttons">
          <div className="container buttons b1">
            <Button variant="secondary" size="lg" active>
              Contact me
            </Button>
          </div>
          <div className="container buttons b2">
            <Button variant="secondary" size="lg" active>
              Enter my blog
            </Button>
          </div>
        </div>
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
