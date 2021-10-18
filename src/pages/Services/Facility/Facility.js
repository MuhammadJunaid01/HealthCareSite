import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Facility.css";
const Facility = () => {
  return (
    <div>
      <Container>
        <Row className="g-3 rows-cont">
          <Col lg={4} md={12} sm={12}>
            <div className="detail">
              <h1>DIAGNOSE</h1>
              <p>Examination & Diagnosis</p>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="treatment">
              <span className="hoscope">
                <i className="fas fa-stethoscope"></i>
              </span>
              <div className="treat-info">
                <h1>TREATMENT</h1>
                <p>Treatment of the disease</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="care">
              <span className="hoscope">
                <i className="fas fa-brain"></i>
              </span>

              <div className="care-info">
                <h1>CARE HEALTHY</h1>
                <p>Care and recuperation</p>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
};

export default Facility;
