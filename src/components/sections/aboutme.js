import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "../stylesheets/aboutme.css";
import Details from "../../details.json";

function Aboutme() {
  return (
    <section className="aboutme">
      <h2>About Me</h2>
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
