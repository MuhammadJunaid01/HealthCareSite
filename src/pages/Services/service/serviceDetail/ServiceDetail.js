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
          <Col lg={4} md={4} sm={12}>
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
          <Col lg={8} md={8} sm={12}>
            <p>
              Meditex Clinics Department of Dental Specialties in Minnesota
              provides coordinated care for adults and children who require
              specialized dental care. Depending on the persons needs, care may
              include one specialty or more than one (multispecialty care, also
              called multidisciplinary care).
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetail;
