import React from "react";
import "../stylesheets/aboutme.css";
import Details from "../../details.json";

function Aboutme() {
  return (
    <section id="aboutme">
      <h2>About Me</h2>
      <img src="" alt="myprofile"></img>
      <div className="intro">
        <li>{Details.aboutme.intro1}</li>
        <li>{Details.aboutme.intro2}</li>
        <li>{Details.aboutme.intro3}</li>
        <li>{Details.aboutme.intro4}</li>
        <li>{Details.aboutme.intro5}</li>
      </div>
    </section>
  );
}

export default Aboutme;
