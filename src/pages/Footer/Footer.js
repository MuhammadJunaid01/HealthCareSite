import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <Row className="gy-3">
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
              <p className="para">Psychiatry</p>
              <p className="para">Opthalmology</p>
              <p className="para">Cardiology</p>
              <p className="para">Psychiatry</p>
              <p className="para">Immumnology</p>
              <p className="para">Hematology</p>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className="subcribe">
              <h5 className="text-center text-dark">Subscribe Our Channel</h5>

              <div className="subscribe-email">
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="2">
                      Email
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label column sm="2">
                      Password
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="password" placeholder="Password" />
                    </Col>
                  </Form.Group>
                  <Button className="sbs-btn" variant="info">
                    Subscribe
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
        <div className="copy text-center mt-3">
          <p>
            Allright reserved<i className="far fa-copyright"></i> By
            <i>Muhammad Junaid</i>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
