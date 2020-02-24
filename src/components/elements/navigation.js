import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Details from "../../details.json";
import "../sections/experience";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Welcome</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#skill">Skill</Nav.Link>
          <Nav.Link href="#aboutme">About me</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          {/* 这里的search要另外写 */}
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default Navigation;
