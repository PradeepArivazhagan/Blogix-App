import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import edit from "../images/edit.png";
import view from "../images/view.png";

const Header = () => {
  return (
    <Navbar bg="white" data-bs-theme="light">
      <Container className="navBarStyle">
        <Navbar.Brand href="/" className="logoTextStyle">
          Blogix
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/" className="me-3">
            <button className="btn writeButtonStyle d-none d-md-block">
              Switch To Read
            </button>
            <button className="writeIconStyle d-block d-md-none">
              <img className="btniconStyle" src={view} alt="view icon" />
            </button>
          </Nav.Link>
          <Nav.Link href="/createArticle">
            <button className="btn writeButtonStyle d-none d-md-block">
              Switch To Write
            </button>
            <button className="writeIconStyle d-block d-md-none">
              <img className="btniconStyle" src={edit} alt="edit icon" />
            </button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
