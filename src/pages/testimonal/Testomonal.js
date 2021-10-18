import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Testimonal.css";
import testimonal from "../../images/professional/testimo-1.png";
const Testomonal = () => {
  return (
    <div className="testi-cont">
      <Container>
        <div className="testi-info">
          <h5>TESTIMONIAL</h5>
          <h1>Trusted From Clients</h1>
        </div>
        <Row className="g-3 row-cont">
          <Col lg={6} md={6} sm={12}>
            <div className="info">
              <p className="text-muted info-text">
                <span className="coma">
                  <i className="fas fa-quote-right"></i>
                </span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                omnis magni ducimus. Architecto asperiores impedit iusto aliquam
                id. Accusamus cum deleniti sit voluptatem ex natus quo quod in,
                excepturi rerum!
                <span className="coma">
                  <i className="fas fa-quote-right"></i>
                </span>
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="banner">
              <img className="img-fluid" src={testimonal} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testomonal;
