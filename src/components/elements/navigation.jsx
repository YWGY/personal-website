import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sections/experience";
import moment from "moment";
import { BrowserRouter as Link, Router } from "react-router-dom";
import "../stylesheets/navigation.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>{moment().format("MMMM Do YYYY")}</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#aboutme">{"Aboutme"}</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#skill">Skill</Nav.Link>
          <Nav.Link href="#project">Project</Nav.Link>
        </Nav>
        <div id="right">
          <Nav.Link
            href="#login"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Login in
          </Nav.Link>
          <Nav.Link id="lang">EN |中文</Nav.Link>
        </div>
      </Navbar>
    );
  }
}

export default Navigation;
