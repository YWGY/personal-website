import React from "react";
import "../stylesheets/aboutme.css";
import { Row, Col, Container } from "react-bootstrap";
import Details from "../../details.json";

function Aboutme() {
  return (
    <section id="aboutme">
      <div className="acontainer">
        <Container>
          <Row>
            <Col>
              <h2>About Me</h2>
              {/* <img src="../asstes/myprofile.jpg" alt="myprofile" /> */}
            </Col>
            <Col>
              <li>{Details.aboutme.intro1}</li>
              <li>{Details.aboutme.intro2}</li>
              <li>{Details.aboutme.intro3}</li>
              <li>{Details.aboutme.intro4}</li>
              <li>{Details.aboutme.intro5}</li>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Aboutme;
