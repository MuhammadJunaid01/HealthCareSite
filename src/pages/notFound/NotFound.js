import React from "react";
import "./nofound.css";
import notfound from "../../images/professional/notfound.png";
import { Container } from "react-bootstrap";
const NotFound = () => {
  return (
    <div>
      <Container>
        <div className="notfound-banner">
          <img src={notfound} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
