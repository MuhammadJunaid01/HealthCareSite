import React from "react";
import "./Chose.css";
import { Card } from "react-bootstrap";
const WhyChoseMedical = (props) => {
  const { image, info, name } = props.health;
  // console.log(props);
  return (
    <div>
      <Card>
        <Card.Img className="card-img" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{info}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WhyChoseMedical;
