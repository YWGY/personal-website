import React from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import caro1 from "../../assets/handyman.PNG";
import caro2 from "../../assets/handyman.PNG";
import caro3 from "../../assets/handyman.PNG";
import "../stylesheets/carousel.css";

new Swiper(".swiper-container", {
  loop: true, //循环
  autoplay: {
    //滑动后继续播放（不写官方默认暂停）
    disableOnInteraction: false
  },
  pagination: {
    //分页器
    el: ".swiper-pagination"
  }
});

class Carousel extends React.Component {
  constructor() {
    super();
  }
  render() {
    this.setState(
      {
        list: res.data
      },
      () => {
        new Swiper(".swiper-container", {
          loop: true,
          autoplay: {
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination"
          }
        });
      }
    );
    return (
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>
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
