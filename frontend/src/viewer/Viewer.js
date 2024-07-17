import React from "react";
import "./Viewer.css";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import backarrow from "../images/backarrow.png";
import { useLocation } from "react-router-dom";
import dateFormat from "dateformat";

const Viewer = () => {
  const location = useLocation();
  return (
    <Container fluid className="articleFullViewContainer">
      <Container>
        <Col className="articleFullViewCard" sm={12} md={9}>
          <a href="/">
            <img
              className="backArrowIconStyle"
              src={backarrow}
              alt="back arrow"
            />
          </a>
          <h1 className="fullArticleCategory">{location.state.category}</h1>
          <h1 className="fullArticleTitle">{location.state.title}</h1>
          <p className="fullArticleContent">{location.state.content}</p>
          <div className="fullArticleAuthorDetailsContainer">
            <div className="authorInitialContainer">
              <p className="initialStyle">{location.state.author[0]}</p>
            </div>
            <div>
              <h1 className="fullArticleAuthor">{`Author: ${location.state.author}`}</h1>
              <h1 className="fullArticleDate">
                {dateFormat(location.state.createdAt, "dddd, mmmm dS, yyyy")}
              </h1>
            </div>
          </div>
        </Col>
      </Container>
    </Container>
  );
};

export default Viewer;
