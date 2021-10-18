import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import Doctor from "./Doctor";
import "./doctor.css";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("./doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div>
      <Container>
        <div className="info">
          <h5 className="text-muted">MEET OUR DOCOTS</h5>
          <h1>Professional & Enthusiastic</h1>
        </div>
        <Row className="g-3">
          {doctors.map((doctor, index) => (
            <Col key={index} lg={4} md={12} sm={12}>
              <Doctor doctor={doctor}></Doctor>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
