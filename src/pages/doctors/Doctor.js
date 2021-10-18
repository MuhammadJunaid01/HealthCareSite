import React from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./doctor.css";
const Doctor = (props) => {
  const { image, name, id } = props.doctor;
  return (
    <div>
      <div>
        <Card className="card-cont">
          <Card.Img variant="top" className="card-img " src={image} />
          <Card.Body className="cards-body">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={`/readMore/${id}`}>
              <Button variant="info" className="read-btn">
                Read More
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Doctor;
