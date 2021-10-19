import React from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import UseAuth from "../../hooks/useAuth/UseAuth";
import "./Readmore.css";
const ReadMore = () => {
  const { MoreInfo } = useParams();
  const [detailResult, setDetailResult] = useState({});

  const [
    { GoogleSign, error, LoginWithEmail, Email, Password },
    storeData,
    setStoreData,
  ] = UseAuth();

  useEffect(() => {
    if (storeData.length === 0) {
      console.log("empty arry");
    } else {
      const findResult = storeData.find((info) => info.id == MoreInfo);

      setDetailResult(findResult);
    }
  }, []);
  console.log(detailResult);
  return (
    <div className="read-more">
      <Container>
        {/* <h1>hello this read more:</h1> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={detailResult.image} />
          <Card.Body>
            <Card.Title>{detailResult.name}</Card.Title>
            <Card.Text>{detailResult.info}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ReadMore;
