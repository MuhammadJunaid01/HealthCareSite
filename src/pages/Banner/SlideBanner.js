import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import "./Slider.css";
import banner1 from "../../images/banner/banner-1.png";
import banner5 from "../../images/banner/banner-5.png";
import banner6 from "../../images/banner/banner-6.png";
const SlideBanner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 caru-img"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="mainBtn-cont">
              <Button className="banner-btn">Book Apoinment</Button>
              <Button className="banner-btn">Our Services</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caru-img"
            src={banner5}
            alt="First slide"
          />

          <Carousel.Caption>
            <div className="mainBtn-cont">
              <Button className="banner-btn">Book Apoinment</Button>
              <Button className="banner-btn">Our Services</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caru-img"
            src={banner6}
            alt="First slide"
          />

          <Carousel.Caption>
            <div className="mainBtn-cont">
              <Button className="banner-btn">Book Apoinment</Button>
              <Button className="banner-btn">Our Services</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlideBanner;
