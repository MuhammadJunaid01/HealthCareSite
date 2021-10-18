import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const ReadMore = () => {
  const { MoreInfo } = useParams();
  return (
    <div>
      <Container>
        <h1>hello this read more:{MoreInfo}</h1>
      </Container>
    </div>
  );
};

export default ReadMore;
