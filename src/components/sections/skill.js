import React from "react";
import "../stylesheets/skill.css";
import Details from "../../details.json";

function Skill() {
  return (
    <section id="skill">
      <h1 className="sh1">My Skill</h1>
      <div className="scontent">
        <div className="sbox">
          <div className="sbox left">
            <p>Front-End Libraries/Framework:</p>
          </div>
          <div className="sbox right">
            <p>{Details.skill.frontend}</p>
          </div>
        </div>
        <div className="sbox">
          <div className="sbox left">
            <p>Back-End:</p>
          </div>
          <div className="sbox right">
            <p>{Details.skill.backend}</p>
          </div>
        </div>
        <div className="sbox">
          <div className="sbox left">
            <p>Database Management:</p>
          </div>
          <div className="sbox right">
            <p>{Details.skill.frontend}</p>
          </div>
        </div>
        <div className="sbox">
          <div className="sbox left">
            <p>Software & Project Management:</p>
          </div>
          <div className="sbox right">
            <p>{Details.skill.management}</p>
          </div>
        </div>
        <div className="sbox">
          <div className="sbox left">
            <p>Methodologies:</p>
          </div>
          <div className="sbox right">
            <p>{Details.skill.methodologies}</p>
          </div>
        </div>
        <div className="sbox">
          <div className="sbox left">
            <p>Tools:</p>
          </div>
          <div className="sbox right">
            <p>{Details.skill.tools}</p>
          </div>
        </div>
        <div className="sbox">
          <div className="sbox left">
            <p>Others:</p>
          </div>
          <div className="sbox right">
            <p>{Details.skill.others}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
