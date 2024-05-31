import React from "react";
import hero1 from "../assets/landingimg.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import Carousel from "react-bootstrap/Carousel";
import "../assets/section.scss";

function Hero() {
  return (
    <section id="hero">
      <Carousel>
        <Carousel.Item>
          <img src={hero1} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={hero2} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={hero3} />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Hero;
