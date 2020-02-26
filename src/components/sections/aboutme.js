import React from "react";
import "../stylesheets/aboutme.css";
import { Row, Col, Container } from "react-bootstrap";
import imgURL from "../../assets/myprofile.jpg";
import Details from "../../details.json";

function Aboutme() {
  return (
    <section id="aboutme">
      <div className="atitle">
        <h1>About Me</h1>
        <div className="aimg">
          <img className="circleimg" src={imgURL} alt="circleimg" />
        </div>
        <Container className="acontainer">
          <Row>
            <Col>
              <li>{Details.aboutme.intro1}</li>
              <li>{Details.aboutme.intro2}</li>
              <li>{Details.aboutme.intro3}</li>
            </Col>
            <Col>
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
