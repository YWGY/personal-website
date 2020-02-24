import React from "react";
import moment from "moment";
import Details from "../../details.json";
import "../stylesheets/footer.css";

function Footer() {
  const currentTime = moment().format("MMMM Do YYYY");
  return (
    <footer className="footer">
      <div className="curtime">{currentTime}</div>
      <div className="link">
        <div className="email">Email: {Details.aboutme.email}</div>
        <div className="linkedin">Linkedin: {Details.aboutme.linkedin}</div>
      </div>
    </footer>
  );
}

export default Footer;
