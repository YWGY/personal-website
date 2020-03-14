import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sections/experience";
import moment from "moment";
import "../stylesheets/navigation.css";

class Navigation extends React.Component {
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
      </Navbar>
    );
  }
}

export default Navigation;
