import React from "react";
import { Container, Button, Carousel, Row, Col } from "react-bootstrap";
import "./ServiceDetail.css";
import deatail1 from "../../../../images/banner/banner-1.png";
import deatail2 from "../../../../images/banner/banner-3.png";
import deatail3 from "../../../../images/banner/banner-7.png";
const ServiceDetail = () => {
  return (
    <div className="serviceDetail">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={4} sm={12}>
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
              <br />
              <Button variant="success" className="details-btn">
                Laboratory <i className="fas fa-caret-right detail-right"></i>
              </Button>
              <br />
              <Button variant="primary" className="details-btn">
                Oncology <i className="fas fa-caret-right detail-right"></i>
              </Button>
            </div>
          </Col>
          <Col lg={8} md={8} sm={12}>
            <div className="detail-service">
              <h2 className="text-center">Psychiatry</h2>
              <div className="carusel-serviceDetail">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={deatail2}
                      alt="First slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={deatail1}
                      alt="Second slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={deatail3}
                      alt="Third slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </Col>
          <Col className="bg-cols" lg={4} md={4} sm={12}>
            <div className="info-servicedetail">
              <div className="worksHour">
                <h1 className="text-center">WORK HOURS</h1>
                <div className="mond">
                  <h3>Monday</h3>
                  <h3>09-05</h3>
                </div>
                <div className="mond">
                  <h3>Tuesday </h3>
                  <h3>09-05</h3>
                </div>
                <div className="mond">
                  <h3>Wednesday </h3>
                  <h3>09-05</h3>
                </div>
                <div className="mond">
                  <h3>Thursday </h3>
                  <h3>09-05</h3>
                </div>
                <div className="mond">
                  <h3>Friday</h3>
                  <h3>Off</h3>
                </div>
                <div className="mond">
                  <h3>Saturday</h3>
                  <h3>Off</h3>
                </div>
                <div className="mond">
                  <h3>Saturday</h3>
                  <h3>09-05</h3>
                </div>
                <Button className="w-100" variant="info">
                  Request
                </Button>
              </div>
            </div>
          </Col>
          <Col className="bg-cols" lg={8} md={8} sm={12}>
            <p className="text-muted">
              Meditex Clinics Department of Dental Specialties in Minnesota
              provides coordinated care for adults and children who require
              specialized dental care. Depending on the persons needs, care may
              include one specialty or more than one (multispecialty care, also
              called multidisciplinary care).
            </p>
            <p className="text-muted">
              An attractive, healthy smile is an important part of life. Our
              General Dentistry Department provides a broad range of services to
              meet your family’s dental needs including:
            </p>
            <p className="text-muted">Preventive Dental Care:</p>
            <p className="text-muted">
              <i className="fas fa-hand-point-right icons"></i> Oral
              Exam/Radiograph Study (mandatory at initial visit)
            </p>
            <p className="text-muted">
              <i className="fas fa-hand-point-right icons"></i> Oral Periodontal
              Scaling/Deep Cleaning
            </p>
            <p className="text-muted">
              <i className="fas fa-hand-point-right icons"></i> Oral Dental care
              for pregnant patients consists on evaluation and cleaning; mainly,
            </p>
            <p className="text-muted">
              <i className="fas fa-hand-point-right icons"></i> Oral Restorative
              Dentistry – Amalgam/Composite Fillings
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetail;
