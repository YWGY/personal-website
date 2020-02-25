import React from "react";
import { Button } from "react-bootstrap";
import "../stylesheets/home.css";

function Home() {
  return (
    <section id="home">
      <h1>Hello, my name is Julie Yang</h1>
      {/* div字体这里搞成动态的 */}
      <h2>A Web Developer</h2>
      <div className="container buttons">
        <div className="container buttons b1">
          <Button variant="secondary" size="lg" active>
            Contact me
          </Button>
        </div>
        <div className="container buttons b2">
          <Button variant="secondary" size="lg" active>
            Enter my blog
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Home;
