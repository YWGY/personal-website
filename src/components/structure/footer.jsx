import React from "react";
import en_US from "../../en-US.json";
import "../stylesheets/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="link">
        <div className="email">Email: {en_US.link.email}</div>
        <div className="linkedin">Linkedin: {en_US.link.linkedin}</div>
      </div>
    </footer>
  );
}

export default Footer;
