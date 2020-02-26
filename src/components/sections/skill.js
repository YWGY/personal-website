import React from "react";
import "../stylesheets/skill.css";

function Skill() {
  return (
    <section id="skill">
      <h1>My Skill</h1>
      <div className="slist">
        <ul className="sul">
          <li>
            <div>
              <span className="stitle">Advanced</span>
              <span className="ssubtitle">a</span>
              <progress className="sprograss" value="100" max="100"></progress>
            </div>
          </li>
          <li>
            <div>
              <span className="stitle">Advanced</span>
              <span className="ssubtitle">b</span>
              <progress className="sprograss" value="100" max="100"></progress>
            </div>
          </li>
          <li>
            <div>
              <span className="stitle">Advanced</span>
              <span className="ssubtitle">c</span>
              <progress className="sprograss" value="90" max="100"></progress>
            </div>
          </li>
          <li>
            <div>
              <span className="stitle">Advanced</span>
              <span className="ssubtitle">d</span>
              <progress className="sprograss" value="80" max="100"></progress>
            </div>
          </li>
          <li>
            <div>
              <span className="stitle">Advanced</span>
              <span className="ssubtitle">f</span>
              <progress className="sprograss" value="80" max="100"></progress>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skill;
