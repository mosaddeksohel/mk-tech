import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../image/banner-cc-1030x515.jpg";
import "../../../src/css/navigation.css";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3 style={{ color: "black", fontWeight: "700" }}>
            New vision of inspiration
          </h3>
          <p style={{ color: "black" }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
