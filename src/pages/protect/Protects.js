import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Services from "../Services/Services";
import Protect from "./Protect";
import "./protect.css";
const Protects = () => {
  const [protects, setProtects] = useState([]);
  useEffect(() => {
    fetch("./protect.json")
      .then((res) => res.json())
      .then((data) => setProtects(data));
  }, []);

  console.log(protects);
  return (
    <div className="protect">
      <Container>
        <div className="protect-info">
          <h5>PRICING LIST</h5>
          <h1>Protect With Health Care Card</h1>
        </div>
        <Row className="g-3">
          {protects.map((protec, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <Protect protect={protec}></Protect>
            </Col>
          ))}
        </Row>
      </Container>
      <Services></Services>
    </div>
  );
};

export default Protects;
