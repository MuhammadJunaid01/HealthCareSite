import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col lg={4} md={12} sm={12}>
            <div className="footerInfo-detail">
              <div className="footer-info">
                <div className="footerInfo-icon me-3">
                  <i className="fas fa-hospital"></i>
                </div>
                <h4 className="text">RED CRESENT HOSPITAL</h4>
              </div>
              <div className="footerI-contuctnfo ">
                <i className="fas fa-phone-alt"></i>
                <span className="phone">+016349-00664</span>
              </div>
              <div className="footer-eamil">
                <div className="email-icon">
                  <i className="far fa-envelope email"></i>
                </div>
                <span>m.junaidbkh2020@gmail.com</span>
              </div>
              <div className="contuct-link">
                <i className="fab fa-facebook face"></i>
                <i className="fab fa-facebook-messenger"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="menu-detail">
              <h4 className="text-center">DEPARTMENTS</h4>
              <Button variant="success" className="details-btn">
                Psychiatry <i className="fas fa-caret-right detail-right"></i>
              </Button>
              <br />
              <Button variant="info" className="details-btn">
                Opthalmology <i className="fas fa-caret-right detail-right"></i>
              </Button>
              <br />
              <Button variant="warning" className="details-btn">
                Cardiology <i className="fas fa-caret-right detail-right"></i>
              </Button>
              <br />
              <Button variant="danger" className="details-btn">
                Psychiatry <i className="fas fa-caret-right detail-right"></i>
              </Button>
              <br />
              <Button variant="primary" className="details-btn">
                Immumnology <i className="fas fa-caret-right detail-right"></i>
              </Button>
              <br />
              <Button variant="dark" className="details-btn">
                Hematology <i className="fas fa-caret-right detail-right"></i>
              </Button>
            </div>
          </Col>
        </Row>
        <div className="copy text-center mt-3">
          <p>
            Allright reserved<i className="far fa-copyright"></i> By{" "}
            <i>Muhammad Junaid</i>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
