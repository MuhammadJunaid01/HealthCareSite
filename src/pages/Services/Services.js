import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Service.css";
import Service from "./service/Service";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="service">
      <div className="service-info">
        <h5>OUR SERVICES</h5>
        <h1>Best Solution For Your Health</h1>
      </div>
      <Container>
        <Row className="g-3">
          {services.map((service, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <Service service={service}></Service>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
