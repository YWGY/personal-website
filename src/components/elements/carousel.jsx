import React from "react";
// import "swiper/dist/css/swiper.min.css";
// import Swiper from "swiper/dist/js/swiper.js";
import caro1 from "../../assets/handyman.PNG";
import caro2 from "../../assets/handyman.PNG";
import caro3 from "../../assets/handyman.PNG";
import "../stylesheets/carousel.css";

let Swiper = window.Swiper;
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newlist: [caro1, caro2, caro3]
    };
  }
  componentWillUnmount() {
    if (this.Swiper) {
      this.Swiper.desdroy();
    }
  }
  componentDidUpdate() {
    if (this.Swiper) {
      this.Swiper.slideTo(0, 0);
      this.Swiper.desdroy();
      this.Swiper = null;
    }
    this.Swiper = new Swiper(this.refs.lun, {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
  render() {
    const newlist = Swiper;
    return (
      <div>
        <div className="swiper-container" ref="lun">
          <div className="swiper-wrapper">
            <div className="swiper-slide" data-id="0">
              {newlist}
            </div>
          </div>
          <div id="PgFather">
            <div className="swiper-pagination" id="body-left-pagination"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;

// <img className="d-block w-100" src={Caro1} alt="Car1" />

//   <h3 className="ph3">Handyman Booking Management System</h3>
//   <p className="pp">
//     https://github.com/jr-sky/Booking-Management-System-1
//   </p>

//   <h3 className="ph3">Weather App</h3>
//   <p className="pp">https://github.com/YWGY/weather-app</p>

//   <h3 className="ph3">Random Language Machine</h3>
//   <p className="pp">need web address</p>
