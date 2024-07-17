import React from "react";
import "./Footer.css";
import { MDBFooter } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

const Footer = () => {
  return (
    <MDBFooter bgColor="white">
      <Container>
        <div className="footerContainer pt-5 pb-5">
          <h1 className="footerText">Made By Pradeep Arivazhagan @ 2024</h1>
          <div className="socialLinkContainer">
            <a href="https://www.linkedin.com/in/pradeeparivazhagan/">
              <img className="socialMediaIcon" src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/PradeepArivazhagan">
              <img className="socialMediaIcon" src={github} alt="github" />
            </a>
          </div>
        </div>
      </Container>
    </MDBFooter>
  );
};

export default Footer;
