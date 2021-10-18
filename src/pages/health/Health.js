import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Health.css";
import WhyChoseMedical from "./Why-choseMedical/WhyChoseMedical";
const Health = () => {
  const [health, setHealth] = useState([]);
  useEffect(() => {
    fetch("./health.json")
      .then((res) => res.json())
      .then((data) => setHealth(data));
  }, []);
  return (
    <div className="health-sec">
      <Container>
        <div className="helth-head">
          <h5>WHY CHOOSE OUR HOSPITAL</h5>
          <h1>The Best For Your Health</h1>
        </div>
        <div className="health-cont">
          <Row className="g-3">
            {health.map((healths, index) => (
              <Col key={index} lg={4} md={6} sm={12}>
                <WhyChoseMedical health={healths}></WhyChoseMedical>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Health;
