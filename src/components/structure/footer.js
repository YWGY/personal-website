import React from "react";
import Details from "../../details.json";
import "../stylesheets/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="link">
        <div className="email">Email: {Details.link.email}</div>
        <div className="linkedin">Linkedin: {Details.link.linkedin}</div>
      </div>
    </footer>
  );
}

export default Footer;
