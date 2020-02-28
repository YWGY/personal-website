import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Caro1 from "../../assets/handyman.PNG";
import Caro2 from "../../assets/handyman.PNG";
import Caro3 from "../../assets/handyman.PNG";
import "../stylesheets/carousel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={Caro1} alt="Car1" />
        <Carousel.Caption>
          <h3 className="ph3">Handyman Booking Management System</h3>
          <p className="pp">
            https://github.com/jr-sky/Booking-Management-System-1
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Caro2} alt="Car2" />
        <Carousel.Caption>
          <h3 className="ph3">Weather App</h3>
          <p className="pp">https://github.com/YWGY/weather-app</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Caro3} alt="Car3" />
        <Carousel.Caption>
          <h3 className="ph3">Random Language Machine</h3>
          <p className="pp">need web address</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
