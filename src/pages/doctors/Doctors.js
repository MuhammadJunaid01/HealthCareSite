import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import UseAuth from "../../hooks/useAuth/UseAuth";
import Doctor from "./Doctor";
import "./doctor.css";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [
    { GoogleSign, error, LoginWithEmail, Email, Password },
    storeData,
    setStoreData,
  ] = UseAuth();
  useEffect(() => {
    fetch("./doctor.json")
      .then((res) => res.json())
      .then((data) => {
        setStoreData(data);
        setDoctors(data);
      });
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
