import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./topMenu.css";
import UseAuth from "./../../hooks/useAuth/UseAuth";
const TopMenu = () => {
  const [{ user }] = UseAuth();
  console.log(user);
  return (
    <div className="topmenuBar">
      <>
        <Container>
          <div className="top-Menucont">
            <div className="address">
              <span className="address-icon">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span>555,BahddarHat,Chittagong,Bangladesh</span>
            </div>
            {user?.email && (
              <p>
                User Name-----
                <i>{user.displayName}</i>
              </p>
            )}
            <span className="topmenuIcons">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram-square"></i>
            </span>
          </div>
        </Container>
      </>
    </div>
  );
};

export default TopMenu;
