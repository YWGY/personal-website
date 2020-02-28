import React from "react";
import "../stylesheets/skill.css";
import Details from "../../en-US.json";

function Skill() {
  return (
    <section id="skill">
      <table className="sline">
        <h1 className="sh1">My Skill</h1>
      </table>
      <div className="scontent">
        <div className="sbox">
          <div className="sbox left">
            <span>Front-End Libraries/Framework:</span>
          </div>
          <div className="sbox right">
            <span>{Details.skill.frontend}</span>
          </div>
        </div>
        <div className="sbox">
          <div className="sbox left">
            <span>Back-End:</span>
          </div>
          <div className="sbox right">
            <span>{Details.skill.backend}</span>
          </div>
        </div>
        <div className="sbox">
          <div className="sbox left">
            <span>Database Management:</span>
          </div>
          <div className="sbox right">
            <span>{Details.skill.frontend}</span>
          </div>
        </div>
        <div className="sbox">
          <div className="sbox left">
            <span>Software & Project Management:</span>
          </div>
          <div className="sbox right">
            <span>{Details.skill.management}</span>
          </div>
        </div>
        <div className="sbox">
          <div className="sbox left">
            <span>Methodologies:</span>
          </div>
          <div className="sbox right">
            <span>{Details.skill.methodologies}</span>
          </div>
        </div>
        <div className="sbox">
          <div className="sbox left">
            <span>Tools:</span>
          </div>
          <div className="sbox right">
            <span>{Details.skill.tools}</span>
          </div>
        </div>
        <div className="sbox final">
          <div className="sbox left">
            <span>Others:</span>
          </div>
          <div className="sbox right">
            <span>{Details.skill.others}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
