import React from "react";
import "../stylesheets/experience.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "../../details.json";

function Experience() {
  return (
    <section id="experience">
      <div className="etitle">
        <h1>My Experience</h1>
        <Container className="econtainer">
          <Row>
            <Col xs>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h3>{Details.experience.job1.position}</h3>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      {" "}
                      {Details.experience.job1.time} ,{" "}
                      {Details.experience.job1.location}
                    </p>

                    <p>
                      {Details.experience.job1.company} :
                      {Details.experience.job1.intro}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h3>{Details.experience.job1.position}</h3>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      {" "}
                      {Details.experience.job2.time} ,{" "}
                      {Details.experience.job2.location}
                    </p>

                    <p>
                      {Details.experience.job2.company} :
                      {Details.experience.job2.intro}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Experience;
