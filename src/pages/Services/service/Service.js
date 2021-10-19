import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  // console.log(props);
  const { id, info, name, image } = props.service;
  return (
    <div>
      <Card className="card-cont-service">
        <Card.Img className="card-img-service" variant="top" src={image} />
        <Card.Body>
          <Card.Title className="doctor-name">{name}</Card.Title>
          <Card.Text className="text-muted">{info}</Card.Text>
          <Link to="/more">
            <Button className="w-100" variant="info">
              More
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
