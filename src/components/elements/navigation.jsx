import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sections/experience";
import EN from "../../en-US.json";
import CH from "../../zh-CN.json";
import moment from "moment";
import "moment/locale/zh-cn";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>{moment().format("MMMM Do YYYY")}</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#">
            Home
            {/* {intl.get(CH.other.nav.home).d(EN.other.nav.home)} */}
          </Nav.Link>
          <Nav.Link href="#aboutme">About me</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#skill">Skill</Nav.Link>
          <Nav.Link href="#project">Project</Nav.Link>
          <Nav>{/* {EN}/{中文} */}</Nav>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
