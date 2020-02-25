import React from "react";
import "../stylesheets/experience.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Details from "../../details.json";

function Experience() {
  return (
    <section className="experience">
      <div className="timeline">
        <h2>My Experience</h2>
        <Container className="container">
          <Row>
            <Col xs>
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
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
                <Card.Img variant="top" src="holder.js/100px180" />
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
