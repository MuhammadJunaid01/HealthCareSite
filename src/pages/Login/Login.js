import React from "react";
import { Container, Form, Button } from "react-bootstrap";

import "./Login.css";
import useHooks from "./../../hooks/useHooks";
import UseAuth from "./../../hooks/useAuth/UseAuth";
import { Link } from "react-router-dom";

const Login = () => {
  const [
    { GoogleSign, error, SignUpWithEmail, Email, Password, handleName },
    storeData,
    setStoreData,
  ] = UseAuth();
  return (
    <div className="login-form">
      <Container>
        <h3>Please! Regester!!!</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={Email}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={Password}
              type="password"
              placeholder="Password"
              required
            />
            <Form.Group controlId="validationCustom02" />
            <Form.Label>Name</Form.Label>
            <Form.Control
              onBlur={handleName}
              required
              type="text"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Link to="register">are you regester?</Link>
          </Form.Group>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Multiple files input example</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
          <Button onClick={SignUpWithEmail} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="google-login">
          <h2>----OR----</h2>
          <div className="google">
            <Button onClick={GoogleSign} variant="warning">
              <span>
                <i className="fab fa-google"></i>
              </span>
              Login Google
            </Button>
            <p>{error}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
