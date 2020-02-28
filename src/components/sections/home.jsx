import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/home.css";

function Home() {
  return (
    <section id="home">
      <div className="hcontainer">
        <h1>Hello, my name is Julie Yang</h1>
        {/* div字体这里搞成动态的 */}
        <h2>A Web Developer</h2>
        <div className="hcontainer btn">
          <div className="hcontainer buttons">
            <Button variant="secondary" size="lg" href="#footer" active>
              Contact Me
            </Button>
          </div>
          <div className="hcontainer buttons">
            <Button variant="secondary" size="lg" href="#project" active>
              My Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
