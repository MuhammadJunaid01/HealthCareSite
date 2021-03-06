import React from "react";
import "./protect.css";
import { Card, Button } from "react-bootstrap";
import Rating from "react-rating";
const Protect = (props) => {
  console.log(props);
  const { detail, text, facility, info, name, price, rating } = props.protect;
  return (
    <div>
      <Card className="protect-card">
        <Card.Body>
          <Card.Title className="text-muted">{name}</Card.Title>
          <span className="price-cont">
            $ <span className="price"> {price}</span>/ month
          </span>
          <p className="text-muted text">{text}</p>
          <hr />
          <p>
            <i className="fas fa-hand-point-right icons"></i>
            {facility}
          </p>
          <p>
            <i className="fas fa-hand-point-right icons"></i>
            {info}
          </p>
          <p>
            <i className="fas fa-hand-point-right icons"></i>
            {detail}
          </p>
          <div className="rate">
            <p>Avg. Rate</p>
            <Rating
              emptySymbol="far fa-star rating-icons"
              fullSymbol="fas fa-star rating-icons"
              initialRating={rating}
              readonly
            />
          </div>
          <Button variant="info" className="w-100">
            GET STARTED NOW
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Protect;
