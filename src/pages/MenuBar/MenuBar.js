import React from "react";
import "./Menubar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../hooks/useAuth/UseAuth";
const MenuBar = () => {
  const [{ user, Logdout }] = UseAuth();
  console.log(user);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">REDCRESENT HOSPITAL</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav-cont"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="link" to="/home">
                HOME
              </Link>
              <Link className="link" to="/about">
                ABOUT
              </Link>
              <Link className="link services" to="/services">
                SERVICES
              </Link>
              <Link className="link services" to="/apoinment">
                APOINMENT
              </Link>
              <Link className="link" to="/Professional">
                PROFESSIONAL
              </Link>
              <Link className="link" to="/contuct">
                CONTUCT
              </Link>
              {user?.email ? (
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={Logdout}
                >
                  Log Out
                </button>
              ) : (
                <Link className="link" to="/login">
                  LOG IN
                </Link>
              )}
              {user?.email && (
                <img className="user-img" src={user?.photoURL} alt="" />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
